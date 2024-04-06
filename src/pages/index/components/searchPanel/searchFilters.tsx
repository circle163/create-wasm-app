import { useQuery } from 'remax';
import Selectors from './selectors';
import { View } from 'annar/esm/web';
import { useState } from 'react';
import * as React from 'react';
import TitledBlock from '@/components/titledBlock';
import { Button } from 'annar';
import styles from './searchFilters.css';

interface SearchOptions {
  platform?: string;
  fans?: string;
}

interface Props {
  platform?: string;
  fans?: string;
  onFiltered?: (options?: SearchOptions) => void;
}

const platforms = [
  {
    title: '全部',
    value: 'all',
  },
  {
    title: '抖音',
    value: 'douyin',
  },
  {
    title: '小红书',
    value: 'xiaohongshu',
  },
  {
    title: '快手',
    value: 'kuaishou',
  },
];

const fanScales = [
  { value: 'all', title: '不限' },
  { value: '1k', title: '1千以上' },
  { value: '5k', title: '5千以上' },
  { value: '1w', title: '1万以上' },
  { value: '5w', title: '5万以上' },
  { value: '10w', title: '10万以上' },
  { value: '100w', title: '100万以上' },
  { value: '1000w', title: '1000万以上' },
];

export default function SearchFilters({
  platform: prevPlatform,
  fans: prevFans,
  onFiltered,
}: Props) {
  const [platform, setPlatform] = useState(prevPlatform || 'all');
  const [fans, setFans] = useState(prevFans || 'all');
  return (
    <View className={styles.filters}>
      <TitledBlock title={'平台'}>
        <Selectors
          options={platforms}
          value={platform}
          onSelect={(opt) => setPlatform(opt)}
        />
      </TitledBlock>
      <TitledBlock title={'粉丝数'}>
        <Selectors
          options={fanScales}
          value={fans}
          onSelect={(opt) => setFans(opt)}
        />
      </TitledBlock>
      <View className={styles.buttonGroup}>
        <Button
          className={styles.resetButton}
          shape={'square'}
          onTap={() => {
            setPlatform('all');
            setFans('all');
            onFiltered && onFiltered();
          }}
        >
          重置
        </Button>
        <Button
          className={styles.searchButton}
          shape={'square'}
          type={'primary'}
          onTap={() => {
            onFiltered &&
              onFiltered({
                platform,
                fans,
              });
          }}
        >
          搜索
        </Button>
      </View>
    </View>
  );
}
