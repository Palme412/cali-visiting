import React from 'react';
import PropTypes from 'prop-types';

const Noteform = props => (
    <form onSubmit={props.submitNote}>
        <input
            type='text'
            name='note'
            placeholder='Your note'
            value={props.text}
            onChange={props.handleChangeText}
        />
        <button type='submit'>Submit</button>
    </form>
);

Noteform.propTypes = {
    text: PropTypes.string
};

Noteform.defaultProps = {
    text: 'text'
};

export default Noteform;