import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {

    static getDerivedStatesFromProps(props,state){
        console.log('Persons.js getDerivedStatesFromProps')
        return state
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('Persons.js shouldComponentUpdate nextProps ',nextProps,' nextState ',nextState)
        return true;
    }

    getSnapshotBeforeUpdate(previousProps,previousState){
        console.log('Persons.js getSnapshotBeforeUpdate previousProps ',previousProps,' previousState ',previousState)
        return null;
    }

    componentDidUpdate() {
        console.log('Persons.js componentDidUpdate')
    }

    render() {
        console.log('Persons.js rendering/..... ')
        return (
            this.props.persons.map(person => {
                return <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    click={() => this.props.clicked(person.id)}
                    changed={(event) => this.props.changed(event, person.id)} />
            })
        )
    }
}

export default Persons;