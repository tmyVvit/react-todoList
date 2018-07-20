import {connect} from 'react-redux'
import List from '../component/List'
import listAPI from '../api/ListApi'

const mapStateToProps = (state, ownProps) =>{
    return {
        filterList: listAPI.getFilterList(state.filter, state.todoList),
        // filter: state.filter,
        // todoList: state.todoList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (List)