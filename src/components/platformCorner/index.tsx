import React from 'react';
import { Image } from 'remax/wechat';
import styles from './index.css';
import douyinTag from './douyin-tag.png';
import kuaishouTag from './kuaishou-tag.png';
import tiktokTag from './tiktok-tag.png';
import weiboTag from './weibo-tag.png';
import xiaohongshuTag from './xiaohongshu-tag.png'

interface Props {
  platform: string;
}

export default function PlatformCorner({ platform }: Props) {
  let src = null;
  switch (platform) {
    case 'douyin':
      src = douyinTag;
      break;
    case 'weibo':
      src = weiboTag;
      break;
    case 'tiktok':
      src = tiktokTag;
      break;
    case 'kuaishou':
      src = kuaishouTag;
      break;
    case 'xiaohongshu':
      src = xiaohongshuTag;
      break;
  }
  return <Image className={styles.corner} src={src} />;
}
