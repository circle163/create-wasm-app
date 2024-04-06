import { Button, Col, Row } from 'annar';
import { View } from 'annar/esm/web';
import * as React from 'react';
import styles from './selectors.css';

interface Option {
  title: string
  value: string
}

interface Props {
  value?: string;
  options?: Option[];
  onSelect?: (value: string) => void;
}

export default function Selectors({ options, value, onSelect }: Props) {
  return (
    <View className={styles.selectors}>
      {options &&
        options.map(({title, value: optValue}, index) => (
          <Button
            className={styles.sbutton}
            size={'large'}
            key={optValue}
            type={optValue == value ? 'primary' : 'default'}
            shape={'square'}
            onTap={() => onSelect && onSelect(optValue)}
          >
            {title}
          </Button>
        ))}
    </View>
  );
}
