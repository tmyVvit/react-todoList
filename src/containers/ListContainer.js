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
        onModify:(id, text) => {
            let item = listAPI.modify(id, text)
            dispatch(modify(item))
        },
        onCheckItem: (id) => {
            let newList = listAPI.checkItem(id)
            dispatch(check(newList))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (List)