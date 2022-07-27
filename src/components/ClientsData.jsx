import React, { Component } from 'react';

class ClientsData extends Component {
  render() {
    return (
      <form className="form-client">
        <label htmlFor="name-input" className="client-data">
          Nome:
          <input
            data-testid="checkout-fullname"
            id="name-input"
            type="text"
            className="input-data"
            placeholder="Nome completo"
          />
        </label>
        <label htmlFor="email-input" className="client-data">
          E-mail:
          <input
            data-testid="checkout-email"
            id="email-input"
            type="email"
            className="input-data"
            placeholder="E-mail"
          />
        </label>
        <label htmlFor="cpf-input" className="client-data">
          CPF:
          <input
            data-testid="checkout-cpf"
            id="cpf-input"
            type="text"
            className="input-data"
            placeholder="123.456.789-10"
          />
        </label>
        <label htmlFor="phone-input" className="client-data">
          Telefone:
          <input
            data-testid="checkout-phone"
            id="phone-input"
            type="text"
            className="input-data"
            placeholder="Celular / Fixo"
          />
        </label>
        <label htmlFor="cep-input" className="client-data">
          CEP:
          <input
            data-testid="checkout-cep"
            id="cep-input"
            type="text"
            className="input-data"
            placeholder="12.345-678"
          />
        </label>
        <label htmlFor="adress-input" className="client-data">
          Endereço:
          <input
            data-testid="checkout-address"
            id="adress-input"
            type="text"
            className="input-data"
            placeholder="Logradouro - Nº - Bairro - Cidade - UF"
          />
        </label>
      </form>
    );
  }
}

export default ClientsData;
