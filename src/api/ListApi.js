import * as fType from '../constants/FilterType'
import { setFilter } from '../actions';

const listAPI = {
    todoList : [],
    filter : fType.ALL,
    getFilterList  (filter){
        this.filter = filter;
        return this.todoList.filter(item=>{
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
        if(this.filter === fType.ALL) return add;
        if(this.filter === fType.COMPLETE && add.complete) return add;
        if(this.filter === fType.ACTIVE && !add.complete) return add;
        return null;
    },

    checkItem(id){
        let newTodo = [...this.todoList];
        newTodo = newTodo.map(item=>{
            if(item.id===id){
                return {
                    id,
                    text:item.text,
                    complete: !item.complete
                }
            }
            return item
        })
        console.log("API CHECK: " + newTodo)
        this.todoList = [...newTodo]
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
export default listAPI;