(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yishengpaiban-add-or-update"],{"0319":function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-c3ad8e42]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=i},"15b2":function(e,i,t){"use strict";var n={"w-picker":t("e2b1").default},r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{style:{width:"100%",padding:"0 0 0 0",position:"relative",background:"#ffffff",height:"100%"}},[t("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx 24rpx 24rpx 24rpx",background:"#ffffff",display:"block",height:"auto"}},[t("v-uni-view",{staticClass:"select",style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("医生账号")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.yishengzhanghaoIndex,range:e.yishengzhanghaoOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.yishengzhanghaoChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#666666"}},[e._v(e._s(e.yishengzhanghaoOptions[e.yishengzhanghaoIndex]))])],1)],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("医生姓名")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.yishengxingming,placeholder:"医生姓名"},model:{value:e.ruleForm.yishengxingming,callback:function(i){e.$set(e.ruleForm,"yishengxingming",i)},expression:"ruleForm.yishengxingming"}})],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("科室")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.keshi,placeholder:"科室"},model:{value:e.ruleForm.keshi,callback:function(i){e.$set(e.ruleForm,"keshi",i)},expression:"ruleForm.keshi"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("日期")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{mode:"date",value:e.ruleForm.riqi},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.riqiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#666666"}},[e._v(e._s(e.ruleForm.riqi?e.ruleForm.riqi:"请选择日期"))])],1)],1),t("v-uni-view",{staticClass:"select",style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("班次")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.banciIndex,range:e.banciOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.banciChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#666666"}},[e._v(e._s(e.ruleForm.banci?e.ruleForm.banci:"请选择班次"))])],1)],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("上班时间")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{placeholder:"上班时间"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toggleTab("shangbanshijian")}},model:{value:e.ruleForm.shangbanshijian,callback:function(i){e.$set(e.ruleForm,"shangbanshijian",i)},expression:"ruleForm.shangbanshijian"}})],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("下班时间")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{placeholder:"下班时间"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toggleTab("xiabanshijian")}},model:{value:e.ruleForm.xiabanshijian,callback:function(i){e.$set(e.ruleForm,"xiabanshijian",i)},expression:"ruleForm.xiabanshijian"}})],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("备注")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.beizhu,placeholder:"备注"},model:{value:e.ruleForm.beizhu,callback:function(i){e.$set(e.ruleForm,"beizhu",i)},expression:"ruleForm.beizhu"}})],1),t("v-uni-view",{staticClass:"btn",style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[t("v-uni-button",{staticClass:"bg-red",style:{border:"0px solid #eeeeee",padding:"0 0 0 0",margin:"0 4% 0 0",color:"#ffffff",background:"#1D5DCA",width:"30%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"shangbanshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.shangbanshijianConfirm.apply(void 0,arguments)}}}),t("w-picker",{ref:"xiabanshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.xiabanshijianConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];t.d(i,"b",(function(){return r})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return n}))},"1b47":function(e,i,t){"use strict";var n=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("a481"),t("c5f6"),t("f559"),t("456d"),t("ac6a"),t("28a5"),t("96cf");var r=n(t("3b8d")),a=n(t("e2b1")),o=n(t("064f")),s=n(t("bd56")),u={data:function(){return{cross:"",ruleForm:{yishengzhanghao:"",yishengxingming:"",keshi:"",riqi:"",banci:"",shangbanshijian:"",xiabanshijian:"",beizhu:""},yishengzhanghaoOptions:[],yishengzhanghaoIndex:0,banciOptions:[],banciIndex:0,user:{},ro:{yishengzhanghao:!1,yishengxingming:!1,keshi:!1,riqi:!1,banci:!1,shangbanshijian:!1,xiabanshijian:!1,beizhu:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},watch:{},onLoad:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(i){var t,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.riqi=this.$utils.getCurDate(),this.ruleForm.shangbanshijian=this.$utils.getCurDateTime(),this.ruleForm.xiabanshijian=this.$utils.getCurDateTime(),t=uni.getStorageSync("nowTable"),e.next=6,this.$api.session(t);case 6:return n=e.sent,this.user=n.data,e.next=10,this.$api.option("yisheng","yishengzhanghao",{});case 10:if(n=e.sent,this.yishengzhanghaoOptions=n.data,this.banciOptions="早班,中班,晚班".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){e.next=21;break}return this.ruleForm.id=i.id,e.next=19,this.$api.info("yishengpaiban",this.ruleForm.id);case 19:n=e.sent,this.ruleForm=n.data;case 21:if(this.cross=i.cross,!i.cross){e.next=61;break}r=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(r);case 25:if((e.t1=e.t0()).done){e.next=61;break}if(a=e.t1.value,"yishengzhanghao"!=a){e.next=31;break}return this.ruleForm.yishengzhanghao=r[a],this.ro.yishengzhanghao=!0,e.abrupt("continue",25);case 31:if("yishengxingming"!=a){e.next=35;break}return this.ruleForm.yishengxingming=r[a],this.ro.yishengxingming=!0,e.abrupt("continue",25);case 35:if("keshi"!=a){e.next=39;break}return this.ruleForm.keshi=r[a],this.ro.keshi=!0,e.abrupt("continue",25);case 39:if("riqi"!=a){e.next=43;break}return this.ruleForm.riqi=r[a],this.ro.riqi=!0,e.abrupt("continue",25);case 43:if("banci"!=a){e.next=47;break}return this.ruleForm.banci=r[a],this.ro.banci=!0,e.abrupt("continue",25);case 47:if("shangbanshijian"!=a){e.next=51;break}return this.ruleForm.shangbanshijian=r[a],this.ro.shangbanshijian=!0,e.abrupt("continue",25);case 51:if("xiabanshijian"!=a){e.next=55;break}return this.ruleForm.xiabanshijian=r[a],this.ro.xiabanshijian=!0,e.abrupt("continue",25);case 55:if("beizhu"!=a){e.next=59;break}return this.ruleForm.beizhu=r[a],this.ro.beizhu=!0,e.abrupt("continue",25);case 59:e.next=25;break;case 61:this.styleChange(),this.$forceUpdate();case 63:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),computed:{baseUrl:function(){return this.$base.url}},methods:{styleChange:function(){this.$nextTick((function(){document.querySelectorAll(".radioText").forEach((function(e){e.removeAttribute("style");var i={color:"#666666"};Object.keys(i).forEach((function(t){e.style[t]=i[t]}))})),document.querySelectorAll(".radioTextActive").forEach((function(e){e.removeAttribute("style");var i={color:"#1D5DCA"};Object.keys(i).forEach((function(t){e.style[t]=i[t]}))})),document.querySelectorAll(".checkText").forEach((function(e){e.removeAttribute("style");var i={color:"#666666"};Object.keys(i).forEach((function(t){e.style[t]=i[t]}))})),document.querySelectorAll(".checkTextActive").forEach((function(e){e.removeAttribute("style");var i={color:"#1D5DCA"};Object.keys(i).forEach((function(t){e.style[t]=i[t]}))})),document.querySelectorAll(".uni-radio-input").forEach((function(e){e.removeAttribute("style");var i={border:"2rpx solid #999999",borderRadius:"100%",background:"#ffffff"};Object.keys(i).forEach((function(t){e.style[t]=i[t]}))})),document.querySelectorAll(".uni-radio-input-checked").forEach((function(e){e.removeAttribute("style");var i={border:"2rpx solid #1D5DCA",borderRadius:"100%",background:"#1D5DCA"};Object.keys(i).forEach((function(t){e.style[t]=i[t]}))})),document.querySelectorAll(".uni-checkbox-input").forEach((function(e){e.removeAttribute("style");var i={border:"2rpx solid #999999",borderRadius:"100%",background:"#ffffff"};Object.keys(i).forEach((function(t){e.style[t]=i[t]}))})),document.querySelectorAll(".uni-checkbox-input-checked").forEach((function(e){e.removeAttribute("style");var i={border:"2rpx solid #1D5DCA",color:"#ffffff",borderRadius:"100%",background:"#1D5DCA"};Object.keys(i).forEach((function(t){e.style[t]=i[t]}))}))}))},yishengzhanghaoChange:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(i){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.yishengzhanghaoIndex=i.target.value,this.ruleForm.yishengzhanghao=this.yishengzhanghaoOptions[this.yishengzhanghaoIndex],e.next=4,this.$api.follow("yisheng","yishengzhanghao",{columnValue:this.ruleForm.yishengzhanghao});case 4:t=e.sent,t.data.yishengxingming&&(this.ruleForm.yishengxingming=t.data.yishengxingming),t.data.keshi&&(this.ruleForm.keshi=t.data.keshi);case 7:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),riqiChange:function(e){this.ruleForm.riqi=e.target.value,this.$forceUpdate()},shangbanshijianConfirm:function(e){console.log(e),this.ruleForm.shangbanshijian=e.result,this.$forceUpdate()},xiabanshijianConfirm:function(e){console.log(e),this.ruleForm.xiabanshijian=e.result,this.$forceUpdate()},banciChange:function(e){this.banciIndex=e.target.value,this.ruleForm.banci=this.banciOptions[this.banciIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var i,t,n,r,a,o,s,u,l,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.cross){e.next=17;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=17;break}if(i||(i=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=13;break}for(s in i)s==a&&(i[s]=o);return u=uni.getStorageSync("crossTable"),e.next=11,this.$api.update("".concat(u),i);case 11:e.next=17;break;case 13:t=Number(uni.getStorageSync("userid")),n=i["id"],r=uni.getStorageSync("statusColumnName"),r=r.replace(/\[/,"").replace(/\]/,"");case 17:if(!n||!t){e.next=40;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=n,l={page:1,limit:10,crossuserid:t,crossrefid:n},e.next=23,this.$api.list("yishengpaiban",l);case 23:if(h=e.sent,!(h.data.total>=r)){e.next=30;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 30:if(!this.ruleForm.id){e.next=35;break}return e.next=33,this.$api.update("yishengpaiban",this.ruleForm);case 33:e.next=37;break;case 35:return e.next=37,this.$api.add("yishengpaiban",this.ruleForm);case 37:this.$utils.msgBack("提交成功");case 38:e.next=48;break;case 40:if(!this.ruleForm.id){e.next=45;break}return e.next=43,this.$api.update("yishengpaiban",this.ruleForm);case 43:e.next=47;break;case 45:return e.next=47,this.$api.add("yishengpaiban",this.ruleForm);case 47:this.$utils.msgBack("提交成功");case 48:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,t=i.getFullYear(),n=i.getMonth()+1,r=i.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(t,"-").concat(n,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};i.default=u},"382a":function(e,i,t){"use strict";t.r(i);var n=t("15b2"),r=t("e841");for(var a in r)"default"!==a&&function(e){t.d(i,e,(function(){return r[e]}))}(a);t("9291");var o,s=t("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"c3ad8e42",null,!1,n["a"],o);i["default"]=u.exports},"7d53":function(e,i,t){var n=t("0319");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=t("4f06").default;r("0fd27541",n,!0,{sourceMap:!1,shadowMode:!1})},9291:function(e,i,t){"use strict";var n=t("7d53"),r=t.n(n);r.a},e841:function(e,i,t){"use strict";t.r(i);var n=t("1b47"),r=t.n(n);for(var a in n)"default"!==a&&function(e){t.d(i,e,(function(){return n[e]}))}(a);i["default"]=r.a}}]);