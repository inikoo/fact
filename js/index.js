function select_funder() {
    var code = this.getAttribute('code')

    if (Y.one('#funder_' + code).hasClass('selected')) {
        Y.one('#funder_checkbox_' + code).set('src', 'art/checkbox_unchecked.png')

        Y.one('#funder_' + code).removeClass('selected')
    } else {
        Y.one('#funder_checkbox_' + code).set('src', 'art/checkbox_checked.png')
        Y.one('#funder_' + code).addClass('selected')

    }

    var funders_ids = Y.all('#funders_chooser .funder').get('id')
    var number_selected_funders = 0;

    for (index = 0; index < funders_ids.length; ++index) {
        funder_element = Y.one('#' + funders_ids[index])
        if (funder_element.hasClass('selected')) {
            number_selected_funders++;
        }
    }

    if (number_selected_funders) {
        Y.one('#choose_funders').removeClass('error')

        if (Y.one('#journals').get('value') == '' && Y.one('#upload_key').get('value') == 0) {
            Y.one('#submit').set('innerHTML', 'Input Journals')

        } else {
            Y.one('#submit').set('innerHTML', 'Find Compilance')
        }

    } else {
        if (Y.one('#journals').get('value') == '' && Y.one('#upload_key').get('value') == 0) {
            Y.one('#submit').set('innerHTML', 'Select Funders & Input Journals')

        } else {
            Y.one('#submit').set('innerHTML', 'Select Funders')
        }

    }

    Y.one('#number_selected_funders').set('value', number_selected_funders)

}



function journals_changed() {

    Y.one('#upload_key').set('value', 0)
    Y.one('#journals_input_method').set('value', 'input')
    Y.one('#journals_input_method_file').setStyle('opacity', .2)
    Y.one('#journals_input_method_input').setStyle('opacity', 1)

    if (Y.one('#journals').get('value') == '') {

        if (Y.one('#number_selected_funders').get('value') == 0) {
            Y.one('#submit').set('innerHTML', 'Select Funders & Input Journals')

        } else {
            Y.one('#submit').set('innerHTML', 'Input Journals')

        }

    } else {
        if (Y.one('#number_selected_funders').get('value') == 0) {
            Y.one('#submit').set('innerHTML', 'Select Funders')

        } else {
            Y.one('#submit').set('innerHTML', 'Find Compilance')

        }
    }
}



function submit() {



    if (Y.one('#number_selected_funders').get('value') > 0 && (Y.one('#journals').get('value') != '' || Y.one('#upload_key').get('value') > 0)) {



        var selected_funders = [];
        var funders_ids = Y.all('#funders_chooser .funder').get('id')

        for (index = 0; index < funders_ids.length; ++index) {
            funder_element = Y.one('#' + funders_ids[index])
            if (funder_element.hasClass('selected')) {
                selected_funders[selected_funders.length] = funder_element.getAttribute('code')
            }
        }

        if (Y.one('#journals_input_method').get('value') == 'input') {
            var request = 'ar_fact_api.php?tipo=lookup_from_string&funders=' + encodeURIComponent(Y.JSON.stringify(selected_funders)) + '&journals=' + encodeURIComponent(Y.one('#journals').get('value'));

        } else {
            var request = 'ar_fact_api.php?tipo=lookup_from_file&funders=' + encodeURIComponent(Y.JSON.stringify(selected_funders)) + '&upload_key=' + encodeURIComponent(Y.one('#upload_key').get('value'));

        }

        //close_select_funders.run()
        //close_input_journals.run()
        //close_submit_query.run()
        Y.io(request, {

            on: {
                success: function(id, o) {
                    //   alert(o.responseText)
                    var r = JSON.parse(o.responseText);
                    if (r.state == 200) {

                        Y.one('#choose_funders').setStyle('display', 'none')
                        Y.one('#input_journals').setStyle('display', 'none')
                        Y.one('#submit_query').setStyle('display', 'none')

                        Y.one('#progress_bar').setStyle('display', 'block')

                        api_request_progess(r.fork_key)

                        //  window.location.reload();
                    } else {
                        alert(r.msg);
                    }

                },
                failure: function(id, result) {}
            }
        });


/*
        Y.on('io:complete', function(id, o, args) {
          //  alert(o.responseText)
            var r = JSON.parse(o.responseText);
            if (r.state == 200) {


				Y.one('#progress_bar').setStyle('display','block')

            //    api_request_progess(r.fork_key)

                //  window.location.reload();
            } else {
                alert(r.msg);
            }

        }

        , Y);
        var result = Y.io(request);

*/



    } else {



        if (Y.one('#number_selected_funders').get('value') == 0) {
            Y.one('#choose_funders').addClass('error')


        } else {
            Y.one('#input_journals').addClass('error')


        }


    }

}


function get_results(fork_key) {

    request = 'ar_results.php?tipo=get_results&fork_key=' + fork_key
    //alert(request)
    Y.io(request, {

        on: {
            success: function(id, o) {
                //alert(o.responseText)
                var r = JSON.parse(o.responseText);

                if (r.state == 200) {

                    Y.one('#results').setStyle('display', 'block')

                    for (x in r.result_data) {
                        if (Y.one('#' + x) != undefined) {
                            Y.one('#' + x).set('innerHTML', r.result_data[x])
                        }
                    }

                } else {
                    alert(r.msg);
                }


            },
            failure: function(id, result) {}
        }
    });






}


