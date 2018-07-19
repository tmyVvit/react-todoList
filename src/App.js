import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    const {list} = this.props;

    return (
      <TodoList />
    );
  }
}

export default App;
