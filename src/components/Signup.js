import "../components/signup.css";

import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
const { REACT_APP_SERVER_URL } = process.env;

class Signup extends Component {
    render() {
        return (
            <div>
                <h1>This is connected</h1>
            </div>
        );
    }
}

export default Signup;