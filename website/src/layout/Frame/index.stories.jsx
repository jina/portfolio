import React from 'react';
import { Frame } from '.';
import { Example } from '../../storybook/example';

export default {
  title: 'Layout/Frame',
  component: Frame,
};

export const base = () => (
  <Frame>
    <Frame.Body>
      <Example text="body" />
    </Frame.Body>
  </Frame>
);
