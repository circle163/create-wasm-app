require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[9],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(132);


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/annar/dist/annar.css
var annar = __webpack_require__(50);

// EXTERNAL MODULE: ./src/components/authorizationLayout/index.tsx + 1 modules
var authorizationLayout = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);

// EXTERNAL MODULE: ./node_modules/annar/esm/web/base/view/index.js + 3 modules
var view = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/pages/profile/components/background/index.css?modules
var backgroundmodules = __webpack_require__(31);
var backgroundmodules_default = /*#__PURE__*/__webpack_require__.n(backgroundmodules);

// EXTERNAL MODULE: ./node_modules/remax/esm/index.js + 1 modules
var remax_esm = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/remax/wechat.js
var remax_wechat = __webpack_require__(3);

// CONCATENATED MODULE: ./src/pages/profile/components/background/index.tsx
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function Background(_ref){var children=_ref.children,title=_ref.title,bottomNav=_ref.bottomNav;Object(esm["i" /* usePageEvent */])('onLoad',/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee(){return runtime_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Object(remax_wechat["n" /* setNavigationBarColor */])({frontColor:'#ffffff',backgroundColor:'#03a9f4'});case 2:_context.next=4;return Object(remax_wechat["l" /* setBackgroundColor */])({backgroundColor:'#03a9f4'});case 4:case"end":return _context.stop();}}},_callee);})));Object(remax_esm["a" /* useNativeEffect */])(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee2(){return runtime_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!title){_context2.next=3;break;}_context2.next=3;return Object(remax_wechat["o" /* setNavigationBarTitle */])({title:title});case 3:case"end":return _context2.stop();}}},_callee2);})),[title]);return/*#__PURE__*/react["createElement"](view["a" /* default */],{className:backgroundmodules_default.a.background},/*#__PURE__*/react["createElement"](view["a" /* default */],{className:backgroundmodules_default.a.top}),/*#__PURE__*/react["createElement"](view["a" /* default */],{className:backgroundmodules_default.a.content},children,bottomNav&&/*#__PURE__*/react["createElement"](view["a" /* default */],{className:backgroundmodules_default.a.bottomPadding})),bottomNav&&/*#__PURE__*/react["createElement"](view["a" /* default */],{className:backgroundmodules_default.a.bottomBar},bottomNav));}
// EXTERNAL MODULE: ./src/components/avatar/index.tsx
var components_avatar = __webpack_require__(22);

// EXTERNAL MODULE: ./src/components/certificationStatus/index.tsx
var certificationStatus = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/annar/esm/button/index.js + 3 modules
var esm_button = __webpack_require__(144);

// EXTERNAL MODULE: ./src/components/copyableText/index.css?modules
var copyableTextmodules = __webpack_require__(38);
var copyableTextmodules_default = /*#__PURE__*/__webpack_require__.n(copyableTextmodules);

// CONCATENATED MODULE: ./src/components/copyableText/index.tsx
function copyableText_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function copyableText_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){copyableText_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){copyableText_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function CopyableText(_ref){var prefix=_ref.prefix,text=_ref.text,hiddenText=_ref.hiddenText;if(text){return/*#__PURE__*/react["createElement"](view["a" /* default */],{className:copyableTextmodules_default.a.wrapper},prefix&&/*#__PURE__*/react["createElement"](remax_wechat["e" /* Text */],{className:copyableTextmodules_default.a.prefix},prefix),!hiddenText&&/*#__PURE__*/react["createElement"](remax_wechat["e" /* Text */],{className:copyableTextmodules_default.a.text},text),/*#__PURE__*/react["createElement"](esm_button["a" /* default */],{className:copyableTextmodules_default.a.button,size:'small',shape:'square',ghost:true,onTap:/*#__PURE__*/copyableText_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee(){return runtime_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!text){_context.next=3;break;}_context.next=3;return Object(remax_wechat["m" /* setClipboardData */])({data:text});case 3:case"end":return _context.stop();}}},_callee);}))},"\u590D\u5236"));}return/*#__PURE__*/react["createElement"](view["a" /* default */],null);}
// EXTERNAL MODULE: ./src/components/platformCorner/index.tsx
var platformCorner = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/annar/esm/row/index.js
var row = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/annar/esm/col/index.js
var col = __webpack_require__(142);

// EXTERNAL MODULE: ./src/pages/profile/components/basicProfile/stats.css?modules
var statsmodules = __webpack_require__(14);
var statsmodules_default = /*#__PURE__*/__webpack_require__.n(statsmodules);

