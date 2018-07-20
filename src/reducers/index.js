import * as type from '../constants/ActionType'
import * as fType from '../constants/FilterType'

const initialState = {
    filter: 'all',
    todoList:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case type.ADD:{
            // console.log("reduce add: "+state.todoList)
            // console.log("reduce add: "+ action.text)
            return Object.assign({}, state, {
                todoList:[
                    ...state.todoList,
                    action.item
                ],
            })
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
            return Object.assign({}, state, {
                filter:action.filter
            })
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


const generateUUID=()=> {
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