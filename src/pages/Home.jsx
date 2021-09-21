import React, { Component } from 'react';
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

  handleChange = ({ target: { value } }) => {
    const search = value;
    this.setState({
      search,
    });
  }

  categoryClick = async ({ target: { id } }) => {
    const { results } = await getProductsFromCategoryAndQuery(id);
    this.setState({ products: results, apiCall: true });
  };

  render() {
    const { search, products, apiCall } = this.state;
    return (
      <div>
        <Categories
          onClick={ this.categoryClick }
        />
        <SearchBar
          onChange={ this.handleChange }
          value={ search }
          onClick={ this.handleClick }
        />
        {(apiCall) ? products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
          />
        )) : <p>Nenhum produto foi encontrado</p>}
      </div>
    );
  }
}

export default Home;
