import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props)=> {
    return (
        <div className={props.show?classes.Backdrop: classes.Hide} onClick={props.clicked}/>
    )
}

export default backdrop;