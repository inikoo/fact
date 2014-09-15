<?php /* Smarty version Smarty-3.1.19, created on 2014-09-15 15:28:26
         compiled from "templates/header.tpl" */ ?>
<?php /*%%SmartyHeaderCode:4559037205417056b5f9473-41066834%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '895d830fdebfafddc01f7aac7ec3d1b65173aa40' => 
    array (
      0 => 'templates/header.tpl',
      1 => 1410794905,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4559037205417056b5f9473-41066834',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_5417056b64be79_88539877',
  'variables' => 
  array (
    'title' => 0,
    'css_files' => 0,
    'i' => 0,
    'js_files' => 0,
    'analyticstracking' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5417056b64be79_88539877')) {function content_5417056b64be79_88539877($_smarty_tpl) {?><!DOCTYPE HTML>
<html lang='en' xml:lang='en' xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</title>
	<link href="art/icon.png" rel="shortcut icon" type="image/x-icon" />
	<?php  $_smarty_tpl->tpl_vars['i'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['i']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['css_files']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['i']->key => $_smarty_tpl->tpl_vars['i']->value) {
$_smarty_tpl->tpl_vars['i']->_loop = true;
?> 
	<link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" type="text/css" />
	<?php } ?> <?php  $_smarty_tpl->tpl_vars['i'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['i']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['js_files']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['i']->key => $_smarty_tpl->tpl_vars['i']->value) {
$_smarty_tpl->tpl_vars['i']->_loop = true;
?> <script type="text/javascript" src="<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
"></script> <?php } ?> 
</head>
<body class="yui3-skin-sam inikoo">
<?php if ($_smarty_tpl->tpl_vars['analyticstracking']->value) {?><?php echo $_smarty_tpl->getSubTemplate ('analyticstracking.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>
<?php }?> 
<div id="doc4">
	<div id="header">
		<div class="presentation">
			<a  href="index.php"><img id="logo" src="art/logo.png"></a>
			<h1 style="margin-left:10px" >
				CRC
			</h1>
			<h2 id="main_title">
				<?php echo $_smarty_tpl->tpl_vars['title']->value;?>

			</h2>
		</div>
		<div class="left">
			
		</div>
	</div>
<?php }} ?>
