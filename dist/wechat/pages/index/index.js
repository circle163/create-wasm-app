require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[5],{

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(131);


/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);

// EXTERNAL MODULE: ./node_modules/annar/dist/annar.css
var annar = __webpack_require__(50);

// EXTERNAL MODULE: ./src/boot/axios.ts + 1 modules
var axios = __webpack_require__(52);

// EXTERNAL MODULE: ./src/components/authorizationLayout/index.tsx + 1 modules
var authorizationLayout = __webpack_require__(27);

// EXTERNAL MODULE: ./src/hooks/pops.ts
var pops = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// CONCATENATED MODULE: ./src/hooks/searchOptions.ts
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function SearchOptionReducer(state,action){switch(action.type){case'changeFilters':wx.setStorageSync('search-platform',action.payload.platform);wx.setStorageSync('search-fans',action.payload.fans);return _objectSpread(_objectSpread({},state),action.payload);case'changeSearchText':wx.setStorageSync('search-text',action.payload);return _objectSpread(_objectSpread({},state),{},{search:action.payload});}}function loadFromStorage(){return{search:wx.getStorageSync('search-text'),platform:wx.getStorageSync('search-platform'),fans:wx.getStorageSync('search-fans')};}function useSearchOptions(){var _useReducer=Object(react["useReducer"])(SearchOptionReducer,loadFromStorage()),_useReducer2=_slicedToArray(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1];return _objectSpread(_objectSpread({},state),{},{changeSearchText:function changeSearchText(text){dispatch({type:'changeSearchText',payload:text});},changeFilters:function changeFilters(platform,fans){dispatch({type:'changeFilters',payload:{platform:platform,fans:fans}});}});}
// CONCATENATED MODULE: ./src/hooks/searchResults.ts
function searchResults_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function searchResults_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){searchResults_ownKeys(Object(source),true).forEach(function(key){searchResults_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{searchResults_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function searchResults_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function searchResults_slicedToArray(arr,i){return searchResults_arrayWithHoles(arr)||searchResults_iterableToArrayLimit(arr,i)||searchResults_unsupportedIterableToArray(arr,i)||searchResults_nonIterableRest();}function searchResults_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function searchResults_iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function searchResults_arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||searchResults_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function searchResults_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return searchResults_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return searchResults_arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return searchResults_arrayLikeToArray(arr);}function searchResults_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function SearchResultReducer(state,action){switch(action.type){case'appendResults':var resultMap=state.resultMap;var appends=action.payload.filter(function(_ref){var id=_ref.id;return!resultMap[id];});appends.forEach(function(r){resultMap[r.id]=r;});return{resultMap:resultMap,results:[].concat(_toConsumableArray(state.results),_toConsumableArray(appends))};case'resetResults':return{resultMap:{},results:[]};}}function useSearchResult(){var _useReducer=Object(react["useReducer"])(SearchResultReducer,{resultMap:{},results:[]}),_useReducer2=searchResults_slicedToArray(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1];return searchResults_objectSpread(searchResults_objectSpread({},state),{},{appendResults:function appendResults(results){dispatch({type:'appendResults',payload:results||[]});},resetResults:function resetResults(){dispatch({type:'resetResults'});}});}
// EXTERNAL MODULE: ./src/components/avatar/index.tsx
var components_avatar = __webpack_require__(22);

// EXTERNAL MODULE: ./src/components/certificationStatus/index.tsx
var certificationStatus = __webpack_require__(45);

// EXTERNAL MODULE: ./src/components/platformCorner/index.tsx
var platformCorner = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/annar/esm/card/index.js
var card = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/annar/esm/row/index.js
var row = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/annar/esm/col/index.js
var col = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/annar/esm/tag/index.js
var tag = __webpack_require__(143);

// EXTERNAL MODULE: ./node_modules/remax/wechat.js
var wechat = __webpack_require__(3);

// EXTERNAL MODULE: ./src/pages/index/components/infoBlock/index.css?modules
var infoBlockmodules = __webpack_require__(15);
var infoBlockmodules_default = /*#__PURE__*/__webpack_require__.n(infoBlockmodules);

// CONCATENATED MODULE: ./src/pages/index/components/infoBlock/index.tsx
function InfoBlock(_ref){var platform=_ref.platform,avatar=_ref.avatar,nickname=_ref.nickname,fans=_ref.fans,likes=_ref.likes,domain=_ref.domain,certified=_ref.certified,onTap=_ref.onTap;return/*#__PURE__*/react["createElement"](card["a" /* default */],{style:{marginTop:10},onTap:onTap},/*#__PURE__*/react["createElement"](row["a" /* default */],null,/*#__PURE__*/react["createElement"](col["a" /* default */],{span:6,className:infoBlockmodules_default.a.avatarWrapper},/*#__PURE__*/react["createElement"](components_avatar["a" /* default */],{url:avatar})),/*#__PURE__*/react["createElement"](col["a" /* default */],{span:18,className:infoBlockmodules_default.a.detail},/*#__PURE__*/react["createElement"](row["a" /* default */],{className:infoBlockmodules_default.a.row},/*#__PURE__*/react["createElement"](wechat["e" /* Text */],{className:infoBlockmodules_default.a.nickname},nickname)),/*#__PURE__*/react["createElement"](row["a" /* default */],{className:infoBlockmodules_default.a.row},/*#__PURE__*/react["createElement"](col["a" /* default */],{span:12},/*#__PURE__*/react["createElement"](wechat["e" /* Text */],{className:infoBlockmodules_default.a.field},"\u7C89\u4E1D\u6570\uFF1A"),/*#__PURE__*/react["createElement"](wechat["e" /* Text */],{className:infoBlockmodules_default.a.fieldValue},fans)),/*#__PURE__*/react["createElement"](col["a" /* default */],{span:12},/*#__PURE__*/react["createElement"](wechat["e" /* Text */],{className:infoBlockmodules_default.a.field},"\u8D5E\u85CF\u6570\uFF1A"),/*#__PURE__*/react["createElement"](wechat["e" /* Text */],{className:infoBlockmodules_default.a.fieldValue},likes))),/*#__PURE__*/react["createElement"](row["a" /* default */],{className:infoBlockmodules_default.a.row},/*#__PURE__*/react["createElement"](col["a" /* default */],{span:12},/*#__PURE__*/react["createElement"](certificationStatus["a" /* default */],{certificated:certified})),/*#__PURE__*/react["createElement"](col["a" /* default */],{span:12},/*#__PURE__*/react["createElement"](wechat["e" /* Text */],{className:infoBlockmodules_default.a.field},"\u9886\u57DF\uFF1A"),/*#__PURE__*/react["createElement"](tag["a" /* default */],null,domain))))),/*#__PURE__*/react["createElement"](platformCorner["a" /* default */],{platform:platform}));}
// EXTERNAL MODULE: ./node_modules/annar/esm/button/index.js + 3 modules
var esm_button = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/annar/esm/web/base/view/index.js + 3 modules
var view = __webpack_require__(138);

// EXTERNAL MODULE: ./src/pages/index/components/searchPanel/selectors.css?modules
var selectorsmodules = __webpack_require__(54);
var selectorsmodules_default = /*#__PURE__*/__webpack_require__.n(selectorsmodules);

// CONCATENATED MODULE: ./src/pages/index/components/searchPanel/selectors.tsx
function Selectors(_ref){var options=_ref.options,value=_ref.value,onSelect=_ref.onSelect;return/*#__PURE__*/react["createElement"](view["a" /* default */],{className:selectorsmodules_default.a.selectors},options&&options.map(function(_ref2,index){var title=_ref2.title,optValue=_ref2.value;return/*#__PURE__*/react["createElement"](esm_button["a" /* default */],{className:selectorsmodules_default.a.sbutton,size:'large',key:optValue,type:optValue==value?'primary':'default',shape:'square',onTap:function onTap(){return onSelect&&onSelect(optValue);},__key:optValue},title);}));}
// EXTERNAL MODULE: ./src/components/titledBlock/index.css?modules
var titledBlockmodules = __webpack_require__(49);
var titledBlockmodules_default = /*#__PURE__*/__webpack_require__.n(titledBlockmodules);

// CONCATENATED MODULE: ./src/components/titledBlock/index.tsx
function TitledBlock(_ref){var title=_ref.title,children=_ref.children;return/*#__PURE__*/react["createElement"](view["a" /* default */],{className:titledBlockmodules_default.a.block},/*#__PURE__*/react["createElement"](view["a" /* default */],{className:titledBlockmodules_default.a.title},title),/*#__PURE__*/react["createElement"](view["a" /* default */],{className:titledBlockmodules_default.a.content},children));}
// EXTERNAL MODULE: ./src/pages/index/components/searchPanel/searchFilters.css?modules
var searchFiltersmodules = __webpack_require__(37);
var searchFiltersmodules_default = /*#__PURE__*/__webpack_require__.n(searchFiltersmodules);

// CONCATENATED MODULE: ./src/pages/index/components/searchPanel/searchFilters.tsx
function searchFilters_slicedToArray(arr,i){return searchFilters_arrayWithHoles(arr)||searchFilters_iterableToArrayLimit(arr,i)||searchFilters_unsupportedIterableToArray(arr,i)||searchFilters_nonIterableRest();}function searchFilters_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function searchFilters_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return searchFilters_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return searchFilters_arrayLikeToArray(o,minLen);}function searchFilters_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function searchFilters_iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function searchFilters_arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var platforms=[{title:'全部',value:'all'},{title:'抖音',value:'douyin'},{title:'小红书',value:'xiaohongshu'},{title:'快手',value:'kuaishou'}];var fanScales=[{value:'all',title:'不限'},{value:'1k',title:'1千以上'},{value:'5k',title:'5千以上'},{value:'1w',title:'1万以上'},{value:'5w',title:'5万以上'},{value:'10w',title:'10万以上'},{value:'100w',title:'100万以上'},{value:'1000w',title:'1000万以上'}];function SearchFilters(_ref){var prevPlatform=_ref.platform,prevFans=_ref.fans,onFiltered=_ref.onFiltered;var _useState=Object(react["useState"])(prevPlatform||'all'),_useState2=searchFilters_slicedToArray(_useState,2),platform=_useState2[0],setPlatform=_useState2[1];var _useState3=Object(react["useState"])(prevFans||'all'),_useState4=searchFilters_slicedToArray(_useState3,2),fans=_useState4[0],setFans=_useState4[1];return/*#__PURE__*/react["createElement"](view["a" /* default */],{className:searchFiltersmodules_default.a.filters},/*#__PURE__*/react["createElement"](TitledBlock,{title:'平台'},/*#__PURE__*/react["createElement"](Selectors,{options:platforms,value:platform,onSelect:function onSelect(opt){return setPlatform(opt);}})),/*#__PURE__*/react["createElement"](TitledBlock,{title:'粉丝数'},/*#__PURE__*/react["createElement"](Selectors,{options:fanScales,value:fans,onSelect:function onSelect(opt){return setFans(opt);}})),/*#__PURE__*/react["createElement"](view["a" /* default */],{className:searchFiltersmodules_default.a.buttonGroup},/*#__PURE__*/react["createElement"](esm_button["a" /* default */],{className:searchFiltersmodules_default.a.resetButton,shape:'square',onTap:function onTap(){setPlatform('all');setFans('all');onFiltered&&onFiltered();}},"\u91CD\u7F6E"),/*#__PURE__*/react["createElement"](esm_button["a" /* default */],{className:searchFiltersmodules_default.a.searchButton,shape:'square',type:'primary',onTap:function onTap(){onFiltered&&onFiltered({platform:platform,fans:fans});}},"\u641C\u7D22")));}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function arrayWithHoles_arrayWithHoles(arr){if(Array.isArray(arr))return arr;}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function iterableToArrayLimit_iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(86);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function nonIterableRest_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function slicedToArray_slicedToArray(arr,i){return arrayWithHoles_arrayWithHoles(arr)||iterableToArrayLimit_iterableToArrayLimit(arr,i)||Object(unsupportedIterableToArray["a" /* default */])(arr,i)||nonIterableRest_nonIterableRest();}
// EXTERNAL MODULE: ./node_modules/remax/one.js + 27 modules
var one = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(7);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/annar/esm/icon/index.js
var icon = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/annar/esm/common/index.js
var common = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/annar/esm/search-bar/index.js
var prefixCls=Object(common["a" /* getPrefixCls */])('search_bar');var showBtn=false;var search_bar_SearchBar=function SearchBar(props){var _classNames,_classNames3,_classNames4;var value=props.value,placeholder=props.placeholder,onInput=props.onInput,onClear=props.onClear,onFocus=props.onFocus,onBlur=props.onBlur,onActionClick=props.onActionClick,onSubmit=props.onSubmit,inputStyle=props.inputStyle,shape=props.shape,_props$type=props.type,type=_props$type===void 0?'text':_props$type,_props$confirmType=props.confirmType,confirmType=_props$confirmType===void 0?'search':_props$confirmType,style=props.style,focus=props.focus,_props$actionName=props.actionName,actionName=_props$actionName===void 0?'取消':_props$actionName,keepShowActionButton=props.keepShowActionButton,hideActionButton=props.hideActionButton,size=props.size;var _useState=Object(react["useState"])(false),_useState2=slicedToArray_slicedToArray(_useState,2),isFocus=_useState2[0],setIsFocus=_useState2[1];var handleFocus=function handleFocus(e){onFocus===null||onFocus===void 0?void 0:onFocus(e);setIsFocus(true);};var handleBlur=function handleBlur(e){onBlur===null||onBlur===void 0?void 0:onBlur(e);setIsFocus(false);};var handleInput=function handleInput(e){onInput===null||onInput===void 0?void 0:onInput(e.target.value);};var handleClear=function handleClear(){onClear===null||onClear===void 0?void 0:onClear(value);};var handleActionClick=function handleActionClick(){showBtn=false;onActionClick===null||onActionClick===void 0?void 0:onActionClick();};var handleConfirm=function handleConfirm(e){onSubmit===null||onSubmit===void 0?void 0:onSubmit(e.target.value);};var active=isFocus||value||focus;if(active&&!showBtn){showBtn=true;}var iconSize='32px';if(size==='large'){iconSize='36px';}if(size==='small'){iconSize='28px';}return/*#__PURE__*/react["createElement"](one["View"],{className:classnames_default()((_classNames={},Object(defineProperty["a" /* default */])(_classNames,prefixCls,true),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-large"),size==='large'),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-small"),size==='small'),_classNames)),style:style},/*#__PURE__*/react["createElement"](one["View"],{className:classnames_default()("".concat(prefixCls,"-input"),Object(defineProperty["a" /* default */])({},"".concat(prefixCls,"-input-").concat(shape),shape)),style:inputStyle},/*#__PURE__*/react["createElement"](one["View"],{className:classnames_default()((_classNames3={},Object(defineProperty["a" /* default */])(_classNames3,"".concat(prefixCls,"-input-synthetic"),true),Object(defineProperty["a" /* default */])(_classNames3,"".concat(prefixCls,"-input-is_left"),active),_classNames3))},/*#__PURE__*/react["createElement"](one["View"],{className:"".concat(prefixCls,"-input-synthetic-icon")},/*#__PURE__*/react["createElement"](icon["a" /* default */],{type:"search",size:iconSize,color:"#999"})),/*#__PURE__*/react["createElement"](one["View"],{className:"".concat(prefixCls,"-input-synthetic-placeholder"),style:{visibility:active?'hidden':'visible'}},placeholder)),/*#__PURE__*/react["createElement"](one["Input"],{className:"".concat(prefixCls,"-input-value")// @ts-ignore
,type:type,confirmType:confirmType,value:value,onFocus:handleFocus,onBlur:handleBlur,onInput:handleInput,onConfirm:handleConfirm,focus:focus}),/*#__PURE__*/react["createElement"](one["View"],{className:"".concat(prefixCls,"-input-clear"),onTap:handleClear},/*#__PURE__*/react["createElement"](icon["a" /* default */],{type:"roundclosefill",size:"".concat(iconSize,"px"),color:"#999",style:{visibility:value?'visible':'hidden'}}))),!hideActionButton?/*#__PURE__*/react["createElement"](one["View"],{className:classnames_default()((_classNames4={},Object(defineProperty["a" /* default */])(_classNames4,"".concat(prefixCls,"-action_button"),true),Object(defineProperty["a" /* default */])(_classNames4,"".concat(prefixCls,"-show_action_button"),keepShowActionButton?true:active),_classNames4)),onTap:handleActionClick},actionName):null);};/* harmony default export */ var search_bar = (search_bar_SearchBar);
// EXTERNAL MODULE: ./src/pages/index/components/searchPanel/index.css?modules
var searchPanelmodules = __webpack_require__(55);
var searchPanelmodules_default = /*#__PURE__*/__webpack_require__.n(searchPanelmodules);

