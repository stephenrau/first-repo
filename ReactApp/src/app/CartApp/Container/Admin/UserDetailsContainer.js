//subsciption to redux, to use store reducers as props, create dispatchers
import {connect} from 'react-redux';
import UserDetails from '../../Component/Admin/UserDetailsComponent';//F12
import {signInUpUser} from '../../state/actions';

let mapStateToProps = (state) => { //subcribed
    console.log("Redux cart map state to props", state)
    return {
        user: state.user
    }
}

let mapDispatchToProps = (dispatch) => { //publisher
    return {
        addUser:(user) => {
            dispatch(signInUpUser(user));
        }
    }
}

//connect method is the one that allows us to subscribe a component

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);