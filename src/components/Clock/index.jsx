import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    
};

function formatDate(date) {
    const hours = ('0'+ date.getHours()).slice(-2)
    const minutes = ('0'+ date.getMinutes()).slice(-2)
    const seconds = ('0'+ date.getSeconds()).slice(-2)

    return `${hours}:${minutes}:${seconds}`
}

function Clock(props) {
    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date()
            const newTimeString = formatDate(now)
            // HH:mm:ss
            setTimeString(newTimeString)
        }, 1000)
        return () => {
            clearInterval(clockInterval)
        }
    }, [])
    return (
        <div style = {{fontSize: 40}}>
            {timeString}
        </div>
    );
}

export default Clock;