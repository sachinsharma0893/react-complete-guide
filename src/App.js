import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Radium, {StyleRoot} from 'radium'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Sachin", age: 30 },
      { id: 2, name: "Shubham", age: 39 },
      { id: 3, name: "Max", age: 29 }
    ],
    showPersons: false
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (<div >
        {this.state.persons.map(person => {
          return <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={() => this.deletePersonhandler(person.id)}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
        })}
      </div>
      )
      style.backgroundColor = "red"
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi I Am Reat App Page</h1>
          <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
