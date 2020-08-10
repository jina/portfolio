import React from 'react';
import { Horizontal } from '.';

export default {
  title: 'Layout/Horizontal',
  component: Horizontal,
};

export const noSpacing = () => (
  <Horizontal>
    <Horizontal.Item>List Item</Horizontal.Item>

    <Horizontal.Item>List Item</Horizontal.Item>

    <Horizontal.Item>List Item</Horizontal.Item>
  </Horizontal>
);

export const base = () => (
  <Horizontal spacing="base">
    <Horizontal.Item>List Item</Horizontal.Item>

    <Horizontal.Item>List Item</Horizontal.Item>

    <Horizontal.Item>List Item</Horizontal.Item>
  </Horizontal>
);

export const small = () => (
  <Horizontal spacing="small">
    <Horizontal.Item>List Item</Horizontal.Item>

    <Horizontal.Item>List Item</Horizontal.Item>

    <Horizontal.Item>List Item</Horizontal.Item>
  </Horizontal>
);

export const medium = () => (
  <Horizontal spacing="medium">
    <Horizontal.Item>List Item</Horizontal.Item>

    <Horizontal.Item>List Item</Horizontal.Item>

    <Horizontal.Item>List Item</Horizontal.Item>
  </Horizontal>
);

export const large = () => (
  <Horizontal spacing="large">
    <Horizontal.Item>List Item</Horizontal.Item>

    <Horizontal.Item>List Item</Horizontal.Item>

    <Horizontal.Item>List Item</Horizontal.Item>
  </Horizontal>
);
