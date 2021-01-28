import React from 'react';

import Pets from '../Pets'

import { Container, DivContainer, Feed } from './styles';

function ContainerPets() {
  return (
    <Container>
      <DivContainer>
        <Feed>
          <Pets/>
          <Pets/>
          <Pets/>
          <Pets/>
          <Pets/>
        </Feed>
      </DivContainer>
    </Container>
  );
}

export default ContainerPets;