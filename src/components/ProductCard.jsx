import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  addProduct = () => {
    const { postAddProduct } = this.props;
    const { product } = this.props;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newProduct = {
      id: product.id,
      title: product.title,
    };

    cart.push(newProduct);
    localStorage.setItem('cart', JSON.stringify(cart));
    postAddProduct();
  }

  render() {
    const { product: { title, thumbnail, price, id, attributes } } = this.props;

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
          onClick={ this.addProduct }
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
