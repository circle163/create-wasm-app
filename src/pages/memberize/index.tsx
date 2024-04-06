import Avatar from '@/components/avatar';
import DefaultPage from '@/components/defaultPage';
import IconFont from '@/components/iconfont';
import ProfitGroup from '@/pages/memberize/components/profitGroup';
import Purchase from '@/pages/memberize/components/purchase';
import { View } from 'annar/esm/web';
import useAxios from 'axios-hooks';
import * as React from 'react';
import { useQuery } from 'remax';
import { Text } from 'remax/one';
import styles from './index.css';
import { navigateTo, requestPayment, switchTab } from 'remax/wechat';

export default function () {
  const query = useQuery<{ redirect: string }>();
  const [, checkVip] = useAxios(
    {
      url: 'nilaicha_user/1/query_vip',
    },
    { manual: true },
  );
  const [{ data }, refetch] = useAxios({
    url: 'nilaicha_user/1/nilaicha_user_info',
  });
  const userInfo = data && data.body;
  const [, getPrepay] = useAxios(
    {
      url: 'nilaicha_order/1/nilaicha_pay',
      method: 'POST',
    },
    { manual: true },
  );

  return (
    <DefaultPage title={'加入会员'} wrapped>
      <View className={styles.user}>
        <Avatar url={userInfo && userInfo.avatar_url} />
        <Text className={styles.text}>{userInfo && userInfo.nickname}</Text>
        <IconFont name={'huangguan-fade'} size={40} />

      </View>
      <View className={styles.profits}>
        <ProfitGroup
          group={'功能权益'}
          color={'blue'}
          profits={[
            {
              content:
                '任意查看权益：任意查看合作或者名片广场以及达人数据等权益',
              icon: (
                <IconFont name={'zysjs-qyxq'} size={60} color={'#ffffff'} />
              ),
            },
            // {
            //   content: '信息排序前置：会员发布的任务或者其他合作信息排序靠前',
            //   icon: <IconFont name={'huojian'} size={52} color={'#ffffff'} />,
            // },
            // {
            //   content:
            //     '信息置顶服务：发布的任务或者其他合作信息有10天的置顶次数',
            //   icon: <IconFont name={'zhiding'} size={57} color={'#ffffff'} />,
            // },
          ]}
        />
        <ProfitGroup
          group={'服务权益'}
          color={'red'}
          profits={[
            {
              content: '专属顾问团队：为您配置专业顾问团队提供解惑答疑服务',
              icon: <IconFont name={'guwen'} size={60} color={'#ffffff'} />,
            },
            {
              content: '尊贵会员社群：加入官方会员社群，社群人脉净收眼底',
              icon: <IconFont name={'shequn'} size={54} color={'#ffffff'} />,
            },
            {
              content: '1v1资源对接：一对一为会员提供供应链、MCN资源对接',
              icon: <IconFont name={'duijie'} size={58} color={'#ffffff'} />,
            },
          ]}
        />
        <ProfitGroup
          group={'增值服务'}
          color={'yellow'}
          profits={[
            {
              content: '尊贵身份铭牌：全渠道昵称尊贵会员身份标识',
              icon: <IconFont name={'vip'} size={56} color={'#ffffff'} />,
            },
            // {
            //   content: '群量学员课程：可免费学习群量学院中的会员课程',
            //   icon: <IconFont name={'kecheng'} size={56} color={'#ffffff'} />,
            // },
            {
              content: '平台功能尝鲜：第一时间体验平台新功能',
              icon: <IconFont name={'zuixin'} size={55} color={'#ffffff'} />,
            },
          ]}
        />
      </View>
      <View className={styles.navbar}>
        <Purchase
          hasPhone={userInfo && userInfo.phoneNumber}
          refetch={refetch}
          price={'1588'}
          onTap={async () => {
            const { data } = await getPrepay();
            const {
              nonceStr,
              package: P,
              paySign,
              signType,
              timeStamp,
            } = data.body;
            const { errMsg } = await requestPayment({
              nonceStr,
              package: P,
              paySign,
              signType,
              timeStamp,
            });
            if (errMsg.endsWith(':ok')) {
              const { data } = await checkVip();
              if (data && data.body) {
                if (query.redirect) {
                  await switchTab({
                    url: `/pages/profile/index?userId=${query.redirect}`,
                  });
                } else {
                  await switchTab({
                    url: `/pages/index/index`,
                  });
                }
              }
            }
          }}
        />
      </View>
    </DefaultPage>
  );
}
