<?php

define('DEBUG', 0);
if (DEBUG) {
	error_reporting(E_ALL);
}

require_once 'conf/dns.php';
require_once 'common_functions.php';
require_once 'common_detect_agent.php';
require_once "class.Session.php";


$theme='clean';

$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
if (mysqli_connect_errno()) {
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
}




$mysqli->query("SET NAMES 'utf8'");
date_default_timezone_set('GMT') ;
$mysqli->query("SET time_zone='+0:00'");
require_once 'conf/conf.php';

$max_session_time=10000000;
$max_session_time_in_milliseconds=1000*$max_session_time;
$session = new Session($max_session_time);


include_once 'libs/Smarty/libs/Smarty.class.php';
$smarty = new Smarty();
$smarty->template_dir = 'templates';
$smarty->compile_dir = 'server_files/smarty/templates_c';
$smarty->cache_dir = 'server_files/smarty/cache';
$smarty->config_dir = 'server_files/smarty/configs';
//$smarty->error_reporting = E_STRICT;





$_client_locale='en_GB.UTF-8';
include_once 'set_locales.php';



$smarty->assign('lang_code',$_SESSION['text_locale_code']);
$smarty->assign('lang_country_code',strtolower($_SESSION['text_locale_country_code']));

$args="?";

foreach ($_GET as $key => $value) {
	if ($key!='_locale')$args.=$key.'='.$value.'&';
}
$lang_menu=array();


$sql=sprintf("select * from `Language Dimension`");
$res=$mysqli->query($sql);
while ($row=$res->fetch_assoc()) {
	$_locale=$row['Language Code'].'_'.$row['Country 2 Alpha Code'].'.UTF-8';
	$lang_menu[]=array($_SERVER['PHP_SELF'].$args.'_locale='.$_locale,strtolower($row['Country 2 Alpha Code']),$row['Language Original Name']);
}

$smarty->assign('lang_menu',$lang_menu);
$smarty->assign('timezone',date("e P"));



$smarty->assign('max_session_time_in_milliseconds',$max_session_time_in_milliseconds);

$nav_menu=array();
$smarty->assign('nav_menu',$nav_menu);



$_tmp=explode("/", $_SERVER['PHP_SELF']);
$smarty->assign('page_name',preg_replace('/\..*+/','',array_pop($_tmp)));
$smarty->assign('analyticstracking',( file_exists('templates/analyticstracking.tpl')?true:false));

?>
