import React, { Component } from 'react';
import AddTask from './components/AddTask';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  createTask(event, newTask) {
    const { tasks } = this.state;
    this.setState({
      tasks: [...tasks, newTask],
    });
  }

  render() {
    return (
      <AddTask onCreate={this.createTask} />
    );
  }
}

export default App;
