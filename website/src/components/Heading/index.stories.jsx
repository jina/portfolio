import React from 'react';
import { Heading } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
};

export const base = () => <Heading>Heading</Heading>;

export const title = () => <Heading.Title>Title</Heading.Title>;

export const small = () => <Heading.Small>Small</Heading.Small>;

export const label = () => <Heading.Label>Label</Heading.Label>;
