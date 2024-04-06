require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[8],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(136);


/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);

// EXTERNAL MODULE: ./src/components/authorizationLayout/index.tsx + 1 modules
var authorizationLayout = __webpack_require__(27);

// EXTERNAL MODULE: ./src/components/defaultPage/index.tsx
var defaultPage = __webpack_require__(47);

// EXTERNAL MODULE: ./src/components/avatar/index.tsx
var components_avatar = __webpack_require__(22);

// EXTERNAL MODULE: ./src/components/iconfont/index.wechat.js + 1 modules
var index_wechat = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/annar/esm/card/index.js
var card = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/annar/esm/row/index.js
var row = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/annar/esm/col/index.js
var col = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/annar/esm/button/index.js + 3 modules
var esm_button = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/annar/esm/web/base/view/index.js + 3 modules
var view = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/axios-hooks/es/index.js + 1 modules
var es = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/remax/wechat.js
var wechat = __webpack_require__(3);

// EXTERNAL MODULE: ./src/pages/personal/components/mystuff/index.css?modules
var mystuffmodules = __webpack_require__(18);
var mystuffmodules_default = /*#__PURE__*/__webpack_require__.n(mystuffmodules);

// CONCATENATED MODULE: ./src/pages/personal/components/mystuff/index.tsx
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function MyStuff(_ref){var avatar=_ref.avatar,phone=_ref.phone,onUpdated=_ref.onUpdated;var _useAxios=Object(es["b" /* default */])({url:'/nilaicha_user/1/get_user_phone',method:'POST'},{manual:true}),_useAxios2=_slicedToArray(_useAxios,2),updateUserPhone=_useAxios2[1];var renderAction=function renderAction(title,onTap,icon,cover){return/*#__PURE__*/react["createElement"](view["a" /* default */],{className:mystuffmodules_default.a.action,onTap:onTap},icon,/*#__PURE__*/react["createElement"](wechat["e" /* Text */],{className:mystuffmodules_default.a.actionText},title),cover);};return/*#__PURE__*/react["createElement"](card["a" /* default */],null,/*#__PURE__*/react["createElement"](row["a" /* default */],{className:mystuffmodules_default.a.info},/*#__PURE__*/react["createElement"](col["a" /* default */],{className:mystuffmodules_default.a.avatarWrapper,span:6},/*#__PURE__*/react["createElement"](components_avatar["a" /* default */],{url:avatar})),/*#__PURE__*/react["createElement"](col["a" /* default */],{span:18},/*#__PURE__*/react["createElement"](row["a" /* default */],null,/*#__PURE__*/react["createElement"](wechat["e" /* Text */],{className:mystuffmodules_default.a.nickname},phone)),/*#__PURE__*/react["createElement"](row["a" /* default */],{className:mystuffmodules_default.a.roaw},phone?/*#__PURE__*/react["createElement"](esm_button["a" /* default */],{plain:true,className:mystuffmodules_default.a.personalInfo},"\u4E2A\u4EBA\u4FE1\u606F"):/*#__PURE__*/react["createElement"](wechat["a" /* Button */],{plain:true,className:mystuffmodules_default.a.personalInfo,openType:'getPhoneNumber',style:{borderWidth:0,color:'#ff892b',fontSize:30},onGetPhoneNumber:/*#__PURE__*/function(){var _ref2=_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee(e){var detail;return runtime_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:detail=e.detail;if(!detail.errMsg.endsWith(':ok')){_context.next=5;break;}_context.next=4;return updateUserPhone({data:detail});case 4:onUpdated();case 5:case"end":return _context.stop();}}},_callee);}));return function(_x){return _ref2.apply(this,arguments);};}()},"\u70B9\u51FB\u767B\u5F55")))),/*#__PURE__*/react["createElement"](row["a" /* default */],{className:mystuffmodules_default.a.actions},renderAction('加入会员',/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee2(){return runtime_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(phone){_context2.next=5;break;}_context2.next=3;return Object(wechat["p" /* showToast */])({title:'请点击"登录"'});case 3:_context2.next=7;break;case 5:_context2.next=7;return Object(wechat["i" /* navigateTo */])({url:'/pages/memberize/index'});case 7:case"end":return _context2.stop();}}},_callee2);})),/*#__PURE__*/react["createElement"](index_wechat["a" /* default */],{name:'huangguan',size:60})),renderAction('联系客服',/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee3(){return runtime_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return Object(wechat["i" /* navigateTo */])({url:'/pages/kefu/index'});case 2:case"end":return _context3.stop();}}},_callee3);})),/*#__PURE__*/react["createElement"](index_wechat["a" /* default */],{name:'kefu',size:60})// <WxButton className={styles.wxContact} openType={'contact'} />,
)));}
// EXTERNAL MODULE: ./src/pages/personal/index.css?modules
var personalmodules = __webpack_require__(89);
var personalmodules_default = /*#__PURE__*/__webpack_require__.n(personalmodules);

// CONCATENATED MODULE: ./src/pages/personal/index.tsx
function personal_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function personal_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){personal_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){personal_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function personal_slicedToArray(arr,i){return personal_arrayWithHoles(arr)||personal_iterableToArrayLimit(arr,i)||personal_unsupportedIterableToArray(arr,i)||personal_nonIterableRest();}function personal_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function personal_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return personal_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return personal_arrayLikeToArray(o,minLen);}function personal_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function personal_iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function personal_arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function PersonalCenter(){var _useAxios=Object(es["b" /* default */])({url:'nilaicha_user/1/nilaicha_user_info'}),_useAxios2=personal_slicedToArray(_useAxios,2),data=_useAxios2[0].data,refetch=_useAxios2[1];var userInfo=data&&data.body;return/*#__PURE__*/react["createElement"](authorizationLayout["a" /* default */],null,/*#__PURE__*/react["createElement"](defaultPage["a" /* default */],{title:'个人中心'},/*#__PURE__*/react["createElement"](view["a" /* default */],{className:personalmodules_default.a.wrapper},/*#__PURE__*/react["createElement"](MyStuff,{onUpdated:/*#__PURE__*/personal_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee(){return runtime_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return refetch();case 2:case"end":return _context.stop();}}},_callee);})),avatar:userInfo&&userInfo.avatar_url,phone:userInfo&&userInfo.phone}))));}
// CONCATENATED MODULE: ./src/pages/personal/index.entry.js
Page(Object(esm["f" /* createPageConfig */])(PersonalCenter,'pages/personal/index'));

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"info":"info___3eD7u","avatarWrapper":"avatarWrapper___1cjRs","nickname":"nickname___3b2I4","roaw":"roaw___2s5Bc","personalInfo":"personalInfo___Hos87","actions":"actions___1sTCc","action":"action___1hlki","actionText":"actionText___32dpw","wxContact":"wxContact___S8grx"};

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"wrapper___2gzO2"};

/***/ })

},[[126,0,1,2]]]);