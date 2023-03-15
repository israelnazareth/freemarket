import React, { Component } from 'react';

class Rating extends Component {
  constructor(props) {
    super();
    this.state = {
      rating: '☆☆☆☆☆'
    }
  }

  handleRating(stars) {
    const starsNumber = `★★★★★☆☆☆☆☆`.slice(4 - stars, 9 - stars)
    this.setState({ rating: starsNumber });
  }

  render() {
    const spansArray = [0, 1, 2, 3, 4]
    return (
      <form>
        <h3>Avaliação</h3>
        <div>
          {spansArray.map((stars) => (
            <span
              className='stars-rating'
              onClick={() => this.handleRating(stars)}>
              {this.state.rating[stars]}
            </span>
          ))}
        </div>
        <label htmlFor="e-mail">
          Email:
          <input
            className="email-rating"
            id="e-mail"
            type="e-mail"
            placeholder="Digite seu e-mail"
          />
        </label>
        <label htmlFor="Rating">
          <textarea
            className="textarea-rating"
            placeholder="Deixe aqui seu comentário sobre o produto"
            data-testid="product-detail-evaluation"
            id="Rating"
            type="Rating"
            cols="50"
            rows="10"
          />
        </label>
        <div>
          <button className="button-rating" type="button">Enviar avaliação</button>
        </div>
      </form>
    );
  }
}

export default Rating;
