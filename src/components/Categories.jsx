import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((categories) => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="categories-div">
        {categories.map((category) => (
          <label key={ category.id } htmlFor="label-control">
            <input
              type="radio"
              data-testid="category"
              id="label-control"
            />
            {category.name}
          </label>
        ))}
      </div>
    );
  }
}

export default Categories;
