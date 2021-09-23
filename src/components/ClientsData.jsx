import React, { Component } from 'react';

class ClientsData extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome:

          <input
            data-testid="checkout-fullname"
            id="name-input"
            type="text"
          />
        </label>
        <label htmlFor="email-input">
          E-mail:

          <input
            data-testid="checkout-email"
            id="email-input"
            type="email"
          />
        </label>
        <label htmlFor="cpf-input">
          CPF:

          <input
            data-testid="checkout-cpf"
            id="cpf-input"
            type="text"
            placeholder="00000000-00"
          />
        </label>
        <label htmlFor="phone-input">
          Telefone:

          <input
            data-testid="checkout-phone"
            id="phone-input"
            type="text"
          />
        </label>
        <label htmlFor="cep-input">
          CEP:

          <input
            data-testid="checkout-cep"
            id="cep-input"
            type="text"
          />
        </label>
        <label htmlFor="adress-input">
          Endereço:

          <input
            data-testid="checkout-address"
            id="adress-input"
            type="text"
          />
        </label>
      </form>
    );
  }
}

export default ClientsData;
