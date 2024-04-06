import { View } from 'annar/esm/web';
import * as React from 'react';
import styles from './index.css';

interface Props {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export default function TitledBlock({ title, children }: Props) {
  return (
    <View className={styles.block}>
      <View className={styles.title}>{title}</View>
      <View className={styles.content}>{children}</View>
    </View>
  );
}
