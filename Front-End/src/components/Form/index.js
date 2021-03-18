import React from 'react';
import axios from '../../services/api';

import { Container, Fieldset, Legend, ImagesPet, Inputs, Footer } from './styles';

function Form() {
  return (
    axios.post('/donate', {
      file: '',
      age: '',
      sex: '',
      race: '',
      name: '',
      whatsapp: '',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }),
    

    <Container>
      <form action="donatePet" method="POST" onsubmit="Checkfiles(this)" enctype="multipart/form-data">
        <Fieldset>
          <Legend>Peecha alguns dados</Legend>
          
          <ImagesPet>
            <Inputs>
              <label for="photo">Foto do pet</label>
              <input id="photo" name="photo" type="file" required/>
            </Inputs>

            <Inputs>
              <label for="age">Idade <span>(meses/anos)</span></label>
              <input id="age" name="age" required/>
            </Inputs>
          </ImagesPet>

          <Inputs>
            <label for="sex">Sexo</label>
						<input name="sex" required/>
          </Inputs>

          <Inputs>
            <label for="race">Raça <span>(Se você não sabe coloque como "Desconhecida"!)</span></label>
						<input name="race" required/>
          </Inputs>

          <Inputs>
            <label for="name">Nome do doador <span>(Só os dois primeiros nomes!)</span></label>
						<input name="name" required/>
          </Inputs>

          <Inputs>
            <label for="whatsapp">Numero do whatsapp</label>
						<input name="whatsapp" required/>
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