{include file='header.tpl'} 
<div id="bd" style="min-height:300px">
	<input type="hidden" id="journals_input_method" value="input"> 
	<input type="hidden" id="upload_key" value="0"> 
	<input type="hidden" id="number_selected_funders" value="0"> 
	<input type="hidden" id="upload_file_label" value="{t}Upload file{/t}"> 
	<input type="hidden" id="select_funders_and_journals_label" value="{t}Select Funders & Input Journals{/t}"> 
		<input type="hidden" id="select_journals_label" value="{t}Input Journals{/t}"> 
		<input type="hidden" id="select_funders_label" value="{t}Select Funders{/t}"> 
		<input type="hidden" id="submit_label" value="{t}Find Compilance{/t}"> 

	
	
	<div id="choose_funders" class="block">
		<div class="title">
			<h1>
				1. {t}Choose your funders{/t} 
			</h1>
		</div>
		<div id="funders_chooser">
			{foreach from=$funders item=funder name=funders} 
			<div id="funder_{$funder.code}" class="funder {if $smarty.foreach.funders.last}last{/if} {if $funder.selected}selected{/if}" title="{$funder.name}" code="{$funder.code}">
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
		<div id="journal_input_container" >
			<div id="journals_input_method_input" class="journal_sources" >
				<div class="instructons">
					{t}ISSN or Jornal names separated by commas{/t} 
				</div>
				<div id="input_container">
					<input id="journals" class="input" style="height:28px" />
				</div>
			</div>
			<span style="padding:10px" >or</span>
			<div id="journals_input_method_file" class="journal_sources">
				<div class="instructons">
					{t}One column CVS/Excel file with ISSNs or Jornal names{/t} 
				</div>
				<div id="select_files_container">
				</div>
				<div style="clear:both">
				</div>
			</div>
		</div>
	</div>
	<div id="submit_query">
		<button id="submit">{t}Select Funders & Input Journals{/t}</button> 
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
					<td>{t}Not Found{/t}</td>
					<td id="error"></td>
				</tr>
			</table>
		</div>
		<div id="results_table" style="display:none">
		</div>
	</div>
</div>
{include file='footer.tpl'} 