import { Button, Card } from 'annar';
import * as React from 'react';
import { Text } from 'remax/wechat';
import styles from './index.css';

interface Props {}

export default function Remark({}: Props) {
  return (
    <Card shadow style={{ marginTop: 30 }}>
      <Text>
        备注：名片属于达人辑写，通告双方私下沟通时注意防骗，如遇虚假名片、盗用他人名片、欺诈信息等不良行为，请立即向平台『
      </Text>
      <Button className={styles.button}>举报</Button>
        <Text>
          』
        </Text>
    </Card>
  );
}
