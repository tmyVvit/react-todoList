import React, { Component } from 'react';
import './App.css';

import Header from "./component/Header"
import AddInput from './component/AddInput';
import List from './component/List'
export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            todoList:[{
                id: "1",
                content:"1",
                complete:false,
            },{
                id: "1",
                content:"2",
                complete:true,
            },
        ],
        };
    }

    unCheck = (id)=>{
        // this.setState(
        //     this.state.todoList : this.state.todoList.map(elem=>{
        //         if(elem.id===id)
        //     }),

        // );
    }
    render() {
        return (
            <div>
                <Header />
                {/* <AddInput /> */}
                <div>
                <input className="input-text" type="text" name="ListItem" />
                <div id="button">Add</div>
            </div>
        
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

