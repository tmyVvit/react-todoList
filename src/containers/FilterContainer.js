import {connect} from 'react-redux'
import Filter from '../component/Filter';
import { setFilter } from '../actions';

const mapStateToProps = (state, ownProps) =>{
    return {
        filterType: state.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSetFilter: (filter)=>dispatch(setFilter(filter)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Filter)