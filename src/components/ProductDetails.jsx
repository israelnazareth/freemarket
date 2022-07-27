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

  formatedPrice = (price) => {
    if (price === null) price = 0;
    return price.toLocaleString('pt-br',
      { style: 'currency', currency: 'BRL' });
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
    const product = { id, title, price, thumbnail };

    return (
      <section>
        <Link to="/">
          <h3>
            Voltar para
            <span role="img" aria-label="casa">&#127968;</span>
          </h3>
        </Link>
        <section className="product-details" data-testid="product-detail-name">
          <h1>{`${title}`}</h1>
          <img
            className="img-prod-detls"
            src={ thumbnail }
            alt={ `Figure of ${title}` }
          />
          <div>
            <h3>Detalhes do produto</h3>
            <table className="table-details">
              <tbody>
                {attributes.map((attribute) => (
                  <tr key={ attribute.id }>
                    <td>
                      {`${attribute.name}`}
                    </td>
                    <td>
                      {`${attribute.value_name}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="price">
            {this.formatedPrice(price)}
          </p>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            className="detail-button"
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
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape([]).isRequired,
};

export default ProductDetails;
