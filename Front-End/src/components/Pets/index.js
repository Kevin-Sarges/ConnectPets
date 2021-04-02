import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, PreviewImage, Footer, Description, Button } from './styles';

function Pets() {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		api.get('/').then(response => {
			setPets(response.data);
		}).catch(error => {
			console.log(error);
		});
	});

	return (
		<>
			{pets.map(pet => (
				<>
					<Container key={ pet.id }>
						<PreviewImage src={ pet.url } alt="Pets" />

						<Footer>
							<Description>
								<p><b>Doador:</b> { pet.name }</p>
								<p><b>Raça:</b> { pet.race }</p>
								<p><b>Idade:</b> { pet.age }</p>
								<p><b>Sexo:</b> { pet.sex }</p>
							</Description>
			
							<footer>
								<Button href={ `https://api.whatsapp.com/send?1=pt_BR&phone=${pet.whatsapp}&text=Desejo adotar pet` }>
									Entre em contato
								</Button>
							</footer>
						</Footer>
					</Container>
				</>
			))}
		</>
	);
}

export default Pets;
