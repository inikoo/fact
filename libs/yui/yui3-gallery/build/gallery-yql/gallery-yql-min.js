YUI.add("gallery-yql",function(c){if(!YUI.yql){YUI.yql={};}var b=":/"+"/query.yahooapis.com/v1/public/yql?",a=function(f,g,e,d){a.superclass.constructor.apply(this);this._query(f,g,e,d);};c.extend(a,c.EventTarget,{_cb:null,_stamp:null,_receiver:function(d){if(d.query){this.fire("query",d.query);}if(d.error){this.fire("error",d.error);}if(this._cb){this._cb(d);}delete YUI.yql[this._stamp];},_query:function(i,j,h,g){var f=c.stamp({}),d="",e="http";f=f.replace(/-/g,"_");this._stamp=f;this._cb=j;YUI.yql[f]=c.bind(this._receiver,this);if(!h){h={};}h.q=i;h.format="json";h.callback="YUI.yql."+f;if(!h.env){h.env="http:/"+"/datatables.org/alltables.env";}c.each(h,function(m,l){d+=l+"="+encodeURIComponent(m)+"&";});if(!g){g={};}if(g.secure){e="https";}g.autopurge=true;g.context=this;g.onTimeout=function(k){this.fire("timeout",k);if(this._cb){this._cb(k);this._cb=null;}};e+=b+d;c.Get.script(e,g);return this;}});c.yql=a;},"gallery-2011.03.30-19-47",{requires:["get","event-custom"]});