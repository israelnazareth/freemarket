import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { query, handleChange } = this.props;
    return (
      <div className="search-bar-div">
        <label htmlFor="search-bar-label" data-testid="home-initial-message">
          <input
            type="text"
            value={ query }
            onChange={ handleChange }
            placeholder="Termo de pesquisa"
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
    );
  }
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
