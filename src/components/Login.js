import "./Login.css";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post(`${REACT_APP_SERVER_URL}/users/login`, userData)
            .then(response => {
                const { token } = response.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                this.props.nowCurrentUser(decoded);
            })
            .catch(error => {
                console.log('===> Error on login', error);
                alert('Either email or password is incorrect. Please try again');
            });
    };

    render() {
        if (this.props.user) return <Navigate to="/profile" />;

        return (
            <>
                <section id="login" className="hero is-fullheight">
                    <div className="hero-body has-text-centered">
                        <div className="login">
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input is-medium is-rounded"
                                            type="email"
                                            placeholder="hello@example.com"
                                            autoComplete="username"
                                            value={this.state.email}
                                            onChange={this.handleEmail.bind(this)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input is-medium is-rounded"
                                            type="password"
                                            placeholder="**********"
                                            autoComplete="current-password"
                                            value={this.state.password}
                                            onChange={this.handlePassword.bind(this)}
                                            required
                                        />
                                    </div>
                                </div>
                                <br />
                                <button
                                    className="button is-block is-fullwidth is-primary is-medium is-rounded"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </form>
                            <br />
                            <nav className="level">
                                <div className="level-item has-text-centered">
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <a href="/signup">Create an Account</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Login;