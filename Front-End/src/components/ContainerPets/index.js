import React from 'react';

import Dog from '../../assets/images/dog.jpg';
import { Container, StyleImage, DivContainer, Pets, Footer, Description, Button } from './styles';

function ContainerPets() {
  return (
    <Container>
      <DivContainer>
        <Pets>
          <StyleImage src={ Dog } alt="Pets"/>

          <Footer>
            <Description>
              <p>Doador: Kevin Sarges</p>
              <p>Raça: desconhecida</p>
              <p>Idade: 2 meses</p>
              <p>Sexo: Macho</p>
            </Description>

            <footer>
                <Button href="https://api.whatsapp.com/send?1=pt_BR&phone={{this.whatsapp}}&text=Desejo adotar o pet">
                    Entre em contato
                </Button>
            </footer>
          </Footer>
        </Pets>
      </DivContainer>
    </Container>
  );
}

export default ContainerPets;