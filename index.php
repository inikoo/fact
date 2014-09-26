<?php
/*
Autor: Raul Perusquia <raul@inikoo.com>
Created: 15 September 2014 11:18:30 GMT+1, Nottingham, UK

*/
include_once 'common.php';


$css_files=array(
	'css/common.css',

);

$css_files[]='css/themes/'.$theme.'/style.css';
$css_files[]='css/themes/'.$theme.'/buttons.css';

$js_files=array(
	'libs/yui/yui3/build/yui/yui-min.js',
	'js/common.js',
	'js/index.js'
);


$smarty->assign('parent','home');
$smarty->assign('title', _('FACT API based Service'));
$smarty->assign('header_title', '');



$smarty->assign('css_files',$css_files);
$smarty->assign('js_files',$js_files);

$funders=array(
	'ahrc'=>array(
		'code'=>'ahrc',
		'name'=>'Arts & Humanities Research Council',
		'label'=>'AHRC',
		'label_class'=>'',
		'selected'=>'',
	),
	'bbsrc'=>array(
		'code'=>'bbsrc',
		'name'=>'Biotechnology and Biological Sciences Research Council',
		'label'=>'BBSRC',
		'label_class'=>'',
		'selected'=>'',
	),
	'epsrc'=>array(
		'code'=>'epsrc',
		'name'=>'Engineering and Physical Sciences Research Council',
		'label'=>'EPSRC',
		'label_class'=>'',
		'selected'=>'',
	),
	'esrc'=>array(
		'code'=>'esrc',
		'name'=>'Economic and Social Research Council',
		'label'=>'ESRC',
		'label_class'=>'',
		'selected'=>'',
	),
	'mrc'=>array(
		'code'=>'mrc',
		'name'=>'Medical Research Council',
		'label'=>'MRC',
		'label_class'=>'',
		'selected'=>'',
	),
	'nerc'=>array(
		'code'=>'nerc',
		'name'=>'Natural Environment Research Council',
		'label'=>'NERC',
		'label_class'=>'',
		'selected'=>'',
	),
	'stfc'=>array(
		'code'=>'stfc',
		'name'=>'Science & Technology Facilities Council',
		'label'=>'STFC',
		'label_class'=>'',
		'selected'=>'',
	),
	'wellcome_trust'=>array(
		'code'=>'wellcome_trust',
		'name'=>'Wellcome Trust',
		'label'=>'Wellcome <span style="font-size:70%">Trust</span>',
		'label_class'=>'small',
		'selected'=>'',
	),
);

$smarty->assign('funders',$funders);



$smarty->display('index.tpl');

?>
