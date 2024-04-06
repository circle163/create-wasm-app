import 'annar/dist/annar.css';
import { client } from '@/boot/axios';
import AuthorizationLayout from '@/components/authorizationLayout';
import { usePopRequirement } from '@/hooks/pops';
import { useSearchOptions } from '@/hooks/searchOptions';
import { useSearchResult } from '@/hooks/searchResults';
import InfoBlock from '@/pages/index/components/infoBlock';
import SearchPanel from '@/pages/index/components/searchPanel';
import { Button, Popup } from 'annar';
import { ScrollView } from 'annar/esm/one';
import { View } from 'annar/esm/web';
import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { usePageEvent } from 'remax/macro';
import { navigateTo, Button as WxButton } from 'remax/wechat';
import styles from './index.css';

function fixRequestParams({ platform, fans, ...others }: any) {
  if (platform == 'all') {
    platform = undefined;
  }
  if (fans == 'all') {
    fans = undefined;
  }
  return { ...others, platform, fans };
}

export default function Home() {
  const [showError, setError] = useState(false);
  const { requiresUserInfo, requiresUserPhone } = usePopRequirement();
  const canPageNext = !requiresUserInfo && !requiresUserPhone;
  const [page, setPage] = useState(1);
  const [commandTs, setCommandTs] = useState(new Date());
  const {
    search,
    platform,
    fans,
    changeSearchText,
    changeFilters,
  } = useSearchOptions();
  const { results, appendResults, resetResults } = useSearchResult();
  const [{ data }, refetch] = useAxios({
    url: 'nilaicha_user/1/nilaicha_user_info',
  });
  const [, updateUserPhone] = useAxios(
      {
        url: '/nilaicha_user/1/get_user_phone',

        method: 'POST',
      },
      {
        manual: true,
      },
  );
  const userInfo = data && data.body;
  const fetchData = () => {
    client
      .get('/user_authors/1/get_author_list', {
        params: fixRequestParams({
          search,
          platform,
          fans,
          page,
          limit: 10,
        }),
      })
      .then(({ data }) => {
        if (data && data.code != 0) {
          setError(true);
        } else {
          const results = data && data.body && data.body.results;
          if (results) {
            appendResults(results);
          }
        }
      })
      .catch(() => [setError(true)]);
  };

  useEffect(fetchData, [search, platform, fans, page]);

  // const [{ data }, checkVip] = useAxios(
  //     {
  //       url: 'nilaicha_user/1/query_vip',
  //     },
  //     { useCache: false },
  // );
  // const isVip = data && data.body;
  //
  // console.log("is vip", isVip)

  usePageEvent('onReachBottom', async () => {
    canPageNext && setPage(page + 1);
  });

  return (
    <AuthorizationLayout>
      <View className={styles.home}>
        <SearchPanel
          search={search}
          platform={platform}
          fans={fans}
          changeSearchText={(text) => {
            resetResults();
            changeSearchText(text);
            setPage(1);
            setCommandTs(new Date());
          }}
          changeFilters={(platform, fans) => {
            resetResults();
            changeFilters(platform, fans);
            setPage(1);
            setCommandTs(new Date());
          }}
        />
        <ScrollView className={styles.scrollView}>
          {results.map(
            (
              {
                id,
                avatar_300_url,
                nickname,
                follower_count,
                favoriting_count,
                user_tags,
                platform,
              }: any,
              index,
            ) => (
              <InfoBlock
                key={`${index}-${id}`}
                avatar={avatar_300_url}
                nickname={nickname}
                platform={platform}
                certified={true}
                fans={follower_count}
                likes={favoriting_count}
                domain={user_tags}
                onTap={async () => {
                  await navigateTo({
                    url: `/pages/profile/index?userId=${id}`,
                  });
                }}
              />
            ),
          )}
        </ScrollView>
      </View>
      <Popup open={showError} closeable onClose={() => setError(false)}>
        <View className={styles.error}>
          <View className={styles.errorTitle}>
            只有会员用户才能查看更多达人信息!
          </View>
          <View className={styles.buttonWrapper}>
            <Button
              type={'primary'}
              onTap={async () => {
                await navigateTo({
                  url: `/pages/memberize/index`,
                });
                setError(false);
              }}
            >
              注册会员
            </Button>
            {(!userInfo || !userInfo.phone) && (
              <WxButton
                plain
                className={styles.getUserInfo}
                openType={'getPhoneNumber'}
                onGetPhoneNumber={async (e) => {
                  const { detail } = e;
                  if (detail.errMsg.endsWith(':ok')) {
                    await updateUserPhone({
                      data: detail,
                    });
                    await refetch();
                    await navigateTo({
                      url: `/pages/memberize/index`,
                    });
                    setError(false);
                  }
                }}
              />
            )}
          </View>
        </View>
      </Popup>
    </AuthorizationLayout>
  );
}
