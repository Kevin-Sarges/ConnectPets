import React, { useState } from 'react';

import { Container, Fieldset, ImagesPet, Inputs, Footer } from './styles';
import DropZone from '../DropZone'
import api from '../../services/api';

function Form() {
	const [selctFile, setSelectFile] = useState();
	const [formData, setFormData] = useState({
    age: '',
    sex: '',
    race: '',
    name: '',
    whatsapp: '',
  });

	function onChange(event) {
		const { name, value } = event.target;
	
		setFormData({ ...formData, [name]: value });
	}
 
	function onSubmit(event) {
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

    if(selctFile) {
      data.append('photo', selctFile)
    }
		
		api.post('donate', formData)
  		.then(function(response) {
    		console.log(response);
  		})
  		.catch(function(error) {
    		console.log(error);
  		})
		
	}

  return (
    <Container>
      <form onSubmit={onSubmit} enctype="multiipart/form-data">
        <Fieldset> 
	        <DropZone onFileUploaded={setSelectFile} />

          <ImagesPet>
            <Inputs>
              <label for="age">Idade <span>(meses/anos)</span></label>
              <input
                name="age" 
                placeholder="Ex: 2 meses" 
                id="age"
                onChange={onChange}
                required
              />
            </Inputs>

	        <Inputs>
            <label for="sex">Sexo</label>
            <input 
              name="sex"
              id="sex"
              onChange={onChange}
              require
            />
          </Inputs>

          </ImagesPet>

          <Inputs>
            <label for="race">Raça <span>(Se você não sabe coloque como "Desconhecida"!)</span></label>
            <input 
              name="race" 
              id="race"
              onChange={onChange}
              require
            />
          </Inputs>

          <Inputs>
            <label for="name">Nome do doador <span>(Só os dois primeiros nomes!)</span></label>
            <input 
              name="name" 
              id="name"
              onChange={onChange}
              require
            />
          </Inputs>

          <Inputs>
            <label for="whatsapp">Numero do whatsapp</label>
            <input 
              name="whatsapp" 
              id="whatsapp"
              onChange={onChange}
              require
            />
          </Inputs>

          <Footer>
            <button type="submit">Cadastrar</button>
          </Footer>
        </Fieldset>
      </form>
    </Container>
  );
}

export default Form;
