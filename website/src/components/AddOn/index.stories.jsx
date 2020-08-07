import React from 'react';
import { AddOn } from '.';
import { Example } from '../example';

export default {
  title: 'Components/AddOn',
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
