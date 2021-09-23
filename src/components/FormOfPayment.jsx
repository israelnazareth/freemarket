import React, { Component } from 'react';

class FormOfPayment extends Component {
  render() {
    return (
      <div>
        <label htmlFor="pix">
          <input
            type="radio"
          />
          pix
        </label>
      </div>
    );
  }
}

export default FormOfPayment;
