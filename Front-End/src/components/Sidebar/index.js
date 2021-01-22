import React from 'react';
import { Link } from 'react-router-dom';

import { Container, SidebarMenu } from './styles';

function Sidebar() {
  return (
    <Container>
      <SidebarMenu>
        <Link to="/donate">
          Doar
        </Link>

        <Link to="#">
          Informações sobre o site
        </Link>
      </SidebarMenu>
    </Container>
  );
}

export default Sidebar;