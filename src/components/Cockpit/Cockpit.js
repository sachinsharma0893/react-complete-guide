import React, { useEffect } from 'react'
import classes from './Cockpit.css'
const cockpit = (props) => {
    useEffect(()=>{
        console.log('cockpit called')
    },[])
    let btnClass=classes.Green;
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