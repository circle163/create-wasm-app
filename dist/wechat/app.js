require('./runtime.js');
require('./remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[3],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// CONCATENATED MODULE: ./src/hooks/authStatus.ts
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function AuthStatusReducer(state,action){switch(action.type){case'saveJwt':wx.setStorageSync('token',action.payload);return{hasLogin:true};case'cleanJwt':return{hasLogin:false};}}function loadFromStorage(){var token=wx.getStorageSync('token');return{hasLogin:!!token};}function useAuthStatus(){var _useReducer=Object(react["useReducer"])(AuthStatusReducer,loadFromStorage()),_useReducer2=_slicedToArray(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1];return _objectSpread(_objectSpread({},state),{},{updateJwtToken:function updateJwtToken(token){dispatch({type:'saveJwt',payload:{token:token}});},cleanJwtToken:function cleanJwtToken(){dispatch({type:'cleanJwt'});}});}
// EXTERNAL MODULE: ./node_modules/axios-hooks/es/index.js + 1 modules
var es = __webpack_require__(8);

// EXTERNAL MODULE: ./src/app.css
var app = __webpack_require__(119);

// EXTERNAL MODULE: ./src/boot/axios.ts + 1 modules
var axios = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/remax/wechat.js
var wechat = __webpack_require__(3);

// EXTERNAL MODULE: ./src/hooks/pops.ts
var pops = __webpack_require__(26);

// CONCATENATED MODULE: ./src/app.tsx
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function app_slicedToArray(arr,i){return app_arrayWithHoles(arr)||app_iterableToArrayLimit(arr,i)||app_unsupportedIterableToArray(arr,i)||app_nonIterableRest();}function app_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function app_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return app_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return app_arrayLikeToArray(o,minLen);}function app_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function app_iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function app_arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function app_App(_ref){var children=_ref.children;var _useState=Object(react["useState"])(false),_useState2=app_slicedToArray(_useState,2),requiresUserInfo=_useState2[0],setUserInfoRequired=_useState2[1];var _useState3=Object(react["useState"])(false),_useState4=app_slicedToArray(_useState3,2),requiresUserPhone=_useState4[0],setUserPhoneRequired=_useState4[1];var setUserInfoResolved=Object(react["useCallback"])(function(){setUserInfoRequired(false);},[]);var setUserPhoneResolved=Object(react["useCallback"])(function(){setUserPhoneRequired(false);},[]);var _useAuthStatus=useAuthStatus(),updateJwtToken=_useAuthStatus.updateJwtToken;var _useAxios=Object(es["b" /* default */])({url:'/nilaicha_user/1/login',method:'GET'},{manual:true}),_useAxios2=app_slicedToArray(_useAxios,2),loginBackend=_useAxios2[1];var autoLogin=/*#__PURE__*/function(){var _ref2=_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee(){var _yield$login,code,errMsg,_yield$loginBackend,data,_data$body$data,login_key,need_userinfo,need_phone;return runtime_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Object(wechat["h" /* login */])();case 2:_yield$login=_context.sent;code=_yield$login.code;errMsg=_yield$login.errMsg;if(code){_context.next=10;break;}console.log('wx login failed',errMsg);throw new Error(errMsg);case 10:_context.next=12;return loginBackend({params:{code:code}});case 12:_yield$loginBackend=_context.sent;data=_yield$loginBackend.data;_data$body$data=data.body.data,login_key=_data$body$data.login_key,need_userinfo=_data$body$data.need_userinfo,need_phone=_data$body$data.need_phone;updateJwtToken(login_key);if(need_userinfo==1){// setUserInfoRequired(true);
}if(need_phone==1){// setUserPhoneRequired(true);
}case 18:case"end":return _context.stop();}}},_callee);}));return function autoLogin(){return _ref2.apply(this,arguments);};}();Object(react["useEffect"])(function(){autoLogin().catch(function(e){console.log('fatal error',e);});},[]);return/*#__PURE__*/react["createElement"](pops["a" /* PopRequirementProvider */],{value:{requiresUserInfo:requiresUserInfo,requiresUserPhone:requiresUserPhone,setUserInfoResolved:setUserInfoResolved,setUserPhoneResolved:setUserPhoneResolved}},children);}/* harmony default export */ var src_app = (app_App);
// CONCATENATED MODULE: ./src/app.entry.js
App(Object(esm["c" /* createAppConfig */])(src_app));

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/remax/runtime.js

