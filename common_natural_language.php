<?php
/*
 About:
 Autor: Raul Perusquia <rulovico@gmail.com>

 Version 3.0
*/

function seconds_to_string($secs,$short_tags=true) {
    $units = array(
                 "weeks"   => 7*24*3600,
                 "days"    =>   24*3600,
                 "hours"   =>      3600,
                 "minutes" =>        60,
                 "seconds" =>         1,
             );

    foreach ( $units as &$unit ) {
        $quot  = intval($secs / $unit);
        $secs -= $quot * $unit;
        $unit  = $quot;
    }

    $string='';
    //$filled_units=array();
    foreach($units as $key=>$value) {
        if ($value) {
            //$filled_units[$key]=$value;
            switch ($key) {
            case 'weeks':
            	if($short_tags)
            	    $string.=sprintf("%dw", $value);   
            	else
                $string.=sprintf(ngettext("%d week", "%d weeks", $value), $value);
                break 2;
            case 'days':
            if($short_tags)
            	    $string.=sprintf("%dd", $value);   
            	else
                $string.=' '.sprintf(ngettext("%d day", "%d days", $value), $value);
                break 2;
            case 'hours':
            if($short_tags)
            	    $string.=sprintf("%hw", $value);   
            	else
                $string.=' '.sprintf(ngettext("%d hour", "%d hours", $value), $value);
                break 2;
            case 'minutes':
            if($short_tags)
            	    $string.=sprintf("%dm", $value);   
            	else
                $string.=' '.sprintf(ngettext("%d minute", "%d minutes", $value), $value);
                break 2;
            case 'seconds':
            if($short_tags)
            	    $string.=sprintf("%ds", $value);   
            	else
                $string.=' '.sprintf(ngettext("%d second", "%d seconds", $value), $value);
                break;
            }
        }
    }


    $string=_trim($string);
    return $string;

}



?>

