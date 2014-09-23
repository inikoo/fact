<!DOCTYPE HTML>
<html lang='en' xml:lang='en' xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>{$title}</title>
	<link href="art/icon.png" rel="shortcut icon" type="image/x-icon" />
	{foreach from=$css_files item=i } 
	<link rel="stylesheet" href="{$i}" type="text/css" />
	{/foreach} {foreach from=$js_files item=i } <script type="text/javascript" src="{$i}"></script> {/foreach} 
</head>
<body class="yui3-skin-sam inikoo">
{if $analyticstracking}{include file='analyticstracking.tpl'}{/if} 
<div id="doc4">
	<div id="header">
		<div class="presentation">
			<a  href="index.php"><img id="logo" src="art/logo.png"></a>
			<h1 style="margin-left:10px" >
				FACT API based Service 
			</h1>
			<h2 id="main_title">
				{$title}
			</h2>
		</div>
		<div class="left">
			
		</div>
	</div>
