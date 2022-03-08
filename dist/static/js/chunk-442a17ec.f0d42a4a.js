(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-442a17ec"],{"1c84":function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"article"},[l("el-card",{staticClass:"margin_30"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[t._v("条件查询")])]),l("el-form",{ref:"formInline",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline,size:"mini"}},[l("el-form-item",{attrs:{label:"订单编号",prop:"orderSn"}},[l("el-input",{attrs:{placeholder:"订单编号"},model:{value:t.formInline.orderSn,callback:function(e){t.$set(t.formInline,"orderSn",e)},expression:"formInline.orderSn"}})],1),l("el-form-item",{attrs:{label:"订单类型",prop:"orderType"}},[l("el-select",{attrs:{placeholder:"订单类型"},model:{value:t.formInline.orderType,callback:function(e){t.$set(t.formInline,"orderType",e)},expression:"formInline.orderType"}},[l("el-option",{attrs:{label:"正常订单",value:"0"}}),l("el-option",{attrs:{label:"秒杀订单",value:"1"}})],1)],1),l("el-form-item",{attrs:{label:"支付方式",prop:"payType"}},[l("el-select",{attrs:{placeholder:"支付方式"},model:{value:t.formInline.payType,callback:function(e){t.$set(t.formInline,"payType",e)},expression:"formInline.payType"}},[l("el-option",{attrs:{label:"未支付",value:"0"}}),l("el-option",{attrs:{label:"支付宝",value:"1"}}),l("el-option",{attrs:{label:"微信",value:"2"}})],1)],1),l("el-form-item",{attrs:{label:"订单状态",prop:"status"}},[l("el-select",{attrs:{placeholder:"订单状态"},model:{value:t.formInline.status,callback:function(e){t.$set(t.formInline,"status",e)},expression:"formInline.status"}},[l("el-option",{attrs:{label:"待付款",value:"0"}}),l("el-option",{attrs:{label:"待发货",value:"1"}}),l("el-option",{attrs:{label:"已发货",value:"2"}}),l("el-option",{attrs:{label:"已完成",value:"3"}}),l("el-option",{attrs:{label:"退货",value:"4"}}),l("el-option",{attrs:{label:"无效订单",value:"5"}})],1)],1),l("el-form-item",[l("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"mini",plain:""},on:{click:t.onSearch}},[t._v("查询")])],1),l("el-form-item",[l("el-button",{attrs:{size:"mini",plain:""},on:{click:function(e){return t.resetForm("formInline")}}},[t._v("重置")])],1)],1)],1),l("el-card",{staticClass:"margin_30"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.orderList,border:""}},[l("el-table-column",{attrs:{type:"index",fixed:"left",label:"#",align:"center",width:"40"}}),l("el-table-column",{attrs:{prop:"orderSn",label:"订单编号",align:"center",width:"200"}}),l("el-table-column",{attrs:{prop:"payType",label:"支付方式",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.payType?l("svg-icon",{staticStyle:{"font-size":"30px"},attrs:{"icon-class":"zfb"}}):t._e(),2==e.row.payType?l("svg-icon",{staticStyle:{"font-size":"30px"},attrs:{"icon-class":"wx"}}):t._e(),0==e.row.payType?l("svg-icon",{staticStyle:{"font-size":"30px"},attrs:{"icon-class":"nopay"}}):t._e()]}}])}),l("el-table-column",{attrs:{prop:"status",label:"订单状态",align:"center",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[5==e.row.status?l("el-button",{attrs:{size:"small"}},[t._v("无效订单")]):t._e(),4==e.row.status?l("el-button",{attrs:{type:"info",size:"small"}},[t._v("退货")]):t._e(),3==e.row.status?l("el-button",{attrs:{type:"success",size:"small"}},[t._v("已完成")]):t._e(),2==e.row.status?l("el-button",{attrs:{type:"primary",size:"small",plain:""}},[t._v("已发货")]):t._e(),1==e.row.status?l("el-button",{attrs:{type:"warning",size:"small"}},[t._v("待发货")]):t._e(),0==e.row.status?l("el-button",{attrs:{type:"danger",size:"small"}},[t._v("待付款")]):t._e()]}}])}),l("el-table-column",{attrs:{prop:"createTime",label:"添加时间",align:"center",width:"240"}}),l("el-table-column",{attrs:{prop:"memberUsername",label:"用户账号",align:"center",width:"150"}}),l("el-table-column",{attrs:{prop:"orderType",label:"订单类型",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.status?l("el-button",{attrs:{type:"success",size:"small",plain:""}},[t._v("正常订单")]):t._e(),1==e.row.status?l("el-button",{attrs:{type:"warning",size:"small",plain:""}},[t._v("秒杀订单")]):t._e()]}}])}),l("el-table-column",{attrs:{prop:"note",label:"备注",align:"center",width:"180"}}),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{staticStyle:{width:"150px"},attrs:{type:"primary",icon:"el-icon-view",size:"small"},on:{click:function(l){return t.checkOrder(e.row.id)}}},[t._v("查看订单")])]}}])})],1),l("el-pagination",{attrs:{"current-page":t.start,"page-sizes":[5,10,20,25],"page-size":t.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},n=[],r=l("b385"),i={data:function(){return{orderList:[],start:1,limit:10,total:0,formInline:{deliverySn:"",id:"",memberUsername:"",orderSn:"",orderType:"",payType:"",sourceType:"",status:""}}},computed:{},created:function(){this.init()},mounted:function(){},methods:{init:function(){var t=this;Object(r["a"])(this.start,this.limit,this.formInline).then((function(e){t.orderList=e.data.rows,t.total=e.data.total}))},handleSizeChange:function(t){this.limit=t,this.init()},handleCurrentChange:function(t){this.start=t,this.init()},onSearch:function(){this.init()},resetForm:function(t){this.$refs[t].resetFields()},checkOrder:function(t){this.$router.push("/order/orderList/orderDetail?id=".concat(t))}}},o=i,s=(l("c0c7"),l("2877")),c=Object(s["a"])(o,a,n,!1,null,"ae918794",null);e["default"]=c.exports},"1fac":function(t,e,l){},b385:function(t,e,l){"use strict";l.d(e,"a",(function(){return n})),l.d(e,"b",(function(){return r})),l.d(e,"c",(function(){return i}));l("99af");var a=l("b775");function n(t,e,l){return Object(a["a"])({url:"/lejuAdmin/order/findOrdersByPage/".concat(t,"/").concat(e),method:"post",data:l})}function r(t){return Object(a["a"])({url:"/lejuAdmin/order/orderDetail/".concat(t)})}function i(t){return Object(a["a"])({url:"/lejuAdmin/order/sendDone",method:"post",data:t})}},c0c7:function(t,e,l){"use strict";l("1fac")}}]);