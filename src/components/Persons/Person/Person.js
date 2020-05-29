import React from 'react'
import './Person.css'

const Person = (props) => {
    return (
        <div className="Person">
            <div onClick={props.click}>
                <h1>Hi i am {props.name} and my age is {props.age}</h1>
                <p>{props.children}</p>
            </div>
            <input type="text" defaultValue={props.name} onChange={props.changed}></input>
        </div>
    )
}


export default Person