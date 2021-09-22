import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  addProduct,
  removeOneProductById,
  removeProductById,
} from '../services/product.service';

class CartItem extends Component {
  render() {
    const {
      cart,
      cartMap,
    } = this.props;

    return (
      cart.map((product) => (
        <div key={ product.id }>
          <button
            type="button"
            onClick={ () => removeProductById(product.id, () => cartMap()) }
          >
            X
          </button>
          &nbsp;
          <span data-testid="shopping-cart-product-name">
            {product.title}
          </span>
          &nbsp;
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => removeOneProductById(product.id, () => cartMap()) }
          >
            -
          </button>
          &nbsp;
          <span data-testid="shopping-cart-product-quantity">{product.quantity}</span>
          &nbsp;
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => addProduct({
              id: product.id,
              title: product.title,
              price: product.price,
            }, () => cartMap()) }
          >
            +
          </button>
          <br />
          <br />
        </div>
      ))
    );
  }
}

CartItem.propTypes = {
  items: PropTypes.array,
  cartMap: PropTypes.func,
}.isRequired;

export default CartItem;
