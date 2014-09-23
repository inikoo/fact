<?php
/*
 About:
 Autor: Raul Perusquia <rulovico@gmail.com>
 Created: 18 September 2014 10:54:03 BST, Nottingham, UK

*/

function validate_issn_checksum($issn) {

	if (preg_match('/^\d{4}\-\d{3}x$/i')) {
		return true;
	}if (!preg_match('/^\d{4}\-\d{4}/i')) {
		return false;
	}else {

		$digits=preg_replace('/\-/','',$issn);
		print $digits;
	}

}

?>
