import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props){
    super(props);
    console.log('App.js constructor')
  }
  state = {
    persons: [
      { id: 1, name: "Sachin", age: 30 },
      { id: 2, name: "Shubham", age: 39 },
      { id: 3, name: "Max", age: 29 }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props,state){
    console.log('App.js getDerivedStateFromProps ',props)
    return state;
  }


  componentDidMount(){
    console.log('App.js componentDidMount..... ')
  }
  
  
  nameChangeHandler = (event, id) => {
    const personIndexToUpdate = this.state.persons.findIndex(person => {
      return person.id === id
    })
    const personToUpdate = { ...this.state.persons[personIndexToUpdate] }
    personToUpdate.name = event.target.value;
    const existingPersonsListToUpdate = [...this.state.persons]
    existingPersonsListToUpdate[personIndexToUpdate] = personToUpdate
    this.setState({ persons: existingPersonsListToUpdate })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonhandler = (id) => {
    const personIndexToUpdate = this.state.persons.findIndex(person => {
      return person.id === id
    })
    const persons = [...this.state.persons];
    persons.splice(personIndexToUpdate, 1)
    this.setState({ persons: persons })
  }

  render() {
    console.log('App.js render() ')
    let persons = null;
    if (this.state.showPersons) {
      persons = (<div >
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonhandler}
          changed={this.nameChangeHandler}
        />
      </div>
      )
    }

    return (
     
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