function api_request_progess(fork_key) {

    request = 'ar_fork.php?tipo=get_wait_info&fork_key=' + fork_key + '&tag=journals'
    //alert(request)
    Y.io(request, {

        on: {
            success: function(id, o) {
                //  alert(o.responseText)
                var r = JSON.parse(o.responseText);

                if (r.state == 200) {
                    Y.one('#progress_status').set('innerHTML', r.formated_status)
                    Y.one('#progress_stats').set('innerHTML', r.formated_progress)


                    if (r.fork_state == 'Queued') {

                        setTimeout(function() {
                            api_request_progess(r.fork_key)
                        }, 1000);
                    } else if (r.fork_state == 'In Process') {

                        setTimeout(function() {
                            api_request_progess(r.fork_key)
                        }, 1000);



                        get_results(r.fork_key);




                    } else if (r.fork_state == 'Cancelled') {
                        get_results(r.fork_key);
                    } else if (r.fork_state == 'Finished') {

                        get_results(r.fork_key);
                         display_result_table('&fork_key='+r.fork_key);
                    }


                } else {
                    alert(r.msg);
                }


            },
            failure: function(id, result) {}
        }
    });





}


function display_result_table(query){


Y.one('#results_table').setStyle('display','block')

 table.datasource.load({
        request: query,

        callback: {
            success: function(e) {
               
                table.datasource.onDataReturnInitializeTable(e);
            },
            failure: function() {
                Y.one('#results_table').setHTML('The data could not be retrieved.');
            }
        }
    });

}

Y.use("node", "json-stringify", "io-base", "uploader", "anim","datatable", "datasource-get", "datasource-jsonschema", "datatable-datasource", function(Y) {

    Y.on("click", select_funder, '#funders_chooser .funder', null);

    Y.on("click", submit, '#submit', null);

    Y.on("keyup", journals_changed, '#journals', null);


    close_select_funders = new Y.Anim({
        node: '#choose_funders',
        to: {
            height: 0,

            opacity: 0,
        }
    });

    close_input_journals = new Y.Anim({
        node: '#input_journals',
        to: {
            height: 0,

            opacity: 0,
        }
    });

    close_submit_query = new Y.Anim({
        node: '#submit_query',
        to: {
            height: 0,

            opacity: 0,
        }
    });

    close_select_funders.on('end', function() {
        close_select_funders.get('node').setStyle('display', 'none');
    });
    close_input_journals.on('end', function() {
        close_input_journals.get('node').setStyle('display', 'none');
    });
    close_submit_query.on('end', function() {
        close_submit_query.get('node').setStyle('display', 'none');
    });



    if (Y.Uploader.TYPE != "none") {
        var uploader = new Y.Uploader({
            width: "400px",
            height: "40px",
            selectButtonLabel: Y.one('#upload_file_label').get('value')
        }).render("#uploaderContainerID");

        uploader.after("fileselect", function(event) {

            uploader.uploadAll("ar_upload.php");

        });




        uploader.after("uploadcomplete", function(event) {

            r = JSON.parse(event.data);

            if (r.state == 'uploaded') {

                Y.one('#upload_key').set('value', r.upload_key)
                Y.one('#journals_input_method').set('value', 'file')
                Y.one('#journals_input_method_file').setStyle('opacity', 1)
                Y.one('#journals_input_method_input').setStyle('opacity', .2)
                Y.one('#journals').set('value', '')



                if (Y.one('#number_selected_funders').get('value') == 0) {
                    Y.one('#submit').set('innerHTML', 'Select Funders')

                } else {
                    Y.one('#submit').set('innerHTML', 'Find Compilance')

                }

                var label = r.filename + ' (' + r.size + ')'
                Y.one('#uploaderContainerID div button').set('innerHTML', label)
                Y.one('#uploaderContainerID div button').set('aria-label', label)

            } else {

                if (Y.one('#number_selected_funders').get('value') == 0) {
                    Y.one('#submit').set('innerHTML', 'Select Funders & Input Journals')

                } else {
                    Y.one('#submit').set('innerHTML', 'Input Journals')
                }



            }


        });




    } else {
        alert("Sorry your browser is not supported")
    }
    
    
    
    var url = "ar_results.php?tipo=list_results",dataSource;


    dataSource = new Y.DataSource.Get({
        source: url
    });

   
    dataSource.plug(Y.Plugin.DataSourceJSONSchema, {
        schema: {
            resultListLocator: "query.results",
            resultFields: [
                "query",
                "journal",
                "result",
                "compilance",
                "compilance_type",
                "notes"
                ]
        }
    });

    table = new Y.DataTable({
        columns: [
            {
            key: "query",
            label: "Query",
            width: '230px'
        },
        
         
            {
            key: "compilance",
            label: "Compilance"
        },
            {
            key: "compilance_type",
            label: "Result",
              width: '100px'
        },
           {
            key: "journal",
            label: "Journal",
            allowHTML: true,
             width: '350px'
        },
            {
            key: "notes",
            label: "Notes",
            width: '435px'
        },

            ],

    });

    table.plug(Y.Plugin.DataTableDataSource, {
        datasource: dataSource
    });

    table.render("#results_table");

  


});





