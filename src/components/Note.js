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
            </div>
        </div>
    </div>
);

Note.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    // timestamp: PropTypes.string.isRequired
};

export default Note;