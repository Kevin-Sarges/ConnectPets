import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.svg';
import { Container, Image } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        <Image src={ Logo }/>
      </Link>
      <h3>Connect Pets</h3>
    </Container>
  );
}

export default Header;