import * as fType from '../constants/FilterType'
import React, {Component} from 'react'
import '../App.css';
import TodoItem from '../component/TodoItem';

export default class List extends Component {

    render(){
        const {filterList, onModify, onCheckItem} = this.props;
        let listInfo = []

        filterList.map(item=>{
            listInfo.push(
                <TodoItem
                    id={item.uuid}
                    key={item.uuid}
                    item={item}
                    onModify={onModify}
                    onCheckItem={onCheckItem}
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