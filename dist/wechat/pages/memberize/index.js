require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[7],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133);


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);

// EXTERNAL MODULE: ./src/components/avatar/index.tsx
var avatar = __webpack_require__(22);

// EXTERNAL MODULE: ./src/components/defaultPage/index.tsx
var defaultPage = __webpack_require__(47);

// EXTERNAL MODULE: ./src/components/iconfont/index.wechat.js + 1 modules
var index_wechat = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/annar/esm/card/index.js
var card = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/annar/esm/web/base/view/index.js + 3 modules
var view = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/remax/one.js + 27 modules
var one = __webpack_require__(4);

// EXTERNAL MODULE: ./src/pages/memberize/components/profitItem/index.css?modules
var profitItemmodules = __webpack_require__(41);
var profitItemmodules_default = /*#__PURE__*/__webpack_require__.n(profitItemmodules);

// CONCATENATED MODULE: ./src/pages/memberize/components/profitItem/profit-blue.png
/* harmony default export */ var profit_blue = (__webpack_require__.p + "9af334bfccfabf8ffc365eee30d13e16.png");
// CONCATENATED MODULE: ./src/pages/memberize/components/profitItem/profit-red.png
/* harmony default export */ var profit_red = (__webpack_require__.p + "cf5d4637ae8a6793a166442a6ee674ad.png");
// CONCATENATED MODULE: ./src/pages/memberize/components/profitItem/profit-yellow.png
/* harmony default export */ var profit_yellow = (__webpack_require__.p + "45257d1ed453044ce1b1553e7d45efef.png");
// CONCATENATED MODULE: ./src/pages/memberize/components/profitItem/index.tsx
function ProfitItem(_ref){var icon=_ref.icon,color=_ref.color,text=_ref.text;var src=null;switch(color){case'blue':src=profit_blue;break;case'red':src=profit_red;break;case'yellow':src=profit_yellow;break;}return/*#__PURE__*/react["createElement"](view["a" /* default */],{className:profitItemmodules_default.a.wrapper},/*#__PURE__*/react["createElement"](one["Image"],{className:profitItemmodules_default.a.bg,src:src}),/*#__PURE__*/react["createElement"](view["a" /* default */],{className:profitItemmodules_default.a.icon},icon),/*#__PURE__*/react["createElement"](view["a" /* default */],{className:profitItemmodules_default.a.tw},/*#__PURE__*/react["createElement"](card["a" /* default */],{shadow:true},/*#__PURE__*/react["createElement"](one["Text"],null,text))));}
// EXTERNAL MODULE: ./src/pages/memberize/components/profitGroup/index.css?modules
var profitGroupmodules = __webpack_require__(20);
var profitGroupmodules_default = /*#__PURE__*/__webpack_require__.n(profitGroupmodules);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(7);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/pages/memberize/components/profitGroup/index.tsx
function ProfitGroup(_ref){var group=_ref.group,color=_ref.color,profits=_ref.profits;var textCls;switch(color){case'red':textCls=profitGroupmodules_default.a.titleRedText;break;case'blue':textCls=profitGroupmodules_default.a.titleBlueText;break;case'yellow':textCls=profitGroupmodules_default.a.titleYellowText;break;}return/*#__PURE__*/react_default.a.createElement(view["a" /* default */],{className:profitGroupmodules_default.a.wrapper},/*#__PURE__*/react_default.a.createElement(view["a" /* default */],{className:profitGroupmodules_default.a.title},/*#__PURE__*/react_default.a.createElement(one["Text"],{className:classnames_default()(profitGroupmodules_default.a.titleText,textCls)},group)),/*#__PURE__*/react_default.a.createElement(view["a" /* default */],{className:profitGroupmodules_default.a.profits},profits.map(function(_ref2,index){var icon=_ref2.icon,content=_ref2.content;return/*#__PURE__*/react_default.a.createElement(view["a" /* default */],{key:"".concat(index),__key:"".concat(index)},index>0&&/*#__PURE__*/react_default.a.createElement(view["a" /* default */],{className:profitGroupmodules_default.a.gap}),/*#__PURE__*/react_default.a.createElement(ProfitItem,{icon:icon,color:color,text:content}));})));}
// EXTERNAL MODULE: ./node_modules/axios-hooks/es/index.js + 1 modules
var es = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/remax/wechat.js
var wechat = __webpack_require__(3);

// EXTERNAL MODULE: ./src/pages/memberize/components/purchase/index.css?modules
var purchasemodules = __webpack_require__(33);
var purchasemodules_default = /*#__PURE__*/__webpack_require__.n(purchasemodules);

