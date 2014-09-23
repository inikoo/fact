<?php
//@author Raul Perusquia <raul@inikoo.com>
//Copyright (c) 2013 Inikoo

error_reporting(E_ALL ^ E_DEPRECATED);

require_once 'aes.php';
require_once 'common_functions.php';

include 'gearman/fact_api.php';

$mysqli=false;

$count_number_used=0;


$worker= new GearmanWorker();
$worker->addServer('127.0.0.1');
$worker->addFunction("fact_api_request", "fork_fact_api_request");



while ($worker->work()) {
	if ($worker->returnCode() == GEARMAN_SUCCESS) {
		$count_number_used++;
		exec("kill -9 ". getmypid());
		die();
	}
}



function get_fork_data($job) {
	global $mysqli;
	
	$fork_encrypt_key=md5('huls0fjhslsshskslgjbtqcwijnbxhl2391');


	$fork_raw_data=$job->workload();


	$fork_metadata=json_decode(AESDecryptCtr(base64_decode($fork_raw_data),$fork_encrypt_key,256),true);

	$fork_key=$fork_metadata['fork_key'];
	$token=$fork_metadata['token'];
	$inikoo_account_code=$fork_metadata['code'];

	if (!ctype_alnum($inikoo_account_code)) {
		print "cant fint account code\n";
		return false;
	}



	include "gearman/conf/dns.$inikoo_account_code.php";

	$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
	if (mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}
	$mysqli->query("SET NAMES 'utf8'");
	date_default_timezone_set('GMT') ;
	$mysqli->query("SET time_zone='+0:00'");

	$sql=sprintf("select `Fork Process Data` from `Fork Dimension` where `Fork Key`=%d and `Fork Token`=%s",
		$fork_key,
		prepare_mysql($token)
	);

	$res=$mysqli->query($sql);
	if ($row=$res->fetch_assoc()) {
		$fork_data=json_decode($row['Fork Process Data'],true);

		return array('fork_key'=>$fork_key,'inikoo_account_code'=>$inikoo_account_code,'fork_data'=>$fork_data);
	}else {

		print "fork data not found";
		return false;
	}

}


?>
