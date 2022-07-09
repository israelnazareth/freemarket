import React, { Component } from 'react';

class Rating extends Component {
  render() {
    // eslint-disable-next-line no-magic-numbers
    const ratings = [1, 2, 3, 4, 5];
    return (
      <form>
        <h3>Avaliação</h3>
        <div>
          { ratings.map((number, index) => (
            <label className="numbers-rating" key={ index } htmlFor={ index }>
              <input
                type="radio"
                name="Rating"
                id={ index }
                value={ number }
              />
              { number }
            </label>
          )) }
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
