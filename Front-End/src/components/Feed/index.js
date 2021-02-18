import React from 'react';

import Pets from '../Pets'
import api from '../../services/api';

import { Container, DivContainer, Feed } from './styles';

api.get('/')
  .then((response) => (response.data))
  .catch((err) => {
    console.log('Erro ao lista os pets' + err)
  });

function ContainerPets() {
  return (
    <Container>
      <DivContainer>
        <Feed>
          <Pets/>
        </Feed>
      </DivContainer>
    </Container>
  );
}

export default ContainerPets;