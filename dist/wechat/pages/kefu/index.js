require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[6],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(134);


/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);

// EXTERNAL MODULE: ./node_modules/remax/wechat.js
var wechat = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/annar/esm/one/api/previewImage/index.wechat.js
/* harmony default export */ var index_wechat = (wechat["j" /* previewImage */]);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/remax/one.js + 27 modules
var one = __webpack_require__(4);

// EXTERNAL MODULE: ./src/pages/kefu/index.css?modules
var kefumodules = __webpack_require__(34);
var kefumodules_default = /*#__PURE__*/__webpack_require__.n(kefumodules);

// CONCATENATED MODULE: ./src/pages/kefu/kefu.jpg
/* harmony default export */ var kefu = (__webpack_require__.p + "5a1ae1562a782d04ead75163d020cb1a.jpg");
// EXTERNAL MODULE: ./node_modules/annar/esm/button/index.js + 3 modules
var esm_button = __webpack_require__(144);

// CONCATENATED MODULE: ./src/pages/kefu/index.tsx
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function Note(_ref){var title=_ref.title,content=_ref.content;return/*#__PURE__*/react_default.a.createElement(one["View"],{className:kefumodules_default.a.note},/*#__PURE__*/react_default.a.createElement(one["View"],{className:kefumodules_default.a.title},title),/*#__PURE__*/react_default.a.createElement(one["View"],{className:kefumodules_default.a.content},content));}function Kefu(){return/*#__PURE__*/react_default.a.createElement(one["View"],{className:kefumodules_default.a.kefu},/*#__PURE__*/react_default.a.createElement(one["View"],{className:kefumodules_default.a.qr,onTap:/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee(){return runtime_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:console.log("kf url",kefu);_context.next=3;return index_wechat({urls:["https://nilaicha-1254362216.cos.ap-shanghai.myqcloud.com/kefu11.jpeg"]// FIXME: 此处放入后端返回的二维码图片地址
});case 3:case"end":return _context.stop();}}},_callee);}))},/*#__PURE__*/react_default.a.createElement(one["Image"],{mode:'aspectFit',src:kefu})),/*#__PURE__*/react_default.a.createElement(Note,{title:'方法一',content:'点击上面二维码，长按识别并添加客服人员微信（如不能预览，可先保存客服二维码到相册，再从相册识别）'}),/*#__PURE__*/react_default.a.createElement(Note,{title:'方法二',content:'复制客服人员微信号，前往微信搜索并添加该好友。客服人员微信号：warrior815795010'}),/*#__PURE__*/react_default.a.createElement(esm_button["a" /* default */],{type:'primary',onTap:/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee2(){return runtime_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return Object(wechat["m" /* setClipboardData */])({data:'warrior815795010'});case 2:case"end":return _context2.stop();}}},_callee2);}))},"\u590D\u5236\u5BA2\u670D\u5FAE\u4FE1"));}
// CONCATENATED MODULE: ./src/pages/kefu/index.entry.js
Page(Object(esm["f" /* createPageConfig */])(Kefu,'pages/kefu/index'));

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"kefu":"kefu___1x4AG","qr":"qr___abVpV","note":"note___zKIc0","title":"title___7UmQu","content":"content___3dbNb"};

/***/ })

},[[128,0,1]]]);