import * as fType from '../constants/FilterType'

const listAPI = {
    getFilterList : (filter, todoList)=>{
        return todoList.filter(item=>{
            switch(filter){
                case fType.ALL: return true;
                case fType.ACTIVE: return !item.complete;
                case fType.COMPLETE: return item.complete;
            }
        });
    }

}
export default listAPI;