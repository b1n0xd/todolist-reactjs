import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Type item here" onChange={(event) => console.log(event.target.value)} />
        <button type="button">Add</button>
      </form>

    );
  }
}

export default App;
