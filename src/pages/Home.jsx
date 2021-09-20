import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categorias from './Categorias';
// import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      // categoryId: '',
      query: '',
    };
  }

  // Vai ter um botão, eventualmente, que onClick pega o valor
  // digitado e salvo em query. Aí chama searchItem, que usa a API
  // searchItem = async () => {
  //   const { categoryId, query } = this.state;
  //   const fetchCategories = await getCategories();
  //   const searchQuery = await getProductsFromCategoryAndQuery(query, categoryId);
  // }

  handleChange = ({ target: { value } }) => {
    this.setState({ query: value });
  }

  render() {
    const { query } = this.state;

    return (
      <div>
        <Categorias />
        <div className="search-bar-div">
          <label htmlFor="search-bar-label" data-testid="home-initial-message">
            <input
              type="text"
              value={ query }
              onChange={ this.handleChange }
            />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
          >
            Ícone do carrinho de compras
          </Link>

        </div>
      </div>
    );
  }
}

export default Home;
