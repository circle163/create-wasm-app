import { View } from 'annar/esm/web';
import * as React from 'react';
import { usePageEvent } from 'remax/macro';
import {
  setNavigationBarTitle,
  setBackgroundColor,
  setNavigationBarColor,
} from 'remax/wechat';
import styles from './index.css';

interface Props {
  title?: string;
  navColor?: string;
  navTextColor?: string;
  bgColor?: string;
  children?: React.ReactNode;
  wrapped?: boolean;
}

export default function DefaultPage({
  title = '网红达人',
  navColor = '#F4F9FF',
  navTextColor = '#000000',
  bgColor = '#F4F9FF',
  wrapped,
  children,
}: Props) {
  usePageEvent('onLoad', async () => {
    await setNavigationBarTitle({ title });
    await setNavigationBarColor({
      backgroundColor: navColor,
      frontColor: navTextColor,
    });
    await setBackgroundColor({ backgroundColor: bgColor });
  });
  if (wrapped) {
    return <View className={styles.page}>{children}</View>;
  }
  return <>{children}</>;
}
