import React, { Component } from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      newItem: "",
      list: []
    }
  }
  render() {
    return (
    <h1> React On Fire</h1>
  );
}

export default App;
