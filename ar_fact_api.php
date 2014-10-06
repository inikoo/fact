<?php
/*
 About:
 Autor: Raul Perusquia <rulovico@gmail.com>
 Created: 17 August 2014 13:27:24 BST, Nottingham, UK

*/

require_once 'aes.php';
require_once 'common.php';
require_once 'ar_common.php';
include_once 'common_natural_language.php';
include_once 'common_checksum_functions.php';
include_once 'fork_functions.php';



if (!isset($_REQUEST['tipo'])) {
	$response=array('state'=>405,'msg'=>'Non acceptable request (t)');
	echo json_encode($response);
	exit;
}

$tipo=$_REQUEST['tipo'];
switch ($tipo) {
case('lookup_from_string'):
	$data=prepare_values($_REQUEST,array(
			'funders'=>array('type'=>'json array'),
			'journals'=>array('type'=>'string'),
		));
	lookup_from_string($data);
	break;
case('lookup_from_file'):
	$data=prepare_values($_REQUEST,array(
			'funders'=>array('type'=>'json array'),
			'upload_key'=>array('type'=>'key'),
		));
	lookup_from_file($data);
	break;

default:
	$response=array('state'=>404,'msg'=>'Operation not found');
	echo json_encode($response);

}


function lookup_from_file($data) {
	global $mysqli;

	include 'libs/PHPExcel/Classes/PHPExcel/IOFactory.php';


	$upload_key=$data['upload_key'];


	$sql=sprintf("select `Upload Content` from `Upload Content Dimension` where `Upload Key`=%d",$upload_key);
	$res=$mysqli->query($sql);
	if ($row=$res->fetch_assoc()) {
		$content=$row['Upload Content'];
	}else {
		$response= array(
			'state'=>400,'msg'=>'Error file content not found'
		);
		header('Content-Type: application/json');
		echo json_encode($response);
		return;
	}


	$fp = tmpfile();
	fwrite($fp, $content);
	rewind($fp);
	$metaDatas = stream_get_meta_data($fp);
	$tmpFilename = $metaDatas['uri'];

	$objPHPExcel = PHPExcel_IOFactory::load($tmpFilename);
	$sheetData = $objPHPExcel->getActiveSheet()->toArray(null,true,true,true);
	//print_r($sheetData);



	foreach ($sheetData as $row) {
		if (isset($row['A']) and $row['A']!='' ) {
			$journals[]=$row['A'];
		}
	}



	$funders=parse_funders($data['funders']);

	$journals=parse_journals($journals);

	$request_data=array();
	$number_journals=0;
	foreach ($journals as $journal) {
		$request_data[]=array('journal_data'=>$journal,'funders_data'=>$funders);
		$number_journals++;
	}
	$request_data=json_encode($request_data);







	list($fork_key,$msg)=new_fork('fact_api_request',$number_journals,$request_data,$account_code='FACT');

	$sql=sprintf("update `Upload Dimension`set `Upload Status`='Processed',`Processed Date`=%s where `Upload Key`=%d",
		prepare_mysql(gmdate('Y-m-d H:i:s')),
		$upload_key);
	$mysqli->query($sql);

	$sql=sprintf("delete from `Upload Content Dimension` where `Upload Key`=%d",$upload_key);
	//$mysqli->query($sql);


	$response= array(
		'state'=>200,'fork_key'=>$fork_key,'msg'=>$msg,'formated_funders'=>get_formated_funders($funders)
	);
	header('Content-Type: application/json');
	echo json_encode($response);


}


function lookup_from_string($data) {


	$journals=parse_journals(preg_split('/\,/',$data['journals']));
	$funders=parse_funders($data['funders']);

	$request_data=array();
	$number_journals=0;
	foreach ($journals as $journal) {
		$request_data[]=array('journal_data'=>$journal,'funders_data'=>$funders);
		$number_journals++;
	}
	$request_data=json_encode($request_data);

	list($fork_key,$msg)=new_fork('fact_api_request',$number_journals,$request_data,$account_code='FACT');



	$response= array(
		'state'=>200,'fork_key'=>$fork_key,'msg'=>$msg,'formated_funders'=>get_formated_funders($funders)
	);
	header('Content-Type: application/json');
	echo json_encode($response);


}


function get_formated_funders($funders){
	$formated_funders='';
	foreach($funders as $funder){
		$formated_funders.=', '.$funder['label'];
	}
	$formated_funders=preg_replace('/^\, /','',$formated_funders);
	return $formated_funders;
}


function parse_journals($journals) {
	$parsed_journals=array();

	foreach ($journals as $journal) {
		$journal=trim($journal);
		
		$parsed_journals[]=array('query_type'=>'issn','query'=>$journal);
		// Accept only issn
		//if (preg_match('/^\d{4}-\d{3}(\d|x)$/i',$journal)) {
		//	$parsed_journals[]=array('query_type'=>'issn','query'=>$journal);
		//}else {
		//	$parsed_journals[]=array('query_type'=>'title','query'=>$journal);
		//}
	}
	return $parsed_journals;
}

function parse_funders($funders) {
	$parsed_funders=array();
	foreach ($funders as $funder_code) {
		switch ($funder_code) {
		case 'ahrc':
			$parsed_funders[]=array('juliet_id'=>698,'code'=>$funder_code,'label'=>'AHRC');
			break;
		case 'bbsrc':
			$parsed_funders[]=array('juliet_id'=>709,'code'=>$funder_code,'label'=>'BBSRC');
			break;
		case 'esrc':
			$parsed_funders[]=array('juliet_id'=>717,'code'=>$funder_code,'label'=>'ESRC');
			break;
		case 'epsrc':
			$parsed_funders[]=array('juliet_id'=>722,'code'=>$funder_code,'label'=>'EPSRC');
			break;
		case 'mrc':
			$parsed_funders[]=array('juliet_id'=>705,'code'=>$funder_code,'label'=>'MRC');
			break;
		case 'nerc':
			$parsed_funders[]=array('juliet_id'=>726,'code'=>$funder_code,'label'=>'NERC');
			break;
		case 'stfc':
			$parsed_funders[]=array('juliet_id'=>716,'code'=>$funder_code,'label'=>'STFC');
			break;
		case 'wellcome_trust':
			$parsed_funders[]=array('juliet_id'=>695,'code'=>$funder_code,'label'=>'Wellcome Trust');
			break;
		}

	}
	return $parsed_funders;

}
