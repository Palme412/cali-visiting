import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';


const Note = props => (
    <div className='singleNote'>
        <div className='textContent'>
            <div className='singleNoteContent'>
                <h2>{props.text}</h2>
                <ReactMarkdown source={props.children} />
            </div>
            <div className='singleNoteButton'>
                <a onClick={() => { props.handleUpdateNote(props.id); }}>Update </a>
                <a onClick={() => { props.handleDeleteNote(props.id); }}>Delete</a>
            </div>
        </div>
    </div>
);

Note.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleUpdateNote: PropTypes.func.isRequired,
    handleDeleteNote: PropTypes.func.isRequired,
    timestamp: PropTypes.string.isRequired
};

export default Note;