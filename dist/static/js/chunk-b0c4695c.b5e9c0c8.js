(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0c4695c"],{4624:function(t,e,a){"use strict";var i=a("7859"),n=a("b63a"),r={data:function(){return{datalist:[],start:1,limit:10,total:0,headers:{token:Object(i["b"])()}}},methods:{handleSizeChange:function(t){this.limit=t,this.init()},handleCurrentChange:function(t){this.start=t,this.init()},$imgAdd:function(t,e){var a=this,i=new FormData;i.append("file",e),Object(n["g"])(i).then((function(e){a.$refs.md.$img2Url(t,e.data.fileUrl)}))}}};e["a"]=r},"6d2a":function(t,e,a){"use strict";a("dec4")},"7db0":function(t,e,a){"use strict";var i=a("23e7"),n=a("b727").find,r=a("44d2"),o=a("ae40"),s="find",l=!0,c=o(s);s in[]&&Array(1)[s]((function(){l=!1})),i({target:"Array",proto:!0,forced:l||!c},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(s)},8874:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return s})),a.d(e,"e",(function(){return l})),a.d(e,"f",(function(){return c}));a("99af");var i=a("b775");function n(t){return Object(i["a"])({url:"/lejuAdmin/brand/addBrand",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/lejuAdmin/brand/delBrand/".concat(t),method:"delete"})}function o(){return Object(i["a"])({url:"/lejuAdmin/brand/findAllBrand"})}function s(t,e){return Object(i["a"])({url:"/lejuAdmin/brand/findBrandByPage/".concat(t,"/").concat(e)})}function l(t){return Object(i["a"])({url:"/lejuAdmin/brand/switchShowStatus",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/lejuAdmin/brand/updateBrand",method:"post",data:t})}},b63a:function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"f",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return l})),a.d(e,"g",(function(){return c})),a.d(e,"e",(function(){return u}));a("99af");var i=a("b775");function n(t,e,a){return Object(i["a"])({url:"/lejuAdmin/productArticle/findArticles/".concat(t,"/").concat(e),method:"post",data:a})}function r(t){return Object(i["a"])({url:"/lejuAdmin/productArticle/changeShowStatus",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/lejuAdmin/productArticle/updateArticle",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/lejuAdmin/productArticle/del/".concat(t),method:"delete"})}function l(t){return Object(i["a"])({url:"/lejuAdmin/productArticle/addArticle",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/lejuAdmin/material/uploadFileOss",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/lejuAdmin/productArticle/productArticle/".concat(t)})}},bba1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article"},[a("el-card",{staticClass:"margin_30"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-button",{staticStyle:{float:"left"},attrs:{type:"primary",size:"mini"},on:{click:t.add}},[t._v("新增")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.datalist,border:""}},[a("el-table-column",{attrs:{type:"index",fixed:"left",label:"序号",align:"center",width:"60"}}),a("el-table-column",{attrs:{prop:"name",label:"品牌名称",align:"center",width:"160"}}),a("el-table-column",{attrs:{prop:"showStatus ",label:"展示状态",align:"center",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{on:{change:function(a){return t.changeStatus(e.row.id)}},model:{value:e.row.showStatus,callback:function(a){t.$set(e.row,"showStatus",a)},expression:"scope.row.showStatus"}})]}}])}),a("el-table-column",{attrs:{prop:"logo ",label:"logo",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticClass:"list_img",staticStyle:{width:"100px",height:"100px",display:"block",margin:"0 auto"},attrs:{src:t.row.logo,alt:""}})]}}])}),a("el-table-column",{attrs:{prop:"bigPic",label:"专区大图",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticClass:"list_img",staticStyle:{width:"100px",height:"100px",display:"block",margin:"0 auto"},attrs:{src:t.row.bigPic,alt:""}})]}}])}),a("el-table-column",{attrs:{prop:"brandStory",label:"品牌故事",align:"center",width:"160"}}),a("el-table-column",{attrs:{prop:"createTime",label:"添加时间",align:"center",width:"240"}}),a("el-table-column",{attrs:{prop:"sort",label:"排序",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"productCount",label:"产品数量",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"productCommentCount",label:"产品评论数量",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"factoryStatus",label:"是否品牌制造商",align:"center",width:"120"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"160px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.edit(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return t.del(e.row)}}},[t._v("删除")])]}}])})],1),a("el-pagination",{attrs:{"current-page":t.start,"page-sizes":[5,10,20,25],"page-size":t.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"品牌详情",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.closed}},[a("el-form",{ref:"brandList",attrs:{model:t.brandList,rules:t.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"品牌名称","label-width":t.formLabelWidth,prop:"name"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"品牌名称"},model:{value:t.brandList.name,callback:function(e){t.$set(t.brandList,"name",e)},expression:"brandList.name"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"首字母","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"首字母"},model:{value:t.brandList.firstLetter,callback:function(e){t.$set(t.brandList,"firstLetter",e)},expression:"brandList.firstLetter"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"排序","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"排序"},model:{value:t.brandList.sort,callback:function(e){t.$set(t.brandList,"sort",e)},expression:"brandList.sort"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"产品数量","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"产品数量"},model:{value:t.brandList.productCount,callback:function(e){t.$set(t.brandList,"productCount",e)},expression:"brandList.productCount"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"是否展示","label-width":t.formLabelWidth}},[a("el-switch",{model:{value:t.brandList.showStatus,callback:function(e){t.$set(t.brandList,"showStatus",e)},expression:"brandList.showStatus"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"是否为品牌制造商","label-width":t.formLabelWidth}},[a("el-switch",{model:{value:t.brandList.factoryStatus,callback:function(e){t.$set(t.brandList,"factoryStatus",e)},expression:"brandList.factoryStatus"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"上传专区大图","label-width":t.formLabelWidth}},[a("el-upload",{attrs:{action:"http://leju.bufan.cloud/lejuAdmin/material/uploadFileOss","list-type":"picture-card",multiple:!1,limit:1,headers:t.headers,"on-success":t.getBigPic,"before-upload":t.beforeAvatarUpload}},[t.brandList.bigPic?a("img",{staticClass:"avatar",attrs:{src:t.brandList.bigPic}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"上传logo","label-width":t.formLabelWidth}},[a("el-upload",{attrs:{action:"http://leju.bufan.cloud/lejuAdmin/material/uploadFileOss","list-type":"picture-card",multiple:!1,limit:1,headers:t.headers,"on-success":t.getLogo,"before-upload":t.beforeAvatarUpload}},[t.brandList.logo?a("img",{staticClass:"avatar",attrs:{src:t.brandList.logo}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)],1)],1)},n=[],r=(a("d3b7"),a("159b"),a("7db0"),a("b0c0"),a("8874")),o=a("4624"),s={mixins:[o["a"]],data:function(){return{brandList:{bigPic:"",brandStory:"",createTime:"",factoryStatus:0,firstLetter:"",id:"",logo:"",modifyTime:"",name:"",productCommentCount:"",productCount:"",showStatus:0,sort:""},dialogFormVisible:!1,formLabelWidth:"110px",dialogVisible:!1,rules:{name:[{required:!0,message:"请输入品牌名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}]}}},computed:{},created:function(){this.init()},mounted:function(){},methods:{init:function(){var t=this;Object(r["d"])(this.start,this.limit).then((function(e){e.data.rows.forEach((function(t){t.showStatus=!!t.showStatus,t.factoryStatus=!!t.factoryStatus})),t.datalist=e.data.rows,t.total=e.data.total}))},onSearch:function(){this.init()},resetForm:function(t){this.$refs[t].resetFields()},changeStatus:function(t){var e=this,a=this.datalist.find((function(e){return e.id===t}));Object(r["e"])({status:a.showStatus?1:0,id:t}).then((function(t){t.success&&(e.$message({type:"success",message:"修改状态成功!"}),e.init())}))},add:function(){this.dialogFormVisible=!0},edit:function(t){this.dialogFormVisible=!this.dialogFormVisible,this.brandList=t},del:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",lockScroll:!1}).then((function(){Object(r["b"])(t.id).then((function(t){t.success&&(e.$message({type:"success",message:"删除成功!"}),e.init())}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},getBigPic:function(t){this.brandList.bigPic=t.data.fileUrl},getLogo:function(t){this.brandList.logo=t.data.fileUrl},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type||"image/jpeg",a=t.size/1024/1024<1;return e||this.$message.error("上传头像,只能jpg/png格式哦!"),a||this.$message.error("上传头像图片大小不能超过 1MB!"),e&&a},sure:function(){var t=this;if(!this.brandList.name)return this.$message.warning("标记* 内容不能为空"),!1;this.brandList.id?this.$confirm("是否确认修改品牌?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",lockScroll:!1}).then((function(){t.brandList.showStatus=t.brandList.showStatus?1:0,t.brandList.factoryStatus=t.brandList.factoryStatus?1:0,Object(r["f"])(t.brandList).then((function(e){e.success&&(t.$message({type:"success",message:"修改成功!"}),t.dialogFormVisible=!1)}))})).catch((function(){t.$message({type:"info",message:"已取消修改"}),t.dialogFormVisible=!1})):this.$confirm("是否确认新增品牌?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",lockScroll:!1}).then((function(){t.brandList.showStatus=t.brandList.showStatus?1:0,t.brandList.factoryStatus=t.brandList.factoryStatus?1:0,Object(r["a"])(t.brandList).then((function(e){e.success&&(t.$message({type:"success",message:"新增成功!"}),t.dialogFormVisible=!1,t.init())}))})).catch((function(){t.$message({type:"info",message:"已取消新增"}),t.dialogFormVisible=!1}))},closed:function(){this.brandList={bigPic:"",brandStory:"",createTime:"",factoryStatus:0,firstLetter:"",id:"",logo:"",modifyTime:"",name:"",productCommentCount:"",productCount:"",showStatus:0,sort:""}}}},l=s,c=(a("6d2a"),a("2877")),u=Object(c["a"])(l,i,n,!1,null,"b1ea3f32",null);e["default"]=u.exports},dec4:function(t,e,a){}}]);