// CONCATENATED MODULE: ./src/pages/profile/components/basicProfile/stats.tsx
function Stats(_ref){var fans=_ref.fans,likes=_ref.likes,dongtai=_ref.dongtai,guanzhu=_ref.guanzhu;return/*#__PURE__*/react_default.a.createElement(row["a" /* default */],null,/*#__PURE__*/react_default.a.createElement(col["a" /* default */],{span:6,className:statsmodules_default.a.span},/*#__PURE__*/react_default.a.createElement(remax_wechat["e" /* Text */],{className:statsmodules_default.a.count},fans),/*#__PURE__*/react_default.a.createElement(remax_wechat["e" /* Text */],{className:statsmodules_default.a.title},"\u7C89\u4E1D\u6570")),/*#__PURE__*/react_default.a.createElement(col["a" /* default */],{span:6,className:statsmodules_default.a.span},/*#__PURE__*/react_default.a.createElement(remax_wechat["e" /* Text */],{className:statsmodules_default.a.count},likes),/*#__PURE__*/react_default.a.createElement(remax_wechat["e" /* Text */],{className:statsmodules_default.a.title},"\u8D5E\u85CF\u6570")),/*#__PURE__*/react_default.a.createElement(col["a" /* default */],{span:6,className:statsmodules_default.a.span},/*#__PURE__*/react_default.a.createElement(remax_wechat["e" /* Text */],{className:statsmodules_default.a.count},dongtai),/*#__PURE__*/react_default.a.createElement(remax_wechat["e" /* Text */],{className:statsmodules_default.a.title},"\u4F5C\u54C1\u6570")),/*#__PURE__*/react_default.a.createElement(col["a" /* default */],{span:6,className:statsmodules_default.a.span},/*#__PURE__*/react_default.a.createElement(remax_wechat["e" /* Text */],{className:statsmodules_default.a.count},guanzhu),/*#__PURE__*/react_default.a.createElement(remax_wechat["e" /* Text */],{className:statsmodules_default.a.title},"\u5173\u6CE8\u6570")));}
// EXTERNAL MODULE: ./node_modules/annar/esm/card/index.js
var card = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/annar/esm/tag/index.js
var tag = __webpack_require__(143);

// EXTERNAL MODULE: ./src/pages/profile/components/basicProfile/index.css?modules
var basicProfilemodules = __webpack_require__(17);
var basicProfilemodules_default = /*#__PURE__*/__webpack_require__.n(basicProfilemodules);

// CONCATENATED MODULE: ./src/pages/profile/components/basicProfile/index.tsx
function BasicProfile(_ref){var id=_ref.id,avatar=_ref.avatar,nickname=_ref.nickname,certificated=_ref.certificated,fans=_ref.fans,likes=_ref.likes,link=_ref.link,dongtai=_ref.dongtai,guanzhu=_ref.guanzhu,domains=_ref.domains,platform=_ref.platform;console.log('link',link);return/*#__PURE__*/react["createElement"](view["a" /* default */],{className:basicProfilemodules_default.a.wrapper},/*#__PURE__*/react["createElement"](view["a" /* default */],{className:basicProfilemodules_default.a.topPadding}),/*#__PURE__*/react["createElement"](card["a" /* default */],{shadow:true},/*#__PURE__*/react["createElement"](row["a" /* default */],{className:basicProfilemodules_default.a.row1},/*#__PURE__*/react["createElement"](remax_wechat["e" /* Text */],{className:basicProfilemodules_default.a.nickname},nickname),/*#__PURE__*/react["createElement"](certificationStatus["a" /* default */],{certificated:certificated})),/*#__PURE__*/react["createElement"](Stats,{fans:fans,likes:likes,dongtai:dongtai,guanzhu:guanzhu}),/*#__PURE__*/react["createElement"](row["a" /* default */],{className:basicProfilemodules_default.a.row2},/*#__PURE__*/react["createElement"](col["a" /* default */],{span:12,className:basicProfilemodules_default.a.col},/*#__PURE__*/react["createElement"](CopyableText,{prefix:'ID：',text:id})),/*#__PURE__*/react["createElement"](col["a" /* default */],{span:12,className:basicProfilemodules_default.a.col},/*#__PURE__*/react["createElement"](CopyableText,{hiddenText:true,prefix:'链接',text:link}))),/*#__PURE__*/react["createElement"](row["a" /* default */],{className:basicProfilemodules_default.a.row3},domains&&domains.map(function(domain){return/*#__PURE__*/react["createElement"](tag["a" /* default */],{key:domain,color:'green'},domain);})),/*#__PURE__*/react["createElement"](platformCorner["a" /* default */],{platform:platform})),/*#__PURE__*/react["createElement"](view["a" /* default */],{className:basicProfilemodules_default.a.avatarWrapper},/*#__PURE__*/react["createElement"](components_avatar["a" /* default */],{url:avatar,className:basicProfilemodules_default.a.avatar})));}
// EXTERNAL MODULE: ./node_modules/annar/esm/icon/index.js
var esm_icon = __webpack_require__(23);

