import * as type from '../constants/ActionType'

export const add = (item)=> {
    return {
        type: type.ADD,
        item,
    }
}

export const check = (id)=> {
    return {
        type: type.CHECK,
        id,
    }
}

export const setFilter = (filter, filterList)=>{
    return {
        type: type.FILTER,
        filter,
        filterList,
    }
}

export const modify = (id, text)=> {
    return {
        type: type.MODIFY,
        id,
        text,
    }
}
