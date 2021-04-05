import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import { Header, Image, Hamburger, Menu, MenuLink } from './styles';

//import Pages from '../Menu';
//import Burgue from '../Hamburgue';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
		<Header>
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

        <Link to="/#">
          <MenuLink>Sobre o site</MenuLink>
        </Link>
      </Menu>
    </Header>
  );
}

export default NavBar;