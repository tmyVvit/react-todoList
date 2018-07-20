import {connect} from 'react-redux'
import TodoItem from '../component/TodoItem'
import {check, modify} from '../actions'

const mapStateToProps = (state, ownProps) =>{
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onModify:(id, text) => dispatch(modify(id, text)),
        onCheckItem: (id) => dispatch(check(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TodoItem)