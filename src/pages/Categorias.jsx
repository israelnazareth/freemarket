import React from 'react';
import { getCategories } from '../services/api';

class Categorias extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  render() {
    const { categories } = this.state;
    getCategories().then((response) => {
      this.setState({ categories: response });
    });

    return (
      <ul>
        {categories.map((categorie, index) => (
          <li key={ index }>
            <input type="radio" value={ categorie.name } />
          </li>
        ))}
      </ul>
    );
  }
}

export default Categorias;
