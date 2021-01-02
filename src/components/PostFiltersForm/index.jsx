import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
    
};

PostFiltersForm.defaultProps = {
    onSubmit: null
}



function PostFiltersForm(props) {
    const { onSubmit } = props
    const [text, setText] = useState('')
    const typingTimeoutRef = {} // useRef(null) // giữa các lần render thì giá trị không thay đổi

    function handleInputChange (e) {

        const textInput = e.target.value
        
        if(!onSubmit) return

        if(typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

 
        typingTimeoutRef.current = setTimeout(() => {
           
            const formValues = {
                q: textInput
            }
            onSubmit(formValues)
       
        }, 300)


    }   
    // debounce
    return (
        <form>
            <input 
                type="text"
                onChange = {handleInputChange}
             />
        </form>
    );
}

export default PostFiltersForm;