import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onChange, value, onClick, onKeyDown } = this.props;
    return (
      <div data-testid="home-initial-message">
        <input
          onChange={ onChange }
          onKeyDown={ onKeyDown }
          name="search"
          value={ value }
          className="search-bar"
          type="text"
          placeholder="Buscar por produtos, marcas..."
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
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default SearchBar;
