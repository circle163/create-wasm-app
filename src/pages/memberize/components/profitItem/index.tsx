import { Card } from 'annar';
import { View } from 'annar/esm/web';
import { red } from 'color-name';
import * as React from 'react';
import { Image, Text } from 'remax/one';
import styles from './index.css';
import blueBg from './profit-blue.png';
import redBg from './profit-red.png';
import yellowBg from './profit-yellow.png';

interface Props {
  icon: React.ReactNode;
  color: 'red' | 'yellow' | 'blue';
  text: string;
}

export default function ProfitItem({ icon, color, text }: Props) {
  let src = null;
  switch (color) {
    case 'blue':
      src = blueBg;
      break;
    case 'red':
      src = redBg;
      break;
    case 'yellow':
      src = yellowBg;
      break;
  }
  return (
    <View className={styles.wrapper}>
      <Image className={styles.bg} src={src} />
      <View className={styles.icon}>{icon}</View>
      <View className={styles.tw}>
        <Card shadow>
          <Text>{text}</Text>
        </Card>
      </View>
    </View>
  );
}
