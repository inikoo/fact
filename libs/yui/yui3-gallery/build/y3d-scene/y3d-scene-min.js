YUI.add("y3d-scene",function(e,t){var n=e.Lang;e.Scene=e.Base.create("scene",e.Base,[],{context:null,initializer:function(){var e=this,t=e.get("srcNode");e.context=t.getDOMNode().getContext("experimental-webgl")},add:function(e){var t=this,n=t.context,r=t.get("geometries");t._loadBufferData(e,n.ELEMENT_ARRAY_BUFFER,new Uint16Array(e.get("indices")),"indicesBuffer"),t._loadBufferData(e,n.ARRAY_BUFFER,new Float32Array(e.get("vertices")),"verticesBuffer"),t._loadTextureBufferData(e),r[e.get("id")]=e},remove:function(e){var t=this,n=t.get("geometries");delete n[e.get("id")]},render:function(){var t=this,n=t.context,r=t._createProjectionMatrix(),i=t.get("geometries");t._clearColor(),t._enableDepthTest(),e.each(i,function(e){var i=t._getProgram(e);n.useProgram(i),t._loadBufferData(e,n.ARRAY_BUFFER,new Float32Array(e.get("color")),"colorBuffer"),t._setVertexAttribute(e.colorBuffer,i.vertexColorAttribute,4),t._setVertexAttribute(e.verticesBuffer,i.vertexPositionAttribute,3),t._setTextureAttribute(i,e),t._setUniforms(i,e,r),e.get("wireframe")?t._drawWireframe(e):t._drawGeometry(e),t._unbindBuffers()})},_clearColor:function(){var e=this,t=e.context,n=e.get("background");t.clearColor(n[0],n[1],n[2],n[3])},_createProjectionMatrix:function(){var t=this,n=t.context,r=e.WebGLMatrix.mat4.create(),i=t.get("height"),s=t.get("width");return n.viewport(0,0,s,i),e.WebGLMatrix.mat4.perspective(45,s/i,.1,300,r),r},_drawElements:function(e,t,n){var r=this,i=r.context;i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,n),i.drawElements(e,t,i.UNSIGNED_SHORT,0)},_drawGeometry:function(e){var t=this,n=t.context,r=n.TRIANGLES,i=e.get("indices").length,s=e.indicesBuffer;t._drawElements(r,i,s)},_drawWireframe:function(e){var t=this,n=t.context,r=n.LINES,i=e.get("lines").length,s=e.linesBuffer;s||t._loadBufferData(e,n.ELEMENT_ARRAY_BUFFER,new Uint16Array(e.get("lines")),"linesBuffer"),t._drawElements(r,i,e.linesBuffer)},_enableDepthTest:function(){var e=this,t=e.context;t.enable(t.DEPTH_TEST),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT)},_getProgram:function(t){var n=this,r=t.get("texture"),i=null,s={context:n.context};return r!==null?i=e.Shader.getTextureProgram(s):i=e.Shader.getColorProgram(s),i},_loadBufferData:function(e,t,n,r){var i=this,s=i.context,o=s.createBuffer();s.bindBuffer(t,o),s.bufferData(t,n,s.STATIC_DRAW),s.bindBuffer(t,null),e[r]=o},_loadTextureBufferData:function(e){var t=this,n=t.context,r=e.get("texture");if(r===null)return;t._loadBufferData(e,n.ARRAY_BUFFER,new Float32Array(e.get("textureCoordinates")),"textureCoordinatesBuffer"),r.set("webglTexture",n.createTexture())},_setClearColor:function(t){return n.isString(t)&&(t=e.Color.normalizedColorArray(t)),t},_setTextureAttribute:function(e,t){var n=this,r=n.context,i=t.get("texture"),s,o,u;if(i===null)return;s=t.textureCoordinatesBuffer,o=i.get("image"),u=i.get("webglTexture"),r.bindTexture(r.TEXTURE_2D,u),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,o),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),n._setVertexAttribute(s,e.textureCoordinatesAttribute,2),r.activeTexture(r.TEXTURE0),r.uniform1i(e.sampler,0)},_setUniforms:function(t,n,r){var i=this,s=i.context,o=i.get("camera").getInvertedMatrix(),u=n.get("matrix");e.WebGLMatrix.mat4.multiply(o,u),s.uniformMatrix4fv(t.projectionMatrixUniform,!1,r),s.uniformMatrix4fv(t.modelViewMatrixUniform,!1,o)},_setVertexAttribute:function(e,t,n){var r=this,i=r.context;i.bindBuffer(i.ARRAY_BUFFER,e),i.vertexAttribPointer(t,n,i.FLOAT,!1,0,0),i.bindBuffer(i.ARRAY_BUFFER,null)},_unbindBuffers:function(){var e=this,t=e.context;t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),t.bindTexture(t.TEXTURE_2D,null)}},{ATTRS:{background:{value:"black",setter:"_setClearColor"},camera:{value:new e.Camera},geometries:{value:{}},height:{valueFn:function(){var e=this,t=e.get("srcNode");return t.get("height")},setter:function(e){var t=this,n=t.get("srcNode");return n.set("height",e),e}},srcNode:{value:e.Node.one("#y3d"),setter:e.Node.one,writeOnce:!0},width:{valueFn:function(){var e=this,t=e.get("srcNode");return t.get("width")},setter:function(e){var t=this,n=t.get("srcNode");return n.set("width",e),e}}}})},"gallery-2013.08.22-21-03",{requires:["base-build","base-pluginhost","node-base","y3d-camera","y3d-color","y3d-matrix","y3d-shader"]});