import React, { Component } from 'react';

class FormOfPayment extends Component {
  render() {
    return (
      <form className="payment-form">
        <label htmlFor="pix" className="client-data">
          <input type="radio" id="pix" name="payment" />
          Pix
        </label>
        <label htmlFor="boleto" className="client-data">
          <input type="radio" id="boleto" name="payment" />
          Boleto bancário
        </label>
        <label htmlFor="credit-card" className="client-data">
          <input type="radio" id="credit-card" name="payment" />
          Cartão de crédito
        </label>
        <label htmlFor="debit-card" className="client-data">
          <input type="radio" id="debit-card" name="payment" />
          Cartão de débito
        </label>
      </form>
    );
  }
}

export default FormOfPayment;
