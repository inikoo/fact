if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/y3d-geometry-cylinder/y3d-geometry-cylinder.js']) {
   __coverage__['build/y3d-geometry-cylinder/y3d-geometry-cylinder.js'] = {"path":"build/y3d-geometry-cylinder/y3d-geometry-cylinder.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0},"b":{},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":52}}},"2":{"name":"(anonymous_2)","line":6,"loc":{"start":{"line":6,"column":14},"end":{"line":6,"column":25}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":84,"column":68}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":18}},"3":{"start":{"line":5,"column":0},"end":{"line":82,"column":3}},"4":{"start":{"line":7,"column":2},"end":{"line":16,"column":45}},"5":{"start":{"line":18,"column":2},"end":{"line":24,"column":3}},"6":{"start":{"line":19,"column":3},"end":{"line":21,"column":24}},"7":{"start":{"line":23,"column":3},"end":{"line":23,"column":21}},"8":{"start":{"line":26,"column":2},"end":{"line":43,"column":3}},"9":{"start":{"line":27,"column":3},"end":{"line":27,"column":49}},"10":{"start":{"line":29,"column":3},"end":{"line":42,"column":4}},"11":{"start":{"line":30,"column":4},"end":{"line":30,"column":18}},"12":{"start":{"line":31,"column":4},"end":{"line":31,"column":22}},"13":{"start":{"line":33,"column":4},"end":{"line":33,"column":30}},"14":{"start":{"line":34,"column":4},"end":{"line":34,"column":21}},"15":{"start":{"line":35,"column":4},"end":{"line":35,"column":30}},"16":{"start":{"line":37,"column":4},"end":{"line":37,"column":29}},"17":{"start":{"line":38,"column":4},"end":{"line":38,"column":30}},"18":{"start":{"line":40,"column":4},"end":{"line":40,"column":31}},"19":{"start":{"line":41,"column":4},"end":{"line":41,"column":31}},"20":{"start":{"line":45,"column":2},"end":{"line":58,"column":3}},"21":{"start":{"line":46,"column":3},"end":{"line":57,"column":4}},"22":{"start":{"line":47,"column":4},"end":{"line":47,"column":39}},"23":{"start":{"line":48,"column":4},"end":{"line":48,"column":36}},"24":{"start":{"line":50,"column":4},"end":{"line":50,"column":24}},"25":{"start":{"line":51,"column":4},"end":{"line":51,"column":25}},"26":{"start":{"line":52,"column":4},"end":{"line":52,"column":28}},"27":{"start":{"line":54,"column":4},"end":{"line":54,"column":25}},"28":{"start":{"line":55,"column":4},"end":{"line":55,"column":29}},"29":{"start":{"line":56,"column":4},"end":{"line":56,"column":28}}},"branchMap":{},"code":["(function () { YUI.add('y3d-geometry-cylinder', function (Y, NAME) {","","var Lang = Y.Lang;","","Y.Cylinder = Y.Base.create('cylinder', Y.Geometry, [], {","\tinitializer: function() {","\t\tvar instance = this,","\t\t\theight = instance.get('height'),","\t\t\theightBands = instance.get('heightBands'),","\t\t\tindices = instance.get('indices'),","\t\t\ttextureCoordinates = instance.get('textureCoordinates'),","\t\t\tradius = instance.get('radius'),","\t\t\tvertices = instance.get('vertices'),","\t\t\twidthBands = instance.get('widthBands'),","\t\t\tcircle = [],","\t\t\ti, j, theta, x, y, z, u, v, first, second;","","\t\tfor (i = 0; i <= widthBands; i++) {","\t\t\ttheta = i * 2 * Math.PI / widthBands,","\t\t\t\tx = Math.cos(theta),","\t\t\t\tz = Math.sin(theta);","","\t\t\tcircle.push(x, z);","\t\t}","","\t\tfor (i = 0; i <= heightBands; i++) {","\t\t\ty = (height / 2) + (height / heightBands) * i;","","\t\t\tfor (j = 0; j < circle.length; j = j + 2) {","\t\t\t\tx = circle[j];","\t\t\t\tz = circle[j + 1];","","\t\t\t\tvertices.push(radius * x);","\t\t\t\tvertices.push(y);","\t\t\t\tvertices.push(radius * z);","","\t\t\t\tu = 1 - (j / widthBands);","\t\t\t\tv = 1 - (i / heightBands);","","\t\t\t\ttextureCoordinates.push(u);","\t\t\t\ttextureCoordinates.push(v);","\t\t\t}","\t\t}","","\t\tfor (i = 0; i < heightBands; i++) {","\t\t\tfor (j = 0; j < widthBands; j++) {","\t\t\t\tfirst = (i * (widthBands + 1)) + j;","\t\t\t\tsecond = first + widthBands + 1;","","\t\t\t\tindices.push(first);","\t\t\t\tindices.push(second);","\t\t\t\tindices.push(first + 1);","","\t\t\t\tindices.push(second);","\t\t\t\tindices.push(second + 1);","\t\t\t\tindices.push(first + 1);","\t\t\t}","\t\t}","\t}","}, {","\tATTRS: {","\t\theight: {","\t\t\tvalue: 4,","\t\t\tvalidator: Lang.isNumber","\t\t},","","\t\theightBands: {","\t\t\tvalue: 32,","\t\t\tvalidator: Lang.isNumber","\t\t},","","\t\tradius: {","\t\t\tvalue: 1,","\t\t\tvalidator: Lang.isNumber","\t\t},","","\t\twidthBands: {","\t\t\tvalue: 32,","\t\t\tvalidator: Lang.isNumber","\t\t}","\t}","});","","}, 'gallery-2013.08.22-21-03', {\"requires\": [\"y3d-geometry-base\"]});","","}());"]};
}
var __cov_$$cyNlE9axQmNao0A5YUsA = __coverage__['build/y3d-geometry-cylinder/y3d-geometry-cylinder.js'];
__cov_$$cyNlE9axQmNao0A5YUsA.s['1']++;YUI.add('y3d-geometry-cylinder',function(Y,NAME){__cov_$$cyNlE9axQmNao0A5YUsA.f['1']++;__cov_$$cyNlE9axQmNao0A5YUsA.s['2']++;var Lang=Y.Lang;__cov_$$cyNlE9axQmNao0A5YUsA.s['3']++;Y.Cylinder=Y.Base.create('cylinder',Y.Geometry,[],{initializer:function(){__cov_$$cyNlE9axQmNao0A5YUsA.f['2']++;__cov_$$cyNlE9axQmNao0A5YUsA.s['4']++;var instance=this,height=instance.get('height'),heightBands=instance.get('heightBands'),indices=instance.get('indices'),textureCoordinates=instance.get('textureCoordinates'),radius=instance.get('radius'),vertices=instance.get('vertices'),widthBands=instance.get('widthBands'),circle=[],i,j,theta,x,y,z,u,v,first,second;__cov_$$cyNlE9axQmNao0A5YUsA.s['5']++;for(i=0;i<=widthBands;i++){__cov_$$cyNlE9axQmNao0A5YUsA.s['6']++;theta=i*2*Math.PI/widthBands,x=Math.cos(theta),z=Math.sin(theta);__cov_$$cyNlE9axQmNao0A5YUsA.s['7']++;circle.push(x,z);}__cov_$$cyNlE9axQmNao0A5YUsA.s['8']++;for(i=0;i<=heightBands;i++){__cov_$$cyNlE9axQmNao0A5YUsA.s['9']++;y=height/2+height/heightBands*i;__cov_$$cyNlE9axQmNao0A5YUsA.s['10']++;for(j=0;j<circle.length;j=j+2){__cov_$$cyNlE9axQmNao0A5YUsA.s['11']++;x=circle[j];__cov_$$cyNlE9axQmNao0A5YUsA.s['12']++;z=circle[j+1];__cov_$$cyNlE9axQmNao0A5YUsA.s['13']++;vertices.push(radius*x);__cov_$$cyNlE9axQmNao0A5YUsA.s['14']++;vertices.push(y);__cov_$$cyNlE9axQmNao0A5YUsA.s['15']++;vertices.push(radius*z);__cov_$$cyNlE9axQmNao0A5YUsA.s['16']++;u=1-j/widthBands;__cov_$$cyNlE9axQmNao0A5YUsA.s['17']++;v=1-i/heightBands;__cov_$$cyNlE9axQmNao0A5YUsA.s['18']++;textureCoordinates.push(u);__cov_$$cyNlE9axQmNao0A5YUsA.s['19']++;textureCoordinates.push(v);}}__cov_$$cyNlE9axQmNao0A5YUsA.s['20']++;for(i=0;i<heightBands;i++){__cov_$$cyNlE9axQmNao0A5YUsA.s['21']++;for(j=0;j<widthBands;j++){__cov_$$cyNlE9axQmNao0A5YUsA.s['22']++;first=i*(widthBands+1)+j;__cov_$$cyNlE9axQmNao0A5YUsA.s['23']++;second=first+widthBands+1;__cov_$$cyNlE9axQmNao0A5YUsA.s['24']++;indices.push(first);__cov_$$cyNlE9axQmNao0A5YUsA.s['25']++;indices.push(second);__cov_$$cyNlE9axQmNao0A5YUsA.s['26']++;indices.push(first+1);__cov_$$cyNlE9axQmNao0A5YUsA.s['27']++;indices.push(second);__cov_$$cyNlE9axQmNao0A5YUsA.s['28']++;indices.push(second+1);__cov_$$cyNlE9axQmNao0A5YUsA.s['29']++;indices.push(first+1);}}}},{ATTRS:{height:{value:4,validator:Lang.isNumber},heightBands:{value:32,validator:Lang.isNumber},radius:{value:1,validator:Lang.isNumber},widthBands:{value:32,validator:Lang.isNumber}}});},'gallery-2013.08.22-21-03',{'requires':['y3d-geometry-base']});