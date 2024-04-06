import 'annar/dist/annar.css';
import { SearchOptionState, useSearchOptions } from '@/hooks/searchOptions';
import { useQuery } from 'remax';
import { navigateTo, switchTab } from 'remax/wechat';
import SearchFilters from './searchFilters';
import { Button, Card, Icon, SearchBar } from 'annar';
import { View } from 'annar/esm/web';
import { useEffect, useMemo, useState } from 'react';
import * as React from 'react';
import styles from './index.css';

interface Props {
  search?: string;
  platform?: string;
  fans?: string;
  changeSearchText: (text?: string) => void;
  changeFilters: (platform?: string, fans?: string) => void;
}

export default function SearchPanel({
  search,
  fans,
  platform,
  changeSearchText,
  changeFilters,
}: Props) {
  const [searchWord, setSearchWord] = useState<string | undefined>(search);
  const [filtersOpened, openFilters] = useState(true);
  return (
    <Card>
      <View className={styles.searchLine}>
        <View className={styles.searchBarWrapper}>
          <SearchBar
            value={searchWord || ''}
            placeholder={'搜索红人'}
            confirmType={'search'}
            hideActionButton={true}
            onClear={async () => {
              changeSearchText(undefined);
              setSearchWord(undefined);
            }}
            onInput={async (value) => {
              setSearchWord(value);
            }}
            onSubmit={async (text) => {
              changeSearchText(text);
            }}
            onBlur={async () => {
              changeSearchText(searchWord);
            }}
          />
        </View>
        {/*<Button*/}
        {/*  className={styles.searchFiltersButton}*/}
        {/*  ghost*/}
        {/*  // onTap={() => openFilters(!filtersOpened)}*/}
        {/*  shape={'square'}*/}
        {/*  icon={<Icon type={'more'} color={'#4f4f4f'} />}*/}
        {/*/>*/}
      </View>
      {filtersOpened && (
        <SearchFilters
          platform={platform}
          fans={fans}
          onFiltered={async (options) => {
            changeFilters(options?.platform, options?.fans);
            // openFilters(false);
          }}
        />
      )}
    </Card>
  );
}
