import * as type from '../constants/ActionType'

export const add = (item)=> {
    return {
        type: type.ADD,
        item,
    }
}

export const check = (list)=> {
    return {
        type: type.CHECK,
        list,
    }
}

export const setFilter = (filter, filterList)=>{
    return {
        type: type.FILTER,
        filter,
        filterList,
    }
}

export const modify = (list)=> {
    return {
        type: type.MODIFY,
        list,
    }
}
