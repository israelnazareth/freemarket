import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addProduct } from '../services/product.service';

class ProductCard extends Component {
  render() {
    const { product: { title, thumbnail, price, id, attributes } } = this.props;
    const { product, postAddProduct } = this.props;

    return (
      <div data-testid="product" className="product">
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { title, thumbnail, price, id, attributes },
          } }
          data-testid="product-detail-link"
        >
          <h4>{title}</h4>
          <img src={ thumbnail } alt={ title } className="image-product" />
        </Link>
        <p>{`R$${price.toFixed(2)}`}</p>
        <div className="container-button">
          <button
            type="button"
            data-testid="product-add-to-cart"
            className="add-to-cart-button"
            onClick={ () => addProduct({
              id: product.id,
              title: product.title,
              price: product.price,
            }, postAddProduct) }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape([]),
  postAddProduct: PropTypes.func,
}.isRequired;

export default ProductCard;
