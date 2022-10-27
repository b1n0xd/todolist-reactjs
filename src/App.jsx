import React, { Component } from 'react';
import AddTask from './components/AddTask';
import Task from './components/Task';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
    this.createTask = this.createTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updatedTask = this.updatedTask.bind(this);
  }

  componentDidMount() {
    this.loadTasksFromLocalStorage();
  }

  loadTasksFromLocalStorage() {
    const localStorageTasks = localStorage.getItem('tasks');
    if (localStorageTasks) {
      const tasks = JSON.parse(localStorageTasks);
      this.setState({ tasks });
    }
  }
 

  createTask(newTask) {
    const { tasks } = this.state;
    const updatedTasks = [...tasks, newTask];
    this.setState({
      tasks: updatedTasks,
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  updatedTask(updatedTask){
    const { tasks } = this.state;
    const updatedTasks = tasks.map((task) => {
      const taskToUpdate = task;
      if(taskToUpdate.id === updatedTask.id) {
        taskToUpdate.hasFinished = updatedTask.hasFinished;
      }
      return taskToUpdate;
      });
      this.setState({
        tasks: updatedTasks,
      });
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

  removeTask(id) {
      const { tasks } = this.state;
      const updatedTasks = tasks.filter((task) => task.id !== id);
      this.setState({
        tasks: updatedTasks,
      });
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <AddTask onCreate={this.createTask} />
        {tasks.map((task) => (
         <Task 
         key={task.id} 
         data={task}
         onUpdate={this.updatedTask}
         onRemove={this.removeTask}
         />
        )) }
      </>

    );
}
}

export default App;
