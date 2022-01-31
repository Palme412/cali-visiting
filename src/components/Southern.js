import React, { Component } from 'react';
import './Southern.css';

class Southern extends Component {
    render() {
        return (
            <div>
                <section className="hero is-medium">
                    <div className="hero-head">
                        <nav className="navbar">
                            <div className="container">
                                <div className="navbar-brand">
                                    <span className="navbar-burger burger" data-target="navbarMenu">
                                    </span>
                                </div>
                                <div id="navbarMenu" className="navbar-menu">
                                    <div className="navbar-end">
                                        <span className="navbar-item">
                                            <a className="button is-white is-outlined" href="/">
                                                <span className="icon">
                                                    <i className="fa fa-home"></i>
                                                </span>
                                                <span>Home</span>
                                            </a>
                                        </span>
                                        <span className="navbar-item">
                                            <a className="button is-white is-outlined" href="/central">
                                                <span className="icon">
                                                </span>
                                                <span>Central</span>
                                            </a>
                                        </span>
                                        <span className="navbar-item">
                                            <a className="button is-white is-outlined" href="/northern">
                                                <span className="icon">
                                                </span>
                                                <span>Northern</span>
                                            </a>
                                        </span>
                                        <span className="navbar-item">
                                            <a className="button is-white is-outlined" href="/southern">
                                                <span className="icon">
                                                </span>
                                                <span>Southern</span>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <section id="la" className="hero is-large ">
                        <div className="hero-body">
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-6 is-offset-6">
                                        <h1 className="title is-1 ">Los Angeles County</h1>
                                        <hr className="content-divider" />
                                        <h2 className="title is-4">Los Angeles <br /> Griffith Observatory
                                            <br />Santa Monica Pier</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="sanbern" className="hero is-large ">
                        <div className="hero-body">
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-6 ">
                                        <h1 className="title is-1 ">San Bernardino County</h1>
                                        <hr className="content-divider" />
                                        <h2 className="title is-4">Joshua Tree National Park <br /> Death Valley National Park
                                            <br />Big Bear Lake </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="sandiego" className="hero is-large ">
                        <div className="hero-body">
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-6 is-offset-6">
                                        <h1 className="title is-1 ">San Diego County</h1>
                                        <hr className="content-divider" />
                                        <h2 className="title is-4">San Diego <br /> San Diego Zoo <br /> Balboa Park</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="laguna" className="hero is-large ">
                        <div className="hero-body">
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-6">
                                        <h1 className="title is-1 ">Orange County</h1>
                                        <hr className="content-divider" />
                                        <h2 className="title is-4">Laguna Beach <br /> Disneyland <br />Balboa Island </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

export default Southern; 