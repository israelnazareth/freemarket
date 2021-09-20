import React, { Component } from 'react';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      search: '',
      apiCall: false,
    };
  }

  handleClick = async () => {
    const { search } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(search);
    this.setState({
      products: results,
      apiCall: true,
    });
  }

  handleChange = ({ target: { type, checked, value } }) => {
    const search = (type === 'checkbox') ? checked : value;
    this.setState({
      search,
    });
  }

  // Isso foi igual a:
  // event.target.type é checkbox?
  // Se sim: search é event.target.checked
  // Se não: search é event.target.value
  // setState search estado para esse search, dessa função

  render() {
    const { search, products, apiCall } = this.state;
    return (
      <div>
        <Categories />
        <div data-testid="home-initial-message">
          <input
            onChange={ this.handleChange }
            name="search"
            value={ search }
            type="text"
            placeholder="Termo de pesquisa"
            data-testid="query-input"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          {(apiCall) ? products.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
            />)) : <p>Nenhum produto foi encontrado</p>}
        </div>
      </div>
    );
  }
}

export default Home;
