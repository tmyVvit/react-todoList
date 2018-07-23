import {connect} from 'react-redux'
import List from '../component/List'
import {check, modify, init} from '../actions'
import listAPI from '../api/ListApi'

const mapStateToProps = (state, ownProps) =>{
    return {
        filterList: state.todoList,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onModify:(id, text)=>{
            listAPI.modifyRemote(id, text, newList=>{
                dispatch(modify(newList))
            })
        },
        onCheckItem: (item) => {
            listAPI.checkItemRemote(item, newList=>{
                dispatch(check(newList))
            })
        },
        initList:()=>{
            listAPI.initlist(list=>dispatch(init(list)))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (List)