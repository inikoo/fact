YUI.add("gallery-quickedit",function(e,t){"use strict";function n(e){n.superclass.constructor.call(this,e)}function l(t){var n=t.currentTarget.ancestor(".yui3-datatable-cell"),r=n.one(".quickedit-field");if(!r)return;var i=e.Lang.trim(r.get("value"));if(!i&&i!==0)return;for(;;){n=this.getCell(n,"below");if(!n)break;r=n.one(".quickedit-field"),r&&r.set("value",i)}}function c(t,n){return function(r){return!r.record&&e.Lang.isString(n)?n:(r.record?t:n).apply(this,arguments)}}function h(e){var t=this.getCell(e.target,e.charCode==38?"above":"below");if(t){var n=t.one(".quickedit-field");n&&(n.focus(),n.select(),e.halt(!0))}}function p(){function r(t,i){if(e.Lang.isString(i)){var s={key:i};t.push(s),n[i]=s}else i.children?t=e.reduce(i.children,t,r):(t.push(i),n[i.key]=i);return t}var t=this.get("host").get("columns"),n={};this.column_list=e.reduce(t,[],r),this.column_map=n}function d(t){var n=this.get("host"),r=!0,i=t.size();for(var s=0;s<i;s++){var o=t.item(s);if(!e.DOM.hasClass(o,"quickedit-field"))continue;var u=this.column_map[this._getColumnKey(o)].quickEdit;if(!u)continue;var a=u.validation?u.validation.msg:null,f=e.FormManager.validateFromCSSData(o,a);if(f.error){this.displayMessage(o,f.error,"error"),r=!1;continue}if(f.keepGoing&&u.validation&&u.validation.regex instanceof RegExp&&!u.validation.regex.test(o.get("value"))){this.displayMessage(o,a?a.regex:null,"error"),r=!1;continue}if(u.validation&&e.Lang.isFunction(u.validation.fn)&&!u.validation.fn.call(n,o)){r=!1;continue}}return r}n.NAME="QuickEditPlugin",n.NS="qe",n.ATTRS={changesAlwaysInclude:{value:[],validator:e.Lang.isArray},includeAllRowsInChanges:{value:!0,validator:e.Lang.isBoolean},includeRowIndexInChanges:{value:!1,validator:e.Lang.isBoolean}};var r=/quickedit-key:([^\s]+)/,i="quickedit-has",s=i+"([a-z]+)",o=new RegExp(e.Node.class_re_prefix+s+e.Node.class_re_suffix),u="quickedit-has",a=u+"([a-z]+)",f=new RegExp(e.Node.class_re_prefix+a+e.Node.class_re_suffix);n.error_text_class="quickedit-message-text",n.error_display_markup='<div class="quickedit-message-text"></div>',n.copy_down_button_class="quickedit-copy-down",n.textFormatter=function(t){var r='<input type="text" class="{yiv} quickedit-field quickedit-key:{key}" value="{value}"/>{cd}'+n.error_display_markup,i=t.column.quickEdit;return e.Lang.sub(r,{key:t.column.key,value:t.value.toString().replace(/"/g,"&quot;"),yiv:i.validation?i.validation.css||"":"",cd:n.copyDownFormatter.call(this,t)})},n.textareaFormatter=function(t){var r='<textarea class="{yiv} quickedit-field quickedit-key:{key}">{value}</textarea>{cd}'+n.error_display_markup,i=t.column.quickEdit;return e.Lang.sub(r,{key:t.column.key,value:t.value,yiv:i.validation?i.validation.css||"":"",cd:n.copyDownFormatter.call(this,t)})},n.readonlyEmailFormatter=function(e){return e.value||""},n.readonlyLinkFormatter=function(e){return e.value||""},n.copyDownFormatter=function(t,r){return t.column.quickEdit.copyDown&&t.rowIndex===0?e.Lang.sub('<button type="button" title="Copy down" class="{c}">&darr;</button>',{c:n.copy_down_button_class}):""},e.extend(n,e.Plugin.Base,{initializer:function(e){var t=this.get("host");this.hasMessages=!1,p.call(this),this.get("host").after("columnsChange",p,this);var r=this.afterHostEvent("render",function(){t.get("boundingBox").delegate("click",l,"."+n.copy_down_button_class,t),r.detach()})},start:function(){this.fire("clearErrorNotification");var t=this.get("host");this.saveSort=[],this.saveEdit=[],this.saveFmt={};for(var r=0;r<this.column_list.length;r++){var i=this.column_list[r],s=i.key;this.saveSort.push(i.sortable),i.sortable=!1;var o=i.quickEdit,u=i.qeFormatter;if(o||u){var a=null;o&&e.Lang.isFunction(o.formatter)?a=o.formatter:e.Lang.isFunction(u)?a=u:a=n.textFormatter,a&&(this.saveFmt[s]={formatter:i.formatter,nodeFormatter:i.nodeFormatter,_formatterFn:i._formatterFn,allowHTML:i.allowHTML},i.formatter=c.call(this,a,i.formatter||i.nodeFormatter),i.nodeFormatter=null,i.allowHTML=!0)}}var f=t.get("contentBox");f.addClass(t.getClassName("quickedit")),this.move_event_handle=f.on("key",h,"down:38+ctrl,40+ctrl",t),t.set("columns",t.get("columns"))},cancel:function(){this.fire("clearErrorNotification");for(var t=0;t<this.column_list.length;t++){var n=this.column_list[t];n.sortable=this.saveSort[t]}delete this.saveSort,delete this.saveEdit,e.each(this.saveFmt,function(e,t){var n=this.column_map[t];n.formatter=e.formatter,n.nodeFormatter=e.nodeFormatter,n._formatterFn=e._formatterFn,n.allowHTML=e.allowHTML},this),delete this.saveFmt;var r=this.get("host"),i=r.get("contentBox");i.removeClass(r.getClassName("quickedit")),this.move_event_handle&&(this.move_event_handle.detach(),delete this.move_event_handle),r.set("columns",r.get("columns"))},getChanges:function(){if(!this.validate())return!1;var t=[],n=this.get("changesAlwaysInclude"),r=this.get("includeRowIndexInChanges"),i=this.get("includeAllRowsInChanges"),s=this.get("host"),o=s._tbodyNode.get("children");return s.get("data").each(function(s,u){var a=o.item(u).all(".quickedit-field"),f={},l=!1;a.each(function(t){var n=this._getColumnKey(t),r=this.column_map[n].quickEdit,i=s.get(n),o=e.Lang.trim(t.get("value"));if(r.changed?r.changed(i,o):o!==(i?i.toString():""))f[n]=o,l=!0},this);if(l||i){for(var c=0;c<n.length;c++){var h=n[c];f[h]=s.get(h)}r&&(f._row_index=u),t.push(f)}},this),t},validate:function(){this.clearMessages();var e=!0,t=this.get("host"),n=t._tbodyNode.getElementsByTagName("input"),r=t._tbodyNode.getElementsByTagName("textarea"),i=t._tbodyNode.getElementsByTagName("select");return e=d.call(this,n)&&e,e=d.call(this,r)&&e,e=d.call(this,i)&&e,e||this.fire("notifyErrors"),e},clearMessages:function(){this.hasMessages=!1,this.fire("clearErrorNotification");var e=this.get("host");e._tbodyNode.getElementsByClassName(s).removeClass(s),e._tbodyNode.getElementsByClassName(a).removeClass(a),e._tbodyNode.all("."+n.error_text_class).set("innerHTML","")},displayMessage:function(t,r,l,c){e.Lang.isUndefined(c)&&(c=!0),t=e.one(t);var h=t.getAncestorByTagName
("tr");e.FormManager.statusTakesPrecedence(this._getElementStatus(h,o),l)&&(!this.hasMessages&&c&&e.one(h.get("firstChild")).scrollIntoView(),h.replaceClass(s,i+l),this.hasMessages=!0);var p=t.getAncestorByTagName("td");e.FormManager.statusTakesPrecedence(this._getElementStatus(p,f),l)&&(r&&p.one("."+n.error_text_class).set("innerHTML",r),p.replaceClass(a,u+l),this.hasMessages=!0)},_getElementStatus:function(e,t){var n=e.get("className").match(t);return n&&n.length?n[1]:!1},_getColumnKey:function(e){var t=r.exec(e.get("className"));return t[1]}}),e.namespace("Plugin"),e.Plugin.DataTableQuickEdit=n},"gallery-2014.03.06-14-38",{skinnable:"true",requires:["datatable-base","gallery-formmgr-css-validation","gallery-node-optimizations","gallery-funcprog"],optional:["gallery-scrollintoview"]});