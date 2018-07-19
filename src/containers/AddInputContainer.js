import {connect} from 'react-redux'
import AddInput from '../component/AddInput'
import {add} from '../actions'

const mapStateToProps = (state, ownProps) =>{
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddItem:(text) => dispatch(add(text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddInput)