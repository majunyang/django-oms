webpackJsonp([41],{EeTk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("JAv/"),o={props:["rowdata"],data:function(){return{rules:{hostname:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}],ip:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}],idc:[{required:!0,message:"请输入一个正确的内容",trigger:"change"}],asset_type:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}],status:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}]},ASSET_STATUS:[{key:"used",name:"使用中"},{key:"noused",name:"未使用"},{key:"broken",name:"故障"}],ASSET_TYPE:[{key:"physical",name:"物理机"},{key:"virtual",name:"虚拟机"},{key:"container",name:"容器"},{key:"network",name:"网络设备"},{key:"other",name:"其他设备"}],idcs:[]}},created:function(){this.getIdcs()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$emit("formdata",t.rowdata)})},getIdcs:function(){var e=this;Object(r.d)().then(function(t){e.idcs=t.data})}}},l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"ruleForm",attrs:{model:e.rowdata,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"主机名",prop:"hostname"}},[a("el-input",{model:{value:e.rowdata.hostname,callback:function(t){e.$set(e.rowdata,"hostname",t)},expression:"rowdata.hostname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"主机ip",prop:"ip"}},[a("el-input",{model:{value:e.rowdata.ip,callback:function(t){e.$set(e.rowdata,"ip",t)},expression:"rowdata.ip"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"其他ip",prop:"other_ip"}},[a("el-input",{model:{value:e.rowdata.other_ip,callback:function(t){e.$set(e.rowdata,"other_ip",t)},expression:"rowdata.other_ip"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"机房",prop:"idc"}},[a("el-select",{attrs:{placeholder:"请选择机房"},model:{value:e.rowdata.idc,callback:function(t){e.$set(e.rowdata,"idc",t)},expression:"rowdata.idc"}},e._l(e.idcs,function(e){return a("el-option",{key:e.name,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"设备类型",prop:"asset_type"}},[a("el-select",{attrs:{placeholder:"请选择设备类型"},model:{value:e.rowdata.asset_type,callback:function(t){e.$set(e.rowdata,"asset_type",t)},expression:"rowdata.asset_type"}},e._l(e.ASSET_TYPE,function(e){return a("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"主机状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择主机状态"},model:{value:e.rowdata.status,callback:function(t){e.$set(e.rowdata,"status",t)},expression:"rowdata.status"}},e._l(e.ASSET_STATUS,function(e){return a("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"系统",prop:"os"}},[a("el-input",{model:{value:e.rowdata.os,callback:function(t){e.$set(e.rowdata,"os",t)},expression:"rowdata.os"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"cpu信息",prop:"cpu"}},[a("el-input",{model:{value:e.rowdata.cpu,callback:function(t){e.$set(e.rowdata,"cpu",t)},expression:"rowdata.cpu"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"内存信息",prop:"memory"}},[a("el-input",{model:{value:e.rowdata.memory,callback:function(t){e.$set(e.rowdata,"memory",t)},expression:"rowdata.memory"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"磁盘信息",prop:"disk"}},[a("el-input",{model:{value:e.rowdata.disk,callback:function(t){e.$set(e.rowdata,"disk",t)},expression:"rowdata.disk"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.rowdata.desc,callback:function(t){e.$set(e.rowdata,"desc",t)},expression:"rowdata.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即更新")])],1)],1)},s=[],i={render:l,staticRenderFns:s},n=i,u=a("VU/8"),d=u(o,n,!1,null,null,null);t.default=d.exports}});