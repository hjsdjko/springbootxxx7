(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wodeguahao-add-or-update"],{"20c3":function(e,r,i){var t=i("24fb");r=t(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-cdbe5220]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=r},"3e5a":function(e,r,i){"use strict";var t={"w-picker":i("e2b1").default},n=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{style:{width:"100%",padding:"0 0 0 0",position:"relative",background:"#ffffff",height:"100%"}},[i("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx 24rpx 24rpx 24rpx",background:"#ffffff",display:"block",height:"auto"}},[i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("预约单号")]),i("v-uni-view",{staticClass:"right-input",style:{padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",flex:"1"}},[e._v(e._s(e.ruleForm.yuyuedanhao))])],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("医生账号")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.yishengzhanghao,placeholder:"医生账号"},model:{value:e.ruleForm.yishengzhanghao,callback:function(r){e.$set(e.ruleForm,"yishengzhanghao",r)},expression:"ruleForm.yishengzhanghao"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("医生姓名")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.yishengxingming,placeholder:"医生姓名"},model:{value:e.ruleForm.yishengxingming,callback:function(r){e.$set(e.ruleForm,"yishengxingming",r)},expression:"ruleForm.yishengxingming"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("科室")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.keshi,placeholder:"科室"},model:{value:e.ruleForm.keshi,callback:function(r){e.$set(e.ruleForm,"keshi",r)},expression:"ruleForm.keshi"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("诊室")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.zhenshi,placeholder:"诊室"},model:{value:e.ruleForm.zhenshi,callback:function(r){e.$set(e.ruleForm,"zhenshi",r)},expression:"ruleForm.zhenshi"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("挂号费")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.guahaofei,placeholder:"挂号费"},model:{value:e.ruleForm.guahaofei,callback:function(r){e.$set(e.ruleForm,"guahaofei",r)},expression:"ruleForm.guahaofei"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("挂号时间")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{placeholder:"挂号时间"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.toggleTab("guahaoshijian")}},model:{value:e.ruleForm.guahaoshijian,callback:function(r){e.$set(e.ruleForm,"guahaoshijian",r)},expression:"ruleForm.guahaoshijian"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("账号")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.zhanghao,placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(r){e.$set(e.ruleForm,"zhanghao",r)},expression:"ruleForm.zhanghao"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("姓名")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("备注")]),i("v-uni-textarea",{style:{border:"0px solid #eeeeee",padding:"24rpx 24rpx 24rpx 24rpx",margin:"0 0 0 0",color:"#000000",borderRadius:"8rpx",flex:"1",background:"none",fontSize:"28rpx",height:"240rpx"},attrs:{placeholder:"备注"},model:{value:e.ruleForm.beizhu,callback:function(r){e.$set(e.ruleForm,"beizhu",r)},expression:"ruleForm.beizhu"}})],1),i("v-uni-view",{staticClass:"btn",style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[i("v-uni-button",{staticClass:"bg-red",style:{border:"0px solid #eeeeee",padding:"0 0 0 0",margin:"0 4% 0 0",color:"#ffffff",background:"#1D5DCA",width:"30%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),i("w-picker",{ref:"guahaoshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.guahaoshijianConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];i.d(r,"b",(function(){return n})),i.d(r,"c",(function(){return a})),i.d(r,"a",(function(){return t}))},"4a52":function(e,r,i){var t=i("20c3");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var n=i("4f06").default;n("356ce98a",t,!0,{sourceMap:!1,shadowMode:!1})},6441:function(e,r,i){"use strict";i.r(r);var t=i("fdf7"),n=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(r,e,(function(){return t[e]}))}(a);r["default"]=n.a},7852:function(e,r,i){"use strict";var t=i("4a52"),n=i.n(t);n.a},ba6e:function(e,r,i){"use strict";i.r(r);var t=i("3e5a"),n=i("6441");for(var a in n)"default"!==a&&function(e){i.d(r,e,(function(){return n[e]}))}(a);i("7852");var o,s=i("f0c5"),u=Object(s["a"])(n["default"],t["b"],t["c"],!1,null,"cdbe5220",null,!1,t["a"],o);r["default"]=u.exports},fdf7:function(e,r,i){"use strict";var t=i("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,i("a481"),i("c5f6"),i("f559"),i("456d"),i("ac6a"),i("96cf");var n=t(i("3b8d")),a=t(i("e2b1")),o=t(i("064f")),s=t(i("bd56")),u={data:function(){return{cross:"",ruleForm:{yuyuedanhao:this.getUUID(),yishengzhanghao:"",yishengxingming:"",keshi:"",zhenshi:"",guahaofei:"",beizhu:"",guahaoshijian:"",zhanghao:"",xingming:"",ispay:"未支付"},user:{},ro:{yuyuedanhao:!1,yishengzhanghao:!1,yishengxingming:!1,keshi:!1,zhenshi:!1,guahaofei:!1,beizhu:!1,guahaoshijian:!1,zhanghao:!1,xingming:!1,ispay:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},watch:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var i,t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.guahaoshijian=this.$utils.getCurDateTime(),i=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:if(t=e.sent,this.user=t.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ro.zhanghao=!0,this.ruleForm.xingming=this.user.xingming,this.ro.xingming=!0,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=18;break}return this.ruleForm.id=r.id,e.next=16,this.$api.info("wodeguahao",this.ruleForm.id);case 16:t=e.sent,this.ruleForm=t.data;case 18:if(this.cross=r.cross,!r.cross){e.next=66;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 22:if((e.t1=e.t0()).done){e.next=66;break}if(a=e.t1.value,"yuyuedanhao"!=a){e.next=28;break}return this.ruleForm.yuyuedanhao=n[a],this.ro.yuyuedanhao=!0,e.abrupt("continue",22);case 28:if("yishengzhanghao"!=a){e.next=32;break}return this.ruleForm.yishengzhanghao=n[a],this.ro.yishengzhanghao=!0,e.abrupt("continue",22);case 32:if("yishengxingming"!=a){e.next=36;break}return this.ruleForm.yishengxingming=n[a],this.ro.yishengxingming=!0,e.abrupt("continue",22);case 36:if("keshi"!=a){e.next=40;break}return this.ruleForm.keshi=n[a],this.ro.keshi=!0,e.abrupt("continue",22);case 40:if("zhenshi"!=a){e.next=44;break}return this.ruleForm.zhenshi=n[a],this.ro.zhenshi=!0,e.abrupt("continue",22);case 44:if("guahaofei"!=a){e.next=48;break}return this.ruleForm.guahaofei=n[a],this.ro.guahaofei=!0,e.abrupt("continue",22);case 48:if("beizhu"!=a){e.next=52;break}return this.ruleForm.beizhu=n[a],this.ro.beizhu=!0,e.abrupt("continue",22);case 52:if("guahaoshijian"!=a){e.next=56;break}return this.ruleForm.guahaoshijian=n[a],this.ro.guahaoshijian=!0,e.abrupt("continue",22);case 56:if("zhanghao"!=a){e.next=60;break}return this.ruleForm.zhanghao=n[a],this.ro.zhanghao=!0,e.abrupt("continue",22);case 60:if("xingming"!=a){e.next=64;break}return this.ruleForm.xingming=n[a],this.ro.xingming=!0,e.abrupt("continue",22);case 64:e.next=22;break;case 66:this.styleChange(),this.$forceUpdate();case 68:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),computed:{baseUrl:function(){return this.$base.url}},methods:{styleChange:function(){this.$nextTick((function(){document.querySelectorAll(".radioText").forEach((function(e){e.removeAttribute("style");var r={color:"#666666"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))})),document.querySelectorAll(".radioTextActive").forEach((function(e){e.removeAttribute("style");var r={color:"#1D5DCA"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))})),document.querySelectorAll(".checkText").forEach((function(e){e.removeAttribute("style");var r={color:"#666666"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))})),document.querySelectorAll(".checkTextActive").forEach((function(e){e.removeAttribute("style");var r={color:"#1D5DCA"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))})),document.querySelectorAll(".uni-radio-input").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #999999",borderRadius:"100%",background:"#ffffff"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))})),document.querySelectorAll(".uni-radio-input-checked").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #1D5DCA",borderRadius:"100%",background:"#1D5DCA"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))})),document.querySelectorAll(".uni-checkbox-input").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #999999",borderRadius:"100%",background:"#ffffff"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))})),document.querySelectorAll(".uni-checkbox-input-checked").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #1D5DCA",color:"#ffffff",borderRadius:"100%",background:"#1D5DCA"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))}))}))},guahaoshijianConfirm:function(e){console.log(e),this.ruleForm.guahaoshijian=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var r,i,t,n,a,o,s,u,l,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.guahaofei||this.$validate.isIntNumer(this.ruleForm.guahaofei)){e.next=3;break}return this.$utils.msg("挂号费应输入整数"),e.abrupt("return");case 3:if(!this.cross){e.next=20;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=20;break}if(r||(r=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=16;break}for(s in r)s==a&&(r[s]=o);return u=uni.getStorageSync("crossTable"),e.next=14,this.$api.update("".concat(u),r);case 14:e.next=20;break;case 16:i=Number(uni.getStorageSync("userid")),t=r["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 20:if(!t||!i){e.next=43;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=t,l={page:1,limit:10,crossuserid:i,crossrefid:t},e.next=26,this.$api.list("wodeguahao",l);case 26:if(h=e.sent,!(h.data.total>=n)){e.next=33;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 33:if(!this.ruleForm.id){e.next=38;break}return e.next=36,this.$api.update("wodeguahao",this.ruleForm);case 36:e.next=40;break;case 38:return e.next=40,this.$api.add("wodeguahao",this.ruleForm);case 40:this.$utils.msgBack("提交成功");case 41:e.next=51;break;case 43:if(!this.ruleForm.id){e.next=48;break}return e.next=46,this.$api.update("wodeguahao",this.ruleForm);case 46:e.next=50;break;case 48:return e.next=50,this.$api.add("wodeguahao",this.ruleForm);case 50:this.$utils.msgBack("提交成功");case 51:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,i=r.getFullYear(),t=r.getMonth()+1,n=r.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,n=n>9?n:"0"+n,"".concat(i,"-").concat(t,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=u}}]);