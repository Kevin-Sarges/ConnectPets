import React, { useState, useEffect } from 'react';

import Pets from '../../components/Pets';

import { Container, DivContainer, Feed, Text } from './styles'

function ContainerPets() {
  const [pets, setPets] = useState(true);

  useEffect(() => {
    setPets(false);
  }, []);

  return (
    <Container>
      <DivContainer>
        <Feed>
          { pets && <Pets /> }
          { !!pets && <Text>Ainda não tem pets para doar!</Text> }
        </Feed>
      </DivContainer>
    </Container>
  );
}

export default ContainerPets;