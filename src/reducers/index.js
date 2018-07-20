import * as type from '../constants/ActionType'
import * as fType from '../constants/FilterType'

const initialState = {
    filter: 'all',
    todoList:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case type.ADD:{
            if(action.item !== null) {
                return Object.assign({}, state, {
                    todoList:[
                        ...state.todoList,
                        action.item
                    ],
                })
            }
        }
        case type.CHECK:{
            return Object.assign({}, state, {
                todoList: state.todoList.map((item)=>{
                    if(item.id===action.id){
                        return Object.assign({}, item, {
                            complete: !item.complete
                        })
                    }
                    return item;
                })
            })
        }
        case type.FILTER:{
            console.log(action.filter)

            return {
                filter: action.filter,
                todoList:action.filterList
            };
        }
        case type.MODIFY:{
            console.log("modify:  "+state);
            return Object.assign({}, state, {
                todoList: state.todoList.map((item)=>{
                    if(item.id===action.id){
                        return Object.assign({}, item, {
                            text:action.text
                        })
                    }
                    return item;
                })
            })
        }

        default: return state;
    }
}

