import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductListing from './pages/ProductListing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ ProductListing } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
