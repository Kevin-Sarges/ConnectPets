import React from 'react';

import { StyledBurger } from './styles';

function MenuHamburger({ open, setOpen }) {
	return (
		<StyledBurger open={ open } onClick={() => setOpen(!open)} >
			<span />
			<span />
			<span />
		</StyledBurger>
	);
}

export default MenuHamburger;