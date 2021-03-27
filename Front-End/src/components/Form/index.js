import React, { useState } from 'react';

import { Container, Fieldset, Div, Inputs, Footer } from './styles';
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

    	if(selctFile) {
      	data.append('image', selctFile);
    	}

      
		api.post('donate', formData)
  		.then(function(response) {
        console.log(response);
        alert('Postagem realizada!!');
  		})
  		.catch(function(error) {
        console.log(error);
        alert('erro ao salvar!!');
  		});
	}

  return (
    <Container>
      <form onSubmit={handleSubmit} enctype="multiipart/form-data">
        <Fieldset>
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

          <Footer>
            <button type="submit">Postar</button>
          </Footer>
        </Fieldset>
      </form>
    </Container>
  );
}

export default Form;
