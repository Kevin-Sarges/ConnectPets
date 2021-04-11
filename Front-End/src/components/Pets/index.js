import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { Container, PreviewImage, Footer, Description, Button, Text } from './styles';

function Pets() {
	const [pets, setPets] = useState([]);
	const [isLoading, setIsLoading] = useState();
	
 	useEffect(() => {
		async function fetchDate() {
			try {
				const response = await api.get('/');

				setPets(response.data);
				setIsLoading();
			} catch (error) {
				console.log(error);
			}
		}

		fetchDate();
	}, []);

	return (
		<>
			{ !isLoading && !pets.length && <Text>Ainda não tem pets para adotar!!😢</Text> }
			{ !isLoading && pets.length > 0 &&
				<>
					{ pets.map (pet => (
						<Container key={ pet.id }>
							<PreviewImage src={ pet.url } alt="Pets" />

							<Footer>
								<Description>
									<p><b>Doador:</b> { pet.name }</p>
									<p><b>Raça:</b> { pet.race }</p>
									<p><b>Idade:</b> { pet.age }</p>
									<p><b>Sexo:</b> { pet.sex }</p>
								</Description>

								
								<Button href={ `https://api.whatsapp.com/send?1=pt_BR&phone=${pet.whatsapp}&text=Desejo adotar pet` }>
									Entre em contato
								</Button>
							</Footer>
						</Container>
					))}
				</>
			}
		</>
	);
}

export default Pets;
