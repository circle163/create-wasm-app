import Avatar from '@/components/avatar';
import IconFont from '@/components/iconfont';
import { useAuthStatus } from '@/hooks/authStatus';
import { usePopRequirement } from '@/hooks/pops';
import { Button, Card, Col, Icon, Row } from 'annar';
import { View } from 'annar/esm/web';
import useAxios from 'axios-hooks';
import * as React from 'react';
import { Text, navigateTo, Button as WxButton, showToast } from 'remax/wechat';
import styles from './index.css';

interface Props {
  avatar: string;
  phone: string;
  onUpdated: () => void;
}

export default function MyStuff({ avatar, phone, onUpdated }: Props) {
  const [, updateUserPhone] = useAxios(
    {
      url: '/nilaicha_user/1/get_user_phone',

      method: 'POST',
    },
    {
      manual: true,
    },
  );
  const renderAction = (
    title: string,
    onTap: () => void,
    icon?: React.ReactNode,
    cover?: React.ReactNode,
  ) => {
    return (
      <View className={styles.action} onTap={onTap}>
        {icon}
        <Text className={styles.actionText}>{title}</Text>
        {cover}
      </View>
    );
  };
  return (
    <Card>
      <Row className={styles.info}>
        <Col className={styles.avatarWrapper} span={6}>
          <Avatar url={avatar} />
        </Col>
        <Col span={18}>
          <Row>
            <Text className={styles.nickname}>{phone}</Text>
          </Row>
          <Row className={styles.roaw}>
            {phone ? (
              <Button plain className={styles.personalInfo}>
                个人信息
              </Button>
            ) : (
              <WxButton
                plain
                className={styles.personalInfo}
                openType={'getPhoneNumber'}
                style={{ borderWidth: 0, color: '#ff892b', fontSize: 30 }}
                onGetPhoneNumber={async (e) => {
                  const { detail } = e;
                  if (detail.errMsg.endsWith(':ok')) {
                    await updateUserPhone({
                      data: detail,
                    });
                    onUpdated();
                  }
                }}
              >
                点击登录
              </WxButton>
            )}
          </Row>
        </Col>
      </Row>
      <Row className={styles.actions}>
        {renderAction(
          '加入会员',
          async () => {
            if (!phone) {
              await showToast({
                title: '请点击"登录"',
              });
            } else {
              await navigateTo({ url: '/pages/memberize/index' });
            }
          },
          <IconFont name={'huangguan'} size={60} />,
        )}
        {/*{renderAction(*/}
        {/*  '关注公众号',*/}
        {/*  () => {*/}

        {/*  },*/}
        {/*  <IconFont name={'gongzhonghao'} size={60} />,*/}
        {/*)}*/}
        {renderAction(
          '联系客服',
          async () => {
            await navigateTo({ url: '/pages/kefu/index' });
          },
          <IconFont name={'kefu'} size={60} />,
          // <WxButton className={styles.wxContact} openType={'contact'} />,
        )}
        {/*{renderAction(*/}
        {/*  '我的消息',*/}
        {/*  () => {},*/}
        {/*  <IconFont name={'xiaoxi-xuanzhong'} size={60} />,*/}
        {/*)}*/}
      </Row>
    </Card>
  );
}
