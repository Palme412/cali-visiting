import React, { Component } from 'react';
import './Central.css';

class Central extends Component {
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
                    <section id="sequoia" className="hero is-large ">
                        <div className="hero-body">
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-6 is-offset-6">
                                        <h1 className="title is-1">Tulare County</h1>
                                        <hr className="content-divider" />
                                        <h2 className="title is-4">Sequoia National Park <br /> Pear Lake
                                            <br />Moro Rock Trail </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section id="bigsur" className="hero is-large">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-6 ">
                                    <h1 className="title is-1 ">Monterey County</h1>
                                    <hr className="content-divider" />
                                    <h2 className="title is-4">Big Sur <br /> Montery Bay
                                        <br /> Monterey Bay Aquarium</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="santa" className="hero is-large">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-6 is-offset-6">
                                    <h1 className="title is-1 ">Santa Barbara County</h1>
                                    <hr className="content-divider" />
                                    <h2 className="title is-4">Santa Barbara <br /> Stearns Wharf
                                        <br />Lotusland </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="slo" className="hero is-large">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-6">
                                    <h1 className="title is-1 ">San Luis Obispo County</h1>
                                    <hr className="content-divider" />
                                    <h2 className="title is-4">San Luis Obispo <br /> Morro Rock
                                        <br />Madonna Inn </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Central; 