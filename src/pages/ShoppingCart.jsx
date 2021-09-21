import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    return (
      <div>
        <h1>Carrinho de produtos</h1>
        <div>
          <span
            data-testid="shopping-cart-product-quantity"
          >
            { cart.length }
          </span>
          &nbsp;produtos adicionados
        </div>
        {cart.length ? cart.map((product, index) => (
          <div
            key={ index }
            data-testid="shopping-cart-product-name"
          >
            {product.title}
          </div>
        )) : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </div>
    );
  }
}

export default ShoppingCart;
