import React, { Component } from 'react';
import './App.css';

import Header from "./component/Header"
import AddInput from './containers/AddInputContainer';
import List from './containers/ListContainer'
import Filter from './containers/FilterContainer';
export default class TodoList extends Component {

    render() {
        return (
            <div>
                <Header />
                <AddInput  />
            <br />
                <List />
                <Filter />
            </div>
            );
    }
}

