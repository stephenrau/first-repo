import React from "react";
import CartList2 from "../../Container/Cart/CartList2Container";
import CartSummary from "../../Container/Cart/CartSummaryContainer";
import UserDetails from "../../Container/Admin/UserDetailsContainer";

/*
export default function CheckoutComponent(props){    
    return(
    <div>
        <h2>CHECKOUT</h2>
  <UserDetails/>
        
        <CartList2/>

        <button onClick={() => props.saveCartItems(props.items, props.userid)} >
            Submit Payment
        </button>
    </div>
)    
}
*/

export default function CheckoutComponent(props){    
        return(
        <div>
            <h2>CHECKOUT</h2>
      <UserDetails/>
            
            <CartList2/>

            <button onClick={() => props.showPaymentForm(props.items, props.userid)} >
                Submit Payment
            </button>
        </div>
    )    
}