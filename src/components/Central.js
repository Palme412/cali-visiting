import React, { Component } from 'react';
import './Central.css';

class Central extends Component {
    render() {
        return (
            <div>
                <section className="hero is-medium">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title is-1 ">Tulare County</h1>
                            <h2 className="subtitle">Sequoia National Park</h2>
                        </div>
                    </div>
                </section>
                <section id="parallax-1" className="hero is-large ">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-6 is-offset-6">
                                    <h1 className="title is-1 ">Monterey County</h1>
                                    <hr className="content-divider" />
                                    <h2 className="subtitle">Big Sur</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="parallax-2" className="hero is-large ">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-6">
                                    <h1 className="title is-1 ">Monterey County</h1>
                                    <hr className="content-divider" />
                                    <h2 className="subtitle">Monterey Bay</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="parallax-3" className="hero is-large ">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-6 is-offset-6">
                                    <h1 className="title is-1 ">San Luis Obispo County</h1>
                                    <hr className="content-divider" />
                                    <h2 className="subtitle">San Luis Obispo</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="cta va">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-6">
                                <h1 className="title is-1 ">Adipisicing Elit</h1>
                                <hr className="content-divider" />
                                <h2 className="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ut nulla maiores, beatae voluptas sunt excepturi deserunt vero. Beatae est ratione quia neque molestias, cum asperiores quibusdam rem illum, debitis dolorem natus, eos fuga eveniet numquam ab officia reiciendis inventore. Tempore repudiandae exercitationem quisquam? Fugiat!</h2>
                            </div>
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input className="input is-medium" type="text" placeholder="Jon Snow" />
                                    </div>
                                </div>
                                <br />
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input className="input is-medium" type="email" placeholder="jon@winterfell.com" />
                                    </div>
                                </div>
                                <br />
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-white is-rounded is-outlined">Submit</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section> */}
                <footer className="footer">
                    <div className="content has-text-centered">
                        <p>
                            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Central; 