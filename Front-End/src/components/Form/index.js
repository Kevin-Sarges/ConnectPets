import React, { useState } from 'react';

import { Container, Fieldset, Legend, ImagesPet, Inputs, Footer } from './styles';
import api from '../../services/api';

const initialValue = {
	photo: '',
	age: '',
	sex: '',
	race: '',
	name: '',
	whatsapp: '',
}

function Form() {
	const [values, setValues] = useState(initialValue);

	function onChange(event) {
		const {name, value} = event.target;
	
		setValues({ ...values, [name]: value });

		console.log(setValues);
	}
 
	function onSubmit(event) {
		event.preventDefault();
		
		api.post('donate', values)
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
          <Legend>Peecha alguns dados</Legend>
          
          <ImagesPet>
            <Inputs>
              <label for="photo">Foto do pet</label>
              <input 
                name="photo" 
                type="file" 
                id="photo"
                onChange={onChange}
                //onFileUploaded={setSalectFile}
                required
              />
            </Inputs>

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
          </ImagesPet>

          <Inputs>
            <label for="sex">Sexo</label>
            <input 
              name="sex"
              id="sex"
              onChange={onChange}
              require
            />
          </Inputs>

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
