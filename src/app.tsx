import { useAuthStatus } from '@/hooks/authStatus';
import useAxios from 'axios-hooks';
import { useCallback, useEffect, useState } from 'react';
import * as React from 'react';
import './app.css';
import '@/boot/axios';
import { login } from 'remax/wechat';
import { PopRequirementProvider } from './hooks/pops';

interface Props {
  children?: React.ReactNode;
}

function App({ children }: Props) {
  const [requiresUserInfo, setUserInfoRequired] = useState(false);
  const [requiresUserPhone, setUserPhoneRequired] = useState(false);
  const setUserInfoResolved = useCallback(() => {
    setUserInfoRequired(false);
  }, []);
  const setUserPhoneResolved = useCallback(() => {
    setUserPhoneRequired(false);
  }, []);

  const { updateJwtToken } = useAuthStatus();
  const [, loginBackend] = useAxios(
    {
      url: '/nilaicha_user/1/login',
      method: 'GET',
    },
    { manual: true },
  );
  const autoLogin = async () => {
    const { code, errMsg } = await login();
    if (!code) {
      console.log('wx login failed', errMsg);
      throw new Error(errMsg);
    } else {
    }
    // console.log("wx code", code)
    const { data } = await loginBackend({ params: { code } });
    const {
      body: {
        data: { login_key, need_userinfo, need_phone },
      },
    } = data;
    updateJwtToken(login_key);
    if (need_userinfo == 1) {
      // setUserInfoRequired(true);
    }
    if (need_phone == 1) {
      // setUserPhoneRequired(true);
    }
  };

  useEffect(() => {
    autoLogin().catch((e) => {
      console.log('fatal error', e);
    });
  }, []);

  return (
    <PopRequirementProvider
      value={{
        requiresUserInfo,
        requiresUserPhone,
        setUserInfoResolved,
        setUserPhoneResolved,
      }}
    >
      {children}
    </PopRequirementProvider>
  );
}

export default App;
