import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Section, Div, Inputs, ButtonPost } from './styles';
import DropZone from '../../components/DropZone'
import api from '../../services/api';

function Form() {
	const [selectFile, setSelectFile] = useState();

	const [formData, setFormData] = useState({
		age: '',
		sex: '',
		race: '',
		name: '',
		whatsapp: '',
	});

  const navigete = useNavigate();

	function handleChange(event) {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	}

	function handleSubmit(event) {
		event.preventDefault();

		const {
			age,
			sex,
			race,
			name,
			whatsapp
		} = formData;

		const data = new FormData();

		data.append('age', age);
		data.append('sex', sex);
		data.append('race', race);
		data.append('name', name);
		data.append('whatsapp', whatsapp);
		data.append('image', selectFile);

		api.post('/donate', data)
			.then(function() {
	       		navigete('/');
			})
	      	.catch(function(error) {
				console.log(error);
				alert('erro ao salvar!!');
	      	});
	}

	return (
		<Container>
			<form onSubmit={handleSubmit} enctype="multiipart/form-data">
				<Section>
					<DropZone onFileUploaded={setSelectFile} />

					<Div>
						<Inputs>
							<label for="age">Idade <span>(Dias, Meses ou Anos)</span></label>
							<input
							name="age"
							type="text"
							placeholder="Ex: 2 meses" 
							id="age"
							onChange={handleChange}
							required
							/>
						</Inputs>

						<Inputs>
							<label for="sex">Sexo</label>
							<input 
							name="sex"
							type="text"
							placeholder="Ex: Macho ou Fêmia"
							id="sex"
							onChange={handleChange}
							require
							/>
						</Inputs>
					</Div>

					<Inputs>
						<label for="race">Raça <span>(Se você não sabe coloque como "Desconhecida"!)</span></label>
						<input 
							name="race" 
							type="text"
							placeholder="Ex: Desconhecida"
							id="race"
							onChange={handleChange}
							require
						/>
					</Inputs>

					<Inputs>
						<label for="name">Nome do doador <span>(Só os dois primeiros nomes!)</span></label>
						<input 
							name="name"
							type="text" 
							placeholder="Ex: Kevin Sarges"
							id="name"
							onChange={handleChange}
							require
						/>
					</Inputs>

					<Inputs>
						<label for="whatsapp">Numero do whatsapp</label>
						<input 
							name="whatsapp"
							type="number"
							placeholder="Ex: 91984379265"
							id="whatsapp"
							onChange={handleChange}
							require
						/>
					</Inputs>

					<ButtonPost>
						<button type="submit">Postar</button>
					</ButtonPost>
				</Section>
			</form>
		</Container>
	);
}

export default Form;