// EXTERNAL MODULE: external "require('/__remax_runtime_options__')"
var _remax_runtime_options_ = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/@remax/apply-runtime-options.js
var pluginDriver=new esm["a" /* PluginDriver */]([__webpack_require__(98)].map(function(p){return p.default||p;}));esm["b" /* RuntimeOptions */].apply({platform:"wechat",debug:false,pxToRpx:true,pluginDriver:pluginDriver,hostComponents:_remax_runtime_options_["hostComponents"],pageEvents:_remax_runtime_options_["pageEvents"],appEvents:_remax_runtime_options_["appEvents"]});

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = require('/__remax_runtime_options__');

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function get(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(k!=="default"&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);}__setModuleDefault(result,mod);return result;};Object.defineProperty(exports,"__esModule",{value:true});var React=__importStar(__webpack_require__(0));var one_1=__webpack_require__(4);var styles={screen:{height:'100vh',backgroundColor:'#fff',lineHeight:1.4,textAlign:'center'},text:{color:'#999',fontSize:'16PX'}};var ErrorScreen=function ErrorScreen(){return React.createElement(one_1.View,{style:styles.screen},React.createElement(one_1.View,{style:styles.text},"\u9875\u9762\u9047\u5230\u4E00\u4E9B\u95EE\u9898"));};exports.default=ErrorScreen;

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function get(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(k!=="default"&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);}__setModuleDefault(result,mod);return result;};Object.defineProperty(exports,"__esModule",{value:true});var React=__importStar(__webpack_require__(0));var ErrorScreen=/*#__PURE__*/function(_React$Component){_inherits(ErrorScreen,_React$Component);var _super=_createSuper(ErrorScreen);function ErrorScreen(){var _this;_classCallCheck(this,ErrorScreen);_this=_super.apply(this,arguments);_this.state={error:null};return _this;}_createClass(ErrorScreen,[{key:"componentDidCatch",value:function componentDidCatch(error){console.error(error);}},{key:"render",value:function render(){var error=this.state.error;var errorScreen=this.props.errorScreen;if(error){console.log(111);return React.createElement(errorScreen,{error:error});}return this.props.children;}}],[{key:"getDerivedStateFromError",value:function getDerivedStateFromError(error){return{error:error};}}]);return ErrorScreen;}(React.Component);exports.default=ErrorScreen;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
module.exports = __webpack_require__(135);


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var D_kkd_code_nilaicha_wx_app_node_modules_remax_plugin_error_screen_lib_ErrorScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70);
/* harmony import */ var D_kkd_code_nilaicha_wx_app_node_modules_remax_plugin_error_screen_lib_ErrorScreen_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_kkd_code_nilaicha_wx_app_node_modules_remax_plugin_error_screen_lib_ErrorScreen_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_kkd_code_nilaicha_wx_app_node_modules_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71);
/* harmony import */ var D_kkd_code_nilaicha_wx_app_node_modules_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(D_kkd_code_nilaicha_wx_app_node_modules_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/* harmony default export */ __webpack_exports__["default"] = ({onPageComponent:function onPageComponent(_ref){var component=_ref.component;function ErrorBoundaryWrap(props,ref){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(D_kkd_code_nilaicha_wx_app_node_modules_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3___default.a,{errorScreen:D_kkd_code_nilaicha_wx_app_node_modules_remax_plugin_error_screen_lib_ErrorScreen_js__WEBPACK_IMPORTED_MODULE_2___default.a},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component,_objectSpread(_objectSpread({},props),{},{ref:ref})));}ErrorBoundaryWrap.displayName='ErrorBoundary';return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(ErrorBoundaryWrap);}});

/***/ })

},[[91,0,1]]]);