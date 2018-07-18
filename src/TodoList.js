import React, { Component } from 'react';
import './App.css';

import Header from "./component/Header"
import AddInput from './component/AddInput';
import List from './component/List'
export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            todoList:[],
        };
    }
    generateUUID=()=> {
        /*jshint bitwise:false */
        var i,
            random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12
                ? 4
                : (i === 16
                    ? (random & 3 | 8)
                    : random)).toString(16);
        }
        return uuid;
    }

    handleAdd = (value)=>{
        let addItem = {
            id:this.generateUUID(),
            content:value,
            complete:false
        }
        let todoList = this.state.todoList;
        todoList.push(addItem);
        this.setState({
            todoList
        })
    }

        // unCheck = (id)=>{
    //     this.setState(
    //         this.state.todoList : this.state.todoList.map(elem=>{
    //             if(elem.id===id)
    //         }),

    //     );
    // }
    
    render() {
        return (
            <div>
                <Header />
                <AddInput add={(value)=>this.handleAdd(value)} /> 
                
        
            <br />
                <List list={this.state.todoList} />
                <div>
                    <ul id="filters">
                        <li>
                            <a href="#" data-filter="all" className="selected">ALL</a>
                        </li>
                        <li>
                            <a href="#" data-filter="active" className="" >Active</a>
                        </li>
                        <li>
                            <a href="#" data-filter="complete" className="" >Complete</a>
                        </li>
                    </ul>
                </div>
            </div>

            );
    }
}

