import React from "react";
import CartItem2 from "../../container/Cart/CartItem2Container";

export default function CartList2(props) { 
    // let {items} = props;
let {items,count,amount} = props;

    console.log("CartList function render");
    return (
        <div> 
        <h2>Cart Summary</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
            {
                items.map (item => (
                    <CartItem2 item={item}
                              key={item.id}
                    />
                ))
            }
            </tbody>
        </table>

        <h3>Total {'\u00A0'}{'\u00A0'}{'\u00A0'}  ${amount}</h3>
        </div>
     )
}

/*
export default function CartSummary(props) {
    let {
        count,
        amount
    } = props;

    return (
        <div> 
            <h2>Cart Summary</h2>
            <p> Amount: {amount} </p>
            <p> Count: {count} </p>
        </div>
    )     
}
*/