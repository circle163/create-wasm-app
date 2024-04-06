import NavButton from '@/components/navButton';
import Action from '@/pages/profile/components/bottomNav/action';
import { ActionSheet, Button, Icon, Popup } from 'annar';
import useAxios from 'axios-hooks';
import { Text } from 'remax/wechat';
import { View } from 'annar/esm/web';
import { useState } from 'react';
import * as React from 'react';
import styles from './index.css';
import {
  Button as WxButton,
  switchTab,
  navigateTo,
  showToast,
} from 'remax/wechat';

interface Props {
  userId?: string;
}

export default function BottomNavs({ userId }: Props) {
  const [{ data }, checkVip] = useAxios(
    {
      url: 'nilaicha_user/1/query_vip',
    },
    { useCache: false },
  );
  const isVip = data && data.body;
  console.log('is vip', isVip);
  const [sheet, openSheet] = useState(false);
  return (
    <>
      <View className={styles.wrapper}>
        <NavButton
          icon={'home'}
          text={'首页'}
          onClick={async () => {
            await switchTab({ url: '/pages/index/index' });
          }}
        />
        <View className={styles.shareWrapper}>
          <NavButton icon={'share'} text={'分享'} />
          <WxButton openType={'share'} className={styles.share} />
        </View>
        {!isVip && (
          <Button
            shape={'square'}
            type={'primary'}
            size={'large'}
            style={{ width: 300 }}
            onTap={async () => {
              if (!isVip) {
                await navigateTo({
                  url: `/pages/memberize/index?redirect=${userId}`,
                });
                // const {
                //   data: { body: vip },
                // } = await checkVip();
                // if (!vip) {
                //   openSheet(true);
                // }
              }
            }}
          >
            {isVip ? '对接合作' : '开通会员'}
          </Button>
        )}
      </View>
      <Popup
        open={sheet}
        closeable
        square
        onClose={() => {
          openSheet(false);
        }}
        position={'bottom'}
        title={
          <View className={styles.title}>
            <Text>以下</Text>
            {/*<Text className={styles.highlight}>任一种</Text>*/}
            <Text>方式即可加入</Text>
          </View>
        }
      >
        <View className={styles.action}>
          {/*<Action*/}
          {/*  title={'邀请两个朋友（0/2）'}*/}
          {/*  action={'去分享'}*/}
          {/*  desc={'分享并邀请两个新用户成功登陆之后即可加入'}*/}
          {/*  corner={1}*/}
          {/*/>*/}
          <Action
            title={'加入会员'}
            action={'立即加入'}
            desc={'加入会员即可查看TA的名片，取得联系展开合作！'}
            corner={2}
            onTap={async () => {
              await navigateTo({
                url: `/pages/memberize/index?redirect=${userId}`,
              });
            }}
          />
        </View>
      </Popup>
    </>
  );
}
