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
      <table className="table-cart">
        <tr>
          <th>Remover</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Preço unitário</th>
        </tr>
        {cart.map((product) => (
          <tr key={ product.id }>
            <td>
              <button
                type="button"
                onClick={ () => removeProductById(product.id, () => cartMap()) }
              >
                X
              </button>
            </td>
            <td>
              <span data-testid="shopping-cart-product-name">
                {product.title}
              </span>
            </td>
            <td>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => removeOneProductById(product.id, () => cartMap()) }
              >
                -
              </button>
              <span
                data-testid="shopping-cart-product-quantity"
              >
                {` ${product.quantity} `}
              </span>
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
            </td>
            <td>
              {(product.price).toLocaleString('pt-br',
                { style: 'currency', currency: 'BRL' })}
            </td>
            <br />
            <br />
          </tr>
        ))}
      </table>
    );
  }
}

CartItem.propTypes = {
  items: PropTypes.array,
  cartMap: PropTypes.func,
}.isRequired;

export default CartItem;
