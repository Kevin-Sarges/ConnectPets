import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import { DivHeader, Image, Menu, MenuLink } from './styles';

import MenuHamburger from '../MenuHamburger';

function Header() {
  const [open, setOpen] = useState(false);

  return (
		<DivHeader>
      <Image src={ Logo }/>

      <MenuHamburger open={ open } setOpen={ setOpen } />

      <Menu open={ open } setOpen={ setOpen }>
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
    </DivHeader>
  );
}

export default Header;