import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const [text, setText] = useState('')
    const { onSubmit } = props

    function handleValueChange(e) {
        setText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(!onSubmit) return;
        
        const formValues = {
            title: text
        }
        onSubmit(formValues)

        setText('')
    }
    return (
        <form onSubmit = {handleSubmit}>
          <input type="text" value = {text} onChange = {handleValueChange}/>  
        </form>
    );
}

export default TodoForm;