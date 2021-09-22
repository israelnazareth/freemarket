import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <form>
        <h3>Avaliação</h3>
        <div>
          <label htmlFor="radio1">
            <input
              type="radio"
              name="Rating"
              id="radio1"
              value="1"
            />
            1
          </label>
          <label htmlFor="radio2">
            <input
              type="radio"
              name="Rating"
              id="radio2"
              value="2"
            />
            2
          </label>
          <label htmlFor="radio3">
            <input
              type="radio"
              name="Rating"
              id="radio3"
              value="3"
            />
            3
          </label>
          <label htmlFor="radio4">
            <input
              type="radio"
              name="Rating"
              id="radio4"
              value="4"
            />
            4
          </label>
          <label htmlFor="radio5">
            <input
              type="radio"
              name="Rating"
              id="radio5"
              value="5"
            />
            5
          </label>
        </div>
        <label htmlFor="e-mail">
          <input
            id="e-mail"
            type="e-mail"
            placeholder="Digite seu e-mail"
          />
        </label>
        <label htmlFor="Rating">
          <textarea
            data-testid="product-detail-evaluation"
            id="Rating"
            type="Rating"
          />
        </label>
        <div>
          <button type="button">Enviar avaliação</button>
        </div>
      </form>
    );
  }
}

export default Rating;
