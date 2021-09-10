import React, { Component } from 'react';
import Person from './Person/Person.js';
import './App.css';

class App extends Component {
  state = {
    persons:[
      {name:'Aakash', age:21},
      {name:'Tommy', age:22},
      {name:'Max', age:23},
    ],
    thisState:'checking'
  }

  checkHandler = (nvalue) =>{
    //console.log("Woah..It is Clicked.");
    //DON'T DO THIS : this.state.persons[0].name='Vishal';
    this.setState({
      persons:[
      {name:'Vishal', age:21},
      {name: 'Tommy', age:22},
      {name:'Max', age:23}
    ],
    thisState:'Done'
    })
  }

  inputHandler = (event) => {
    this.setState({
      persons:[
      {name:'Vishal', age:21},
      {name: event.target.value, age:22},
      {name: 'Max', age:23}
    ]
    })
  }

  render() {
    const style = {
      backgroundColor:'white',
      border:'1px solid blue',
      padding:'10px',
      font:'inherit',
      cursor:'pointer',
    };
    return (
      <div className="App">
        <h1>Here is my code.</h1>
        <button style={style} onClick={this.checkHandler}>Checking function</button>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.inputHandler}/>
        {this.state.thisState}
      </div>
    );
  }
}

export default App;