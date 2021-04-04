import React from 'react';

import { StyledBurger } from './styles';

function Hamburgue({ open, setOpen }) {
	return (
		<StyledBurger open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
}

export default Hamburgue;