(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bb6ec7e"],{"1d0a":function(e,r,t){},b385:function(e,r,t){"use strict";t.d(r,"a",(function(){return o})),t.d(r,"b",(function(){return s})),t.d(r,"c",(function(){return l}));t("99af");var a=t("b775");function o(e,r,t){return Object(a["a"])({url:"/lejuAdmin/order/findOrdersByPage/".concat(e,"/").concat(r),method:"post",data:t})}function s(e){return Object(a["a"])({url:"/lejuAdmin/order/orderDetail/".concat(e)})}function l(e){return Object(a["a"])({url:"/lejuAdmin/order/sendDone",method:"post",data:e})}},df4d:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"orderDetail"},[t("el-card",{attrs:{shadow:"always","body-style":{padding:"30px"}}},[t("div",{staticClass:"step"},[t("el-steps",{attrs:{active:e.active}},[t("el-step",{attrs:{title:"待付款",description:e.orderInfo.orderBase&&e.orderInfo.orderBase.createTime}}),t("el-step",{attrs:{title:"待发货",description:e.orderInfo.orderBase&&e.orderInfo.orderBase.paymentTime}}),t("el-step",{attrs:{title:"已发货",description:e.orderInfo.orderBase&&e.orderInfo.orderBase.deliveryTime}}),5!=e.active?t("el-step",{attrs:{title:"已完成",description:e.orderInfo.orderBase&&e.orderInfo.orderBase.receiveTime}}):e._e(),4!=e.active?t("el-step",{attrs:{title:"退货",description:e.orderInfo.orderBase&&e.orderInfo.orderBase.finishTime}}):e._e()],1)],1),t("el-divider"),t("div",{staticClass:"content"},[t("div",{staticClass:"row"},[t("div",{staticClass:"title"},[e._v("订单信息: "),t("span",[t("el-tag",{attrs:{type:e.tagType}},[e._v(e._s(e._f("filterVal")(e.orderInfo.orderBase&&e.orderInfo.orderBase.status)))])],1)]),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:6,offset:0}},[e._v("订单金额: "+e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.totalAmount))]),t("el-col",{attrs:{span:6,offset:0}},[e._v("订单编号: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.orderSn))])]),t("el-col",{attrs:{span:6,offset:0}},[e._v("用户账号: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.memberUsername))])]),t("el-col",{attrs:{span:6,offset:0}},[e._v("备注: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.totalAmount))])])],1),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:6,offset:0}},[e._v("下单时间: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.createTime))])]),t("el-col",{attrs:{span:6,offset:0}},[e._v("付款时间: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.paymentTime))])]),t("el-col",{attrs:{span:6,offset:0}},[e._v("发货时间: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.deliveryTime))])]),t("el-col",{attrs:{span:6,offset:0}},[e._v("收货时间: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.modifyTime))])])],1)],1),t("el-divider"),t("div",{staticClass:"row"},[t("div",{staticClass:"title"},[e._v("收货人信息:")]),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:6,offset:0}},[e._v("收货人: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.receiverName))])]),t("el-col",{attrs:{span:6,offset:0}},[e._v("用户姓名: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.memberUsername))])]),t("el-col",{attrs:{span:6,offset:0}},[e._v("手机号码: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.receiverPhone))])]),t("el-col",{attrs:{span:6,offset:0}},[e._v("邮政编码: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.receiverPostCode))])])],1),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:6,offset:0}},[e._v("行政地区: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.receiverProvince+" "+e.orderInfo.orderBase.receiverCity))])]),t("el-col",{attrs:{span:6,offset:0}},[e._v("详细地址: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.receiverDetailAddress))])])],1)],1),t("el-divider"),t("div",{staticClass:"row"},[t("div",{staticClass:"title"},[e._v("商品信息:")]),t("el-table",{staticStyle:{width:"90%"},attrs:{data:e.orderInfo.orderItems,border:""}},[t("el-table-column",{attrs:{prop:"productName",label:"商品名称",align:"center",width:"240"}}),t("el-table-column",{attrs:{prop:"productPic ",label:"商品图片",align:"center",width:"240"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("img",{staticClass:"list_img",staticStyle:{width:"100px",height:"100px",display:"block",margin:"0 auto"},attrs:{src:e.row.productPic,alt:""}})]}}])}),t("el-table-column",{attrs:{prop:"isReturn",label:"是否退货",align:"center",width:"160"}}),t("el-table-column",{attrs:{prop:"productBrand",label:"品牌",align:"center",width:"200"}}),t("el-table-column",{attrs:{prop:"productPrice",label:"价格",align:"center",width:"160"}}),t("el-table-column",{attrs:{prop:"productQuantity",label:"商品数量",align:"center",width:"160"}}),t("el-table-column",{attrs:{fixed:"right",label:"小计",width:"200px",align:"center",prop:"totalPrice"}})],1)],1),t("div",{staticClass:"row"},[t("div",{staticClass:"title"},[e._v("费用信息:")]),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:6,offset:0}},[e._v("运费金额: "),t("span",[e._v("0")])]),t("el-col",{attrs:{span:6,offset:0}},[e._v("订单总金额: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.totalAmount))])]),t("el-col",{attrs:{span:6,offset:0}},[e._v("实际金额: "),t("span",[e._v(e._s(e.orderInfo.orderBase&&e.orderInfo.orderBase.payAmount))])]),t("el-col",{attrs:{span:6,offset:0}},[e._v("促销优化金额: "),t("span",[e._v("0")])])],1)],1),2==e.active?t("div",{staticStyle:{"padding-top":"10px"}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px",inline:!1,size:"small"}},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:6,offset:0}},[t("el-form-item",{attrs:{label:"物流公司",prop:"deliveryCompany"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.deliveryCompany,callback:function(r){e.$set(e.form,"deliveryCompany",r)},expression:"form.deliveryCompany"}},[t("el-option",{attrs:{label:"中国邮政",value:"1"}}),t("el-option",{attrs:{label:"京东快递",value:"2"}}),t("el-option",{attrs:{label:"顺丰快递",value:"3"}}),t("el-option",{attrs:{label:"中通快递",value:"4"}}),t("el-option",{attrs:{label:"韵达快递",value:"5"}})],1)],1)],1),t("el-col",{attrs:{span:6,offset:0}},[t("el-form-item",{attrs:{label:"快递单号",prop:"deliverySn"}},[t("el-input",{attrs:{placeholder:"",size:"small",clearable:""},model:{value:e.form.deliverySn,callback:function(r){e.$set(e.form,"deliverySn",r)},expression:"form.deliverySn"}})],1)],1)],1),t("div",{staticClass:"btn"},[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.onSubmit}},[e._v("确认发货")])],1)],1)],1):e._e(),e.active>=3?t("div",{staticStyle:{"padding-top":"10px"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[t("el-table-column",{attrs:{prop:"date",label:"时间",width:"180"}}),t("el-table-column",{attrs:{prop:"address",label:"状态",width:"500"}}),t("el-table-column",{attrs:{prop:"name",label:"备注",width:"400"}})],1)],1):e._e()],1)],1)],1)},o=[],s=(t("d3b7"),t("159b"),t("b385")),l={filters:{filterVal:function(e){var r=["待付款","待发货","已发货","已完成","退货中","无效订单"];return r[e]},filterPayType:function(e){var r=["未支付","支付宝","微信"];return r[e]}},data:function(){return{active:1,orderInfo:[],tagType:"",form:{orderId:this.$route.query.id,deliverySn:"",deliveryCompany:""},rules:{deliveryCompany:[{required:!0,message:"请输入物流公司名称",trigger:"blur"}],deliverySn:[{required:!0,message:"请输入物流单号",trigger:"blur"}]},tableData:[{date:"2021-03-01",name:"揽投员姓名：岳云鹏;联系电话：13883838888",address:"深圳市横岗速递营销部已收件"},{date:"2021-03-01",name:"",address:"离开深圳市 发往广州市"},{date:"2021-03-02",name:"",address:"到达广东速递物流公司广航中心处理中心（经转）"},{date:"2021-03-03",name:"扫码员:宋小宝",address:"到达北京朝阳区物流站"},{date:"2021-03-03",name:"投递员姓名：沈腾;联系电话：18018000180",address:"揽投部安排投递,收件人本人已经签收"}]}},computed:{},created:function(){this.init()},mounted:function(){},methods:{init:function(){var e=this;Object(s["b"])(this.$route.query.id).then((function(r){r.data.orderDetail.orderItems.forEach((function(e){e.isReturn=e.isReturn?"是":"否"})),0===r.data.orderDetail.orderBase.status?e.tagType="danger":1===r.data.orderDetail.orderBase.status?e.tagType="warning":2===r.data.orderDetail.orderBase.status?e.tagType="":3===r.data.orderDetail.orderBase.status?e.tagType="success":e.tagType="info",e.orderInfo=r.data.orderDetail,e.active=r.data.orderDetail.orderBase.status+1}))},onSubmit:function(){Object(s["c"])(this.form).then((function(e){}))}}},d=l,n=(t("f75d"),t("2877")),i=Object(n["a"])(d,a,o,!1,null,"592b3944",null);r["default"]=i.exports},f75d:function(e,r,t){"use strict";t("1d0a")}}]);