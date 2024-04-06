const pages = [
  'pages/index/index',
  'pages/profile/index',
  'pages/personal/index',
  'pages/memberize/index',
  'pages/kefu/index'
];
const color = '#ffffff';

import { AppConfig as WechatAppConfig } from 'remax/wechat';
import { AppConfig as AliAppConfig } from 'remax/ali';
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao';
import { AppConfig as WebAppConfig } from 'remax/web';
import homeTabIcon from '../home-tab.png';
import selectedHomeTabIcon from '../home-tab-selected.png';
import personalTabIcon from '../personal-tab.png';
import selectedPersonalTabIcon from '../personal-tab-selected.png';

export const wechat: WechatAppConfig = {
  pages,
  window: {
    navigationBarBackgroundColor: color,
    navigationBarTextStyle: 'black',
    navigationBarTitleText: '网络红人',
  },
  tabBar: {
    color: '#282c34',
    selectedColor: '#03a9f4',
    backgroundColor: '#ffffff',
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index',
        iconPath: 'home-tab.png',
        selectedIconPath: 'home-tab-selected.png',
      },
      {
        text: '我的',
        pagePath: 'pages/personal/index',
        iconPath: 'personal-tab.png',
        selectedIconPath: 'personal-tab-selected.png',
      },
    ],
  },
};

export const ali: AliAppConfig = {
  pages,
  window: {
    defaultTitle: 'Remax One Ali',
    titleBarColor: color,
  },
};

export const toutiao: ToutiaoAppConfig = {
  pages,
  window: {
    navigationBarTitleText: 'Remax One Toutiao',
    navigationBarBackgroundColor: color,
  },
};

// @ts-ignore
export const web: WebAppConfig = {
  pages,
  title: 'Remax One Web',
};
