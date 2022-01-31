// Imports
import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Central from './components/Central';
import Northern from './components/Northern';
import Southern from './components/Southern';
import Home from './components/Home';

const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = localStorage.getItem('jwtToken');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Navigate to="/login" />
  }} />
}


function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <div className="App">

      <Router>
        <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/northern' element={<Northern />} />
          <Route path='/central' element={<Central />} />
          <Route path='/southern' element={<Southern />} />
          <Route path='/' element={<Home />} />

          <Route
            path="/login"
            element={<Login nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />}
          />
          <Route path="/profile" element={<Profile user={currentUser} handleLogout={handleLogout} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;