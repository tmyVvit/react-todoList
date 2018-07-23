import * as type from '../constants/ActionType'

const initialState = {
    filter:"all",
    todoList:[]
};
export default (state = initialState, action) => {
    switch(action.type){
        case type.ADD:{

            return Object.assign({}, state, {
                todoList:[
                    ...state.todoList,
                    action.item
                ],
            })
        }

        case type.FILTER:{
            return {
                filter: action.filter,
                todoList:action.list
            };
        }
        case type.CHECK:
        case type.INIT:
        case type.MODIFY:{
            return {
                filter: state.filter,
                todoList: action.list
            }
        }

        default: return state;
    }
}

