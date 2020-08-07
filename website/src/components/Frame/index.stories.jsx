import React from 'react';
import { Frame } from '.';
import { Example } from '../example';

export default {
  title: 'components/Frame',
  component: Frame,
};

export const base = () => (
  <Frame>
    <Frame.Body>
      <Example text="body" />
    </Frame.Body>
  </Frame>
);
