import {connect} from 'react-redux'
import Filter from '../component/Filter';
import { setFilter } from '../actions';
import listAPI from '../api/ListApi'

const mapStateToProps = (state, ownProps) =>{
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSetFilter: (filter) => {
            listAPI.getRemoteFilterList(filter, todos=>{
                dispatch(setFilter(filter, todos))
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Filter)