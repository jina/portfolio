import React from 'react';
import { Container } from '.';
import { Example } from '../example';

export default {
  title: 'Components/Container',
  component: Container,
};

export const base = () => (
  <Container>
    <Example text="container" />
  </Container>
);
