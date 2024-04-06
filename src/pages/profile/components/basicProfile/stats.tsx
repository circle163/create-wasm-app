import { Col, Row } from 'annar';
import { View } from 'annar/esm/web';
import React from 'react';
import styles from './stats.css';
import { Text } from 'remax/wechat';

interface Props {
  fans: string;
  likes: string;
  // price: string;
  // offlinePrice: string;
  dongtai: string;
  guanzhu: string;
}

export default function Stats({ fans, likes, dongtai, guanzhu }: Props) {
  return (
    <Row>
      <Col span={6} className={styles.span}>
        <Text className={styles.count}>{fans}</Text>
        <Text className={styles.title}>粉丝数</Text>
      </Col>
      <Col span={6} className={styles.span}>
        <Text className={styles.count}>{likes}</Text>
        <Text className={styles.title}>赞藏数</Text>
      </Col>
      <Col span={6} className={styles.span}>
        <Text className={styles.count}>{dongtai}</Text>
        <Text className={styles.title}>作品数</Text>
      </Col>
      <Col span={6} className={styles.span}>
        <Text className={styles.count}>{guanzhu}</Text>
        <Text className={styles.title}>关注数</Text>
      </Col>
      {/*<Col span={6} className={styles.span}>*/}
      {/*  <View>*/}
      {/*    <Text className={styles.yuan}>￥</Text>*/}
      {/*    <Text className={styles.price}>{price}</Text>*/}
      {/*  </View>*/}
      {/*  <Text className={styles.title}>报价</Text>*/}
      {/*</Col>*/}
      {/*<Col span={6} className={styles.span}>*/}
      {/*  <View>*/}
      {/*    <Text className={styles.yuan}>￥</Text>*/}
      {/*    <Text className={styles.count}>{offlinePrice}</Text>*/}
      {/*  </View>*/}
      {/*  <Text className={styles.title}>线下报价</Text>*/}
      {/*</Col>*/}
    </Row>
  );
}
