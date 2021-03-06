import {connect} from "react-redux";
import CartComponent from "../../Component/Cart/CartComponent";
import {bindActionCreators} from "redux";
import {addItem, empty, saveCartItems} from '../../state/actions';


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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);