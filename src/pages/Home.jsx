import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../free-market-logo.png';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { getProductsFromCategory, getProductsFromQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      search: '',
      apiCall: false,
      cartItemsSize: localStorage.getItem('productQuantity') || 0,
    };
  }

  handleChange = ({ target: { value } }) => {
    const search = value;
    this.setState({
      search,
    });
  }

  selectCategory = async ({ target: { id } }) => {
    const { results } = await getProductsFromCategory(id);
    this.setState({ products: results, apiCall: true });
  }

  searchProductsByName = async () => {
    const { search } = this.state;
    const { results } = await getProductsFromQuery(search);
    this.setState({
      products: results,
      apiCall: true,
    });
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      return this.searchProductsByName();
    }
  }

  render() {
    const { search, products, apiCall, cartItemsSize } = this.state;

    return (
      <main>
        <div className="main">
          <header className="header">
            <Link to="/">
              <img src={ Logo } alt="Logo Free Market" className="logo" />
            </Link>
            <SearchBar
              onChange={ this.handleChange }
              value={ search }
              onClick={ this.searchProductsByName }
              onKeyDown={ this.handleKeyDown }
            />
            <Link
              to="/shopping-cart"
              data-testid="shopping-cart-button"
            >
              <span
                role="img"
                aria-label="cart"
                data-testid="shopping-cart-product-quantity"
                className="span-cart"
              >
                Carrinho: &#128722;
                { cartItemsSize }
              </span>
            </Link>
          </header>
          <Categories onClick={ this.selectCategory } />
          <div id="products-list">
            {apiCall ? products.map((product) => (
              <ProductCard
                key={ product.id }
                product={ product }
                postAddProduct={ () => {
                  this.setState({
                    cartItemsSize:
                      JSON.parse(localStorage.getItem('productQuantity')),
                  });
                } }
              />
            )) : <p>Pesquise por um produto</p>}
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
