import { Card } from 'annar';
import * as React from 'react';

interface Props {
  introduction?: string;
}

export default function Introduction({ introduction }: Props) {
  return (
    <Card title={'个性签名'} shadow style={{ marginTop: 30 }}>
      {introduction}
    </Card>
  );
}
