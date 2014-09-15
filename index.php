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

$js_files=array(
	'libs/yui3/build/yui/yui-min.js',
	'js/common.js',
	'js/index.js'
);


$smarty->assign('parent','home');
$smarty->assign('title', _('Home'));


$smarty->assign('css_files',$css_files);
$smarty->assign('js_files',$js_files);




$smarty->display('index.tpl');
?>
