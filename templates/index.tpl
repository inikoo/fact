{include file='header.tpl'} 
<div id="bd" style="min-height:300px">
	<input type="hidden" id="journals_input_method" value="input"> 
	<input type="hidden" id="upload_key" value="0"> 
	<input type="hidden" id="number_selected_funders" value="0"> 
	<input type="hidden" id="upload_file_label" value="{t}Upload file{/t}"> 
	<input type="hidden" id="select_funders_and_journals_label" value="{t}Select Funder & Input Journals{/t}"> 
		<input type="hidden" id="select_journals_label" value="{t}Input Journals{/t}"> 
		<input type="hidden" id="select_funders_label" value="{t}Select Funder{/t}"> 
		<input type="hidden" id="submit_label" value="{t}Find Compilance{/t}"> 
		<input type="hidden" id="th_query_label" value="{t}Query{/t}"> 
		<input type="hidden" id="th_issn_label" value="{t}ISSN{/t}"> 
		<input type="hidden" id="th_journal_label" value="{t}Journal{/t}"> 
		<input type="hidden" id="th_compilance_label" value="{t}Compilance{/t}"> 
		<input type="hidden" id="th_result_label" value="{t}Result{/t}"> 
		<input type="hidden" id="th_notes_label" value="{t}Notes{/t}"> 
		<input type="hidden" id="table_error1_label" value="{t}Sorry, the results could not be retreived{/t}"> 
		<input type="hidden" id="uploader_error1_label" value="{t}Sorry your browser is not supported{/t}"> 
		<input type="hidden" id="fork_key" value=""> 

	
	
	
	<div id="choose_funders" class="block">
		<div class="title">
			<h1>
				1. {t}Choose a funder{/t} 
			</h1>
		</div>
		<div id="funders_chooser">
			{foreach from=$funders item=funder name=funders} 
			<div id="funder_{$funder.code}" class="funder {if $smarty.foreach.funders.last}last{/if} {if $funder.selected}selected{/if}" title="{$funder.name}" code="{$funder.code}">
				<img class="logo" src="art/{$funder.code}.png" /> <br />
				<img class="checkbox" id="funder_checkbox_{$funder.code}" src="art/{if $funder.selected}checkbox_checked{else}checkbox_unchecked{/if}.png" /> <span class="{$funder.label_class}">{$funder.label}</span> 
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
					{t}ISSN  separated by commas{/t} 
				</div>
				<div id="input_container">
					<input id="journals" class="input" style="height:28px" />
				</div>
			</div>
			<span style="padding:10px" >or</span>
			<div id="journals_input_method_file" class="journal_sources">
				<div class="instructons">
					{t}One column CVS/Excel file with ISSNs{/t} 
				</div>
				<div id="select_files_container">
				</div>
				<div style="clear:both">
				</div>
			</div>
		</div>
	</div>
	<div id="submit_query">
		<button id="submit" class="button">{t}Select Funder & Input Journals{/t}</button> 
	</div>
	<div id="progress_bar" style="display:none;text-align:center;padding:20px">
		<div id="progress_status">
		</div>
		<div id="progress_stats">
		</div>
	</div>
	<div id="results" style="display:none;text-align:center;padding:20px">
		<div id="results_header" >
		
		
			<table border="0" id="results_overview">
				<tr class="first">
					<td rowspan="6" style="width:300px;border-top:1px solid #eee;border-bottom:1px solid #eee;">{t}Funder{/t}:<div style="margin-top:10px" id="results_funders" ></div>   </td>
					<td>{t}Gold{/t}</td>
					<td id="gold"></td>
					<td rowspan="6" style="width:300px;border-top:1px solid #eee;border-bottom:1px solid #eee;"> <a href="" id="download_result" style="display:none"><button class="button" >{t}Download Results{/t}</button></a>  </td>
				</tr>
				<tr>
					<td>{t}Green{/t}</td>
					<td id="green"></td>
				</tr>
				<tr>
					<td>{t}Gold & Green{/t}</td>
					<td id="green_and_gold"></td>
				</tr>
				<tr class="total">
					<td>{t}Total Compilant{/t}</td>
					<td id="compilant"></td>
				</tr>
				
				<tr class="total">
					<td>{t}No Compilant{/t}</td>
					<td id="no_compilant"></td>
				</tr>
				<tr class="total">
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