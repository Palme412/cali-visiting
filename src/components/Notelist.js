import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

const Notelist = (props) => {
    const noteNodes = props.data.map(note => (
        <Note text={note.text} key={note._id} id={note._id}>
            {note.text}
        </Note>
    ));
    return (
        <div>
            {noteNodes}
        </div>
    );
};

Notelist.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.string,
    })),
};

Notelist.defaultProps = {
    data: [],
};

export default Notelist;