<?php

//@author Raul Perusquia <raul@inikoo.com>
//Copyright (c) 2013 Inikoo

require_once 'common.php';
require_once 'ar_common.php';

if (!isset($_REQUEST['tipo'])) {
	$response=array('state'=>405,'msg'=>'Non acceptable request (t)');
	echo json_encode($response);
	exit;
}

$tipo=$_REQUEST['tipo'];



switch ($tipo) {

case('get_wait_info'):
	$data=prepare_values($_REQUEST,array(
			'fork_key'=>array('type'=>'key'),
			'tag'=>array('type'=>'string'),
			'extra_key'=>array('type'=>'key','optional'=>true)
		));


	get_wait_info($data);
	break;

default:
	$response=array('state'=>404,'resp'=>'Operation not found');
	echo json_encode($response);

}

function get_wait_info($data) {
   require_once 'common_natural_language.php';

	global $mysqli;

	$fork_key=$data['fork_key'];
	$sql=sprintf("select `Fork Key`,`Fork Result`,`Fork Scheduled Date`,`Fork Start Date`,`Fork State`,`Fork Type`,`Fork Operations Done`,`Fork Operations No Changed`,`Fork Operations Errors`,`Fork Operations Total Operations` from `Fork Dimension` where `Fork Key`=%d ",
		$fork_key);
	$res=$mysqli->query($sql);
	if ($row=$res->fetch_assoc()) {

		$result_extra_data=array();


		switch ($data['tag']) {
		case 'journals':
			$formated_tag=' '.ngettext('journal','journals',$row['Fork Operations Total Operations']);
			break;

		default:
			$formated_tag=' '.ngettext('record','records',$row['Fork Operations Total Operations']);

		}

		$etr='';

		if ($row['Fork State']=='In Process') {
			//$msg=number($row['Fork Operations Done']+$row['Fork Operations Errors']+$row['Fork Operations No Changed']).'/'.$row['Fork Operations Total Operations'];

			$formated_status=_('In Process');

			$formated_progress=_('Processing').' '.number($row['Fork Operations Done']).' '._('of').' '.number($row['Fork Operations Total Operations']);

			$formated_progress.=$formated_tag;
			
			if($row['Fork Operations Done']>1){
				$etr=_('ETA').': '.seconds_to_string(
				($row['Fork Operations Total Operations']-$row['Fork Operations Done'])*
				(gmdate('U')-strtotime($row['Fork Start Date']))/$row['Fork Operations Done']
				);
			}
		

		}elseif ($row['Fork State']=='Queued') {
			$formated_status=_('Queued');
			$formated_progress=_('Records to process').': '.number($row['Fork Operations Total Operations']).' '.$row['Fork Key'];


		}elseif ($row['Fork State']=='Finished') {
			$formated_status=_('Finished');
			$formated_progress=number($row['Fork Operations Done']).$formated_tag.' '._('processed');


		}elseif ($row['Fork State']=='Cancelled') {
			$formated_status=_('Cancelled');
			$formated_progress=number($row['Fork Operations Done']).$formated_tag.' '._('processed');



		}else {
			$formated_status=$row['Fork State'];
			$formated_progress='';
		}

		$response= array(
			'state'=>200,
			'date'=>gmdate('Y-m-d H:i:s'),
			'fork_key'=>$fork_key,
			'fork_state'=>$row['Fork State'],
			'done'=>number($row['Fork Operations Done']),
			'no_changed'=>number($row['Fork Operations No Changed']),
			'errors'=>number($row['Fork Operations Errors']),
			'total'=>number($row['Fork Operations Total Operations']),
			'todo'=>number($row['Fork Operations Total Operations']-$row['Fork Operations Done']),
			'result'=>$row['Fork Result'],
			'formated_status'=>$formated_status,
			'formated_progress'=>$formated_progress.'<br>'.$etr,
			'progress'=>sprintf('%s/%s (%s)',number($row['Fork Operations Done']),number($row['Fork Operations Total Operations']),percentage($row['Fork Operations Done'],$row['Fork Operations Total Operations'])),
			
			'tag'=>$data['tag'],
			'result_extra_data'=>$result_extra_data,
			'etr'=>$etr

		);




		echo json_encode($response);

	}else {
		$response= array(
			'state'=>400,

		);
		echo json_encode($response);

	}

}


?>
