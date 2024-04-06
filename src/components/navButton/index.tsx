import { Icon } from 'annar';
import { View } from 'annar/esm/web';
import * as React from 'react';
import { Text, Navigator } from 'remax/wechat';
import styles from './index.css';
import classNames from 'classnames';

interface Props {
  icon?: string;
  text: string;
  highlight?: boolean;
  onClick?: (e: any) => void;
  openType?:
    | 'navigate'
    | 'redirect'
    | 'switchTab'
    | 'reLaunch'
    | 'navigateBack'
    | 'exit';
  url?: string;
}

export default function NavButton({
  icon,
  text,
  onClick,
  highlight,
  openType,
  url,
}: Props) {
  const renderContent = () => {
    return (
      <>
        {icon && (
          <Icon
            type={icon}
            size={40}
            color={highlight ? '#03a9f4' : '#606060'}
            style={{
              textShadow: highlight ? '#03a9f4 0px 2px 20px 0px' : undefined,
            }}
          />
        )}
        <Text
          className={classNames(styles.text, highlight && styles.highlight)}
        >
          {text}
        </Text>
      </>
    );
  };
  if (openType && url) {
    return (
      <Navigator target={'self'} className={styles.navButton} openType={openType} url={url}>
        {renderContent()}
      </Navigator>
    );
  }
  return (
    <View onTap={onClick} className={styles.navButton}>
      {renderContent()}
    </View>
  );
}
