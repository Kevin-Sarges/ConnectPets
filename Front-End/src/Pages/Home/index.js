import React from 'react';

import Pets from '../../components/Pets';

import { Container, DivContainer, Feed } from './styles'

function ContainerPets() {

  return (
    <Container>
      <DivContainer>
        <Feed>
          <Pets />
        </Feed>
      </DivContainer>
    </Container>
  );
}

export default ContainerPets;