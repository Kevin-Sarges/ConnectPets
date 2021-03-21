import React, { Component } from 'react';
//import { useNavigate } from "react-router-dom";

import { Container, Fieldset, Legend, ImagesPet, Inputs, Footer } from './styles';
import api from '../../services/api';

class Form extends Component {
  state = {
    dadosDonate: []
  }

  handleDonate = donates => {
    const dadosDonate = donates.map(donate => ({
      donate,
      photo: donate.photo,
      age: donate.age,
      sex: donate.sex,
      race: donate.race,
      name: donate.name,
      whatsapp: donate.whatsapp,
    }));

    this.setState({
      dadosDonate: this.state.dadosDonate.concat(dadosDonate)
    })
  }

  updateDonate = (id, data) => {
    this.setState({ dadosDonate: this.state.dadosDonate.map(uploadDonate => {
      return id === uploadDonate.id ? { ...uploadDonate, ...data} : uploadDonate;
    }) })
  }

  onChange = (event) => {
    const data = new FormData();

    data.append('donatePet', event.donate)

    api.post('/donate', data)
    .then(response => {
      this.updateDonate(this.updateDonate.id, {
        id: response.data.id
      });
    })
  }

  render() {
    return (
      <Container>
        <form onsubmit={this.handleDonate} enctype="multipart/form-data">
          <Fieldset>
            <Legend>Peecha alguns dados</Legend>
            
            <ImagesPet>
              <Inputs>
                <label for="photo">Foto do pet</label>
                <input 
                  id="photo" 
                  name="photo" 
                  type="file" 
                  onChange={this.onChange} 
                  required
                />
              </Inputs>
  
              <Inputs>
                <label for="age">Idade <span>(meses/anos)</span></label>
                <input 
                  id="age" 
                  name="age" 
                  placeholder="Ex: 2 meses" 
                  onChange={this.onChange} 
                  required
                />
              </Inputs>
            </ImagesPet>
  
            <Inputs>
              <label for="sex">Sexo</label>
              <input 
                name="sex"
                onChange={this.onChange}
                require
              />
            </Inputs>
  
            <Inputs>
              <label for="race">Raça <span>(Se você não sabe coloque como "Desconhecida"!)</span></label>
              <input 
                name="race" 
                onChange={this.onChange} 
                require
              />
            </Inputs>
  
            <Inputs>
              <label for="name">Nome do doador <span>(Só os dois primeiros nomes!)</span></label>
              <input 
                name="name" 
                onChange={this.onChange} 
                require
              />
            </Inputs>
  
            <Inputs>
              <label for="whatsapp">Numero do whatsapp</label>
              <input 
                name="whatsapp" 
                onChange={this.onChange} 
                require
              />
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