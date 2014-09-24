<?php
/*
 About:
 Autor: Raul Perusquia <rulovico@gmail.com>
 Created: 18 September 2014 16:35:14 BST, Nottingham, UK

*/

include_once 'class.XML2Array.php';


function fork_fact_api_request($job) {

	global $mysqli;


	if (!$_data=get_fork_data($job))
		return;

	$fork_data=$_data['fork_data'];
	$fork_key=$_data['fork_key'];

	$requests_data=json_decode($fork_data,true);


	$sql=sprintf("update `Fork Dimension` set `Fork State`='In Process' ,`Fork Operations Total Operations`=%d,`Fork Start Date`=NOW() where `Fork Key`=%d ",
		count($requests_data),
		$fork_key
	);
	$mysqli->query($sql);

	$counter=0;
	foreach ($requests_data as $request_data) {
		$result=call_fact_api($request_data['journal_data'],$request_data['funders_data']);
		save_result_to_db($fork_key,$result);

		$counter++;

		$sql=sprintf("update `Fork Dimension` set `Fork Operations Done`=%d  where `Fork Key`=%d ",
			$counter,
			$fork_key
		);
		$mysqli->query($sql);
	}

	$sql=sprintf("update `Fork Dimension` set `Fork State`='Finished' ,`Fork Finished Date`=NOW(),`Fork Operations Done`=%d where `Fork Key`=%d ",
		$counter,
		$fork_key
	);
	$mysqli->query($sql);
	return false;
}


function call_fact_api($journal_data,$funders_data) {


	$result=array(
		'query'=>$journal_data['query'],
		'resut_type'=>'Error',
		'compilance'=>'No',
		'compilance_type'=>'None',
		'journal'=>array('issn'=>'','title'=>'','publisher'=>''),
		'overall'=>array('code'=>'','report'=>'','compilance'=>''),
		'gold'=>array('code'=>'','report'=>'','compilance'=>'','reason'=>''),
		'green'=>array('code'=>'','report'=>'','compilance'=>''),
	);

	$api_url='http://www.sherpa.ac.uk/fact/api-beta.php';


	$funders_parameter='&juliet_id=';
	foreach ($funders_data as $funder_data) {
		$funders_parameter.=$funder_data['juliet_id'].',';
	}
	$funders_parameter=preg_replace('/\,$/','',$funders_parameter);

	if ($journal_data['query_type']=='issn') {
		$journal_parameter='&issn='.$journal_data['query'];
	}else {
		$journal_parameter='&journaltitle='.$journal_data['query'];


	}

	$request=$api_url.'?ak=xml&markup=xml'.$funders_parameter.$journal_parameter;

	$xml = file_get_contents($request);

	$result=parse_xml_result($result,$xml);


	return $result;

}


function parse_xml_result($result,$xml) {




	$data=XML2Array::createArray($xml);

	//print_r($data);




	if (isset($data['factapi']['journallist']['journal'])) {

		$result['journal']['issn']=$data['factapi']['journallist']['journal']['@attributes']['issn'];
		$result['journal']['title']=$data['factapi']['journallist']['journal']['title'];

		$result['result_type']='Ok';

	}else {
		$result['result_type']='Error';
	}



	$result['compilance']='No';
	$result['compilance_type']='None';
	if (isset($data['factapi']['gold']['goldcompliance'])) {

		switch ($data['factapi']['gold']['goldcompliance']['@attributes']['goldcompliancecode']) {
		case 'yes':
			$result['gold']['code']='Yes';
			$result['compilance']='Yes';
			$result['compilance_type']='Gold';
			break;
		case 'no':
			$result['gold']['code']='No';
			break;
		case 'maybe':
			$result['gold']['code']='Maybe';
			break;
		case 'unknown':
			$result['gold']['code']='Unknown';
			break;
		default:
			$result['gold']['code']=$data['factapi']['gold']['goldcompliance']['@attributes']['goldcompliancecode'];
		}
		$result['gold']['report']=$data['factapi']['gold']['goldcompliance']['@attributes']['goldcompliancereport'];


	}

	if (isset($data['factapi']['green']['greencompliance'])) {

		switch ($data['factapi']['green']['greencompliance']['@attributes']['greencompliancecode']) {
		case 'yes':
			$result['green']['code']='Yes';



			if ($result['compilance']=='Yes') {
				$result['compilance_type']='GreenGold';
			}else {
				$result['compilance_type']='Green';
			}
			$result['compilance']='Yes';


			break;
		case 'no':
			$result['green']['code']='No';
			break;
		case 'maybe':
			$result['green']['code']='Maybe';
			break;
		case 'unknown':
			$result['green']['code']='Unknown';
			break;
		default:
			$result['green']['code']=$data['factapi']['green']['greencompliance']['@attributes']['greencompliancecode'];
		}
		$result['green']['report']=$data['factapi']['green']['greencompliance']['@attributes']['greencompliancereport'];


	}


	return $result;


}

function save_result_to_db($fork_key,$result) {
	global $mysqli;



	$sql=sprintf("insert into `Result Dimension` (
	`Date`,`Fork Key`,`Result Type`,`Query`,`Journal ISSN`,`Journal Name`,
	`Compilance`,`Compilance Type`,
	`Gold Compilance Code`,`Gold Compilance Report`,`Green Compilance Code`,`Green Compilance Report`
	)
	values (
	NOW(),%d,%s,%s,%s,%s,
	%s,%s,
	%s,%s,%s,%s
	)",

		$fork_key,
		prepare_mysql($result['result_type']),
		prepare_mysql($result['query']),
		prepare_mysql($result['journal']['issn']),
		prepare_mysql($result['journal']['title']),
		prepare_mysql($result['compilance']),
		prepare_mysql($result['compilance_type']),
		prepare_mysql($result['gold']['code']),
		prepare_mysql($result['gold']['report']),
		prepare_mysql($result['green']['code']),
		prepare_mysql($result['green']['report'])
	);
//print $sql;
	$mysqli->query($sql);

}

?>
