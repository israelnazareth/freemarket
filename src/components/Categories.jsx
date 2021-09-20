import React from 'react';
import PropTypes from 'prop-types';
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
    const { onClick } = this.props;
    return (
      <div className="categories-div">
        {categories.map((category) => (
          <button
            id={ category.id }
            type="button"
            data-testid="category"
            key={ category.id }
            onClick={ onClick }
          >
            { category.name }
          </button>))}
      </div>
    );
  }
}

Categories.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Categories;
