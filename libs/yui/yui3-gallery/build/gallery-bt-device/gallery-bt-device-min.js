YUI.add("gallery-bt-device",function(e,t){var n=null,r=null,i,s={Name:null,OS:null,OS_Version:0,Borwser:null,getTouchSupport:function(){return r},getPositionFixedSupport:function(){var t,r;return n!==null?n:e.UA.chrome>=4||e.UA.android>=2.2||e.UA.ios>=5?n=!0:(t=e.one(".bt_posfixed")||e.one("body").appendChild('<div class="bt_posfixed"><div><span></span></div></div>'),r=t.one("div").set("scrollTop","30px").one("span").getY(),t.remove(),n=r===1)},getDeviceWidth:function(){return screen.width},getDeviceHeight:function(){return screen.height},getBrowserWidth:function(){return window.innerWidth||document.documentElement.clientWidth},getBrowserHeight:function(){return window.innerHeight||document.documentElement.clientHeight},getScrollBase:function(){return i},getScrollY:function(){return r?i.get("scrollTop"):e.DOM.docScrollY()},scrollTo:function(e,t){r?i.set("scrollLeft",e).set("scrollTop",t):window.scrollTo(e,t)}};r=(e.config.win&&"ontouchstart"in e.config.win||e.config.win&&"msPointerEnabled"in e.config.win.navigator)&&!(e.UA.chrome&&e.UA.chrome<6),i=r?e.one("body"):e.one("html"),e.UA.iphone?(s.Name="iphone",s.OS="Apple",s.OS_Version=e.UA.iphone,s.Browser="safari",s.B_Version=e.UA.safari):e.UA.ipad?(s.Name="ipad",s.OS="Apple",s.OS_Version=e.UA.ipad,s.Browser="safari",s.B_Version=e.UA.safari):e.UA.ipod?(s.Name="ipad",s.OS="Apple",s.OS_Version=e.UA.ipod,s.Browser="safari",s.B_Version=e.UA.safari):e.UA.mobile==="Android"?(s.Name="android",s.OS="android",s.OS_Version=e.UA.android,s.Browser="webkit",s.B_Version=e.UA.webkit):e.UA.ie?(s.Browser="ie",s.B_Version=e.UA.ie):e.UA.gecko?(s.Browser="firefox",s.B_Version=e.UA.gecko):e.UA.chrome&&(s.Browser="chrome",s.B_Version="chrome"),e.namespace("Bottle").Device=s},"gallery-2013.04.10-22-48",{requires:["node-screen"]});