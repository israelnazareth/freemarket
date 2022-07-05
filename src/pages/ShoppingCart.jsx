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
        <Link to="/"><h4>Voltar para home</h4></Link>
        <h1>Carrinho de produtos</h1>
        <div>
          <span>
            {cartItemsSize}
          </span>
          &nbsp;produtos adicionados
        </div>
        <br />
        {cartItemsSize ? (
          <div>
            <CartItem
              cart={ cart }
              cartMap={ this.cartMap }
            />

            <div>
              Valor total da compra: R$
              <span>
                {
                  cart.reduce((acumulator, product) => acumulator
                    + parseFloat(product.price)
                    * parseFloat(product.quantity), 0).toFixed(2)
                }
              </span>
            </div>

            <br />

            <button type="button">
              Finalizar compra
            </button>
          </div>
        ) : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        <Link to="/checkout">
          <button data-testid="checkout-products" type="button">comprar</button>
        </Link>

      </div>
    );
  }
}

export default ShoppingCart;
