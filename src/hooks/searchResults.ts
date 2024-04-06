import { useReducer } from 'react';

export interface SearchResult {
  id: number;
}

export interface SearchResultState {
  resultMap: { [key: number]: SearchResult };
  results: SearchResult[];
}

type SearchResultAction =
  | {
      type: 'appendResults';
      payload: SearchResult[];
    }
  | {
      type: 'resetResults';
    };

function SearchResultReducer(
  state: SearchResultState,
  action: SearchResultAction,
): SearchResultState {
  switch (action.type) {
    case 'appendResults':
      let { resultMap } = state;
      const appends = action.payload.filter(({ id }: any) => !resultMap[id]);
      appends.forEach((r) => {
        resultMap[r.id] = r;
      });
      return {
        resultMap,
        results: [...state.results, ...appends],
      };
    case 'resetResults':
      return {
        resultMap: {},
        results: [],
      };
  }
}

export function useSearchResult() {
  const [state, dispatch] = useReducer(SearchResultReducer, {
    resultMap: {},
    results: [],
  });
  return {
    ...state,
    appendResults(results?: SearchResult[]) {
      dispatch({
        type: 'appendResults',
        payload: results || [],
      });
    },
    resetResults() {
      dispatch({
        type: 'resetResults',
      });
    },
  };
}
