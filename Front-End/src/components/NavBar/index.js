import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import { Nav, Image, Hamburger, Menu, MenuLink } from './styles';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
		<Nav>
      <Image src={ Logo }/>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span/>
        <span/>
        <span/>
      </Hamburger>

      <Menu isOpen={isOpen}>
        <Link to="/">
          <MenuLink>Home</MenuLink>
        </Link>

        <Link to="/donate">
          <MenuLink>Doar</MenuLink>
        </Link>

        <Link to="#">
          <MenuLink>Sobre o site</MenuLink>
        </Link>
      </Menu>
    </Nav>
  );
}

export default NavBar;