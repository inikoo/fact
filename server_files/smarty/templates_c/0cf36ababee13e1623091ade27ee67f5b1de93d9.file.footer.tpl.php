<?php /* Smarty version Smarty-3.1.19, created on 2014-09-15 15:28:26
         compiled from "templates/footer.tpl" */ ?>
<?php /*%%SmartyHeaderCode:15667920525417059a66e6e8-74649188%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '0cf36ababee13e1623091ade27ee67f5b1de93d9' => 
    array (
      0 => 'templates/footer.tpl',
      1 => 1410794735,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '15667920525417059a66e6e8-74649188',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'nav_menu' => 0,
    'menu' => 0,
    'parent' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_5417059a6b1816_05411515',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5417059a6b1816_05411515')) {function content_5417059a6b1816_05411515($_smarty_tpl) {?><?php if (!is_callable('smarty_block_t')) include '/Users/raul/fact/libs/Smarty/libs/plugins/block.t.php';
?><div id="footer">
	<?php  $_smarty_tpl->tpl_vars['menu'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['menu']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['nav_menu']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['menu']->key => $_smarty_tpl->tpl_vars['menu']->value) {
$_smarty_tpl->tpl_vars['menu']->_loop = true;
?> <a href="<?php echo $_smarty_tpl->tpl_vars['menu']->value[1];?>
" class="menu <?php if ($_smarty_tpl->tpl_vars['menu']->value[2]==$_smarty_tpl->tpl_vars['parent']->value) {?> selected<?php }?>"><?php echo $_smarty_tpl->tpl_vars['menu']->value[0];?>
</a> <?php } ?> 
	<div class='adv'>
		<a href="http://crc.nottingham.ac.uk/"><?php $_smarty_tpl->smarty->_tag_stack[] = array('t', array()); $_block_repeat=true; echo smarty_block_t(array(), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>
Centre for Research Communications<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo smarty_block_t(array(), $_block_content, $_smarty_tpl, $_block_repeat);  } array_pop($_smarty_tpl->smarty->_tag_stack);?>
</a>
	</div>
</div>
</div>
</body>
</html>
<?php }} ?>
