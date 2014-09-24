{include file='header.tpl'} 
<div id="bd" style="min-height:300px">
	<input type="hidden" id="journals_input_method" value="input"> 
	<input type="hidden" id="upload_key" value="0"> 
	<input type="hidden" id="number_selected_funders" value="0"> 
	<input type="hidden" id="upload_file_label" value="{t}Upload file{/t}"> 
	<div id="choose_funders" class="block">
		<div class="title">
			<h1>
				1. {t}Choose your funders{/t} 
			</h1>
		</div>
		<div id="funders_chooser">
			{foreach from=$funders item=funder name=funders} 
			<div id="funder_{$funder.code}" class="funder {if $smarty.foreach.funders.first}first{/if} {if $funder.selected}selected{/if}" title="{$funder.name}" code="{$funder.code}">
				<img class="logo" src="art/{$funder.code}.png" /> <br />
				<img id="funder_checkbox_{$funder.code}" src="art/{if $funder.selected}checkbox_checked{else}checkbox_unchecked{/if}.png" /> <span class="{$funder.label_class}">{$funder.label}</span> 
			</div>
			{/foreach} 
			<div style="clear:both">
			</div>
		</div>
	</div>
	<div id="input_journals" class="block">
		<div class="title">
			<h1>
				2. {t}Input journals{/t} 
			</h1>
		</div>
		<div id="journal_input_container" style="text-align:center">
			<table style="margin:0px auto;width:870px">
				<tr>
					<td id="journals_input_method_input"> 
					<div style="font-size:70%;width:350px;margin-bottom:5px">
						ISSN or Jornal's names separated by commas 
					</div>
					<input style="float:left;width:350px" id="journals" />
					</td>
					<td style="padding:10px 20px;"> <span style="font-size:120%;position:relative;top:5px">or</span> </td>
					<td id="journals_input_method_file"> 
					<div style="font-size:70%;width:400px;margin-bottom:5px">
						{t}One column CVS file with ISSNs or Jornal's names{/t} 
					</div>
					<div id="uploaderContainerID" style="width:400px;">
					</div>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div id="submit_query">
		<span id="submit" class="button" style="width:400px;margin-top:60px;font-size:150%;height:30px">{t}Select Funders & Input Journals{/t}</span> 
	</div>
	<div id="progress_bar" style="display:none;text-align:center;padding:20px">
		<div id="progress_status">
		</div>
		<div id="progress_stats">
		</div>
	</div>
	<div id="results" style="display:none;text-align:center;padding:20px">
		<div id="results_header">
			<table border="0" id="results_overview">
				<tr>
					<td>{t}Gold{/t}</td>
					<td id="gold"></td>
					<td id="compilant" rowspan="3"> </td>
				</tr>
				<tr>
					<td>{t}Green{/t}</td>
					<td id="green"></td>
				</tr>
				<tr>
					<td>{t}Gold & Green{/t}</td>
					<td id="green_and_gold"></td>
				</tr>
				<tr>
					<td>{t}No Compilant{/t}</td>
					<td id="no_compilant"></td>
					<td id="total_no_compilant" rowspan="3"> </td>
				</tr>
				<tr>
					<td>{t}Input Error{/t}</td>
					<td id="error"></td>
				</tr>
				<tr>
				</table>
			</div>
		</div>
		
	<div id="pizza">
	
	</div>
		
	</div>
	{include file='footer.tpl'} 