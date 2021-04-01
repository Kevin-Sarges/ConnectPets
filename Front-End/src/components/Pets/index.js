import React, { Component } from 'react';

import api from '../../services/api';

import { Container, PreviewImage, Footer, Description, Button } from './styles';

class Pets extends Component {
	state = {
		pets: [],
	}

	async componentDidMount() {
		try {
			const response = await api.get('/');

			this.setState({ pets: response.data });
		} catch (error) {
			console.log(error);
		}
	}

	render() {

		const { pets } = this.state;

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
}

export default Pets;
