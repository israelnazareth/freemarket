import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { getProductsFromCategoryAndQuery } from '../services/api';

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
    const { results } = await getProductsFromCategoryAndQuery(id);
    this.setState({ products: results, apiCall: true });
  }

  searchProductsByName = async () => {
    const { search } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(search);
    this.setState({
      products: results,
      apiCall: true,
    });
  }

  render() {
    const { search, products, apiCall, cartItemsSize } = this.state;

    return (
      <div>
        <Categories onClick={ this.selectCategory } />
        <SearchBar
          onChange={ this.handleChange }
          value={ search }
          onClick={ this.searchProductsByName }
        />
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
        )) : <p>Nenhum produto foi encontrado</p>}
      </div>
    );
  }
}

export default Home;
