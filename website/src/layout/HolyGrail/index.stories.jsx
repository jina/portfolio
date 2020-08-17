import React from 'react';
import { HolyGrail } from '.';

export default {
  title: 'Layout/HolyGrail',
  component: HolyGrail,
};

export const base = () => (
  <HolyGrail>
    HolyGrail<HolyGrail.Footer>Footer</HolyGrail.Footer>
  </HolyGrail>
);
