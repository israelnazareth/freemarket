import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { addProduct } from '../services/product.service';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      cartItemsSize: localStorage.getItem('productQuantity') || 0,
    };
  }

  render() {
    const {
      location: {
        state: {
          title,
          thumbnail,
          price,
          attributes,
          id,
        },
      },
    } = this.props;
    const { cartItemsSize } = this.state;
    const product = { id, title, price };

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
          onClick={ () => addProduct(product, () => {
            this.setState({
              cartItemsSize: localStorage.getItem('productQuantity'),
            });
          }) }
        >
          Adicionar ao carrinho
        </button>
        <br />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <span role="img" aria-label="cart">&#128722;</span>
          <span data-testid="shopping-cart-product-quantity">
            {cartItemsSize}
          </span>
        </Link>
        <Rating />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape([]).isRequired,
};

export default ProductDetails;
