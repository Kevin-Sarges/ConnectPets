import React, { useState } from 'react';

import Logo from '../../assets/logo.svg';
import { Header, Image } from './styles';

import Menu from '../Menu';
import Hamburgue from '../Hamburgue';

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
		<Header>
      <Image src={ Logo }/>

      <div>
        <Menu open={ open } setOpen={setOpen} />

        <Hamburgue open={ open } setOpen={setOpen} />
      </div>
    </Header>
  );
}

export default NavBar;