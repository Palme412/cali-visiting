import React, { Component } from 'react';
import './Northern.css';

class Northern extends Component {
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
                    <section id="yosemite" className="hero is-large ">
                        <div className="hero-body">
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-6 is-offset-6">
                                        <h1 className="title is-1 ">Mariposa County</h1>
                                        <hr className="content-divider" />
                                        <h2 className="title is-4">Yosemite National Park <br /> Sierra National Forest
                                            <br /> Vernal Falls</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section id="tahoe" className="hero is-large">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-6 ">
                                    <h1 className="title is-1 ">El Dorado County</h1>
                                    <hr className="content-divider" />
                                    <h2 className="title is-4">Lake Tahoe <br /> Emerald Bay State Park
                                        <br /> Mount Tallac</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="santacruz" className="hero is-large">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-6 is-offset-6">
                                    <h1 className="title is-1 ">Santa Cruz County</h1>
                                    <hr className="content-divider" />
                                    <h2 className="title is-4">Santa Cruz <br /> Santa Cruz Beach Boardwalk
                                        <br /> Natural Bridges State Beach</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sanfran" className="hero is-large">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-6">
                                    <h1 className="title is-1 ">San Francisco County</h1>
                                    <hr className="content-divider" />
                                    <h2 className="title is-4">San Francisco <br /> Golden Gate Bridge
                                        <br /> Alcatraz Island</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Northern; 