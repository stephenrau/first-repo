//subsciption to redux, to use store reducers as props, create dispatchers
import {connect} from 'react-redux';
import CreateUpdateUser from '../../Component/Admin/CreateUpdateUserComponent';//F12
import {createUser} from '../../state/actions';

let mapStateToProps = (state) => {
    console.log("Redux cart map state to props", state)
    return {
        user: state.user
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createUser:(user) => {
            dispatch(createUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUpdateUser);