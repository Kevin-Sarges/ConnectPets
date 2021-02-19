import React from 'react';

import Pets from '../Pets';

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