import React, { Component } from 'react';

import { Container, Fieldset, Legend, ImagesPet, Inputs, Footer } from './styles';
import api from '../../services/api';

class Form extends Component {
  state = {
    
  }

  handleChange = event => {
    this.setState({
      photo: event.target.value,
      age: event.target.value,
      sex: event.target.value,
      race: event.target.value,
      name: event.target.value,
      whatsapp: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const pet = {
      photo: this.state.photo,
      age: this.state.age,
      sex: this.state.sex,
      race: this.state.race,
      name: this.state.name,
      wahtsapp: this.state.whatsapp,
    }

    api.post('/donate', { pet })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  render() {
    return (
      <Container>
        <form onsubmit={this.handleSubmit} enctype="multipart/form-data">
          <Fieldset>
            <Legend>Peecha alguns dados</Legend>
            
            <ImagesPet>
              <Inputs>
                <label for="photo">Foto do pet</label>
                <input id="photo" name="photo" type="file" onChange={this.handleChange} required/>
              </Inputs>
  
              <Inputs>
                <label for="age">Idade <span>(meses/anos)</span></label>
                <input id="age" name="age" onChange={this.handleChange} required placeholder="Ex: 2 meses"/>
              </Inputs>
            </ImagesPet>
  
            <Inputs>
              <label for="sex">Sexo</label>
              <input name="sex" onChange={this.handleChange} required/>
            </Inputs>
  
            <Inputs>
              <label for="race">Raça <span>(Se você não sabe coloque como "Desconhecida"!)</span></label>
              <input name="race" onChange={this.handleChange} required/>
            </Inputs>
  
            <Inputs>
              <label for="name">Nome do doador <span>(Só os dois primeiros nomes!)</span></label>
              <input name="name" onChange={this.handleChange} required/>
            </Inputs>
  
            <Inputs>
              <label for="whatsapp">Numero do whatsapp</label>
              <input name="whatsapp" onChange={this.handleChange} required/>
            </Inputs>
  
            <Footer>
              <button type="submit">Cadastrar</button>
            </Footer>
          </Fieldset>
        </form>
      </Container>
    );
  }
}

export default Form;