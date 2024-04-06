import ProfitItem from '@/pages/memberize/components/profitItem';
import { View } from 'annar/esm/web';
import React from 'react';
import { Text } from 'remax/one';
import styles from './index.css';
import classNames from 'classnames';

interface Props {
  group: string;
  color: 'red' | 'blue' | 'yellow';
  profits: {
    content: string;
    icon: React.ReactNode;
  }[];
}

export default function ProfitGroup({ group, color, profits }: Props) {
  let textCls;
  switch (color) {
    case 'red':
      textCls = styles.titleRedText;
      break;
    case 'blue':
      textCls = styles.titleBlueText;
      break;
    case 'yellow':
      textCls = styles.titleYellowText;
      break;
  }
  return (
    <View className={styles.wrapper}>
      <View className={styles.title}>
        <Text className={classNames(styles.titleText, textCls)}>{group}</Text>
      </View>
      <View className={styles.profits}>
        {profits.map(({ icon, content }, index) => (
          <View key={`${index}`}>
            {index > 0 && <View className={styles.gap} />}
            <ProfitItem icon={icon} color={color} text={content} />
          </View>
        ))}
      </View>
    </View>
  );
}
