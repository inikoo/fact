<?php
/*
 About:
 Autor: Raul Perusquia <rulovico@gmail.com>
 Created: 22 September 2014 11:51:56 BST, Nottingham, UK

*/

require_once 'aes.php';
require_once 'common.php';
require_once 'ar_common.php';
require_once 'common_units_functions.php';


//$mysqli->query(sprintf("insert into debug (message) values(%s)",prepare_mysql(var_export($_FILES, true))));

/*

array (
    'name' => 'journals.csv',
    'type' => 'application/csv',
    'tmp_name' => '/private/var/tmp/phpHyd4Im',
    'error' => 0,
    'size' => 193,
  ),

*/

global $user,$mysqli;
if (isset($_FILES['Filedata'])) {







	$file_data=$_FILES['Filedata'];
	if (!$file_data['error']) {

		$checksum=md5_file($file_data['tmp_name']);
		$filezise=filesize($file_data['tmp_name']);


		$sql=sprintf("select `Upload Key` from `Upload Dimension` where `Upload Checksum`=%s and `Upload User Key`=%d and `Upload Status`='Uploaded' ",
			prepare_mysql($checksum),
			$user->id
		);
		//$mysqli->query(sprintf("insert into debug (message) values(%s)",prepare_mysql($sql)));

		$res=$mysqli->query($sql);
		if ($row=$res->fetch_assoc()) {
			$upload_key=$row['Upload Key'];

		}else {

			$sql=sprintf("insert into `Upload Dimension` (`Upload Date`,`Upload User Key`,`Upload Checksum`,`Upload Filesize`,`Upload Filename`,`Upload File Type`) values (%s,%s,%s,%s,%s,%s)",
				prepare_mysql(gmdate('Y-m-d H:i:s')),
				$user->id,
				prepare_mysql($checksum),
				$filezise,
				prepare_mysql($file_data['name']),
				prepare_mysql($file_data['type'])
			);

			$mysqli->query($sql);
			$upload_key=$mysqli->insert_id;


			$fp      = fopen($file_data['tmp_name'], 'r');
			$content = fread($fp, filesize($file_data['tmp_name']));
			fclose($fp);

			$sql=sprintf("insert into `Upload Content Dimension` (`Upload Key`,`Upload Content`) values (%d,%s)",
				$upload_key,

				prepare_mysql($content)

			);

			$mysqli->query($sql);

		}

		$response=array('state'=>'uploaded','upload_key'=>$upload_key,'msg'=>'','filename'=>$file_data['name'],'size'=>format_bytes_size($filezise));
		echo json_encode($response);
	}
	else {
		$response=array('state'=>'error','upload_key'=>'','msg'=>$file_data['error']);
		echo json_encode($response);
	}



}else {
	$response=array('state'=>'error','upload_key'=>'','msg'=>'no uploaded files');
	echo json_encode($response);
}





?>