// CONCATENATED MODULE: ./src/pages/index/components/searchPanel/index.tsx
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function searchPanel_slicedToArray(arr,i){return searchPanel_arrayWithHoles(arr)||searchPanel_iterableToArrayLimit(arr,i)||searchPanel_unsupportedIterableToArray(arr,i)||searchPanel_nonIterableRest();}function searchPanel_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function searchPanel_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return searchPanel_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return searchPanel_arrayLikeToArray(o,minLen);}function searchPanel_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function searchPanel_iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function searchPanel_arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function SearchPanel(_ref){var search=_ref.search,fans=_ref.fans,platform=_ref.platform,changeSearchText=_ref.changeSearchText,changeFilters=_ref.changeFilters;var _useState=Object(react["useState"])(search),_useState2=searchPanel_slicedToArray(_useState,2),searchWord=_useState2[0],setSearchWord=_useState2[1];var _useState3=Object(react["useState"])(true),_useState4=searchPanel_slicedToArray(_useState3,2),filtersOpened=_useState4[0],openFilters=_useState4[1];return/*#__PURE__*/react["createElement"](card["a" /* default */],null,/*#__PURE__*/react["createElement"](view["a" /* default */],{className:searchPanelmodules_default.a.searchLine},/*#__PURE__*/react["createElement"](view["a" /* default */],{className:searchPanelmodules_default.a.searchBarWrapper},/*#__PURE__*/react["createElement"](search_bar,{value:searchWord||'',placeholder:'搜索红人',confirmType:'search',hideActionButton:true,onClear:/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee(){return runtime_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:changeSearchText(undefined);setSearchWord(undefined);case 2:case"end":return _context.stop();}}},_callee);})),onInput:/*#__PURE__*/function(){var _ref3=_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee2(value){return runtime_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:setSearchWord(value);case 1:case"end":return _context2.stop();}}},_callee2);}));return function(_x){return _ref3.apply(this,arguments);};}(),onSubmit:/*#__PURE__*/function(){var _ref4=_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee3(text){return runtime_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:changeSearchText(text);case 1:case"end":return _context3.stop();}}},_callee3);}));return function(_x2){return _ref4.apply(this,arguments);};}(),onBlur:/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee4(){return runtime_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:changeSearchText(searchWord);case 1:case"end":return _context4.stop();}}},_callee4);}))}))),filtersOpened&&/*#__PURE__*/react["createElement"](SearchFilters,{platform:platform,fans:fans,onFiltered:/*#__PURE__*/function(){var _ref6=_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee5(options){return runtime_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:changeFilters(options===null||options===void 0?void 0:options.platform,options===null||options===void 0?void 0:options.fans);// openFilters(false);
case 1:case"end":return _context5.stop();}}},_callee5);}));return function(_x3){return _ref6.apply(this,arguments);};}()}));}
// EXTERNAL MODULE: ./node_modules/annar/esm/popup/index.js + 1 modules
var popup = __webpack_require__(145);

