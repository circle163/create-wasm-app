import NavButton from '@/components/navButton';
import { View } from 'annar/esm/web';
import * as React from 'react';
import styles from './index.css';
import { navigateTo, switchTab } from 'remax/wechat';

interface Props {
  current: string;
}

export default function NavBar({ current }: Props) {
  const renderNav = (title: string, url: string, icon?: string) => {
    return (
      <NavButton
        icon={icon}
        text={title}
        highlight={current == url}
        onClick={async () => {
          if (url != current) {
            await switchTab({ url });
          }
        }}
      />
    );
  };
  return (
    <View className={styles.navbar}>
      {renderNav('首页', '/pages/index/index', 'home')}
      {renderNav('我的', '/pages/personal/index', 'people')}
    </View>
  );
}
