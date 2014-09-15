<?php
/*
Autor: Raul Perusquia <raul.perusquia@nottingham.ac.uk>
Version 1.0
*/




function delta($current_value,$old_value) {

	if ($current_value==$old_value) {
		return '--';
	}
	return percentage($current_value-$old_value,$old_value,1,'NA','%',true);
}

function percentage($a,$b,$fixed=1,$error_txt='NA',$psign='%',$plus_sing=false) {

	$locale_info = localeconv();

	$per='';
	$error_txt=_($error_txt);
	if ($b>0) {
		if ($plus_sing and $a>0)
			$sing='+';
		else
			$sing='';
		$per=$sing.number_format((100*($a/$b)),$fixed,$locale_info['decimal_point'],$locale_info['thousands_sep']).$psign;
	} else
		$per=$error_txt;
	return $per;
}



function number($a,$fixed=1,$force_fix=false) {
	if (!$a)
		$a=0;

	$locale_info = localeconv();
	$floored=floor($a);
	if ($floored==$a and !$force_fix)
		$fixed=0;
	$a=number_format($a,$fixed,$locale_info['decimal_point'],$locale_info['thousands_sep']);

	return $a;
}




function prepare_mysql($string,$null_if_empty=true) {

	if (is_numeric($string)) {
		return "'".$string."'";
	}
	elseif ($string=='' and $null_if_empty) {
		return 'NULL';
	}
	else {
		return "'".addslashes($string)."'";


	}
}



function normalize_string($string) {
	$normalizeChars = array(
		'Š'=>'S', 'š'=>'s', 'Ð'=>'Dj','Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A',
		'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E', 'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I',
		'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U', 'Ú'=>'U',
		'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss','à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a',
		'å'=>'a', 'æ'=>'a', 'ç'=>'c', 'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i',
		'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o', 'ö'=>'o', 'ø'=>'o', 'ù'=>'u',
		'ú'=>'u', 'û'=>'u', 'ü'=>'u', 'ý'=>'y', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y', 'ƒ'=>'f'
	);
	return strtr($string, $normalizeChars);

}

?>
