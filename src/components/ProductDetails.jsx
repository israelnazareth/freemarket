import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

class ProductDetails extends Component {

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
    const { location: { state: { title, thumbnail, price, attributes } } } = this.props;

    return (
      <section data-testid="product-detail-name">
        <h1>{`${title}`}</h1>
        <img src={ thumbnail } alt={ `Figure of ${title}` } />
        <div>
          <h3>Detalhes do produto:</h3>
          <ul>
            {attributes.map((attribute) => (
              <li key={ attribute.id }>
                {`${attribute.name}: ${attribute.value_name}`}
              </li>
            ))}
          </ul>
        </div>
        <p>{`R$${price.toFixed(2)}`}</p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.addProduct }
        >
          Adicionar ao carrinho
        </button>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape([]).isRequired,
};

export default ProductDetails;
