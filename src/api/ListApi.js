import * as fType from '../constants/FilterType'
import * as sType from '../constants/StatusType'
import { setFilter, modify } from '../actions';
import Axios from '../../node_modules/axios';

const axios = require('axios');
const listAPI = {
    todoList : [],
    filter : fType.ALL,
    url: "https://5b52c3e9d9b92700141c997b.mockapi.io/allTodo",
    url1:"https://5b519ee96ecd1b0014aa3555.mockapi.io/test/api/data",
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
    
    getRemoteFilterList(filter, successCallback){
        let search = ""
        if(filter !== fType.ALL){
            search = `?search=${filter}`;
        }
        axios
            .get(`${this.url}/1/todoList${search}`)
            .then(response=>{
                console.log("filterlist get-----"+JSON.stringify(response.data));
                this.filter = filter;
                successCallback(response.data)
            })
            .catch(error=>{
                console.log("error-----"+error)
            })
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

    addItemToRemote(text, successCallback){
        let add = {
            uuid: generateUUID(),
            text,
            complete: false,
            status: sType.ACTIVE,
        }
        axios
            .post(`${this.url}/1/todoList`,{...add, parentID:"1"})
            .then(response=>{
                console.log("addItem-----"+JSON.stringify(response.data))
                if(this.filter===fType.ALL||add.status === this.filter){
                    successCallback(response.data);
                }
            })
            .catch(error=>{
                console.log("add error-----"+error)
            })
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
        return this.getFilterList(this.filter);
    },

    checkItemRemote(item, successCallback){
        let newState = item.complete==true?sType.ACTIVE:sType.COMPLETE;
        console.log("check remote--item--"+JSON.stringify(item))
        axios
            .put(`${this.url}/1/todoList/${item.id}/list`, {
                complete: !item.complete,
                status: newState
            })
            .catch(error=>{
                console.log("check put error-----"+error)
            });
        axios
            .get(`${this.url}/1/todoList?search=${newState}`)
            .then(response=>{
                console.log("check response----"+JSON.stringify(response.data));
                successCallback(response.data)
            })
            .catch(error=>{
                console.log("check get error-----"+error)
            });
    },

    modify(id, text) {
        let newTodo = this.todoList.map(item=>{
            if(item.id === id){
                return {
                    id,
                    text,
                    complete: item.complete
                }
            }
            return item
        })
        this.todoList = [...newTodo]
    },

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