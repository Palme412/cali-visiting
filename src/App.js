import React, { Component } from 'react';
import logo from './logo.svg';
import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

// Components ====== //
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
