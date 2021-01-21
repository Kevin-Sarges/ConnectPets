import React from 'react';

import Sidebar from '../Sidebar/';
import Pets from '../Pets'

import { Container, DivContainer } from './styles';

function ContainerPets() {
  return (
    <Container>
      <DivContainer>
        <Sidebar/>
        <Pets/>
      </DivContainer>
    </Container>
  );
}

export default ContainerPets;