// CONCATENATED MODULE: ./src/pages/memberize/components/purchase/bg.png
/* harmony default export */ var bg = (__webpack_require__.p + "2a857cd3c29f91a86f6d1af5800f4e8d.png");
// CONCATENATED MODULE: ./src/pages/memberize/components/purchase/index.tsx
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var sysInfo=Object(wechat["g" /* getSystemInfoSync */])();var isIos=sysInfo.platform=='ios'||sysInfo.platform=='iOS';function Purchase(_ref){var price=_ref.price,onTap=_ref.onTap,hasPhone=_ref.hasPhone,refetch=_ref.refetch;var _useAxios=Object(es["b" /* default */])({url:'/nilaicha_user/1/get_user_info',method:'POST'},{manual:true}),_useAxios2=_slicedToArray(_useAxios,2),updateUserInfo=_useAxios2[1];if(isIos){return/*#__PURE__*/react["createElement"](view["a" /* default */],{className:purchasemodules_default.a.wrapper,style:{background:"url('".concat(bg,"')")},onTap:/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee(){return runtime_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Object(wechat["i" /* navigateTo */])({url:'/pages/kefu/index'});case 2:case"end":return _context.stop();}}},_callee);}))},/*#__PURE__*/react["createElement"](view["a" /* default */],{className:purchasemodules_default.a.text},"\u8054\u7CFB\u5BA2\u670D\u7ACB\u5373\u5F00\u901A"));}else{return/*#__PURE__*/react["createElement"](view["a" /* default */],{className:purchasemodules_default.a.wrapper,style:{background:"url('".concat(bg,"')")},onTap:onTap},/*#__PURE__*/react["createElement"](view["a" /* default */],{className:purchasemodules_default.a.text},"\u7ACB\u5373\u5F00\u901A"),!hasPhone&&/*#__PURE__*/react["createElement"](wechat["a" /* Button */],{className:purchasemodules_default.a.wxbtn,openType:'getUserInfo',onGetUserInfo:/*#__PURE__*/function(){var _ref3=_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee2(e){var detail;return runtime_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:detail=e.detail;if(!detail.errMsg.endsWith(':ok')){_context2.next=4;break;}_context2.next=4;return updateUserInfo({data:detail});case 4:refetch();case 5:case"end":return _context2.stop();}}},_callee2);}));return function(_x){return _ref3.apply(this,arguments);};}()}));}}
// EXTERNAL MODULE: ./node_modules/remax/esm/index.js + 1 modules
var remax_esm = __webpack_require__(28);

// EXTERNAL MODULE: ./src/pages/memberize/index.css?modules
var memberizemodules = __webpack_require__(42);
var memberizemodules_default = /*#__PURE__*/__webpack_require__.n(memberizemodules);

