import React from 'react';

import Pets from '../../components/Pets';

import { Container, DivContainer, Feed } from './styles'

function Home() {
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

export default Home;