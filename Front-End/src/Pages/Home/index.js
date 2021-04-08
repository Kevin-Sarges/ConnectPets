import React, { useState } from 'react';

import Pets from '../../components/Pets';

import { Container, DivContainer, Feed, Text } from './styles'

function ContainerPets() {
  const [ pets ] = useState(true);

  return (
    <Container>
      <DivContainer>
        <Feed>
          { pets
            ? <Text>Ainda não tem pets para adotar</Text>
            : <Pets />
          }
        </Feed>
      </DivContainer>
    </Container>
  );
}

export default ContainerPets;