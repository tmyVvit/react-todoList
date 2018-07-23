import * as fType from '../constants/FilterType'
import * as sType from '../constants/StatusType'

const axios = require('axios');
const listAPI = {
    // todoList : [],
    filter : fType.ALL,
    url: "https://5b52c3e9d9b92700141c997b.mockapi.io/allTodo",

    initlist(successCallback){
        axios
            .get(`${this.url}/1/todoList`)
            .then(response=>{
                successCallback(response.data)
            })
            .catch(error=>{
                console.log("error-------")
                successCallback([])
            })
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
                alert("something wrong in server")
                console.log("error-----"+error)
            })
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
                alert("something wrong in server, add failed")
                console.log("add error-----"+error)
            })
    },


    checkItemRemote(item, successCallback){
        let newState = item.complete==true?sType.ACTIVE:sType.COMPLETE;
        let search="";
        if(this.filter !== fType.ALL) search=`?search=${this.filter}`;
        // console.log("check remote--item--"+JSON.stringify(item))
        axios
            .put(`${this.url}/1/todoList/${item.id}`, {
                complete: !item.complete,
                status: newState
            })
            .then(response=>{
                axios
                    .get(`${this.url}/1/todoList${search}`)
                    .then(response=>{
                        console.log("check response----"+JSON.stringify(response.data));
                        successCallback(response.data)
                    })
                    .catch(error=>{
                        console.log("check get list error-----"+error)
                    });
            })
            .catch(error=>{
                alert("something wrong in server, check failed")
                console.log("check put error-----"+error)
            });

    },

    modifyRemote(id, text, successCallback){
        let search="";
        if(this.filter !== fType.ALL) search=`?search=${this.filter}`;
        // console.log("check remote--item--"+JSON.stringify(item))
        axios
            .put(`${this.url}/1/todoList/${id}`, {
                text,
            })
            .then(response=>{
                axios
                    .get(`${this.url}/1/todoList${search}`)
                    .then(response=>{
                        console.log("modify response----"+JSON.stringify(response.data));
                        successCallback(response.data)
                    })
                    .catch(error=>{
                        console.log("modify get list error-----"+error)
                    });
            })
            .catch(error=>{
                alert("something wrong in server, modify failed")
                console.log("check put error-----"+error)
            });

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