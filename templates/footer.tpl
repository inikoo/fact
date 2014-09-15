<div id="footer">
	{foreach from=$nav_menu item=menu } <a href="{$menu[1]}" class="menu {if $menu[2]==$parent} selected{/if}">{$menu[0]}</a> {/foreach} 
	<div class='adv'>
		<a href="http://crc.nottingham.ac.uk/">{t}Centre for Research Communications{/t}</a>
	</div>
</div>
</div>
</body>
</html>
