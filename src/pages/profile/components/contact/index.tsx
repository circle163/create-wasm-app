import { Card, Col, Row } from 'annar';
import { View } from 'annar/esm/web';
import * as React from 'react';
import CopyableText from '@/components/copyableText';
interface Props {
  receiver?: string;
  wechat?: string;
  phone?: string;
  address?: string;
  weibo?: string;
  email?: string;
}

export default function Contact({
  receiver,
  wechat,
  phone,
  address,
  weibo,
  email,
}: Props) {
  const renderLine = (title: string, value: string) => {
    return (
      <Row>
        {/*<Col span={6}>{title}：</Col>*/}
        <Col span={12} >
            <CopyableText prefix={title} text={value} />
        </Col>
        {/*<Col span={18}>{value}</Col>*/}
      </Row>
    );
  };

  if (receiver || wechat || phone || address || weibo || email) {
    return (
      <Card shadow title={'联系方式'} style={{ marginTop: 30 }}>
        {receiver && renderLine('收货人', receiver)}
        {wechat && renderLine('微信', wechat)}
        {weibo && renderLine('微博', weibo)}
        {phone && renderLine('联系电话', phone)}
        {address && renderLine('地址', address)}
        {email && renderLine('邮箱', email)}
      </Card>
    );
  }
  return null;
}
