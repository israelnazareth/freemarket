import React, { Component } from 'react';
import Categories from '../components/Categories';
import SearchBar from '../components/SearchBar';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ query: value });
  }

  render() {
    const { query } = this.state;

    return (
      <div>
        <Categories />
        <SearchBar
          query={ query }
          onChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default Home;
