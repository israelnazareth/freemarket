import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addProduct } from '../services/product.service';

class ProductCard extends Component {
  formatedPrice = (price) => {
    if (price === null) price = 0;
    return price.toLocaleString('pt-br',
      { style: 'currency', currency: 'BRL' });
  }

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
        <p className="price">
          {this.formatedPrice(price)}
        </p>
        <div className="container-button">
          <button
            type="button"
            data-testid="product-add-to-cart"
            className="add-to-cart-button"
            formatedPrice={ this.formatedPrice(price) }
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
