import React from 'react';
import { Card } from '.';

export default {
  title: 'Components/Card',
  component: Card,
};

export const base = () => <Card heading="Card">Card</Card>;

export const list = () => (
  <Card heading="Card">
    <Card.List>
      <Card.Item href="#" text="Item" />

      <Card.Item href="#" text="Item" />
    </Card.List>
  </Card>
);