// EXTERNAL MODULE: ./src/components/navButton/index.css?modules
var navButtonmodules = __webpack_require__(39);
var navButtonmodules_default = /*#__PURE__*/__webpack_require__.n(navButtonmodules);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(7);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/components/navButton/index.tsx
function NavButton(_ref){var icon=_ref.icon,text=_ref.text,onClick=_ref.onClick,highlight=_ref.highlight,openType=_ref.openType,url=_ref.url;var renderContent=function renderContent(){return/*#__PURE__*/react["createElement"](react["Fragment"],null,icon&&/*#__PURE__*/react["createElement"](esm_icon["a" /* default */],{type:icon,size:40,color:highlight?'#03a9f4':'#606060',style:{textShadow:highlight?'#03a9f4 0px 2px 20px 0px':undefined}}),/*#__PURE__*/react["createElement"](remax_wechat["e" /* Text */],{className:classnames_default()(navButtonmodules_default.a.text,highlight&&navButtonmodules_default.a.highlight)},text));};if(openType&&url){return/*#__PURE__*/react["createElement"](remax_wechat["c" /* Navigator */],{target:'self',className:navButtonmodules_default.a.navButton,openType:openType,url:url},renderContent());}return/*#__PURE__*/react["createElement"](view["a" /* default */],{onTap:onClick,className:navButtonmodules_default.a.navButton},renderContent());}
// EXTERNAL MODULE: ./src/pages/profile/components/bottomNav/action.css?modules
var actionmodules = __webpack_require__(40);
var actionmodules_default = /*#__PURE__*/__webpack_require__.n(actionmodules);

// EXTERNAL MODULE: ./node_modules/remax/one.js + 27 modules
var one = __webpack_require__(4);

// CONCATENATED MODULE: ./src/pages/profile/components/bottomNav/action.tsx
function Action(_ref){var title=_ref.title,desc=_ref.desc,action=_ref.action,corner=_ref.corner,onTap=_ref.onTap;return/*#__PURE__*/react["createElement"](view["a" /* default */],{className:actionmodules_default.a.wrapper// style={corner > 1 ? { marginTop: 20 } : undefined}
},/*#__PURE__*/react["createElement"](view["a" /* default */],{className:actionmodules_default.a.row1},/*#__PURE__*/react["createElement"](one["Text"],null,title),/*#__PURE__*/react["createElement"](view["a" /* default */],{className:actionmodules_default.a.buttonWrapper},/*#__PURE__*/react["createElement"](esm_button["a" /* default */],{type:'primary',onTap:onTap},action))),/*#__PURE__*/react["createElement"](view["a" /* default */],{className:actionmodules_default.a.row2},/*#__PURE__*/react["createElement"](one["Text"],null,desc)));}
// EXTERNAL MODULE: ./node_modules/annar/esm/popup/index.js + 1 modules
var popup = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/axios-hooks/es/index.js + 1 modules
var es = __webpack_require__(8);

// EXTERNAL MODULE: ./src/pages/profile/components/bottomNav/index.css?modules
var bottomNavmodules = __webpack_require__(32);
var bottomNavmodules_default = /*#__PURE__*/__webpack_require__.n(bottomNavmodules);

