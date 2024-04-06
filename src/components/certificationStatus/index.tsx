import uncertificatedImage from './uncertified.png';
import certificatedImage from './certified.png';
import React from 'react';
import { Image } from 'remax/wechat';
import styles from './index.css';

interface Props {
  certificated: boolean;
  size?: 'small' | 'default' | 'large';
}

export default function CertificationStatus({
  certificated,
  size = 'default',
}: Props) {
  let className = styles.status;
  switch (size) {
    case 'default':
      className = styles.status;
      break;
    case 'large':
      className = styles.largeStatus;
      break;
    case 'small':
      className = styles.smallStatus;
      break;
  }
  return (
    <Image
      className={className}
      src={certificated ? certificatedImage : uncertificatedImage}
    />
  );
}
