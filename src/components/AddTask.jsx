/* eslint-disable linebreak-style */
import React, { Component } from 'react';

export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // eslint-disable-next-line lines-between-class-members
  render() {
    return (
      <form>
        <input type="text" onChange={(event) => console.log(event.target.value)} />
        <button type="button">Add Task</button>
      </form>
    );
  }
}
