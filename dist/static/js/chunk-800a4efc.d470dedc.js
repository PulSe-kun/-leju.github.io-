(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-800a4efc"],{"0efe":function(t,e,n){},"32bb":function(t,e,n){"use strict";n("8a5b")},4624:function(t,e,n){"use strict";var i=n("7859"),a=n("b63a"),o={data:function(){return{datalist:[],start:1,limit:10,total:0,headers:{token:Object(i["b"])()}}},methods:{handleSizeChange:function(t){this.limit=t,this.init()},handleCurrentChange:function(t){this.start=t,this.init()},$imgAdd:function(t,e){var n=this,i=new FormData;i.append("file",e),Object(a["g"])(i).then((function(e){n.$refs.md.$img2Url(t,e.data.fileUrl)}))}}};e["a"]=o},"7adc":function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return d})),n.d(e,"c",(function(){return s})),n.d(e,"i",(function(){return p}));n("99af");var i=n("b775");function a(t,e,n){return Object(i["a"])({url:"/lejuAdmin/product/productsByPage/".concat(t,"/").concat(e),method:"post",data:n})}function o(t){return Object(i["a"])({url:"/lejuAdmin/product/addProductAndSkus",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/lejuAdmin/product/del/".concat(t),method:"delete"})}function s(t){return Object(i["a"])({url:"/lejuAdmin/product/productSkusDetail/".concat(t)})}function c(t){return Object(i["a"])({url:"/lejuAdmin/product/switchNewStatus",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/lejuAdmin/product/switchPublishStatus",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/lejuAdmin/product/switchRecommandStatus",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/lejuAdmin/product/switchVerifyStatus",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/lejuAdmin/product/updateProductAndSkus",method:"post",data:t})}},"7db0":function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").find,o=n("44d2"),r=n("ae40"),s="find",c=!0,u=r(s);s in[]&&Array(1)[s]((function(){c=!1})),i({target:"Array",proto:!0,forced:c||!u},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},8874:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return u}));n("99af");var i=n("b775");function a(t){return Object(i["a"])({url:"/lejuAdmin/brand/addBrand",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/lejuAdmin/brand/delBrand/".concat(t),method:"delete"})}function r(){return Object(i["a"])({url:"/lejuAdmin/brand/findAllBrand"})}function s(t,e){return Object(i["a"])({url:"/lejuAdmin/brand/findBrandByPage/".concat(t,"/").concat(e)})}function c(t){return Object(i["a"])({url:"/lejuAdmin/brand/switchShowStatus",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/lejuAdmin/brand/updateBrand",method:"post",data:t})}},"8a5b":function(t,e,n){},a6bc:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("el-collapse",[n("el-collapse-item",{staticStyle:{"text-indent":"10px"},attrs:{title:"商品管理介绍",name:"1"}},[n("div",{staticStyle:{"margin-left":"10px"}},[t._v(" 商品管理模块可以对客户端的商品进行增删改查等相关操作,来控制客户端商品的列表展示和商品详情 ")])])],1),n("el-card",{staticClass:"margin_30"},[n("el-collapse",{staticStyle:{"border-top":"0px"}},[n("el-collapse-item",{attrs:{title:"条件查询",name:"1"}},[n("el-form",{ref:"formInline",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline,size:"mini"}},[n("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[n("el-input",{attrs:{placeholder:"商品名称/模糊查询"},model:{value:t.formInline.name,callback:function(e){t.$set(t.formInline,"name",e)},expression:"formInline.name"}})],1),n("el-form-item",{attrs:{label:"商品货号",prop:"productSn"}},[n("el-input",{attrs:{placeholder:"商品货号"},model:{value:t.formInline.productSn,callback:function(e){t.$set(t.formInline,"productSn",e)},expression:"formInline.productSn"}})],1),n("el-form-item",{attrs:{label:"品牌",prop:"brandId"}},[n("el-select",{attrs:{placeholder:"品牌"},model:{value:t.formInline.brandId,callback:function(e){t.$set(t.formInline,"brandId",e)},expression:"formInline.brandId"}},t._l(t.brandList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),n("el-form-item",{attrs:{label:"上架状态",prop:"publishStatus"}},[n("el-select",{attrs:{placeholder:"上架状态"},model:{value:t.formInline.publishStatus,callback:function(e){t.$set(t.formInline,"publishStatus",e)},expression:"formInline.publishStatus"}},[n("el-option",{attrs:{label:"上架",value:"1"}}),n("el-option",{attrs:{label:"未上架",value:"0"}})],1)],1),n("el-form-item",{attrs:{label:"审核状态",prop:"verifyStatus"}},[n("el-select",{attrs:{placeholder:"审核状态"},model:{value:t.formInline.verifyStatus,callback:function(e){t.$set(t.formInline,"verifyStatus",e)},expression:"formInline.verifyStatus"}},[n("el-option",{attrs:{label:"审核",value:"1"}}),n("el-option",{attrs:{label:"未审核",value:"0"}})],1)],1),n("el-form-item",{staticStyle:{"margin-right":"20px"}},[n("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:t.onSearch}},[t._v("查询")])],1),n("el-form-item",[n("el-button",{attrs:{size:"mini",plain:""},on:{click:function(e){return t.resetForm("formInline")}}},[t._v("重置")])],1)],1)],1)],1)],1),n("el-card",{staticClass:"margin_30"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-button",{staticStyle:{float:"left"},attrs:{type:"primary",size:"mini"},on:{click:t.addProduct}},[t._v("新增")]),n("el-button",{staticStyle:{float:"left"},attrs:{type:"primary",size:"mini",loading:t.loading},on:{click:t.exportExcel}},[t._v("导出商品列表excel文件")])],1),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.productList,border:""}},[n("el-table-column",{attrs:{type:"index",fixed:"left",label:"序号",align:"center",width:"60"}}),n("el-table-column",{attrs:{prop:"pic",label:"商品图片",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{staticClass:"list_img",staticStyle:{width:"100px",height:"100px",display:"block",margin:"0 auto"},attrs:{src:t.row.pic,alt:""}})]}}])}),n("el-table-column",{attrs:{prop:"name",label:"商品名称",align:"center",width:"160"}}),n("el-table-column",{attrs:{prop:"price",label:"商品价格",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v("原价: "+t._s(e.row.originalPrice))]),n("div",[t._v("现价: "+t._s(e.row.price))])]}}])}),n("el-table-column",{attrs:{prop:"productCategoryName",label:"商品类别",align:"center",width:"150"}}),n("el-table-column",{attrs:{prop:"isShow",label:"标签1",align:"center",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(" 最新: "),n("el-switch",{on:{change:function(n){return t.changeNewStatus(e.row.id)}},model:{value:e.row.newStatus,callback:function(n){t.$set(e.row,"newStatus",n)},expression:"scope.row.newStatus"}})],1),n("div",[t._v(" 推荐: "),n("el-switch",{on:{change:function(n){return t.changeRecommandStatus(e.row.id)}},model:{value:e.row.recommendStatus,callback:function(n){t.$set(e.row,"recommendStatus",n)},expression:"scope.row.recommendStatus"}})],1)]}}])}),n("el-table-column",{attrs:{prop:"isShow",label:"标签2",align:"center",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(" 发布: "),n("el-switch",{on:{change:function(n){return t.changePublishStatus(e.row.id)}},model:{value:e.row.publishStatus,callback:function(n){t.$set(e.row,"publishStatus",n)},expression:"scope.row.publishStatus"}})],1),n("div",[t._v(" 审核: "),n("el-switch",{on:{change:function(n){return t.changeVerifyStatus(e.row.id)}},model:{value:e.row.verifyStatus,callback:function(n){t.$set(e.row,"verifyStatus",n)},expression:"scope.row.verifyStatus"}})],1)]}}])}),n("el-table-column",{attrs:{label:"Sku",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.editSku(e.row)}}},[t._v("编辑sku")])]}}])}),n("el-table-column",{attrs:{prop:"weight",label:"重量",align:"center",width:"120"}}),n("el-table-column",{attrs:{prop:"sort",label:"排序",align:"center",width:"120"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.edit(e.row)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return t.del(e.row)}}},[t._v("删除")])]}}])})],1),n("el-pagination",{attrs:{"current-page":t.start,"page-sizes":[5,10,20,25],"page-size":t.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),n("skuDetail",{ref:"skuDetail",on:{success:t.detailSuccess}})],1)},a=[],o=(n("d3b7"),n("159b"),n("3ca3"),n("ddb0"),n("d81d"),n("7db0"),n("7adc")),r=n("8874"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sku"},[n("el-dialog",{attrs:{title:"sku列表",visible:t.dialogTableVisible,width:"70%"},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.addSku}},[t._v("新增sku")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{size:"mini",data:t.skuList,border:"",stripe:""}},[n("el-table-column",{attrs:{type:"index",label:"#",fixed:"left",align:"center"}}),n("el-table-column",{attrs:{label:"图片",width:140,align:"center",prop:"pic"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,headers:t.headers,"show-file-list":!1,"on-success":function(n){return t.handleSkuPic(n,e.row.ids)}}},[e.row.pic?n("img",{staticClass:"avatar",staticStyle:{width:"100px",height:"100px"},attrs:{src:e.row.pic}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])]}}])}),n("el-table-column",{attrs:{label:"颜色",width:180,align:"center",prop:"spData[0].value"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{size:"mini"},model:{value:e.row.spData[0].value,callback:function(n){t.$set(e.row.spData[0],"value",n)},expression:"scope.row.spData[0].value"}})]}}])}),n("el-table-column",{attrs:{label:"大小",width:180,align:"center",prop:"spData[1].value"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.spData?n("el-input",{attrs:{size:"mini"},model:{value:e.row.spData[1].value,callback:function(n){t.$set(e.row.spData[1],"value",n)},expression:"scope.row.spData[1].value"}}):t._e()]}}])}),n("el-table-column",{attrs:{label:"库存",width:120,align:"center",prop:"stock"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{size:"mini",placeholder:"自定义库存"},model:{value:e.row.stock,callback:function(n){t.$set(e.row,"stock",n)},expression:"scope.row.stock"}})]}}])}),n("el-table-column",{attrs:{label:"预警库存",width:120,align:"center",prop:"lowStock"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{size:"mini",placeholder:"预警库存"},model:{value:e.row.lowStock,callback:function(n){t.$set(e.row,"lowStock",n)},expression:"scope.row.lowStock"}})]}}])}),n("el-table-column",{attrs:{label:"锁定库存",width:120,align:"center",prop:"lockStock"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{size:"mini",placeholder:"锁定库存"},model:{value:e.row.lockStock,callback:function(n){t.$set(e.row,"lockStock",n)},expression:"scope.row.lockStock"}})]}}])}),n("el-table-column",{attrs:{label:"sku编码",width:200,align:"center",prop:"skuCode"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{size:"mini",placeholder:"自定义sku编码"},model:{value:e.row.skuCode,callback:function(n){t.$set(e.row,"skuCode",n)},expression:"scope.row.skuCode"}})]}}])}),n("el-table-column",{attrs:{label:"价格",width:120,align:"center",prop:"price"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{size:"mini",placeholder:"价格,单位:分"},model:{value:e.row.price,callback:function(n){t.$set(e.row,"price",n)},expression:"scope.row.price"}})]}}])}),n("el-table-column",{attrs:{label:"销量",width:120,align:"center",prop:"sale"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{size:"mini"},model:{value:e.row.sale,callback:function(n){t.$set(e.row,"sale",n)},expression:"scope.row.sale"}})]}}])}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:140,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.id?n("span",[n("el-button",{staticStyle:{color:"red"},attrs:{size:"mini",type:"text"},on:{click:function(n){return t.removeSku(e.row)}}},[t._v("删除 ")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.submitSku(e.row)}}},[t._v("提交编辑 ")])],1):n("span",[n("el-button",{staticStyle:{color:"red"},attrs:{size:"mini",type:"text"},on:{click:function(n){return t.removeNewSku(e.row)}}},[t._v("删除 ")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.saveNewSku(e.row)}}},[t._v("保存 ")])],1)]}}])})],1),n("div",{staticClass:"btn"},[n("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"info",size:"small"},on:{click:t.cancel}},[t._v("取消编辑")])],1)],1)],1)},c=[],u=n("5530"),l=(n("e9c4"),n("4de4"),n("b775"));function d(t){return Object(l["a"])({url:"/lejuAdmin/sku/addProductSkus",method:"post",data:t})}function p(t){return Object(l["a"])({url:"/lejuAdmin/sku/delSku/".concat(t),method:"delete"})}function f(t){return Object(l["a"])({url:"/lejuAdmin/sku/getSkusByProductId/".concat(t)})}function m(t){return Object(l["a"])({url:"/lejuAdmin/sku/updateSkuInfo",method:"post",data:t})}var h=n("ec26"),b=n("4624"),k={mixins:[b["a"]],data:function(){return{uploadUrl:"http://leju.bufan.cloud/lejuAdmin/material/uploadFileOss",dialogTableVisible:!1,skuList:[],productId:"",loading:!1}},created:function(){},methods:{init:function(){var t=this;this.skuList=[],f(this.productId).then((function(e){e.success&&e.data.items.forEach((function(e){t.skuList.push(Object(u["a"])(Object(u["a"])({},e),{},{spData:JSON.parse(e.spData)}))}))}))},openDetail:function(t){this.dialogTableVisible=!0,this.productId=t,this.skuList=[],this.init()},addSku:function(){var t={ids:Object(h["a"])(),id:"",lockStock:10,lowStock:20,pic:"",price:0,productId:this.productId,promotionPrice:0,sale:0,skuCode:"",spData:[{key:"颜色",value:""},{key:"大小",value:""}],stock:100,modifyTime:"",createTime:""};this.skuList.push(t)},handleSkuPic:function(t,e){var n=this.skuList.find((function(t){return t.ids===e}));n.pic=t.data.fileUrl},submitSku:function(t){var e=this;this.loading=!0;var n={id:t.id,lockStock:t.lockStock,lowStock:t.lowStock,stock:t.stock,pic:t.pic,price:t.price,productId:t.productId,sale:t.sale,skuCode:t.skuCode,spData:JSON.stringify(t.spData)};m(n).then((function(t){t.success?(e.loading=!1,e.$message.success("修改sku成功")):e.$message.error("修改sku失败")}))},cancel:function(){this.dialogTableVisible=!this.dialogTableVisible,this.init()},removeSku:function(t){var e=this;this.$confirm("此操作将永久删除该sku, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",lockScroll:!1}).then((function(){p(t.id).then((function(t){t.success&&(e.$message({type:"success",message:"删除成功!"}),e.init())}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},removeNewSku:function(t){var e=this;this.$confirm("是否删除sku?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",lockScroll:!1}).then((function(){e.skuList=e.skuList.filter((function(e){return e.ids!=t.ids})),e.$message({type:"success",message:"删除成功!"})})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},saveNewSku:function(t){var e=this;d(Object(u["a"])(Object(u["a"])({},t),{},{spData:JSON.stringify(t.spData)})).then((function(t){t.success?(e.$message.success("新增成功"),e.init()):e.$message.error("新增失败")}))}}},g=k,S=(n("32bb"),n("2877")),w=Object(S["a"])(g,s,c,!1,null,"76ddd2da",null),v=w.exports,y={components:{skuDetail:v},data:function(){return{formInline:{product:{albumPics:"",brandId:"",brandName:"",createTime:"",deleteStatus:0,description:"",detailDesc:"",detailHtml:"",detailMobileHtml:"",detailTitle:"",feightTemplateId:"",giftGrowth:0,giftPoint:0,id:"",keywords:"",lowStock:0,modifyTime:"",name:"",newStatus:"",note:"",originalPrice:0,pic:"",previewStatus:0,price:0,productAttributeCategoryId:"",productCategoryId:"",productCategoryName:"",productSn:"",promotionEndTime:"",promotionPerLimit:0,promotionPrice:0,promotionStartTime:"",promotionType:0,publishStatus:0,recommendStatus:0,sale:0,serviceIds:"",sort:0,stock:0,subTitle:"",unit:"",usePointLimit:0,verifyStatus:0,weight:0}},productList:[],start:1,limit:10,total:0,brandList:[],loading:!1}},computed:{},created:function(){this.init()},mounted:function(){},methods:{init:function(){var t=this;Object(o["d"])(this.start,this.limit,this.formInline).then((function(e){e.data.rows.forEach((function(t){t.newStatus=!!t.newStatus,t.recommendStatus=!!t.recommendStatus,t.publishStatus=!!t.publishStatus,t.verifyStatus=!!t.verifyStatus})),t.productList=e.data.rows,t.total=e.data.total})),Object(r["c"])().then((function(e){t.brandList=e.data.items}))},addProduct:function(){this.$router.push("/product/list/addProduct")},exportExcel:function(){var t=this;this.loading=!0,setTimeout((function(){Promise.all([n.e("chunk-cd409754"),n.e("chunk-3d3606e8"),n.e("chunk-2133cd4f")]).then(n.bind(null,"4bf8")).then((function(e){var n=["商品名称","商品品牌","商品价格"],i=["name","brandName","price"],a=t.productList,o=t.formatJson(i,a);e.export_json_to_excel({header:n,data:o,filename:"product-list",autoWidth:!0,bookType:"xlsx"}),t.loading=!1}))}),1e3)},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))},onSearch:function(){this.init()},resetForm:function(t){this.$refs[t].resetFields()},changeNewStatus:function(t){var e=this,n=this.productList.find((function(e){return e.id===t}));Object(o["e"])({status:n.newStatus?1:0,productId:t}).then((function(t){t.success&&(e.$message({type:"success",message:"修改状态成功!"}),e.init())}))},changeRecommandStatus:function(t){var e=this,n=this.productList.find((function(e){return e.id===t}));Object(o["g"])({status:n.recommendStatus?1:0,productId:t}).then((function(t){t.success&&(e.$message({type:"success",message:"修改状态成功!"}),e.init())}))},changePublishStatus:function(t){var e=this,n=this.productList.find((function(e){return e.id===t}));Object(o["f"])({productId:t,status:n.publishStatus?1:0}).then((function(t){t.success&&(e.$message({type:"success",message:"修改状态成功!"}),e.init())}))},changeVerifyStatus:function(t){var e=this,n=this.productList.find((function(e){return e.id===t}));Object(o["h"])({productId:t,status:n.verifyStatus?1:0}).then((function(t){t.success&&(e.$message({type:"success",message:"修改状态成功!"}),e.init())}))},handleSizeChange:function(t){this.limit=t,this.init()},handleCurrentChange:function(t){this.start=t,this.init()},edit:function(t){this.$router.push("/product/list/editProduct?id=".concat(t.id))},editSku:function(t){this.$refs.skuDetail.openDetail(t.id)},detailSuccess:function(){this.init()},del:function(t){var e=this;this.$confirm("注意 将永久删除该商品!","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",lockScroll:!1}).then((function(n){Object(o["b"])(t.id).then((function(t){t.success&&(e.$message({type:"success",message:"删除成功!"}),e.init())}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}},j=y,x=(n("c60c"),Object(S["a"])(j,i,a,!1,null,"4ceb12be",null));e["default"]=x.exports},b63a:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"f",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"e",(function(){return l}));n("99af");var i=n("b775");function a(t,e,n){return Object(i["a"])({url:"/lejuAdmin/productArticle/findArticles/".concat(t,"/").concat(e),method:"post",data:n})}function o(t){return Object(i["a"])({url:"/lejuAdmin/productArticle/changeShowStatus",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/lejuAdmin/productArticle/updateArticle",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/lejuAdmin/productArticle/del/".concat(t),method:"delete"})}function c(t){return Object(i["a"])({url:"/lejuAdmin/productArticle/addArticle",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/lejuAdmin/material/uploadFileOss",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/lejuAdmin/productArticle/productArticle/".concat(t)})}},c60c:function(t,e,n){"use strict";n("0efe")},ec26:function(t,e,n){"use strict";var i,a=new Uint8Array(16);function o(){if(!i&&(i="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!i))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(a)}var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function s(t){return"string"===typeof t&&r.test(t)}for(var c=s,u=[],l=0;l<256;++l)u.push((l+256).toString(16).substr(1));function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n}var p=d;function f(t,e,n){t=t||{};var i=t.random||(t.rng||o)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=i[a];return e}return p(i)}e["a"]=f}}]);