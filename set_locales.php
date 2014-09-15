<?php
include_once 'conf/locale_defaults.php';



if (!function_exists('_')) {
	function _($str) {
		return $str;
	}
	function gettext($str) {
		return $str;
	}
	function ngettext($str) {
		return $str;
	}

	function bindtextdomain() {};
	function bind_textdomain_codeset() {};
	function textdomain() {};

}

$default_locale=$default_locale_data['lang'].'_'.$default_locale_data['country'].($default_locale_data['encoding']!=''?'.'.$default_locale_data['encoding']:'').($default_locale_data['suffix']!=''?'.'.$default_locale_data['suffix']:'');
$_client_locale=$default_locale;

setlocale(LC_ALL,$default_locale );
//print $default_locale;
//print_r(localeconv());
//exit;
$_SESSION['locale']=$default_locale;
//if(isset($_REQUEST['_locale']) and preg_match('/[a-z]{2}\_[A-Z]{2}\.UTF-8/i',$_REQUEST['_locale']) ){
//print $_REQUEST['_locale']."<-";
if (isset($_REQUEST['_locale']) and preg_match('/[a-z]{2}\_[A-Z]{2}\.UTF-8/i',$_REQUEST['_locale']) ) {



	$_SESSION['text_locale']=$_REQUEST['_locale'];
}




if (!isset($_SESSION['text_locale'])) {
	$_SESSION['text_locale']=$default_locale;
}


if (defined('LC_MESSAGES'))
	$lc_messages_locale=setlocale(LC_MESSAGES,$_SESSION['text_locale'] );
else
	$lc_messages_locale=setlocale(LC_ALL,$_SESSION['text_locale'] );
setlocale(LC_TIME, $_SESSION['text_locale']);



$_SESSION['text_locale_country_code']=substr($_SESSION['text_locale'],3,2);
$_SESSION['text_locale_code']=substr($_SESSION['text_locale'],0,2);
$_SESSION['text_locale_encoding']=substr($_SESSION['text_locale'],6);

$other_langs=array();


$text_locale=$_SESSION['text_locale'];

//print $text_locale;
putenv('LC_MESSAGES='.$text_locale);

if (defined('LC_MESSAGES'))
	setlocale(LC_MESSAGES, $text_locale);
else
	setlocale(LC_ALL, $text_locale);
bindtextdomain("inikoo", "./locale");
textdomain("inikoo");



?>