// CONCATENATED MODULE: ./src/pages/memberize/index.tsx
function memberize_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function memberize_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){memberize_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){memberize_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function memberize_slicedToArray(arr,i){return memberize_arrayWithHoles(arr)||memberize_iterableToArrayLimit(arr,i)||memberize_unsupportedIterableToArray(arr,i)||memberize_nonIterableRest();}function memberize_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function memberize_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return memberize_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return memberize_arrayLikeToArray(o,minLen);}function memberize_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function memberize_iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function memberize_arrayWithHoles(arr){if(Array.isArray(arr))return arr;}/* harmony default export */ var memberize = (function(){var query=Object(remax_esm["b" /* useQuery */])();var _useAxios=Object(es["b" /* default */])({url:'nilaicha_user/1/query_vip'},{manual:true}),_useAxios2=memberize_slicedToArray(_useAxios,2),checkVip=_useAxios2[1];var _useAxios3=Object(es["b" /* default */])({url:'nilaicha_user/1/nilaicha_user_info'}),_useAxios4=memberize_slicedToArray(_useAxios3,2),data=_useAxios4[0].data,refetch=_useAxios4[1];var userInfo=data&&data.body;var _useAxios5=Object(es["b" /* default */])({url:'nilaicha_order/1/nilaicha_pay',method:'POST'},{manual:true}),_useAxios6=memberize_slicedToArray(_useAxios5,2),getPrepay=_useAxios6[1];return/*#__PURE__*/react["createElement"](defaultPage["a" /* default */],{title:'加入会员',wrapped:true},/*#__PURE__*/react["createElement"](view["a" /* default */],{className:memberizemodules_default.a.user},/*#__PURE__*/react["createElement"](avatar["a" /* default */],{url:userInfo&&userInfo.avatar_url}),/*#__PURE__*/react["createElement"](one["Text"],{className:memberizemodules_default.a.text},userInfo&&userInfo.nickname),/*#__PURE__*/react["createElement"](index_wechat["a" /* default */],{name:'huangguan-fade',size:40})),/*#__PURE__*/react["createElement"](view["a" /* default */],{className:memberizemodules_default.a.profits},/*#__PURE__*/react["createElement"](ProfitGroup,{group:'功能权益',color:'blue',profits:[{content:'任意查看权益：任意查看合作或者名片广场以及达人数据等权益',icon:/*#__PURE__*/react["createElement"](index_wechat["a" /* default */],{name:'zysjs-qyxq',size:60,color:'#ffffff'})}// {
//   content: '信息排序前置：会员发布的任务或者其他合作信息排序靠前',
//   icon: <IconFont name={'huojian'} size={52} color={'#ffffff'} />,
// },
// {
//   content:
//     '信息置顶服务：发布的任务或者其他合作信息有10天的置顶次数',
//   icon: <IconFont name={'zhiding'} size={57} color={'#ffffff'} />,
// },
]}),/*#__PURE__*/react["createElement"](ProfitGroup,{group:'服务权益',color:'red',profits:[{content:'专属顾问团队：为您配置专业顾问团队提供解惑答疑服务',icon:/*#__PURE__*/react["createElement"](index_wechat["a" /* default */],{name:'guwen',size:60,color:'#ffffff'})},{content:'尊贵会员社群：加入官方会员社群，社群人脉净收眼底',icon:/*#__PURE__*/react["createElement"](index_wechat["a" /* default */],{name:'shequn',size:54,color:'#ffffff'})},{content:'1v1资源对接：一对一为会员提供供应链、MCN资源对接',icon:/*#__PURE__*/react["createElement"](index_wechat["a" /* default */],{name:'duijie',size:58,color:'#ffffff'})}]}),/*#__PURE__*/react["createElement"](ProfitGroup,{group:'增值服务',color:'yellow',profits:[{content:'尊贵身份铭牌：全渠道昵称尊贵会员身份标识',icon:/*#__PURE__*/react["createElement"](index_wechat["a" /* default */],{name:'vip',size:56,color:'#ffffff'})},// {
//   content: '群量学员课程：可免费学习群量学院中的会员课程',
//   icon: <IconFont name={'kecheng'} size={56} color={'#ffffff'} />,
// },
{content:'平台功能尝鲜：第一时间体验平台新功能',icon:/*#__PURE__*/react["createElement"](index_wechat["a" /* default */],{name:'zuixin',size:55,color:'#ffffff'})}]})),/*#__PURE__*/react["createElement"](view["a" /* default */],{className:memberizemodules_default.a.navbar},/*#__PURE__*/react["createElement"](Purchase,{hasPhone:userInfo&&userInfo.phoneNumber,refetch:refetch,price:'1588',onTap:/*#__PURE__*/memberize_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee(){var _yield$getPrepay,data,_data$body,nonceStr,P,paySign,signType,timeStamp,_yield$requestPayment,errMsg,_yield$checkVip,_data;return runtime_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return getPrepay();case 2:_yield$getPrepay=_context.sent;data=_yield$getPrepay.data;_data$body=data.body,nonceStr=_data$body.nonceStr,P=_data$body.package,paySign=_data$body.paySign,signType=_data$body.signType,timeStamp=_data$body.timeStamp;_context.next=7;return Object(wechat["k" /* requestPayment */])({nonceStr:nonceStr,package:P,paySign:paySign,signType:signType,timeStamp:timeStamp});case 7:_yield$requestPayment=_context.sent;errMsg=_yield$requestPayment.errMsg;if(!errMsg.endsWith(':ok')){_context.next=22;break;}_context.next=12;return checkVip();case 12:_yield$checkVip=_context.sent;_data=_yield$checkVip.data;if(!(_data&&_data.body)){_context.next=22;break;}if(!query.redirect){_context.next=20;break;}_context.next=18;return Object(wechat["q" /* switchTab */])({url:"/pages/profile/index?userId=".concat(query.redirect)});case 18:_context.next=22;break;case 20:_context.next=22;return Object(wechat["q" /* switchTab */])({url:"/pages/index/index"});case 22:case"end":return _context.stop();}}},_callee);}))})));});
// CONCATENATED MODULE: ./src/pages/memberize/index.entry.js
Page(Object(esm["f" /* createPageConfig */])(memberize,'pages/memberize/index'));

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"wrapper___3JyVI","title":"title___RoAeH","titleText":"titleText___1fW4x","titleBlueText":"titleBlueText___3F3_T","titleRedText":"titleRedText___3pKjb","titleYellowText":"titleYellowText___106AG","profits":"profits___1geiX","gap":"gap___1rXx8"};

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"wrapper___3l_k6","text":"text___KMIhw","wxbtn":"wxbtn___2Z2py"};

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"wrapper___z1VSO","bg":"bg___335bi","icon":"icon___24vf2","tw":"tw___3FQgo"};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"user":"user___2JuKF","text":"text___3E0oe","profits":"profits___2czXg","navbar":"navbar___1RII6"};

/***/ })

},[[127,0,1,2]]]);