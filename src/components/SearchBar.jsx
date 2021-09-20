import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onChange, value, onClick } = this.props;
    return (
      <div data-testid="home-initial-message">
        <input
          onChange={ onChange }
          name="search"
          value={ value }
          type="text"
          placeholder="Termo de pesquisa"
          data-testid="query-input"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ onClick }
        >
          Pesquisar
        </button>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
