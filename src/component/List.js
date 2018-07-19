import * as fType from '../constants/FilterType'
import React, {Component} from 'react'
import '../App.css';
import TodoItem from '../containers/TodoItemContainer';

export default class List extends Component {

    filterExe = (elem) => {
        let filterType = this.props.filterType;
        if(filterType===fType.ALL) return true;
        if(filterType===fType.ACTIVE) return !elem.complete;
        if(filterType===fType.COMPLETE) return elem.complete;
    }
    render(){
        const {list, filterType} = this.props;
        let listInfo = [];
        list.filter(this.filterExe).map(item=>{
            listInfo.push(
                <TodoItem
                    id={item.id}
                    key={item.id}
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