import React, { Component } from 'react';
import ClientsData from '../components/ClientsData';
import FormOfPayment from '../components/FormOfPayment';
import CartItem from '../components/CartItem';

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      productsCheckout: false,
    };
  }

  componentDidMount() {
    this.getProductInLocalStorage();
  }

  getProductInLocalStorage = () => {
    const productLocalStorage = JSON.parse(localStorage.getItem('item-list'));
    if (productLocalStorage !== null) {
      this.setState({
        productsCheckout: true,
      });
    }
    this.setState({
      products: productLocalStorage,
    });
  }

  filterProducts = () => {
    const { products } = this.state;
    const filteredProduts = products.reduce((acc, product) => {
      const includeInAcc = acc.some((item) => item.id === product.id);
      if (!includeInAcc) {
        acc = [...acc, product];
        return acc;
      }
      return acc;
    }, []);
    return filteredProduts;
  }

  render() {
    const { productsCheckout, products } = this.state;
    return (
      <section>
        <p>Revise seus Produtos</p>
        {productsCheckout
          ? (
            this.filterProducts().map((product) => (
              <CartItem
                key={ product.id }
                product={ product }
                cartProducts={ products }
              />
            ))
          )
          : (
            <p>Carrinho vazio</p>
          )}
        {productsCheckout
          ? (
            <p>
              Total:
              {' '}
              {products.reduce((acc, product) => {
                acc = product.price + acc;
                return acc;
              }, 0)}
            </p>
          )
          : ''}
        <ClientsData />
        <FormOfPayment />
        <button type="button">
          Finalizar Compra
        </button>
      </section>
    );
  }
}

export default Checkout;
