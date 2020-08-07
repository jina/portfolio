import React from 'react';
import { StickyFooter } from '.';
import { Example } from '../example';

export default {
  title: 'Components/StickyFooter',
  component: StickyFooter,
};

export const base = () => (
  <StickyFooter>
    <StickyFooter.Header>
      <Example text="header" />
    </StickyFooter.Header>

    <StickyFooter.Body>
      <Example text="body" />
    </StickyFooter.Body>

    <StickyFooter.Footer>
      <Example text="footer" />
    </StickyFooter.Footer>
  </StickyFooter>
);
