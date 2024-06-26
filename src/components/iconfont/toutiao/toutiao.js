Component({
  properties: {
    // guwen | kecheng | zhiding | huojian | zysjs-qyxq | zuixin | vip | duijie | shequn | kefu | xiaoxi-xuanzhong | huangguan | huangguan-fade | gongzhonghao | xuanxiang
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      value: '',
      observer: function(color) {
        this.setData({
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * tt.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    svgSize: 18 / 750 * tt.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
});
