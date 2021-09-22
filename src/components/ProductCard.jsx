import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addProduct } from '../services/product.service';

class ProductCard extends Component {
  render() {
    const { product: { title, thumbnail, price, id, attributes } } = this.props;
    const { product, postAddProduct } = this.props;

    return (
      <div data-testid="product">
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { title, thumbnail, price, id, attributes },
          } }
          data-testid="product-detail-link"
        >
          <h3>{title}</h3>
        </Link>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$${price.toFixed(2)}`}</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addProduct({
            id: product.id,
            title: product.title,
            price: product.price,
          }, postAddProduct) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape([]),
  postAddProduct: PropTypes.func,
}.isRequired;

export default ProductCard;
