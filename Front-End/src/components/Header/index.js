import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Button } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/donate">
        <Button>Doar</Button>
      </Link>
      <h3>Connect Pets</h3>
    </Container>
  );
}

export default Header;