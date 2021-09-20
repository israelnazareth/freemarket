import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  // chamaAPI = () => {
  //   getCategories().then((response) => {
  //     this.setState({ categories: response });
  //   });
  // }

  updateState = (categories) => {
    this.setState({
      categories,
    });
  };

  componentDidMount = async () => {
    const categories = await getCategories();
    this.updateState(categories);
  };

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((category) => (
          <label key={ category.id } htmlFor="nome-generico">
            <input type="radio" data-testid="category" id="nome-generico" />
            {category.name}
          </label>
        ))}
      </div>
    );
  }
}

export default Categories;
