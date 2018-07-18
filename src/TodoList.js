import React, { Component } from 'react';
import './App.css';

import Header from "./component/Header"
import AddInput from './component/AddInput';
import List from './component/List'
import Filters from './component/Filters';
export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            todoList:[],
            filterType:"all",
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

    handleCheck = (id)=>{
        
        let todoList = this.state.todoList;
        todoList = todoList.map(elem=>{
            if(elem.id===id){
                elem.complete = !elem.complete;
            }
            return elem;
        })
        this.setState({todoList});
    }

    setFilter = (filterType)=>{
        
        this.setState({
            filterType,
        })
    }

    handleModify = (id, content)=>{
        let todoList = this.state.todoList.map(elem=>{
            if(elem.id===id){
                console.log("TodoList: "+content);
                console.log("TodoList elem : "+elem.content);
                elem.content = content;
                console.log("TodoList elem : "+elem.content);

            }
            return elem;
        });
        
        this.setState({
            todoList,
        });
    }
    render() {
        let todoList = this.state.todoList;
        let filterType = this.state.filterType;
        
        return (
            <div>
                <Header />
                <AddInput add={(value)=>this.handleAdd(value)} />
            <br />
                <List list={todoList} 
                    filterType={filterType} 
                    handleCheck={(id)=>this.handleCheck(id)}
                    handleModify={(id, content)=>this.handleModify(id, content)}/>
                <Filters setFilter={(filterType)=>this.setFilter(filterType)} />
            </div>

            );
    }
}

