import React from 'react';
import { Navigation } from '.';

export default {
  title: 'Components/Navigation',
  component: Navigation,
};

export const base = () => (
  <Navigation>
    <Navigation.Item href="#">Navigation Item</Navigation.Item>
  </Navigation>
);
