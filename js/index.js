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
            Y.one('#submit').set('innerHTML', Y.one('#select_journals_label').get('value'))

        } else {
            Y.one('#submit').set('innerHTML', Y.one('#submit_label').get('value'))
        }

    } else {
        if (Y.one('#journals').get('value') == '' && Y.one('#upload_key').get('value') == 0) {
            Y.one('#submit').set('innerHTML', Y.one('#select_funders_and_journals_label').get('value'))

        } else {
            Y.one('#submit').set('innerHTML', Y.one('#select_funders_label').get('value'))
        }

    }

    Y.one('#number_selected_funders').set('value', number_selected_funders)

}

function journals_changed() {

    Y.one('#upload_key').set('value', 0)
    Y.one('#journals_input_method').set('value', 'input')
    Y.one('#journals_input_method_file').setStyle('opacity', .2)
    Y.one('#journals_input_method_input').setStyle('opacity', 1)
    Y.one('#select_files_container div button').set('innerHTML', Y.one('#upload_file_label').get('value'))

    if (Y.one('#journals').get('value') == '') {

        if (Y.one('#number_selected_funders').get('value') == 0) {
            Y.one('#submit').set('innerHTML', Y.one('#select_funders_and_journals_label').get('value'))

        } else {
            Y.one('#submit').set('innerHTML', Y.one('#select_journals_label').get('value'))

        }

    } else {
        if (Y.one('#number_selected_funders').get('value') == 0) {
            Y.one('#submit').set('innerHTML', Y.one('#select_funders_label').get('value'))

        } else {
            Y.one('#submit').set('innerHTML', Y.one('#submit_label').get('value'))

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
                        display_result_table('&fork_key=' + r.fork_key);
                    }
                } else {
                    alert(r.msg);
                }


            },
            failure: function(id, result) {}
        }
    });
}

function display_result_table(query) {


    Y.one('#results_table').setStyle('display', 'block')

    table.datasource.load({
        request: query,

        callback: {
            success: function(e) {

                table.datasource.onDataReturnInitializeTable(e);
            },
            failure: function() {
                Y.one('#results_table').setHTML(Y.one('table_error1_label'));
            }
        }
    });

}

Y.use("node", "json-stringify", "io-base", "uploader", "datatable", "datasource-get", "datasource-jsonschema", "datatable-datasource", function(Y) {


    log_request();

    Y.on("click", select_funder, '#funders_chooser .funder', null);

    Y.on("click", submit, '#submit', null);

    Y.on("keyup", journals_changed, '#journals', null);





    if (Y.Uploader.TYPE != "none") {
        var uploader = new Y.Uploader({
            width: "450px",
            height: "50px",
            selectButtonLabel: Y.one('#upload_file_label').get('value'),
            selectFilesButton: Y.Node.create('<button id="select_files" class="input" >' + Y.one('#upload_file_label').get('value') + '</button>')


        }).render("#select_files_container");

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
                    Y.one('#submit').set('innerHTML', Y.one('#select_funders_label').get('value'))

                } else {
                    Y.one('#submit').set('innerHTML', Y.one('#submit_label').get('value'))

                }

                var label = r.filename + ' (' + r.size + ')'
                Y.one('#select_files_container div button').set('innerHTML', label)
                Y.one('#select_files_container div button').set('aria-label', label)

            } else {

                if (Y.one('#number_selected_funders').get('value') == 0) {
                    Y.one('#submit').set('innerHTML', Y.one('#select_funders_and_journals_label').get('value'))

                } else {
                    Y.one('#submit').set('innerHTML', Y.one('#select_journals_label').get('value'))
                }



            }


        });




    } else {
        alert(Y.one('#uploader_error1_label').get('value'))
    }



    var url = "ar_results.php?tipo=list_results",
        dataSource;


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
            label: Y.one('#th_query_label').get('value'),
            width: '230px'
        },
            {
            key: "journal",
            label: Y.one('#th_journal_label').get('value'),
            allowHTML: true,
            width: '350px'
        },


            {
            key: "compilance",
            label: Y.one('#th_compilance_label').get('value')
        },
            {
            key: "compilance_type",
            label: Y.one('#th_result_label').get('value'),
            width: '100px'
        },
            {
            key: "notes",
            label: Y.one('#th_notes_label').get('value'),
            allowHTML: true,
            width: '435px'
        },

            ],

    });

    table.plug(Y.Plugin.DataTableDataSource, {
        datasource: dataSource
    });

    table.render("#results_table");




});
