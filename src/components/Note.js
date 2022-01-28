import React, { Component } from 'react';


class Note extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='card-footer'>
                <section>
                    <div className="columns has-same-height is-gapless">
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Note;