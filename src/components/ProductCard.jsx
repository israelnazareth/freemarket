import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product: { title, thumbnail, price, id, attributes } } = this.props;
    return (
      <Link
        to={ { pathname: `/details/${id}`,
          state: { title, thumbnail, price, id, attributes } } }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <h3>{title}</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{ `R$${price.toFixed(2)}` }</p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape([]).isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  attributes: PropTypes.shape([]).isRequired,
};

export default ProductCard;
