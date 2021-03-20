import React, { useState } from 'react';

import { Container, Fieldset, Legend, ImagesPet, Inputs, Footer } from './styles';
import api from '../../services/api';

function Form() {
  const [donate, setDonate] = useState({
    photo: '',
    age: '',
    sex: '',
    race: '',
    name: '',
    whatsapp: '', 
  });


  function handleInputChange(event) {
    donate[event.target.name] = event.target.value;
    setDonate(donate);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    api.post('/donate', donate)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      });
  }

  return (
    <Container>
      <form onsubmit={handleFormSubmit} enctype="multipart/form-data">
        <Fieldset>
          <Legend>Peecha alguns dados</Legend>
          
          <ImagesPet>
            <Inputs>
              <label for="photo">Foto do pet</label>
              <input 
                id="photo" 
                name="photo" 
                type="file" 
                onChange={handleInputChange} 
                required
              />
            </Inputs>

            <Inputs>
              <label for="age">Idade <span>(meses/anos)</span></label>
              <input 
                id="age" 
                name="age" 
                placeholder="Ex: 2 meses" 
                onChange={handleInputChange} 
                required
              />
            </Inputs>
          </ImagesPet>

          <Inputs>
            <label for="sex">Sexo</label>
            <input 
              name="sex" 
              require
            />
          </Inputs>

          <Inputs>
            <label for="race">Raça <span>(Se você não sabe coloque como "Desconhecida"!)</span></label>
            <input 
              name="race" 
              onChange={handleInputChange} 
              require
            />
          </Inputs>

          <Inputs>
            <label for="name">Nome do doador <span>(Só os dois primeiros nomes!)</span></label>
            <input 
              name="name" 
              onChange={handleInputChange} 
              require
            />
          </Inputs>

          <Inputs>
            <label for="whatsapp">Numero do whatsapp</label>
            <input 
              name="whatsapp" 
              onChange={handleInputChange} 
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