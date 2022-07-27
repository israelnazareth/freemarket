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

  render() {
    const { cart, cartItemsSize } = this.state;

    return (
      <div>
        <Link to="/">
          <h3>Voltar para &#127968;</h3>
        </Link>
        <h1>Carrinho de produtos</h1>
        <div>{`${cartItemsSize} produto(s) adicionado(s)`}</div>
        <br />
        {cartItemsSize ? (
          <div>
            <CartItem
              cart={ cart }
              cartMap={ this.cartMap }
            />
            <table className="table-total-price">
              <th>
                {`Total: ${cart.reduce((acc, product) => acc
                  + parseFloat(product.price)
                  * parseFloat(product.quantity), 0)
                  .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                }`}
              </th>
            </table>
            <br />
          </div>
        ) : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        <Link to="/checkout">
          <button
            className="detail-button"
            data-testid="checkout-products"
            type="button"
          >
            Finalizar compra
          </button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