// CONCATENATED MODULE: ./src/pages/profile/components/bottomNav/index.tsx
function bottomNav_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function bottomNav_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){bottomNav_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){bottomNav_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function BottomNavs(_ref){var userId=_ref.userId;var _useAxios=Object(es["b" /* default */])({url:'nilaicha_user/1/query_vip'},{useCache:false}),_useAxios2=_slicedToArray(_useAxios,2),data=_useAxios2[0].data,checkVip=_useAxios2[1];var isVip=data&&data.body;console.log('is vip',isVip);var _useState=Object(react["useState"])(false),_useState2=_slicedToArray(_useState,2),sheet=_useState2[0],openSheet=_useState2[1];return/*#__PURE__*/react["createElement"](react["Fragment"],null,/*#__PURE__*/react["createElement"](view["a" /* default */],{className:bottomNavmodules_default.a.wrapper},/*#__PURE__*/react["createElement"](NavButton,{icon:'home',text:'首页',onClick:/*#__PURE__*/bottomNav_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee(){return runtime_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Object(remax_wechat["q" /* switchTab */])({url:'/pages/index/index'});case 2:case"end":return _context.stop();}}},_callee);}))}),/*#__PURE__*/react["createElement"](view["a" /* default */],{className:bottomNavmodules_default.a.shareWrapper},/*#__PURE__*/react["createElement"](NavButton,{icon:'share',text:'分享'}),/*#__PURE__*/react["createElement"](remax_wechat["a" /* Button */],{openType:'share',className:bottomNavmodules_default.a.share})),!isVip&&/*#__PURE__*/react["createElement"](esm_button["a" /* default */],{shape:'square',type:'primary',size:'large',style:{width:300},onTap:/*#__PURE__*/bottomNav_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee2(){return runtime_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(isVip){_context2.next=3;break;}_context2.next=3;return Object(remax_wechat["i" /* navigateTo */])({url:"/pages/memberize/index?redirect=".concat(userId)});case 3:case"end":return _context2.stop();}}},_callee2);}))},isVip?'对接合作':'开通会员')),/*#__PURE__*/react["createElement"](popup["a" /* default */],{open:sheet,closeable:true,square:true,onClose:function onClose(){openSheet(false);},position:'bottom',title:/*#__PURE__*/react["createElement"](view["a" /* default */],{className:bottomNavmodules_default.a.title},/*#__PURE__*/react["createElement"](remax_wechat["e" /* Text */],null,"\u4EE5\u4E0B"),/*#__PURE__*/react["createElement"](remax_wechat["e" /* Text */],null,"\u65B9\u5F0F\u5373\u53EF\u52A0\u5165"))},/*#__PURE__*/react["createElement"](view["a" /* default */],{className:bottomNavmodules_default.a.action},/*#__PURE__*/react["createElement"](Action,{title:'加入会员',action:'立即加入',desc:'加入会员即可查看TA的名片，取得联系展开合作！',corner:2,onTap:/*#__PURE__*/bottomNav_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee3(){return runtime_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return Object(remax_wechat["i" /* navigateTo */])({url:"/pages/memberize/index?redirect=".concat(userId)});case 2:case"end":return _context3.stop();}}},_callee3);}))}))));}
// CONCATENATED MODULE: ./src/pages/profile/components/contact/index.tsx
function Contact(_ref){var receiver=_ref.receiver,wechat=_ref.wechat,phone=_ref.phone,address=_ref.address,weibo=_ref.weibo,email=_ref.email;var renderLine=function renderLine(title,value){return/*#__PURE__*/react["createElement"](row["a" /* default */],null,/*#__PURE__*/react["createElement"](col["a" /* default */],{span:12},/*#__PURE__*/react["createElement"](CopyableText,{prefix:title,text:value})));};if(receiver||wechat||phone||address||weibo||email){return/*#__PURE__*/react["createElement"](card["a" /* default */],{shadow:true,title:'联系方式',style:{marginTop:30}},receiver&&renderLine('收货人',receiver),wechat&&renderLine('微信',wechat),weibo&&renderLine('微博',weibo),phone&&renderLine('联系电话',phone),address&&renderLine('地址',address),email&&renderLine('邮箱',email));}return null;}
// CONCATENATED MODULE: ./src/pages/profile/components/introduction/index.tsx
function Introduction(_ref){var introduction=_ref.introduction;return/*#__PURE__*/react["createElement"](card["a" /* default */],{title:'个性签名',shadow:true,style:{marginTop:30}},introduction);}
// EXTERNAL MODULE: ./src/pages/profile/components/remark/index.css?modules
var remarkmodules = __webpack_require__(87);
var remarkmodules_default = /*#__PURE__*/__webpack_require__.n(remarkmodules);

