import jwtDecode from 'jwt-decode';
import { useReducer } from 'react';

interface AuthStatusState {
  hasLogin: boolean;
}

type AuthStatusAction =
  | {
      type: 'saveJwt';
      payload: {
        token: string;
      };
    }
  | {
      type: 'cleanJwt';
    };

function AuthStatusReducer(
  state: AuthStatusState,
  action: AuthStatusAction,
): AuthStatusState {
  switch (action.type) {
    case 'saveJwt':
      wx.setStorageSync('token', action.payload);
      return {
        hasLogin: true,
      };
    case 'cleanJwt':
      return { hasLogin: false };
  }
}

function loadFromStorage(): AuthStatusState {
  const token = wx.getStorageSync('token');
  return { hasLogin: !!token };
}

export function useAuthStatus() {
  const [state, dispatch] = useReducer(AuthStatusReducer, loadFromStorage());
  return {
    ...state,
    updateJwtToken(token: string) {
      dispatch({
        type: 'saveJwt',
        payload: {
          token,
        },
      });
    },
    cleanJwtToken() {
      dispatch({
        type: 'cleanJwt',
      });
    },
  };
}
