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

export const setFilter = (filter, list)=>{
    return {
        type: type.FILTER,
        filter,
        list,
    }
}

export const modify = (list)=> {
    return {
        type: type.MODIFY,
        list,
    }
}
