import React from 'react'
import classes from './Cockpit.css'
const cockpit = (props) => {
    let btnClass=classes.Red;
    if(props.showPersons){
        btnClass = classes.Red;
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi I Am Reat App Page</h1>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default cockpit;