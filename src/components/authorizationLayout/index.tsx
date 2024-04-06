import AskForUserAuthorization from '@/components/askForUserAuthorization';
import { usePopRequirement } from '@/hooks/pops';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export default function AuthorizationLayout({ children }: Props) {
  const {
    requiresUserInfo,
    setUserInfoResolved,
    requiresUserPhone,
    setUserPhoneResolved,
  } = usePopRequirement();
  return (
    <>
      {children}
      <AskForUserAuthorization
        type={'getPhoneNumber'}
        postUrl={'/nilaicha_user/1/get_user_phone'}
        title={'需要您的手机号，请点击"授权"按钮'}
        visible={!requiresUserInfo && requiresUserPhone}
        resolved={setUserPhoneResolved}
      />
      <AskForUserAuthorization
        type={'getUserInfo'}
        postUrl={'/nilaicha_user/1/get_user_info'}
        title={'需要您的用户信息，请点击"授权"按钮'}
        visible={requiresUserInfo}
        resolved={setUserInfoResolved}
      />
    </>
  );
}
