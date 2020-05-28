import React from 'react'
import './Person.css'
import Radium from 'radium'

const Person = (props) => {
    const style = {
        '@media(min-width: 500px)':{
            width: '450px'
        }
    }


    return (
        <div className="Person"  style={style}>
            <div onClick={props.click}>
                <h1>Hi i am {props.name} and my age is {props.age}</h1>
                <p>{props.children}</p>
            </div>
            <input type="text" defaultValue={props.name} onChange={props.changed}></input>
        </div>
    )
}

export default Radium(Person)