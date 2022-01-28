import React, { Component } from 'react';
import './Notelist.css';
import Note from './Note';
import axios from 'axios';

// Pass user into notelist and have notelist connected to database to return that users notes
// render notes into notelist... form in notelist to store into database
// pass input data to mongodb through mongoose
// post request 

// use axios to post to backend
// css profile to change input color of text input box


class Notelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: ''
        };
    }

    updateNote = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        if (fieldName === 'note') {
            this.setState({ note: fieldValue });
        }
    };
    addNote = (e) => {
        let { note } = this.state;
        fetch('localhost:8000/add_note', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                note: note
            })
        }).then(response => response.json());
        console.log(note);
    }
    render() {
        return (
            <div className='card-footer'>
                <section>
                    <div className="columns has-same-height is-gapless">
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <h3 className="title is-4">Notes</h3>
                                    <div className="content">

                                        <label>Add a note:</label>
                                        <input className='inputbox' onChange={this.updateNote} name='note' value={this.state.note} />
                                        <button onClick={this.addNote}>Add Note</button>
                                        <table className="table-profile">
                                            <tbody>
                                                <tr>
                                                    <td><Note></Note></td>
                                                </tr>
                                            </tbody>
                                        </table>

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

export default Notelist;