import {connect} from 'react-redux'
import TodoItem from '../component/TodoItem'
import {check, modify} from '../actions'

const mapStateToProps = (state, ownProps) =>{
    return {
        item : state.todoList.find(elem=>elem.id===ownProps.id),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onModify:(id, text) => dispatch(modify(id, text)),
        onCheckItem: (id) => dispatch(check(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TodoItem)