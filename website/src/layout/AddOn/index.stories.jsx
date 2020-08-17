import React from 'react';
import { AddOn } from '.';

export default {
  title: 'Layout/AddOn',
  component: AddOn,
};

export const base = () => (
  <AddOn>
    <AddOn.Body>Body</AddOn.Body>

    <AddOn.Item>Item</AddOn.Item>
  </AddOn>
);
