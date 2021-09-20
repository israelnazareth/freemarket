import React from 'react';
import { getCategories } from '../services/api';

class Categorias extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  chamaAPI = () => {
    getCategories().then((response) => {
      this.setState({ categories: response });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((category) => (
          <label key={ category.id } htmlFor={ category.id }>
            <input type="radio" data-testid="category" id={ category.id } />
            {category.name}
          </label>
        ))}
      </div>
    );
  }
}

export default Categorias;
