//@author Raul Perusquia <rulovico@gmail.com>



function auto_logout_timer() {
    var t = setTimeout("auto_logout()", Dom.get('max_session_time_in_milliseconds'));

}



var CURRENT_CONF = {
    base: "libs/yui/yui3/build/",
    combine: 0,
    groups: {
        gallery: {
            base: 'libs/yui/yui3-gallery/build/',
            patterns: {
                'gallery-': {}
            }
        },
        yui2: {
            base: 'libs/yui/yui-2in3/dist/2.9.0/build/',
            patterns: {
                'yui2-': {
                    configFn: function(me) {
                        if (/-skin|reset|fonts|grids|base/.test(me.name)) {
                            me.type = 'css';
                            me.path = me.path.replace(/\.js/, '.css');
                            me.path = me.path.replace(/\/yui2-skin/, '/assets/skins/sam/yui2-skin');
                        }
                    }
                }
            }
        }
    }
}


var Y = YUI(CURRENT_CONF);


function change_block(e, arg) {


    Y.all("#blocks .block").setStyle('display', 'none');
    Y.one('#block_' + this.get('id')).setStyle('display', '');
    Y.all("#chooser_ul .item").removeClass('selected');
    this.addClass('selected');
    Y.io('ar_sessions.php?tipo=update&keys=' + arg + '&value=' + this.get('id'), {});

	post_change_block_actions(this);
}

function post_change_block_actions(o){};

function get_history_element_numbers(subject, subject_key) {

    request = 'ar_history.php?tipo=get_history_numbers&subject=' + subject + '&subject_key=' + subject_key

    Y.io(request, {

        on: {
            success: function(id, o) {
                var r = Y.JSON.parse(o.responseText);
                for (var key in r.elements_numbers) {
                    Y.one('#elements_history_' + subject + '_' + key + '_number').set('innerHTML', r.elements_numbers[key])
                }

            },
            failure: function(id, result) {}
        }
    });

}

