import {connect} from 'react-redux'
import AddInput from '../component/AddInput'
import {add} from '../actions'
import listAPI from '../api/ListApi'

const mapStateToProps = (state, ownProps) =>{
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddItem:(text) => {
            let item = listAPI.addItems(text);
            dispatch(add(item));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddInput)