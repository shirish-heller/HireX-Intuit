import React from 'react';
import classes from './SelecteFilter.css';

const SelectFilter = (props)=> {
    return (
        <div className={classes.Filter}>
        <label>{props.filterLabel + ":"}</label>
        <select>
            {props.filterItems.map(type=> {
                return <option key={type.value} value={type.value}>{type.label}</option>
            })
            }
        </select>
    </div>
    )
}

export default SelectFilter;