import React,{Component} from 'react'
import classes from './Person.css'
import PropTypes from 'prop-types'

class Person extends Component{
    render() {
        console.log('Person.js rendering......... ')
        return (
            <div className={classes.Person}>
                <div onClick={this.props.click}>
                    <h1>Hi i am {this.props.name} and my age is {this.props.age}</h1>
                    <p>{this.props.children}</p>
                </div>
                <input type="text" defaultValue={this.props.name} onChange={this.props.changed}></input>
            </div>
        )
    }

} 

Person.propTypes = {
    click : PropTypes.func,
    name : PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person