import * as fType from '../constants/FilterType'
import React, {Component} from 'react'
import '../App.css';
import TodoItem from '../containers/TodoItemContainer';

export default class List extends Component {

    render(){
        const {filterList} = this.props;
        let listInfo = []

        // let filterEx = (item)=>{
        //     switch(filter){
        //         case fType.ALL: return true;
        //         case fType.ACTIVE: return !item.complete;
        //         case fType.COMPLETE: return item.complete;
        //     }
        // }
        // console.log("List: "+todoList)
        // todoList.filter(filterEx).map(item=>{
        //     listInfo.push(
        //         <TodoItem
        //             id={item.id}
        //             key={item.id}
        //         />
        //     )
        // })

        filterList.map(item=>{
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