// CONCATENATED MODULE: ./node_modules/annar/esm/one/base/scroll-view/index.wechat.js
/* harmony default export */ var index_wechat = (wechat["d" /* ScrollView */]);
// EXTERNAL MODULE: ./node_modules/axios-hooks/es/index.js + 1 modules
var es = __webpack_require__(8);

// EXTERNAL MODULE: ./src/pages/index/index.css?modules
var indexmodules = __webpack_require__(25);
var indexmodules_default = /*#__PURE__*/__webpack_require__.n(indexmodules);

// CONCATENATED MODULE: ./src/pages/index/index.tsx
function index_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function index_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){index_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){index_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function index_slicedToArray(arr,i){return index_arrayWithHoles(arr)||index_iterableToArrayLimit(arr,i)||index_unsupportedIterableToArray(arr,i)||index_nonIterableRest();}function index_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function index_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return index_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return index_arrayLikeToArray(o,minLen);}function index_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function index_iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function index_arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function index_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function index_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){index_ownKeys(Object(source),true).forEach(function(key){index_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{index_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function index_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function fixRequestParams(_ref){var platform=_ref.platform,fans=_ref.fans,others=_objectWithoutProperties(_ref,["platform","fans"]);if(platform=='all'){platform=undefined;}if(fans=='all'){fans=undefined;}return index_objectSpread(index_objectSpread({},others),{},{platform:platform,fans:fans});}function Home(){var _useState=Object(react["useState"])(false),_useState2=index_slicedToArray(_useState,2),showError=_useState2[0],setError=_useState2[1];var _usePopRequirement=Object(pops["b" /* usePopRequirement */])(),requiresUserInfo=_usePopRequirement.requiresUserInfo,requiresUserPhone=_usePopRequirement.requiresUserPhone;var canPageNext=!requiresUserInfo&&!requiresUserPhone;var _useState3=Object(react["useState"])(1),_useState4=index_slicedToArray(_useState3,2),page=_useState4[0],setPage=_useState4[1];var _useState5=Object(react["useState"])(new Date()),_useState6=index_slicedToArray(_useState5,2),commandTs=_useState6[0],setCommandTs=_useState6[1];var _useSearchOptions=useSearchOptions(),search=_useSearchOptions.search,platform=_useSearchOptions.platform,fans=_useSearchOptions.fans,_changeSearchText=_useSearchOptions.changeSearchText,_changeFilters=_useSearchOptions.changeFilters;var _useSearchResult=useSearchResult(),results=_useSearchResult.results,appendResults=_useSearchResult.appendResults,resetResults=_useSearchResult.resetResults;var _useAxios=Object(es["b" /* default */])({url:'nilaicha_user/1/nilaicha_user_info'}),_useAxios2=index_slicedToArray(_useAxios,2),data=_useAxios2[0].data,refetch=_useAxios2[1];var _useAxios3=Object(es["b" /* default */])({url:'/nilaicha_user/1/get_user_phone',method:'POST'},{manual:true}),_useAxios4=index_slicedToArray(_useAxios3,2),updateUserPhone=_useAxios4[1];var userInfo=data&&data.body;var fetchData=function fetchData(){axios["a" /* client */].get('/user_authors/1/get_author_list',{params:fixRequestParams({search:search,platform:platform,fans:fans,page:page,limit:10})}).then(function(_ref2){var data=_ref2.data;if(data&&data.code!=0){setError(true);}else{var _results=data&&data.body&&data.body.results;if(_results){appendResults(_results);}}}).catch(function(){return[setError(true)];});};Object(react["useEffect"])(fetchData,[search,platform,fans,page]);// const [{ data }, checkVip] = useAxios(
//     {
//       url: 'nilaicha_user/1/query_vip',
//     },
//     { useCache: false },
// );
// const isVip = data && data.body;
//
// console.log("is vip", isVip)
Object(esm["i" /* usePageEvent */])('onReachBottom',/*#__PURE__*/index_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee(){return runtime_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:canPageNext&&setPage(page+1);case 1:case"end":return _context.stop();}}},_callee);})));return/*#__PURE__*/react["createElement"](authorizationLayout["a" /* default */],null,/*#__PURE__*/react["createElement"](view["a" /* default */],{className:indexmodules_default.a.home},/*#__PURE__*/react["createElement"](SearchPanel,{search:search,platform:platform,fans:fans,changeSearchText:function changeSearchText(text){resetResults();_changeSearchText(text);setPage(1);setCommandTs(new Date());},changeFilters:function changeFilters(platform,fans){resetResults();_changeFilters(platform,fans);setPage(1);setCommandTs(new Date());}}),/*#__PURE__*/react["createElement"](index_wechat,{className:indexmodules_default.a.scrollView},results.map(function(_ref4,index){var id=_ref4.id,avatar_300_url=_ref4.avatar_300_url,nickname=_ref4.nickname,follower_count=_ref4.follower_count,favoriting_count=_ref4.favoriting_count,user_tags=_ref4.user_tags,platform=_ref4.platform;return/*#__PURE__*/react["createElement"](InfoBlock,{key:"".concat(index,"-").concat(id),avatar:avatar_300_url,nickname:nickname,platform:platform,certified:true,fans:follower_count,likes:favoriting_count,domain:user_tags,onTap:/*#__PURE__*/index_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee2(){return runtime_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return Object(wechat["i" /* navigateTo */])({url:"/pages/profile/index?userId=".concat(id)});case 2:case"end":return _context2.stop();}}},_callee2);})),__key:"".concat(index,"-").concat(id)});}))),/*#__PURE__*/react["createElement"](popup["a" /* default */],{open:showError,closeable:true,onClose:function onClose(){return setError(false);}},/*#__PURE__*/react["createElement"](view["a" /* default */],{className:indexmodules_default.a.error},/*#__PURE__*/react["createElement"](view["a" /* default */],{className:indexmodules_default.a.errorTitle},"\u53EA\u6709\u4F1A\u5458\u7528\u6237\u624D\u80FD\u67E5\u770B\u66F4\u591A\u8FBE\u4EBA\u4FE1\u606F!"),/*#__PURE__*/react["createElement"](view["a" /* default */],{className:indexmodules_default.a.buttonWrapper},/*#__PURE__*/react["createElement"](esm_button["a" /* default */],{type:'primary',onTap:/*#__PURE__*/index_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee3(){return runtime_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return Object(wechat["i" /* navigateTo */])({url:"/pages/memberize/index"});case 2:setError(false);case 3:case"end":return _context3.stop();}}},_callee3);}))},"\u6CE8\u518C\u4F1A\u5458"),(!userInfo||!userInfo.phone)&&/*#__PURE__*/react["createElement"](wechat["a" /* Button */],{plain:true,className:indexmodules_default.a.getUserInfo,openType:'getPhoneNumber',onGetPhoneNumber:/*#__PURE__*/function(){var _ref7=index_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee4(e){var detail;return runtime_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:detail=e.detail;if(!detail.errMsg.endsWith(':ok')){_context4.next=9;break;}_context4.next=4;return updateUserPhone({data:detail});case 4:_context4.next=6;return refetch();case 6:_context4.next=8;return Object(wechat["i" /* navigateTo */])({url:"/pages/memberize/index"});case 8:setError(false);case 9:case"end":return _context4.stop();}}},_callee4);}));return function(_x){return _ref7.apply(this,arguments);};}()})))));}
// CONCATENATED MODULE: ./src/pages/index/index.entry.js
Page(Object(esm["f" /* createPageConfig */])(Home,'pages/index/index'));

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"infoBlock":"infoBlock___1iRdi","details":"details___2XY_C","row":"row___22oPd","avatarWrapper":"avatarWrapper___2zVWa","nickname":"nickname___3cf2g","field":"field___ADQet","fieldValue":"fieldValue___fCxdi"};

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"home":"home___Izs7x","searchLine":"searchLine___up7rR","searchBarWrapper":"searchBarWrapper___SjomB","searchFiltersButton":"searchFiltersButton___1Y3Yj","scrollView":"scrollView___1sIjy","error":"error___2U720","errorTitle":"errorTitle___2n0HF","buttonWrapper":"buttonWrapper___3Ke3Y","getUserInfo":"getUserInfo___7-Sty"};

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"filters":"filters___2kC60","buttonGroup":"buttonGroup___2mObX","resetButton":"resetButton___3Oo9f","searchButton":"searchButton___2qR6P"};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"block":"block___1Cc5B","title":"title___2HsYo","content":"content___1GJfN"};

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"selectors":"selectors___3RGLf","sbutton":"sbutton___2n4OO"};

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"searchLine":"searchLine___2ZUzy","searchBarWrapper":"searchBarWrapper___3xMHC","searchFiltersButton":"searchFiltersButton___1mhcs"};

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o,minLen);}

/***/ })

},[[124,0,1,2]]]);