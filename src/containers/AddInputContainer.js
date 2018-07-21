import {connect} from 'react-redux'
import AddInput from '../component/AddInput'
import {add} from '../actions'
import listAPI from '../api/ListApi'

const mapStateToProps = (state, ownProps) =>{
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddItemOld:(text) => {
            let item = listAPI.addItems(text);
            dispatch(add(item));
        },
        onAddItem:(text) => {
            listAPI.addItemToRemote(text, item=>
                dispatch(add(item))
            )
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (AddInput)