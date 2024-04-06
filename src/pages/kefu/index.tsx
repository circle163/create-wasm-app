import {previewImage} from "annar/esm/one";
import React from 'react';
import { View, Image } from 'remax/one';
import { setClipboardData } from 'remax/wechat';
import styles from './index.css';
import kefuQr from './kefu.jpg';
import { Button } from 'annar';

interface NoteProps {
  title: string;
  content: string;
}

function Note({ title, content }: NoteProps) {
  return (
    <View className={styles.note}>
      <View className={styles.title}>{title}</View>
      <View className={styles.content}>{content}</View>
    </View>
  );
}

export default function Kefu() {
  return (
    <View className={styles.kefu}>
      <View className={styles.qr} onTap={async() => {
          console.log("kf url", kefuQr);
          await previewImage({
              urls: ["https://nilaicha-1254362216.cos.ap-shanghai.myqcloud.com/kefu11.jpeg"], // FIXME: 此处放入后端返回的二维码图片地址
          })
      }}>
        <Image mode={'aspectFit'} src={kefuQr} />
      </View>
      <Note
        title={'方法一'}
        content={'点击上面二维码，长按识别并添加客服人员微信（如不能预览，可先保存客服二维码到相册，再从相册识别）'}
      />
      <Note
        title={'方法二'}
        content={
          '复制客服人员微信号，前往微信搜索并添加该好友。客服人员微信号：warrior815795010'
        }
      />
      <Button
        type={'primary'}
        onTap={async () => {
          await setClipboardData({ data: 'warrior815795010' });
        }}
      >
        复制客服微信
      </Button>
    </View>
  );
}
