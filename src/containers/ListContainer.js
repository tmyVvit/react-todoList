import {connect} from 'react-redux'
import List from '../component/List'

const mapStateToProps = (state, ownProps) =>{
    return {
        list: state.todoList,
        filterType: state.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (List)