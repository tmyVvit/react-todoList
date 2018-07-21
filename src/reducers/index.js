import * as type from '../constants/ActionType'
import * as fType from '../constants/FilterType'
import listAPI from '../api/ListApi'


const initialState = {
    filter:"all",
    todoList:[]
};
// = listAPI.getInitStat((status)=>{});
// listAPI.getInitState(((status)=>setState(status, initialState)))
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
            return {
                filter: state.filter,
                todoList:action.list
            }
        }
        case type.FILTER:{
            return {
                filter: action.filter,
                todoList:action.filterList
            };
        }
        case type.MODIFY:{
            return Object.assign({}, state, {
                todoList: state.todoList.map((item)=>{
                    if(item.uuid===action.uuid){
                        return action.item;
                    }
                    return item;
                })
            })
        }

        default: return state;
    }
}

