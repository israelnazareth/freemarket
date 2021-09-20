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
      <div>
        {categories.map((category) => (
          <label key={ category.id } data-testid="category" htmlFor={ category.id }>
            <input type="radio" id={ category.id } />
            {category.name}
          </label>
        ))}
      </div>
    );
  }
}

export default Categorias;
