<?php
/*
Autor: Raul Perusquia <raul@inikoo.com>
Created: 15 September 2014 11:18:30 GMT+1, Nottingham, UK

*/
include_once 'common.php';


require_once 'libs/PHPExcel/Classes/PHPExcel.php';
require_once 'libs/PHPExcel/Classes/PHPExcel/IOFactory.php';

$objPHPExcel = new PHPExcel();
require_once 'libs/PHPExcel/Classes/PHPExcel/Cell/AdvancedValueBinder.php';
PHPExcel_Cell::setValueBinder( new PHPExcel_Cell_AdvancedValueBinder() );

if (isset($_REQUEST['id'])) {
	$fork_key=$_REQUEST['id'];
}else {
	$fork_key=0;
}

if (isset($_REQUEST['output']) and in_array($_REQUEST['output'],array('csv','xlsx','xls','pdf'))) {
	$output_type=$_REQUEST['output'];
}else {
$output_type='csv';
}


$creator='CRC';
$title=_('Compilance Result');
$subject=_('Journals Compilance');
$description='';
$keywords='';
$category='';
$filename='FACT_result'.$fork_key;



$objPHPExcel->getProperties()->setCreator($creator)
->setLastModifiedBy($creator)
->setTitle($title)
->setSubject($subject)
->setDescription($description)
->setKeywords($keywords)
->setCategory($category);


$row_index=2;

$sql=sprintf("select `Result Type`,`Date`,`Query`,`Journal ISSN`,`Journal Name`,`Compilance`,`Compilance Type`,`Compilance Report`,`Gold Compilance Code`,`Gold Compilance Report`,`Gold Compilance Reason`,`Gold Compilance Advice`,`Green Compilance Code`,`Green Compilance Report`,`Green Compilance Reason`,`Green Compilance Advice` from `Result Dimension` where `Fork Key`=%d",
	$fork_key);

$res=$mysqli->query($sql);
while ($row=$res->fetch_assoc()) {
	$char_index=1;
	foreach ($row as $value) {
		$char=number2alpha($char_index);
		$objPHPExcel->getActiveSheet()->setCellValue($char . $row_index,strip_tags($value));
		$char_index++;
	}



	$row_index++;


}

	switch ($output_type) {

	case('csv'):
		header('Content-Type: text/csv');
		header('Content-Disposition: attachment;filename="'.$filename.'.csv"');
		header('Cache-Control: max-age=0');
		$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'CSV')
		->setDelimiter(',')
		->setEnclosure('')
		->setLineEnding("\r\n")
		->setSheetIndex(0)
		->save('php://output');
		break;
	case('xlsx'):


		header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
		header('Content-Disposition: attachment;filename="'.$filename.'.xlsx"');
		header('Cache-Control: max-age=0');

		$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'EXCEL2007')
		->setSheetIndex(0)
		->save('php://output');
		break;
	case('xls'):
		$output_file="gearman/downloads_$inikoo_account_code/".$output_filename.'.'.$output_type;
		header('Content-Type: application/vnd.ms-excel');
		header('Content-Disposition: attachment;filename="'.$filename.'.xls"');
		header('Cache-Control: max-age=0');

		$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5')
		->save('php://output');
		break;
	case('pdf'):
		$output_file="gearman/downloads_$inikoo_account_code/".$output_filename.'.'.$output_type;

		header('Content-Type: application/pdf');
		header('Content-Disposition: attachment;filename="'.$filename.'.pdf"');
		header('Cache-Control: max-age=0');
		$objPHPExcel->getActiveSheet()->setShowGridLines(false);
		$objPHPExcel->getActiveSheet()->getPageSetup()->setOrientation(PHPExcel_Worksheet_PageSetup::ORIENTATION_LANDSCAPE);


		$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'PDF')
		->save('php://output');
		break;

	}


function number2alpha($number) {
	$alpha=  chr(65+fmod($number-1,26));
	$pos=floor(($number-1)/26);

	$prefix='';
	if ($pos>0) {
		$prefix=number2alpha($pos);
	}

	return $prefix.$alpha;
}



?>
