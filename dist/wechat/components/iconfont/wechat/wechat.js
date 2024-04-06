require('./../../../runtime.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[4],{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);Component({properties:{// guwen | kecheng | zhiding | huojian | zysjs-qyxq | zuixin | vip | duijie | shequn | kefu | xiaoxi-xuanzhong | huangguan | huangguan-fade | gongzhonghao | xuanxiang
name:{type:String},// string | string[]
color:{type:null,observer:function observer(color){this.setData({colors:this.fixColor(),isStr:typeof color==='string'});}},size:{type:Number,value:18,observer:function observer(size){this.setData({svgSize:size/750*wx.getSystemInfoSync().windowWidth});}}},data:{colors:'',svgSize:18/750*wx.getSystemInfoSync().windowWidth,quot:'"',isStr:true},methods:{fixColor:function fixColor(){var color=this.data.color;var hex2rgb=this.hex2rgb;if(typeof color==='string'){return color.indexOf('#')===0?hex2rgb(color):color;}return color.map(function(item){return item.indexOf('#')===0?hex2rgb(item):item;});},hex2rgb:function hex2rgb(hex){var rgb=[];hex=hex.substr(1);if(hex.length===3){hex=hex.replace(/(.)/g,'$1$1');}hex.replace(/../g,function(color){rgb.push(parseInt(color,0x10));return color;});return'rgb('+rgb.join(',')+')';}}});

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[129,0]]]);