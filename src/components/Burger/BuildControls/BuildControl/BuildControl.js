import React from 'react'
import classes from './BuildControl.css'

const buildControls = (props) =>{
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.removeIngredients} disabled = {props.disabled}>Less</button>
            <button className={classes.More} onClick={props.ingredientsAdded}>More</button>
        </div>
    );
}

export default buildControls;