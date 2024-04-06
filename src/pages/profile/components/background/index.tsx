import { View } from 'annar/esm/web';
import * as React from 'react';
import styles from './index.css';
import { usePageEvent } from 'remax/macro';
import { useNativeEffect } from 'remax';
import {
  setNavigationBarColor,
  setBackgroundColor,
  setNavigationBarTitle,
} from 'remax/wechat';

interface Props {
  children?: React.ReactNode;
  title?: string;
  bottomNav?: React.ReactNode
}

export default function Background({ children, title, bottomNav }: Props) {
  usePageEvent('onLoad', async () => {
    await setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#03a9f4',
    });
    await setBackgroundColor({ backgroundColor: '#03a9f4' });
  });
  useNativeEffect(async () => {
    if (title) {
      await setNavigationBarTitle({ title });
    }
  }, [title]);
  return (
    <View className={styles.background}>
      <View className={styles.top} />
      <View className={styles.content}>
        {children}
        {bottomNav && (
            <View className={styles.bottomPadding} />
        )}
      </View>
      {bottomNav && (
          <View className={styles.bottomBar}>
            {bottomNav}
          </View>
      )}
    </View>
  );
}
