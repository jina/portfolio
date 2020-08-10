import React from 'react';
import { AddOn } from '.';
import { Example } from '../../storybook/example';

export default {
  title: 'Layout/AddOn',
  component: AddOn,
};

export const base = () => (
  <AddOn>
    <AddOn.Body>
      <Example text="Body" />
    </AddOn.Body>

    <AddOn.Item>
      <Example text="Item" />
    </AddOn.Item>
  </AddOn>
);
