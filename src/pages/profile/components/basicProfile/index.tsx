import Avatar from '@/components/avatar';
import CertificationStatus from '@/components/certificationStatus';
import CopyableText from '@/components/copyableText';
import PlatformCorner from '@/components/platformCorner';
import Stats from '@/pages/profile/components/basicProfile/stats';
import { Button, Card, Col, Row, Tag } from 'annar';
import { View } from 'annar/esm/web';
import * as React from 'react';
import { Text, Image } from 'remax/wechat';
import styles from './index.css';
import { setClipboardData } from 'remax/wechat';

interface Props {
  id: string;
  avatar: string;
  nickname: string;
  fans: string;
  likes: string;
  platform: string;
  domains: string[];
  certificated: boolean;
  dongtai: string;
  guanzhu: string;
  link?: string;
}

export default function BasicProfile({
  id,
  avatar,
  nickname,
  certificated,
  fans,
  likes,
  link,
  dongtai,
  guanzhu,
  domains,
  platform,
}: Props) {
  console.log('link', link);
  return (
    <View className={styles.wrapper}>
      <View className={styles.topPadding} />
      <Card shadow>
        <Row className={styles.row1}>
          <Text className={styles.nickname}>{nickname}</Text>
          <CertificationStatus certificated={certificated} />
        </Row>
        <Stats fans={fans} likes={likes} dongtai={dongtai} guanzhu={guanzhu} />
        <Row className={styles.row2}>
          <Col span={12} className={styles.col}>
            <CopyableText prefix={'ID：'} text={id} />
          </Col>
          <Col span={12} className={styles.col}>
            <CopyableText hiddenText prefix={'链接'} text={link} />
          </Col>
        </Row>
        <Row className={styles.row3}>
          {domains &&
            domains.map((domain) => (
              <Tag key={domain} color={'green'}>
                {domain}
              </Tag>
            ))}
        </Row>
        <PlatformCorner platform={platform} />
      </Card>
      <View className={styles.avatarWrapper}>
        <Avatar url={avatar} className={styles.avatar} />
      </View>
    </View>
  );
}
