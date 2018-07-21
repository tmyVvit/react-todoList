import {connect} from 'react-redux'
import Filter from '../component/Filter';
import { setFilter } from '../actions';
import listAPI from '../api/ListApi'

const mapStateToProps = (state, ownProps) =>{
    return {
        filterType: state.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSetFilter: (filter)=>{
            let filterList = listAPI.getFilterList(filter);
            dispatch(setFilter(filter, filterList));
        },
        onSetFilterNew: (filter) => {
            listAPI.getFilterRemoteList(filter, todos=>{
                dispatch(setFilter(filter, todos))
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Filter)