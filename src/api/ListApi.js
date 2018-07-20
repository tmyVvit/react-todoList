import * as fType from '../constants/FilterType'
import { setFilter } from '../actions';

const listAPI = {
    todoList : [],
    getFilterList  (filter, todoList){
        return todoList.filter(item=>{
            switch(filter){
                case fType.ALL: return true;
                case fType.ACTIVE: return !item.complete;
                case fType.COMPLETE: return item.complete;
            }
        });
    },

    addItems (text) {
        let add = {
            id: generateUUID(),
            text,
            complete: false,
        }
        this.todoList.push(add);
        return add;
    },

    // setFilter(filter){
    //     if(filter===fType.ALL)
    // }

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
export default listAPI;