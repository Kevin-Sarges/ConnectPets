import React from 'react';

import { Container, Fieldset, Legend, Inputs, Footer } from './styles';

function Form() {
  return (
    <Container>
      <form action="donatePet" method="POST" onsubmit="Checkfiles(this)">
        <Fieldset>
          <Legend>Peecha alguns dados</Legend>
          <Inputs>
            <label for="photo">Foto do pet <span>(Coloque o link da imagem do pet)</span></label>
						<input id="photo" name="photo" accept="image/png, image/jpeg" required/>
          </Inputs>

          <Inputs>
            <label for="age">Idade</label>
						<input id="age" name="age" required/>
          </Inputs>

          <Inputs>
            <label for="sex">Sexo</label>
						<input id="sex" name="sex" required/>
          </Inputs>

          <Inputs>
            <label for="race">Raça <span>(Se você não sabe coloque como "Desconhecida"!)</span></label>
						<input id="race" name="race" required/>
          </Inputs>

          <Inputs>
            <label for="name">Nome do doador <span>(Só os dois primeiros nomes!)</span></label>
						<input id="name" name="name" required/>
          </Inputs>

          <Inputs>
            <label for="whatsapp">Numero do whatsapp</label>
						<input id="whatsapp" name="whatsapp" required/>
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