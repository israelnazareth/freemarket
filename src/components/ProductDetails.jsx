import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  addProduct = (product) => {
    let cart = [];

    const newProduct = {
      id: product.id,
      title: product.title,
    };

    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }

    cart.push(newProduct);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  render() {
    const { location:
      { state: {
        title, thumbnail, price, attributes, id } } } = this.props;
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartItemsSize = cart ? cart.length : 0;
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
          onClick={ this.addProduct({ id, title }) }
        >
          Adicionar ao carrinho
        </button>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          <span role="img" aria-label="cart">&#128722;</span>
          <span
            data-testid="shopping-cart-product-quantity"
          >
            { cartItemsSize }
          </span>
        </Link>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape([]).isRequired,
};

export default ProductDetails;
