import React from 'react';
import { Link } from 'react-router-dom';

import { StyledMenu, MenuLink } from './styles.js';

function Menu({ open }) {
    return (
        <StyledMenu open={open}>
        <Link to="/">
            <MenuLink>Home</MenuLink>
          </Link>

          <Link to="/donate">
            <MenuLink>Doar</MenuLink>
          </Link>

          <Link to="/#">
            <MenuLink>Sobre o site</MenuLink>
          </Link>
      </StyledMenu>
    )
}

export default Menu;
