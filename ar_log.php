<?php
/*
 About:
 Autor: Raul Perusquia <rulovico@gmail.com>
 Created: 24 September 2014 14:51:26 BST, Nottingham, UK

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
case('log_request'):
$data=prepare_values($_REQUEST,array(
			'url'=>array('type'=>'string'),
						'prev'=>array('type'=>'string'),

		));
	log_request($data);
	break;


default:
	$response=array('state'=>404,'msg'=>'Operation not found');
	echo json_encode($response);

}


function log_request($data) {
	global $user;

	$user->log_request($data['url'],$data['prev']);

	$response=array('state'=>200);
	echo json_encode($response);

}
