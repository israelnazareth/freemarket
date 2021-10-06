import React, { Component } from 'react';
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
          className="search-bar"
          type="text"
          placeholder="Termo de pesquisa"
          data-testid="query-input"
        />
        <button
          type="button"
          data-testid="query-button"
          className="search-button"
          onClick={ onClick }
        >
          Pesquisar
        </button>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
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
