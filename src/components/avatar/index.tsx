import * as React from 'react';
import styles from './index.css';
import { Image, ImageProps } from 'remax/wechat';
import classNames from 'classnames';

interface Props extends Omit<ImageProps, 'src'> {
  url: string;
  size?: 'small' | 'default';
}

export default function Avatar({ url, size, className, ...imageProps }: Props) {
  return (
    <Image
      className={classNames(
        styles.avatar,
        className,
        size == 'small' && styles.avatarSmall,
      )}
      src={url}
      {...imageProps}
    />
  );
}
