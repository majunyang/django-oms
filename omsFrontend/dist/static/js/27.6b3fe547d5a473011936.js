webpackJsonp([27],{Bm2h:function(t,e,a){var l=a("zVti");"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a("rjj0")("2d9ad8f4",l,!0)},"g1v/":function(t,e,a){"use strict";function l(t){a("Bm2h")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("Dd8w"),s=a.n(o),i=a("Zk8K"),n=a("QmSG"),r=a("NYxO"),c=a("nSkA"),p={components:{},data:function(){return{tableData:[],tabletotal:0,searchdata:"",currentPage:1,listQuery:{limit:n.LIMIT,offset:"",platform__name:"",ordering:"",complete:"",complete__gt:0,complete__lt:100},limit:n.LIMIT,offset:"",pagesize:[10,25,50,100],platformpaychannels_btn_change_complete:!1,completeForm:!1,CompleteForm:{id:"",platform:"",type:"",complete:0},platform:"",platforms:[],radio:"1",complete_status:"exception"}},computed:s()({},Object(r.b)(["elements","role"])),created:function(){this.platformpaychannels_btn_change_complete=this.elements["对接通道进度-更新进度"],this.fetchData(),this.fetchPlatformData()},methods:{fetchData:function(){var t=this;Object(i.j)(this.listQuery).then(function(e){t.tableData=e.data.results,t.tabletotal=e.data.count})},fetchPlatformData:function(){var t=this;Object(i.i)().then(function(e){t.platforms=[{name:"全部"}].concat(e.data)})},changeComplete:function(){var t=this;Object(i.w)(this.CompleteForm.id,this.CompleteForm).then(function(e){t.$message({type:"success",message:"更新成功!"});var a={action_user:""+t.CommentForm.create_user,title:"【通道完成进度】",message:"平台: "+t.CompleteForm.platform+"\n通道类型: "+t.CompleteForm.type+"\n完成度: "+t.CompleteForm.complete};Object(c.d)(a),t.completeForm=!1,t.fetchData()}).catch(function(){t.$message({type:"info",message:"更新失败"})})},editComplete:function(t){this.completeForm=!0,this.CompleteForm=t},changePlatform:function(t){this.listQuery.platform__name="全部"===t?"":t,this.fetchData()},searchClick:function(){this.fetchData()},handleSizeChange:function(t){this.listQuery.limit=t,this.fetchData()},handleCurrentChange:function(t){this.listQuery.offset=(t-1)*n.LIMIT,this.fetchData()},handleSortChange:function(t){"ascending"===t.order?this.listQuery.ordering=t.prop:"descending"===t.order?this.listQuery.ordering="-"+t.prop:this.listQuery.ordering="",this.fetchData()},changeStatus:function(t){"0"===t?(this.listQuery.complete=0,this.listQuery.complete__gt="",this.listQuery.complete__lt="",this.complete_status="exception"):"2"===t?(this.listQuery.complete=100,this.listQuery.complete__gt="",this.listQuery.complete__lt="",this.complete_status="success"):(this.listQuery.complete="",this.listQuery.complete__gt=0,this.listQuery.complete__lt=100,this.complete_status="exception"),this.fetchData()}}},m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("el-select",{attrs:{placeholder:"请选择平台进行筛选"},on:{change:t.changePlatform},model:{value:t.platform,callback:function(e){t.platform=e},expression:"platform"}},t._l(t.platforms,function(t){return a("el-option",{key:t.id,attrs:{value:t.name}})})),t._v(" "),a("el-radio-group",{staticStyle:{"margin-left":"20px"},on:{change:t.changeStatus},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("el-radio",{attrs:{label:"0"}},[t._v("未进行")]),t._v(" "),a("el-radio",{attrs:{label:"1"}},[t._v("正在进行")]),t._v(" "),a("el-radio",{attrs:{label:"2"}},[t._v("已完成")])],1)],1),t._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{attrs:{placeholder:"搜索 ..."},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.searchdata,callback:function(e){t.searchdata=e},expression:"searchdata"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:t.searchClick},slot:"suffix"})])],1)]),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"sort-change":t.handleSortChange}},[a("el-table-column",{attrs:{prop:"platform",label:"平台"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"通道类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"complete",label:"完成百分比",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-progress",{attrs:{"text-inside":!0,status:t.complete_status,percentage:e.row.complete,"stroke-width":18}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.platformpaychannels_btn_change_complete||"super"===t.role?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.editComplete(e.row)}}},[t._v("\n              更新进度\n            ")]):t._e()]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pagesize,"page-size":t.listQuery.limit,layout:"prev, pager, next, sizes",total:t.tabletotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)]),t._v(" "),a("el-dialog",{attrs:{visible:t.completeForm,width:"30%"},on:{"update:visible":function(e){t.completeForm=e},close:t.fetchData}},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{model:t.CompleteForm,label:"完成百分比"}},[a("el-slider",{attrs:{step:10},model:{value:t.CompleteForm.complete,callback:function(e){t.$set(t.CompleteForm,"complete",e)},expression:"CompleteForm.complete"}}),t._v(" "),a("a",[t._v(t._s(t.CompleteForm.complete)+"%")])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.changeComplete}},[t._v("确定")])],1)],1)],1)],1)},u=[],h={render:m,staticRenderFns:u},f=h,d=a("VU/8"),_=l,g=d(p,f,!1,_,null,null);e.default=g.exports},zVti:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".head-lavel{padding-bottom:50px}.table-button{float:left}.table-search{float:right}.table-pagination{padding:10px 0;float:right}",""])}});