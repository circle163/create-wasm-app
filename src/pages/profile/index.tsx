import 'annar/dist/annar.css';
import AuthorizationLayout from '@/components/authorizationLayout';
import Background from '@/pages/profile/components/background';
import BasicProfile from '@/pages/profile/components/basicProfile';
import BottomNavs from '@/pages/profile/components/bottomNav';
import Contact from '@/pages/profile/components/contact';
import Introduction from '@/pages/profile/components/introduction';
import Remark from '@/pages/profile/components/remark';
import useAxios from 'axios-hooks';
import { useQuery } from 'remax';
import * as React from 'react';

export default function Profile() {
  const query = useQuery<{ userId: string }>();
  const [{ loading, error, data }] = useAxios({
    url: `/user_authors/${query.userId}`,
  });
  const profile = data && data.body;

  return (
    <AuthorizationLayout>
      {profile && (
        <Background title={profile.nickname} bottomNav={<BottomNavs userId={query.userId} />}>
          <BasicProfile
            id={profile.short_id}
            avatar={profile.avatar_300_url}
            nickname={profile.nickname}
            certificated={true}
            likes={profile.total_favorited}
            fans={profile.follower_count}
            domains={[profile.user_tags]}
            dongtai={profile.dongtai_count}
            guanzhu={profile.following_count}
            platform={profile.platform}
            link={profile.link}
          />
          <Contact
            receiver={undefined}
            wechat={profile.weixin}
            weibo={profile.weibo}
            phone={profile.phone}
            address={undefined}
            email={profile.email}
          />
          <Introduction introduction={profile.signature} />
          <Remark />
        </Background>
      )}
    </AuthorizationLayout>
  );
}
