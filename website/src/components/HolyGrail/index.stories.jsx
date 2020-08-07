import React from 'react';
import { HolyGrail } from '.';
import { Example } from '../example';

export default {
  title: 'Components/HolyGrail',
  component: HolyGrail,
};

export const base = () => (
  <HolyGrail>
    <HolyGrail.Header>
      <Example text="Header" />
    </HolyGrail.Header>

    <HolyGrail.Body>
      <HolyGrail.SidebarLeft>
        <Example text="Sidebar Left" />
      </HolyGrail.SidebarLeft>

      <HolyGrail.Content>
        <Example text="Content" />
      </HolyGrail.Content>

      <HolyGrail.SidebarRight>
        <Example text="Sidebar Right" />
      </HolyGrail.SidebarRight>
    </HolyGrail.Body>

    <HolyGrail.Footer>
      <Example text="Footer" />
    </HolyGrail.Footer>
  </HolyGrail>
);
