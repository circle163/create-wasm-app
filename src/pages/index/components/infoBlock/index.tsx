import Avatar from '@/components/avatar';
import CertificationStatus from '@/components/certificationStatus';
import PlatformCorner from '@/components/platformCorner';
import { Card, Col, Row, Tag } from 'annar';
import { Text } from 'remax/wechat';
import * as React from 'react';
import styles from './index.css';

interface Props {
  platform: string;
  avatar: string;
  nickname: string;
  fans: string;
  likes: string;
  domain: string;
  certified: boolean;
  onTap?: (e: any) => void;
}

export default function InfoBlock({
  platform,
  avatar,
  nickname,
  fans,
  likes,
  domain,
  certified,
  onTap,
}: Props) {
  return (
    <Card style={{ marginTop: 10 }} onTap={onTap}>
      <Row>
        <Col span={6} className={styles.avatarWrapper}>
          <Avatar url={avatar} />
        </Col>
        <Col span={18} className={styles.detail}>
          <Row className={styles.row}>
            <Text className={styles.nickname}>{nickname}</Text>
          </Row>
          <Row className={styles.row}>
            <Col span={12}>
              <Text className={styles.field}>粉丝数：</Text>
              <Text className={styles.fieldValue}>{fans}</Text>
            </Col>
            <Col span={12}>
              <Text className={styles.field}>赞藏数：</Text>
              <Text className={styles.fieldValue}>{likes}</Text>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col span={12}>
              <CertificationStatus certificated={certified} />
            </Col>
            <Col span={12}>
              <Text className={styles.field}>领域：</Text>
              <Tag>{domain}</Tag>
            </Col>
          </Row>
        </Col>
      </Row>
      <PlatformCorner platform={platform} />
    </Card>
  );
}
