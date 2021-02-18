import React from 'react';

import api from '../../services/api';
import Form from '../../components/Form';

api.post('donatePet')

function Donate() {
  return (
      <>
        <Form/>
      </>
  );
}

export default Donate;