import React, { Component } from 'react';

import Dog from '../../assets/dog.jpg';
import api from '../../services/api';

import { Container, StyleImage, Footer, Description, Button } from './styles';

class Pets extends Component{
	state = {
		pets: [],
	}

	async componentDidMount() {
		const response = await api.get('/');

		//console.log(response.data);

		this.setState({ pets: response.data });
	}

	render() {

		const { pets } = this.state;

		return (
			<>
				{pets.map(pet => (
					<>
						<Container>
							<StyleImage src={ Dog } alt="Pets"/>
							<Footer>
								<Description>
									<p>Doador: { pet.name }</p>
									<p>Raça: { pet.race }</p>
									<p>Idade: { pet.age }</p>
									<p>Sexo: { pet.sex }</p>
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