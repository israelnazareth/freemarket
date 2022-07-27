import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
      cartItemsSize: 0,
    };
  }

  componentDidMount() {
    this.cartMap();
  }

  cartMap = () => {
    const cartListStorage = JSON.parse(localStorage.getItem('cart') || '[]');
    const newCart = Object.keys(cartListStorage).map((key) => ({
      id: cartListStorage[key][0].id,
      title: cartListStorage[key][0].title,
      price: cartListStorage[key][0].price,
      quantity: cartListStorage[key].length,
    }));

    this.setState({
      cart: newCart,
      cartItemsSize: localStorage.getItem('productQuantity'),
    });
  }

  formatedPrice = (price) => {
    if (price === null) price = 0;
    return price.toLocaleString('pt-br',
      { style: 'currency', currency: 'BRL' });
  }

  render() {
    const { cart, cartItemsSize } = this.state;

    return (
      <div>
        <Link to="/">
          <h3>
            Voltar para
            <span role="img" aria-label="casa">&#127968;</span>
          </h3>
        </Link>
        <h1>Carrinho de produtos</h1>
        {cartItemsSize > 0 ? (
          <div>
            <div>{`${cartItemsSize} produto(s) adicionado(s)`}</div>
            <br />
            <CartItem
              cart={ cart }
              cartMap={ this.cartMap }
            />
            <table className="table-total-price">
              <th>
                {`Total: ${this.formatedPrice(
                  cart.reduce((acc, { price, quantity }) => acc
                  + price * quantity, 0),
                )}`}
              </th>
            </table>
            <br />
            <Link to="/checkout">
              <button
                className="go-to-checkout"
                data-testid="checkout-products"
                type="button"
              >
                Finalizar compra
              </button>
            </Link>
          </div>
        ) : <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>}
      </div>
    );
  }
}

export default ShoppingCart;
