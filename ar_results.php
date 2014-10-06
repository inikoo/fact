<?php
/*
 About:
 Autor: Raul Perusquia <rulovico@gmail.com>
 Created: 23 September 2014 16:10:50 BST, Nottingham, UK

*/

require_once 'common.php';
require_once 'ar_common.php';



if (!isset($_REQUEST['tipo'])) {
	$response=array('state'=>405,'msg'=>'Non acceptable request (t)');
	echo json_encode($response);
	exit;
}

$tipo=$_REQUEST['tipo'];
switch ($tipo) {
case('get_results'):
	$data=prepare_values($_REQUEST,array(
			'fork_key'=>array('type'=>'key'),
		));
	get_results($data);
	break;
case('list_results'):
	$data=prepare_values($_REQUEST,array(
			'fork_key'=>array('type'=>'key'),
			'callback'=>array('type'=>'string')
		));
	list_results($data);
	break;
default:
	$response=array('state'=>404,'msg'=>'Operation not found');
	echo json_encode($response);

}


function list_results($data) {
	global $mysqli;
	$fork_key=$data['fork_key'];

	$sql=sprintf("select * from `Result Dimension` where `Fork Key`=%d",$fork_key);
	$res=$mysqli->query($sql);
	$results=array();
	while ($row=$res->fetch_assoc()) {

		$journal=$row['Journal Name'].'<br> '.$row['Journal ISSN'];
		$notes='';
		$compilance=$row['Compilance'];
		if ($row['Result Type']=='Error') {
			$compilance_type=_('Not Found');
		}else {
			$compilance_type=$row['Compilance Type'];

			if ($row['Gold Compilance Advice']!='')
				$notes=$row['Gold Compilance Advice'].'<br>';
			if ($row['Green Compilance Advice']!='')
				$notes=$row['Green Compilance Advice'].'<br>';

			$notes=preg_replace('/\<br\>$/','',$notes);

		}
		$results[]=array(
			'query'=>$row['Query'],
			'journal'=>$journal,
			'compilance'=>$compilance,
			'compilance_type'=>$compilance_type,
			'notes'=>$notes
		);
	}






	$response=array('query'=>array('results'=>$results));
	header('Content-Type: application/json');
	echo $data['callback'].'('.json_encode($response).');';

}

function get_results($data) {

	global $mysqli;

	$fork_key=$data['fork_key'];


	$result_data=array(
		'compilant'=>0,
		'no_compilant'=>0,
		'total_no_compilant'=>0,
		'green'=>0,
		'gold'=>0,
		'green_and_gold'=>0,
		'error'=>0,
		'ok'=>0,

	);

	$sql=sprintf("select count(*) as number,`Result Type` from `Result Dimension` where `Fork Key`=%d group by `Result Type`",$fork_key);
	$res=$mysqli->query($sql);
	while ($row=$res->fetch_assoc()) {
		if ($row['Result Type']=='Ok') {
			$result_data['ok']=number($row['number']);
		}elseif ($row['Result Type']=='Error') {
			$result_data['error']=number($row['number']);
			$result_data['total_no_compilant']=$row['number'];
		}
	}

	$sql=sprintf("select count(*) as number,`Compilance` from `Result Dimension` where `Fork Key`=%d and `Result Type`='Ok' group by `Compilance`",$fork_key);
	$res=$mysqli->query($sql);
	while ($row=$res->fetch_assoc()) {
		if ($row['Compilance']=='Yes') {
			$result_data['compilant']=number($row['number']);
		}else {
			$result_data['no_compilant']=number($row['number']);
			$result_data['total_no_compilant']+=$row['number'];

		}
	}

	$sql=sprintf("select count(*) as number,`Compilance Type` from `Result Dimension` where `Fork Key`=%d and `Compilance`='Yes' group by `Compilance Type`",$fork_key);
	$res=$mysqli->query($sql);
	while ($row=$res->fetch_assoc()) {
		if ($row['Compilance Type']=='Green') {
			$result_data['green']=number($row['number']);
		}elseif ($row['Compilance Type']=='Gold') {
			$result_data['gold']=number($row['number']);
		}elseif ($row['Compilance Type']=='GreenGold') {
			$result_data['green_and_gold']=number($row['number']);
		}
	}


	$response= array(
		'state'=>200,'fork_key'=>$fork_key,'result_data'=>$result_data
	);
	header('Content-Type: application/json');
	echo json_encode($response);


}
?>
