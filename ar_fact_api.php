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
			'file'=>array('type'=>'string'),
		));
	lookup_from_file($data);
	break;

default:
	$response=array('state'=>404,'msg'=>'Operation not found');
	echo json_encode($response);

}


function lookup_from_string($data) {


	$journals=parse_journals(preg_split('/\,/',$data['journals']));
	$funders=parse_funders($data['funders']);

	$request_data=array();
	foreach ($journals as $journal) {
		$request_data[]=array('journal_data'=>$journal,'funders_data'=>$funders);
	}
	$request_data=json_encode($request_data);
	
	list($fork_key,$msg)=new_fork('fact_api_request',$request_data,$account_code='FACT');



	$response= array(
		'state'=>200,'fork_key'=>$fork_key,'msg'=>$msg
	);
	echo json_encode($response);
	
	
}





function parse_journals($journals) {
	$parsed_journals=array();

	foreach ($journals as $journal) {
		$journal=trim($journal);
		if (preg_match('/^\d{4}-\d{3}(\d|x)$/i',$journal)) {
			$parsed_journals[]=array('query_type'=>'issn','query'=>$journal);
		}else {
			$parsed_journals[]=array('query_type'=>'title','query'=>$journal);

		}
	}
	return $parsed_journals;
}

function parse_funders($funders) {
	$parsed_funders=array();
	foreach ($funders as $funder_code) {
		switch ($funder_code) {
		case 'ahrc':
			$parsed_funders[]=array('juliet_id'=>698,'code'=>$funder_code);
			break;
		case 'bbsrc':
			$parsed_funders[]=array('juliet_id'=>709,'code'=>$funder_code);
			break;
		case 'esrc':
			$parsed_funders[]=array('juliet_id'=>717,'code'=>$funder_code);
			break;
		case 'epsrc':
			$parsed_funders[]=array('juliet_id'=>722,'code'=>$funder_code);
			break;
		case 'mrc':
			$parsed_funders[]=array('juliet_id'=>705,'code'=>$funder_code);
			break;
		case 'nerc':
			$parsed_funders[]=array('juliet_id'=>726,'code'=>$funder_code);
			break;
		case 'stfc':
			$parsed_funders[]=array('juliet_id'=>716,'code'=>$funder_code);
			break;
		case 'wellcome_trust':
			$parsed_funders[]=array('juliet_id'=>695,'code'=>$funder_code);
			break;
		}

	}
	return $parsed_funders;

}


