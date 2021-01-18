import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useClock  from '../../hooks/useClock'

Clock.propTypes = {
    
};

function Clock(props) {
    const { timeString } = useClock()


    return (
        <div style = {{fontSize: 40}}>
            {timeString}
        </div>
    );
}

export default Clock;