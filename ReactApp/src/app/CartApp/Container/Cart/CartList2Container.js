import {connect} from "react-redux";
import CartList2 from "../../Component/Cart/CartList2Component";

const mapStateToProps = (state) => {

let result = recalculate(state.cart);

    return {
         items: state.cart,
...result         
    }
}

function recalculate(items){
    console.log("RECALCULATE ", items)
    let amount = 0, 
        count = 0;

    for(let item of  items) {
        amount += item.qty * item.price;
        count  += item.qty; 
    }

    return {
        amount, //ES6 sugar amount: amount
        count
    }
}

// const mapStateToProps = (state) => {
//     let result = recalculate(state.cart);
//     return {...result};
// }

export default connect(mapStateToProps,null)(CartList2);
//subscribing to update state and get the published values from store