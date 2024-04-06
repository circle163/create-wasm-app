import { Button } from 'annar';
import { View } from 'annar/esm/web';
import * as React from 'react';
import { Text, setClipboardData } from 'remax/wechat';
import styles from './index.css';

interface Props {
  prefix?: string;
  text?: string;
  hiddenText?: boolean;
}

export default function CopyableText({ prefix, text, hiddenText }: Props) {
    if (text) {
        return (
            <View className={styles.wrapper}>
                {prefix && <Text className={styles.prefix}>{prefix}</Text>}
                {!hiddenText && <Text className={styles.text}>{text}</Text>}
                <Button
                    className={styles.button}
                    size={'small'}
                    shape={'square'}
                    ghost
                    onTap={async () => {
                        if (text) {
                            await setClipboardData({data: text});
                        }
                    }}
                >
                    复制
                </Button>
            </View>
        );
    }
    return <View/>
}
