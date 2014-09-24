//@author Raul Perusquia <rulovico@gmail.com>






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

function log_request(fork_key) {

    request = 'ar_log.php?tipo=log_request&url='+window.location+'&prev='+document.referrer
    Y.io(request, {

        on: {
            success: function(id, o) {
                var r = JSON.parse(o.responseText);

                if (r.state == 200) {

                  
                } else {
                    alert(r.msg);
                }


            },
            failure: function(id, result) {}
        }
    });






}