webpackJsonp([43],{IGSi:function(t,i,e){var a=e("oegS");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("4d03d863",a,!0)},eNlX:function(t,i,e){"use strict";function a(t){e("IGSi")}Object.defineProperty(i,"__esModule",{value:!0});var n=e("+Yhu"),s=e("Xoog"),o=e.n(s),r={components:{VueMarkdown:o.a},data:function(){return{rowdata:{},route_path:this.$route.path.split("/"),wikiid:this.$route.params.wikiid}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(n.d)(null,this.wikiid).then(function(i){t.rowdata=i.data})}}},c=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[e("el-card",{staticClass:"viewwiki"},[e("div",{staticClass:"viewwiki-content"},[e("h1",[t._v(t._s(t.rowdata.title))]),t._v(" "),e("div",{staticClass:"meta"},[e("el-button",{attrs:{type:"danger",plain:"",size:"mini"}},[t._v(t._s(t.rowdata.type))]),t._v(" "),e("a",{staticClass:"author"},[e("i",{staticClass:"fa fa-user"}),t._v(t._s(t.rowdata.create_user)+"\n        ")]),t._v(" "),e("a",{staticClass:"create_time"},[e("i",{staticClass:"fa fa-calendar"}),t._v(t._s(t._f("formatTime")(t.rowdata.create_time))+"\n        ")])],1),t._v(" "),e("hr",{staticClass:"heng"}),t._v(" "),e("p",{staticClass:"abstract"},[e("vue-markdown",{attrs:{source:t.rowdata.content}})],1)])])],1)},l=[],w={render:c,staticRenderFns:l},d=w,v=e("VU/8"),u=a,h=v(r,d,!1,u,null,null);i.default=h.exports},oegS:function(t,i,e){i=t.exports=e("FZ+f")(!1),i.push([t.i,".viewwiki{text-align:center}.viewwiki .viewwiki-content .meta{font-size:12px;font-weight:400;line-height:20px;color:hsla(0,0%,50%,.82)}.viewwiki .viewwiki-content .meta a{padding:0 10px}.viewwiki .viewwiki-content .meta a i{padding-right:5px}.viewwiki .viewwiki-content .meta a:hover{color:#4b4b4b}.viewwiki .viewwiki-content .abstract{text-align:left;margin:10px 10%}",""])}});