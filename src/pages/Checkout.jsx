import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClientsData from '../components/ClientsData';
import FormOfPayment from '../components/FormOfPayment';

class Checkout extends Component {
  render() {
    return (
      <section>
        <Link to="/">
          <h3>
            Voltar para
            <span role="img" aria-label="casa">&#127968;</span>
          </h3>
        </Link>
        <Link to="/shopping-cart">
          <h3>Revise seus produtos</h3>
        </Link>
        <div className="div-checkout">
          <h1>Detalhes de endereço</h1>
          <ClientsData />
          <h2>Formas de pagamento</h2>
          <FormOfPayment />
          <button type="button" className="checkout-button">
            Finalizar Compra
          </button>
        </div>
      </section>
    );
  }
}

export default Checkout;
