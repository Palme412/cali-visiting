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
import Central from "./components/Central";
import Northern from "./components/Northern";
import Southern from "./components/Southern";
import Signup from "./components/Signup"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/central' element={<Central />} />
            <Route path='/northern' element={<Northern />} />
            <Route path='/southern' element={<Southern />} />
            <Route path='/users/signup' element={<Signup />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
