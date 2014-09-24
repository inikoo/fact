if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/gallery-array-iterate/gallery-array-iterate.js']) {
   __coverage__['build/gallery-array-iterate/gallery-array-iterate.js'] = {"path":"build/gallery-array-iterate/gallery-array-iterate.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":52}}},"2":{"name":"(anonymous_2)","line":8,"loc":{"start":{"line":8,"column":1},"end":{"line":8,"column":14}}},"3":{"name":"(anonymous_3)","line":30,"loc":{"start":{"line":30,"column":19},"end":{"line":30,"column":95}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":50,"column":31}},"2":{"start":{"line":8,"column":0},"end":{"line":48,"column":6}},"3":{"start":{"line":30,"column":4},"end":{"line":45,"column":6}},"4":{"start":{"line":31,"column":8},"end":{"line":32,"column":34}},"5":{"start":{"line":34,"column":8},"end":{"line":36,"column":9}},"6":{"start":{"line":35,"column":12},"end":{"line":35,"column":112}},"7":{"start":{"line":38,"column":8},"end":{"line":42,"column":9}},"8":{"start":{"line":39,"column":12},"end":{"line":41,"column":13}},"9":{"start":{"line":40,"column":16},"end":{"line":40,"column":28}},"10":{"start":{"line":44,"column":8},"end":{"line":44,"column":21}},"11":{"start":{"line":47,"column":4},"end":{"line":47,"column":31}}},"branchMap":{"1":{"line":34,"type":"if","locations":[{"start":{"line":34,"column":8},"end":{"line":34,"column":8}},{"start":{"line":34,"column":8},"end":{"line":34,"column":8}}]},"2":{"line":35,"type":"cond-expr","locations":[{"start":{"line":35,"column":52},"end":{"line":35,"column":62}},{"start":{"line":35,"column":65},"end":{"line":35,"column":66}}]},"3":{"line":38,"type":"binary-expr","locations":[{"start":{"line":38,"column":15},"end":{"line":38,"column":21}},{"start":{"line":38,"column":25},"end":{"line":38,"column":35}}]},"4":{"line":39,"type":"if","locations":[{"start":{"line":39,"column":12},"end":{"line":39,"column":12}},{"start":{"line":39,"column":12},"end":{"line":39,"column":12}}]},"5":{"line":39,"type":"binary-expr","locations":[{"start":{"line":39,"column":16},"end":{"line":39,"column":26}},{"start":{"line":39,"column":30},"end":{"line":39,"column":87}}]}},"code":["(function () { YUI.add('gallery-array-iterate', function (Y, NAME) {","","/**","Iterate through an array.","@module gallery-array-iterate","@author Steven Olmsted"," */","(function (Y) {","    'use strict';","","    /**","    @method iterate","    @for Array","    @param {Array} array The array to iterate","    @param {Number} [startIndex] The first index to iterate. If left undefined,","    iteration will either start at the beginning of the array if incrementBy is","    positive or at the end of the array if incrementBy is negative.","    @param {Number} incrementBy The interval by which the array will be","    iterated.  Must be a non-zero integer.  Negative values cause the array to","    be iterated backwards.","    @param {Function} iterationFunction The function to call on each iteration.","    This function will receive three arguments: value, index, and array.  If","    this function returns a truthy value, iteration will be terminated.","    @param {Object} [contextObject] The context that will become this in the","    iterationFunction.","    @return {Boolean} Will return true if iteration was terminated early,","    otherwise it will return false.","    @static","    */","    var _iterate = function (array, startIndex, incrementBy, iterationFunction, contextObject) {","        var i = startIndex,","            length = array.length;","        ","        if (Y.Lang.isFunction(incrementBy)) {","            return _iterate(array, startIndex < 0 ? length - 1 : 0, startIndex, incrementBy, iterationFunction);","        }","","        for (; i >= 0 && i < length; i += incrementBy) {","            if (i in array && iterationFunction.call(contextObject, array[i], i, array)) {","                return true;","            }","        }","","        return false;","    };","","    Y.Array.iterate = _iterate;","}(Y));","","}, 'gallery-2013.11.14-01-08');","","}());"]};
}
var __cov_e97HtKZnejCyW3g_10Mz0A = __coverage__['build/gallery-array-iterate/gallery-array-iterate.js'];
__cov_e97HtKZnejCyW3g_10Mz0A.s['1']++;YUI.add('gallery-array-iterate',function(Y,NAME){__cov_e97HtKZnejCyW3g_10Mz0A.f['1']++;__cov_e97HtKZnejCyW3g_10Mz0A.s['2']++;(function(Y){'use strict';__cov_e97HtKZnejCyW3g_10Mz0A.f['2']++;__cov_e97HtKZnejCyW3g_10Mz0A.s['3']++;var _iterate=function(array,startIndex,incrementBy,iterationFunction,contextObject){__cov_e97HtKZnejCyW3g_10Mz0A.f['3']++;__cov_e97HtKZnejCyW3g_10Mz0A.s['4']++;var i=startIndex,length=array.length;__cov_e97HtKZnejCyW3g_10Mz0A.s['5']++;if(Y.Lang.isFunction(incrementBy)){__cov_e97HtKZnejCyW3g_10Mz0A.b['1'][0]++;__cov_e97HtKZnejCyW3g_10Mz0A.s['6']++;return _iterate(array,startIndex<0?(__cov_e97HtKZnejCyW3g_10Mz0A.b['2'][0]++,length-1):(__cov_e97HtKZnejCyW3g_10Mz0A.b['2'][1]++,0),startIndex,incrementBy,iterationFunction);}else{__cov_e97HtKZnejCyW3g_10Mz0A.b['1'][1]++;}__cov_e97HtKZnejCyW3g_10Mz0A.s['7']++;for(;(__cov_e97HtKZnejCyW3g_10Mz0A.b['3'][0]++,i>=0)&&(__cov_e97HtKZnejCyW3g_10Mz0A.b['3'][1]++,i<length);i+=incrementBy){__cov_e97HtKZnejCyW3g_10Mz0A.s['8']++;if((__cov_e97HtKZnejCyW3g_10Mz0A.b['5'][0]++,i in array)&&(__cov_e97HtKZnejCyW3g_10Mz0A.b['5'][1]++,iterationFunction.call(contextObject,array[i],i,array))){__cov_e97HtKZnejCyW3g_10Mz0A.b['4'][0]++;__cov_e97HtKZnejCyW3g_10Mz0A.s['9']++;return true;}else{__cov_e97HtKZnejCyW3g_10Mz0A.b['4'][1]++;}}__cov_e97HtKZnejCyW3g_10Mz0A.s['10']++;return false;};__cov_e97HtKZnejCyW3g_10Mz0A.s['11']++;Y.Array.iterate=_iterate;}(Y));},'gallery-2013.11.14-01-08');