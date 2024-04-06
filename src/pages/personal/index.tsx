import AuthorizationLayout from '@/components/authorizationLayout';
import DefaultPage from '@/components/defaultPage';
import NavBar from '@/components/navBar';
import MyStuff from '@/pages/personal/components/mystuff';
import { View } from 'annar/esm/web';
import useAxios from 'axios-hooks';
import * as React from 'react';
import styles from './index.css';

export default function PersonalCenter() {
  const [{ data }, refetch] = useAxios({
    url: 'nilaicha_user/1/nilaicha_user_info',
  });
  const userInfo = data && data.body;
  return (
    <AuthorizationLayout>
      <DefaultPage title={'个人中心'}>
        <View className={styles.wrapper}>
          <MyStuff
            onUpdated={async () => {
              await refetch();
            }}
            avatar={userInfo && userInfo.avatar_url}
            phone={userInfo && userInfo.phone}
          />
        </View>
      </DefaultPage>
    </AuthorizationLayout>
  );
}
