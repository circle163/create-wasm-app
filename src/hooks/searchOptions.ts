import { useReducer } from 'react';

export interface SearchOptionState {
  search?: string;
  platform?: string;
  fans?: string;
}

type SearchOptionAction =
  | {
      type: 'changeSearchText';
      payload: string | undefined;
    }
  | {
      type: 'changeFilters';
      payload: {
        platform: string | undefined;
        fans: string | undefined;
      };
    };

function SearchOptionReducer(
  state: SearchOptionState,
  action: SearchOptionAction,
): SearchOptionState {
  switch (action.type) {
    case 'changeFilters':
      wx.setStorageSync('search-platform', action.payload.platform);
      wx.setStorageSync('search-fans', action.payload.fans);
      return {
        ...state,
        ...action.payload,
      };
    case 'changeSearchText':
      wx.setStorageSync('search-text', action.payload);
      return {
        ...state,
        search: action.payload,
      };
  }
}

function loadFromStorage(): SearchOptionState {
  return {
    search: wx.getStorageSync('search-text'),
    platform: wx.getStorageSync('search-platform'),
    fans: wx.getStorageSync('search-fans'),
  };
}

export function useSearchOptions() {
  const [state, dispatch] = useReducer(SearchOptionReducer, loadFromStorage());
  return {
    ...state,
    changeSearchText(text?: string) {
      dispatch({
        type: 'changeSearchText',
        payload: text,
      });
    },
    changeFilters(platform?: string, fans?: string) {
      dispatch({
        type: 'changeFilters',
        payload: {
          platform,
          fans,
        },
      });
    },
  };
}
