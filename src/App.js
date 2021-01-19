import './App.css';
import React, { Component } from 'react'
import NewComp from "./Components/NewComp"


export class App extends Component {

render() {
    return (
      <div className="App">
      <h2>Welcome</h2>
      <NewComp/>

    </div>
    )
  }
}

export default App



