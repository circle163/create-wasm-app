import { Loading, Popup } from 'annar';
import useAxios from 'axios-hooks';
import React from 'react';
import { View } from 'remax/one';
import { Button } from 'remax/wechat';
import styles from './index.less';

interface Props {
  type: 'getUserInfo' | 'getPhoneNumber';
  postUrl: string;
  title?: string;
  visible?: boolean;
  resolved: () => void;
}

export default function AskForUserAuthorization({
  type,
  postUrl,
  visible,
  title,
  resolved,
}: Props) {
  const [{ loading }, updateInfo] = useAxios(
    {
      url: postUrl,
      method: 'POST',
    },
    {
      manual: true,
    },
  );

  const handleInfo = async (e: any) => {
    const { detail } = e;
    const i = detail.errMsg.lastIndexOf(':');
    if (detail.errMsg.substring(i+1) == 'ok') {
      const { data } = await updateInfo({ data: detail });
      resolved();
    }
  };

  return (
    <Popup
      position={'bottom'}
      open={visible}
      title={loading ? '正在处理你的授权信息' : title}
    >
      <View className={styles.wrapper}>
        {loading && (
          <View className={styles.loading}>
            <Loading />
          </View>
        )}
        <View className={styles.buttonWrapper}>
          <Button
            className={styles.button}
            openType={type}
            onGetUserInfo={handleInfo}
            onGetPhoneNumber={handleInfo}
          >
            授权
          </Button>
        </View>
      </View>
    </Popup>
  );
}