// CONCATENATED MODULE: ./src/pages/profile/components/remark/index.tsx
function _objectDestructuringEmpty(obj){if(obj==null)throw new TypeError("Cannot destructure undefined");}function Remark(_ref){_objectDestructuringEmpty(_ref);return/*#__PURE__*/react["createElement"](card["a" /* default */],{shadow:true,style:{marginTop:30}},/*#__PURE__*/react["createElement"](remax_wechat["e" /* Text */],null,"\u5907\u6CE8\uFF1A\u540D\u7247\u5C5E\u4E8E\u8FBE\u4EBA\u8F91\u5199\uFF0C\u901A\u544A\u53CC\u65B9\u79C1\u4E0B\u6C9F\u901A\u65F6\u6CE8\u610F\u9632\u9A97\uFF0C\u5982\u9047\u865A\u5047\u540D\u7247\u3001\u76D7\u7528\u4ED6\u4EBA\u540D\u7247\u3001\u6B3A\u8BC8\u4FE1\u606F\u7B49\u4E0D\u826F\u884C\u4E3A\uFF0C\u8BF7\u7ACB\u5373\u5411\u5E73\u53F0\u300E"),/*#__PURE__*/react["createElement"](esm_button["a" /* default */],{className:remarkmodules_default.a.button},"\u4E3E\u62A5"),/*#__PURE__*/react["createElement"](remax_wechat["e" /* Text */],null,"\u300F"));}
// CONCATENATED MODULE: ./src/pages/profile/index.tsx
function profile_slicedToArray(arr,i){return profile_arrayWithHoles(arr)||profile_iterableToArrayLimit(arr,i)||profile_unsupportedIterableToArray(arr,i)||profile_nonIterableRest();}function profile_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function profile_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return profile_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return profile_arrayLikeToArray(o,minLen);}function profile_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function profile_iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function profile_arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function Profile(){var query=Object(remax_esm["b" /* useQuery */])();var _useAxios=Object(es["b" /* default */])({url:"/user_authors/".concat(query.userId)}),_useAxios2=profile_slicedToArray(_useAxios,1),_useAxios2$=_useAxios2[0],loading=_useAxios2$.loading,error=_useAxios2$.error,data=_useAxios2$.data;var profile=data&&data.body;return/*#__PURE__*/react["createElement"](authorizationLayout["a" /* default */],null,profile&&/*#__PURE__*/react["createElement"](Background,{title:profile.nickname,bottomNav:/*#__PURE__*/react["createElement"](BottomNavs,{userId:query.userId})},/*#__PURE__*/react["createElement"](BasicProfile,{id:profile.short_id,avatar:profile.avatar_300_url,nickname:profile.nickname,certificated:true,likes:profile.total_favorited,fans:profile.follower_count,domains:[profile.user_tags],dongtai:profile.dongtai_count,guanzhu:profile.following_count,platform:profile.platform,link:profile.link}),/*#__PURE__*/react["createElement"](Contact,{receiver:undefined,wechat:profile.weixin,weibo:profile.weibo,phone:profile.phone,address:undefined,email:profile.email}),/*#__PURE__*/react["createElement"](Introduction,{introduction:profile.signature}),/*#__PURE__*/react["createElement"](Remark,null)));}
// CONCATENATED MODULE: ./src/pages/profile/index.entry.js
Page(Object(esm["f" /* createPageConfig */])(Profile,'pages/profile/index'));

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"span":"span___cQgrt","title":"title___3mqht","count":"count____H9Mx","yuan":"yuan___1zVpP","price":"price___2yYWE"};

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"wrapper___1F7An","topPadding":"topPadding___3A4-A","avatarWrapper":"avatarWrapper___Odidr","row1":"row1___2Vy5X","nickname":"nickname___2L4Mw","row2":"row2___I8FcP","col":"col___3vZkX","row3":"row3___3sO__"};

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"background":"background___2ynSu","top":"top___3H_9A","content":"content___3IZpB","bottomPadding":"bottomPadding___i6cvQ","bottomBar":"bottomBar___3jq30"};

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"wrapper___1Xvq-","title":"title___2D1vF","highlight":"highlight___1eMzP","action":"action___2X7uf","shareWrapper":"shareWrapper___2Jj8a","share":"share___2v4Mn"};

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"wrapper___2OlGz","prefix":"prefix___32U9m","text":"text___1nUsI","button":"button___piYnI"};

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"navButton":"navButton___fWEkU","text":"text___1mJHN","highlight":"highlight___1LCqn"};

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"wrapper___3y0Sb","row1":"row1___3Gao0","row2":"row2___hbgLr","leftCorner":"leftCorner___3v63g","buttonWrapper":"buttonWrapper___winxr","share":"share___1m6sH"};

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"button":"button___2l-Xo"};

/***/ })

},[[125,0,1,2]]]);