import AskForUserAuthorization from "@/components/askForUserAuthorization";
import { View } from 'annar/esm/web';
import useAxios from 'axios-hooks';
import * as React from 'react';
import { Button, navigateTo } from 'remax/wechat';
import styles from './index.css';
import { Image, Text } from 'remax/one';
import bgImage from './bg.png';
import { getSystemInfoSync } from 'remax/wechat';

interface Props {
  hasPhone: boolean;
  refetch: () => void;
  price: string;
  onTap: () => void;
}

const sysInfo = getSystemInfoSync();
const isIos = sysInfo.platform == 'ios' || sysInfo.platform == 'iOS';

export default function Purchase({ price, onTap, hasPhone, refetch }: Props) {
  const [, updateUserInfo] = useAxios(
    {
      url: '/nilaicha_user/1/get_user_info',
      method: 'POST',
    },
    {
      manual: true,
    },
  );
  if (isIos) {
    return (
      <View
        className={styles.wrapper}
        style={{ background: `url('${bgImage}')` }}
        onTap={async () => {
          await navigateTo({
            url: '/pages/kefu/index',
          });
        }}
      >
        <View className={styles.text}>联系客服立即开通</View>
      </View>
    );
  } else {
    return (
      <View
        className={styles.wrapper}
        style={{ background: `url('${bgImage}')` }}
        onTap={onTap}
      >
        <View className={styles.text}>立即开通</View>
        {!hasPhone && (
          <Button
            className={styles.wxbtn}
            openType={'getUserInfo'}
            onGetUserInfo={async (e) => {
              const { detail } = e;
              if (detail.errMsg.endsWith(':ok')) {
                await updateUserInfo({ data: detail });
              }
              refetch();
            }}
          />
        )}
      </View>
    );
  }
}
