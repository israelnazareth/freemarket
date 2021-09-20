import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      products: [],
      apiCall: false,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = async () => {
    const { search } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(search);
    this.setState = {
      products: results,
      apiCall: true,
    };
  }

  render() {
    const { search, products, apiCall } = this.state;
    return (
      <div>
        <Categories />
        <label htmlFor="search-bar-label" data-testid="home-initial-message">
          <input
            id="search-bar-label"
            type="text"
            name="search"
            value={ search }
            onChange={ this.handleChange }
            placeholder="Termo de pesquisa"
            data-testid="query-input"
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Ícone do carrinho de compras
        </Link>
        {(apiCall) ? products.map((product) => (
          <ProductCard
            product={ product }
            key={ product.id }
          />))
          : <p>Nenhum produto foi encontrado</p>}
      </div>
    );
  }
}

export default Home;
