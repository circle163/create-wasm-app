import { Button } from 'annar';
import { View } from 'annar/esm/web';
import * as React from 'react';
import styles from './action.css';
import { Text, Image } from 'remax/one';
import method1 from './method1.png';
import method2 from './method2.png';
import {Button as WxButton} from 'remax/wechat'

interface Props {
  title: string;
  desc: string;
  action: string;
  corner: number;
  onTap?: (e: any) => void;
}

export default function Action({ title, desc, action, corner, onTap }: Props) {
  return (
    <View
      className={styles.wrapper}
      // style={corner > 1 ? { marginTop: 20 } : undefined}
    >
      <View className={styles.row1}>
        <Text>{title}</Text>
        <View className={styles.buttonWrapper}>
          <Button type={'primary'} onTap={onTap}>
            {action}
          </Button>
          {/*{(corner == 1) && (*/}
          {/*    <WxButton className={styles.share} openType={'share'}/>*/}
          {/*)}*/}
        </View>
      </View>
      <View className={styles.row2}>
        <Text>{desc}</Text>
      </View>
      {/*<Image*/}
      {/*  className={styles.leftCorner}*/}
      {/*  src={corner == 1 ? method1 : method2}*/}
      {/*/>*/}
    </View>
  );
}
