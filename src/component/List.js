import React, {Component} from 'react'
import '../App.css';
import TodoItem from './TodoItem';

export default class List extends Component {

    handleCheck = (id)=>{
        
        this.props.handleCheck(id);
    }

    filterExe = (elem) => {
        let filterType = this.props.filterType;
        if(filterType==="all") return true;
        if(filterType==="active") return !elem.complete;
        if(filterType==="complete") return elem.complete;
    }

    listModify = (id, content)=> {
        this.props.handleModify(id, content);
    }
    render(){
        let list = this.props.list;
        let listInfo = [];
        list.filter(this.filterExe).map(item=>{
            listInfo.push(
                <TodoItem id={item.id}
                        complete={item.complete}
                        content={item.content}
                        handleCheck={(id)=>this.handleCheck(id)}
                        listModify={(id, content)=>this.listModify(id, content)}
                />
            )
        })
        return (
            <ol>
                {listInfo}
            </ol>
        );
    }
}