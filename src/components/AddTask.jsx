/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import generators from '../lib/generetors';

export default class AddTask extends Component {
  constructor() {
    super();
    this.initialState = {
      id: 0,
      title: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { randomId } = generators;
    this.setState({
      id: randomId(99999999999999),
      title: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventeDefault();
    const { onCreate } = this.props;
    onCreate(this.state);
    this.setState({this.initialState});
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // eslint-disable-next-line lines-between-class-members
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={title} onChange={this.handleInput} />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

AddTask.propTypes = {
  onCreate: PropTypes.func.isRequired,
}.isRequired;