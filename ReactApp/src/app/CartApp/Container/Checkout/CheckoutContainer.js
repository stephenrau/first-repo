import {connect} from "react-redux";
import CheckoutComponent from "../../Component/Checkout/CheckoutComponent";

import {bindActionCreators} from "redux";
//import {addItem, empty, saveCartItems} from '../../state/actions';
import {addItem, empty, saveCartItems, showPaymentForm} from '../../state/actions';


let mapStateToProps = (state) => {
    return{
        cartlength:state.cart.length,
        items : state.cart,
        userid: state.user.user._id
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addItem:()=>{
            let id = Math.ceil(Math.random() * 10000);
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }
            const action = addItem(item);
            dispatch(action);
        },
        empty: bindActionCreators(empty, dispatch),
        // empty: () =>{
        //     dispatch(empty)
        // },
        saveCartItems: (items,userid) => {
            saveCartItems(items,userid)
        },
        showPaymentForm: (items,userid) => {
            showPaymentForm(items,userid)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent);


// create a checkout component which shows User Details and Amount to be paid
// Take help from header and cart summary
