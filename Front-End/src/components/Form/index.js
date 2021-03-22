import React, { useState } from 'react';

import { Container, Fieldset, Legend, ImagesPet, Inputs, Footer } from './styles';
// import api from '../../services/api';

function Form(props) {
  const [dados, setDados] = useState({});

  const submit = (event) => {
    event.preventDefault();
    props.handleSubmit(dados);
  }
  
  /*api.post('donate', {
    file: '4124781269482614-dog.png',
    age: '2 meses',
    sex: 'macho',
    race: 'Desconhecida',
    name: 'jdkfgaejfg',
    whatsapp: '333333333333',
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  })*/

  return (
    <Container>
      <form onSubmit={submit} enctype="multiipart/form-data">
        <Fieldset>
          <Legend>Peecha alguns dados</Legend>
          
          <ImagesPet>
            <Inputs>
              <label for="photo">Foto do pet</label>
              <input 
                name="photo" 
                type="file" 
                id="photo"
                onChange={e => setDados({ ...dados, photo: e.target.value })}
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
                onChange={e => setDados({ ...dados, age: e.target.value })}
                required
              />
            </Inputs>
          </ImagesPet>

          <Inputs>
            <label for="sex">Sexo</label>
            <input 
              name="sex"
              id="sex"
              onChange={e => setDados({ ...dados, sex: e.target.value })}
              require
            />
          </Inputs>

          <Inputs>
            <label for="race">Raça <span>(Se você não sabe coloque como "Desconhecida"!)</span></label>
            <input 
              name="race" 
              id="race"
              onChange={e => setDados({ ...dados, race: e.target.value })}
              require
            />
          </Inputs>

          <Inputs>
            <label for="name">Nome do doador <span>(Só os dois primeiros nomes!)</span></label>
            <input 
              name="name" 
              id="name"
              onChange={e => setDados({ ...dados, name: e.target.value })}
              require
            />
          </Inputs>

          <Inputs>
            <label for="whatsapp">Numero do whatsapp</label>
            <input 
              name="whatsapp" 
              id="whatsapp"
              onChange={e => setDados({ ...dados, whatsapp: e.target.value })}
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
