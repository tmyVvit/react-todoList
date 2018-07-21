import {connect} from 'react-redux'
import List from '../component/List'
import {check, modify} from '../actions'
import listAPI from '../api/ListApi'

const mapStateToProps = (state, ownProps) =>{
    return {
        filterList: state.todoList,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onModifyOld:(id, text) => {
            let item = listAPI.modify(id, text)
            dispatch(modify(item))
        },
        onModify:(id, text)=>{
            listAPI.modifyRemote(id, text, newList=>{
                dispatch(modify(newList))
            })
        },
        onCheckItemOld: (id) => {
            let newList = listAPI.checkItem(id)
            dispatch(check(newList))
        },
        onCheckItem: (item) => {
            listAPI.checkItemRemote(item, newList=>{
                dispatch(check(newList))
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (List)