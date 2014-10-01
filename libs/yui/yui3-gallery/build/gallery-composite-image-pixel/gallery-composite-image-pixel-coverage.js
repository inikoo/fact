if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/gallery-composite-image-pixel/gallery-composite-image-pixel.js']) {
   __coverage__['build/gallery-composite-image-pixel/gallery-composite-image-pixel.js'] = {"path":"build/gallery-composite-image-pixel/gallery-composite-image-pixel.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":41},"end":{"line":1,"column":60}}},"2":{"name":"(anonymous_2)","line":7,"loc":{"start":{"line":7,"column":1},"end":{"line":7,"column":14}}},"3":{"name":"(anonymous_3)","line":29,"loc":{"start":{"line":29,"column":17},"end":{"line":29,"column":46}}},"4":{"name":"(anonymous_4)","line":78,"loc":{"start":{"line":78,"column":16},"end":{"line":78,"column":28}}},"5":{"name":"(anonymous_5)","line":85,"loc":{"start":{"line":85,"column":18},"end":{"line":85,"column":30}}},"6":{"name":"(anonymous_6)","line":97,"loc":{"start":{"line":97,"column":39},"end":{"line":97,"column":63}}},"7":{"name":"(anonymous_7)","line":98,"loc":{"start":{"line":98,"column":15},"end":{"line":98,"column":27}}},"8":{"name":"(anonymous_8)","line":110,"loc":{"start":{"line":110,"column":39},"end":{"line":110,"column":63}}},"9":{"name":"(anonymous_9)","line":111,"loc":{"start":{"line":111,"column":15},"end":{"line":111,"column":32}}},"10":{"name":"(anonymous_10)","line":131,"loc":{"start":{"line":131,"column":31},"end":{"line":131,"column":63}}},"11":{"name":"(anonymous_11)","line":163,"loc":{"start":{"line":163,"column":32},"end":{"line":163,"column":54}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":170,"column":74}},"2":{"start":{"line":7,"column":0},"end":{"line":168,"column":6}},"3":{"start":{"line":8,"column":4},"end":{"line":8,"column":17}},"4":{"start":{"line":10,"column":4},"end":{"line":71,"column":10}},"5":{"start":{"line":30,"column":12},"end":{"line":60,"column":18}},"6":{"start":{"line":62,"column":12},"end":{"line":68,"column":13}},"7":{"start":{"line":63,"column":16},"end":{"line":67,"column":18}},"8":{"start":{"line":70,"column":12},"end":{"line":70,"column":48}},"9":{"start":{"line":73,"column":4},"end":{"line":88,"column":6}},"10":{"start":{"line":79,"column":12},"end":{"line":79,"column":33}},"11":{"start":{"line":86,"column":12},"end":{"line":86,"column":50}},"12":{"start":{"line":97,"column":4},"end":{"line":101,"column":7}},"13":{"start":{"line":98,"column":8},"end":{"line":100,"column":10}},"14":{"start":{"line":99,"column":12},"end":{"line":99,"column":70}},"15":{"start":{"line":110,"column":4},"end":{"line":114,"column":7}},"16":{"start":{"line":111,"column":8},"end":{"line":113,"column":10}},"17":{"start":{"line":112,"column":12},"end":{"line":112,"column":70}},"18":{"start":{"line":116,"column":4},"end":{"line":116,"column":26}},"19":{"start":{"line":131,"column":4},"end":{"line":152,"column":6}},"20":{"start":{"line":132,"column":8},"end":{"line":133,"column":40}},"21":{"start":{"line":135,"column":8},"end":{"line":137,"column":9}},"22":{"start":{"line":136,"column":12},"end":{"line":136,"column":74}},"23":{"start":{"line":139,"column":8},"end":{"line":149,"column":9}},"24":{"start":{"line":140,"column":12},"end":{"line":140,"column":28}},"25":{"start":{"line":148,"column":12},"end":{"line":148,"column":40}},"26":{"start":{"line":151,"column":8},"end":{"line":151,"column":86}},"27":{"start":{"line":163,"column":4},"end":{"line":167,"column":6}},"28":{"start":{"line":164,"column":8},"end":{"line":164,"column":49}},"29":{"start":{"line":165,"column":8},"end":{"line":165,"column":45}},"30":{"start":{"line":166,"column":8},"end":{"line":166,"column":21}}},"branchMap":{"1":{"line":135,"type":"if","locations":[{"start":{"line":135,"column":8},"end":{"line":135,"column":8}},{"start":{"line":135,"column":8},"end":{"line":135,"column":8}}]},"2":{"line":139,"type":"if","locations":[{"start":{"line":139,"column":8},"end":{"line":139,"column":8}},{"start":{"line":139,"column":8},"end":{"line":139,"column":8}}]},"3":{"line":151,"type":"binary-expr","locations":[{"start":{"line":151,"column":15},"end":{"line":151,"column":47}},{"start":{"line":151,"column":51},"end":{"line":151,"column":85}}]}},"code":["(function () { YUI.add('gallery-composite-image-pixel', function (Y, NAME) {","","/**","@module gallery-composite-image-pixel","@author Steven Olmsted","*/","(function (Y) {","    'use strict';","","    var _Image = Y.Composite.Image,","        _YArray = Y.Array,","","        _imagePrototype = _Image.prototype,","","        _cached = Y.cached,","        _defineProperties = Object.defineProperties,","        _isArray = Y.Lang.isArray,","","        /**","        This is an experimental array-like interface for interacting with image","        pixels.  A pixel's channel values can be accessed by channel id in the","        same way normal array items are accessed.","        @class Image.Pixel","        @constructor","        @namespace Composite","        @param {Composite.Image} image The image that contains the pixel.","        @param {Number} pixelIndex The pixel's unique index within the image.","        */","        _Class = function (image, pixelIndex) {","            var channelCount = image.channels.length,","                channelIndex = 0,","                properties = {","                    /**","                    The image to which this pixel belongs.","                    @property image","                    @final","                    @type Composite.Image","                    */","                    image: {","                        value: image","                    },","                    /**","                    The number of channels this pixel contains.","                    @property length","                    @final","                    @type Number","                    */","                    length: {","                        value: channelCount","                    },","                    /**","                    The pixel index for this pixel within the image.","                    @property pixelIndex","                    @final","                    @type Number","                    */","                    pixelIndex: {","                        value: pixelIndex","                    }","                };","","            for (; channelIndex < channelCount; channelIndex += 1) {","                properties[channelIndex] = {","                    enumerable: true,","                    get: _Class._getChannelGetter(channelIndex),","                    set: _Class._getChannelSetter(channelIndex)","                };","            }","","            _defineProperties(this, properties);","        };","","    _Class.prototype = {","        /**","        @method toJSON","        @return {[Number]}","        */","        toJSON: function () {","            return _YArray(this);","        },","        /**","        @method toString","        @return {String}","        */","        toString: function () {","            return 'pixel[' + this.toJSON() + ']';","        }","    };","","    /**","    @method _getChannelGetter","    @param {Number} channelIndex The specific channel index to get.","    @protected","    @return {Function}","    @static","    */","    _Class._getChannelGetter = _cached(function (channelIndex) {","        return function () {","            return this.image.getValue(this.pixelIndex, channelIndex);","        };","    });","","    /**","    @method _getChannelSetter","    @param {Number} channelIndex The specific channel index to set.","    @protected","    @return {Function}","    @static","    */","    _Class._getChannelSetter = _cached(function (channelIndex) {","        return function (value) {","            this.image.setValue(this.pixelIndex, channelIndex, value);","        };","    });","","    _Image.Pixel = _Class;","","    /**","    Returns an experimental array-like interface for accessing a pixel's data.","    The Pixel objects are cached, so each time getPixel is called for the same","    pixel, the same object will be returned.  Note that the creation of Pixel","    objects is much less efficient than just using the getValue and setValue","    methods.","    @method getPixel","    @for Image","    @param {Number|[Number]} pixelIndexOrLocation This may be either the pixel's","    unique index within the image or an array of dimension indicies.  The length","    of this array must match the number of dimensions in the image.","    @return {Composite.Image.Pixel}","    */","    _imagePrototype.getPixel = function (pixelIndexOrLocation) {","        var me = this,","            pixelCache = me._pixelCache;","","        if (_isArray(pixelIndexOrLocation)) {","            pixelIndexOrLocation = me.getPixelIndex(pixelIndexOrLocation);","        }","","        if (!pixelCache) {","            pixelCache = {};","            /**","            This pixel cache object will be created on-demand the first time an","            image's getPixel method is called.","            @property _pixelCache","            @protected","            @type Object","            */","            me._pixelCache = pixelCache;","        }","","        return pixelCache[pixelIndexOrLocation] || me._getPixel(pixelIndexOrLocation);","    };","","    /**","    Creates, caches, and returns a Pixel object.  This method assumes that the","    pixel cache exists and writes to it, but it does not check the cache before","    creating a new object.","    @method _getPixel","    @param {Number} pixelIndex The pixel's unique index within the image.","    @protected","    @return {Composite.Image.Pixel}","    */","    _imagePrototype._getPixel = function (pixelIndex) {","        var pixel = new _Class(this, pixelIndex);","        this._pixelCache[pixelIndex] = pixel;","        return pixel;","    };","}(Y));","","}, 'gallery-2013.05.02-22-59', {\"requires\": [\"gallery-composite-image\"]});","","}());"]};
}
var __cov_YW6DJv3QdbmPrR8Qj1y3tQ = __coverage__['build/gallery-composite-image-pixel/gallery-composite-image-pixel.js'];
__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['1']++;YUI.add('gallery-composite-image-pixel',function(Y,NAME){__cov_YW6DJv3QdbmPrR8Qj1y3tQ.f['1']++;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['2']++;(function(Y){__cov_YW6DJv3QdbmPrR8Qj1y3tQ.f['2']++;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['3']++;'use strict';__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['4']++;var _Image=Y.Composite.Image,_YArray=Y.Array,_imagePrototype=_Image.prototype,_cached=Y.cached,_defineProperties=Object.defineProperties,_isArray=Y.Lang.isArray,_Class=function(image,pixelIndex){__cov_YW6DJv3QdbmPrR8Qj1y3tQ.f['3']++;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['5']++;var channelCount=image.channels.length,channelIndex=0,properties={image:{value:image},length:{value:channelCount},pixelIndex:{value:pixelIndex}};__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['6']++;for(;channelIndex<channelCount;channelIndex+=1){__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['7']++;properties[channelIndex]={enumerable:true,get:_Class._getChannelGetter(channelIndex),set:_Class._getChannelSetter(channelIndex)};}__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['8']++;_defineProperties(this,properties);};__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['9']++;_Class.prototype={toJSON:function(){__cov_YW6DJv3QdbmPrR8Qj1y3tQ.f['4']++;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['10']++;return _YArray(this);},toString:function(){__cov_YW6DJv3QdbmPrR8Qj1y3tQ.f['5']++;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['11']++;return'pixel['+this.toJSON()+']';}};__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['12']++;_Class._getChannelGetter=_cached(function(channelIndex){__cov_YW6DJv3QdbmPrR8Qj1y3tQ.f['6']++;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['13']++;return function(){__cov_YW6DJv3QdbmPrR8Qj1y3tQ.f['7']++;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['14']++;return this.image.getValue(this.pixelIndex,channelIndex);};});__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['15']++;_Class._getChannelSetter=_cached(function(channelIndex){__cov_YW6DJv3QdbmPrR8Qj1y3tQ.f['8']++;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['16']++;return function(value){__cov_YW6DJv3QdbmPrR8Qj1y3tQ.f['9']++;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['17']++;this.image.setValue(this.pixelIndex,channelIndex,value);};});__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['18']++;_Image.Pixel=_Class;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['19']++;_imagePrototype.getPixel=function(pixelIndexOrLocation){__cov_YW6DJv3QdbmPrR8Qj1y3tQ.f['10']++;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['20']++;var me=this,pixelCache=me._pixelCache;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['21']++;if(_isArray(pixelIndexOrLocation)){__cov_YW6DJv3QdbmPrR8Qj1y3tQ.b['1'][0]++;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['22']++;pixelIndexOrLocation=me.getPixelIndex(pixelIndexOrLocation);}else{__cov_YW6DJv3QdbmPrR8Qj1y3tQ.b['1'][1]++;}__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['23']++;if(!pixelCache){__cov_YW6DJv3QdbmPrR8Qj1y3tQ.b['2'][0]++;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['24']++;pixelCache={};__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['25']++;me._pixelCache=pixelCache;}else{__cov_YW6DJv3QdbmPrR8Qj1y3tQ.b['2'][1]++;}__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['26']++;return(__cov_YW6DJv3QdbmPrR8Qj1y3tQ.b['3'][0]++,pixelCache[pixelIndexOrLocation])||(__cov_YW6DJv3QdbmPrR8Qj1y3tQ.b['3'][1]++,me._getPixel(pixelIndexOrLocation));};__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['27']++;_imagePrototype._getPixel=function(pixelIndex){__cov_YW6DJv3QdbmPrR8Qj1y3tQ.f['11']++;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['28']++;var pixel=new _Class(this,pixelIndex);__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['29']++;this._pixelCache[pixelIndex]=pixel;__cov_YW6DJv3QdbmPrR8Qj1y3tQ.s['30']++;return pixel;};}(Y));},'gallery-2013.05.02-22-59',{'requires':['gallery-composite-image']});