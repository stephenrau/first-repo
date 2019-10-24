import React, {Component} from "react";

export default class CartItem2 extends Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            qty: props.item.qty
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            qty: nextProps.item.qty
        });
    }

    //es next
    // onChangeText = (e) => {
    //     // target is input element, real dom element
    //     let target = e.target;
    //     this.setState({
    //         qty: target.value
    //     })
    // }

    componentDidMount() {
//        !this.props.donotrender ? this.inputElem.focus():"";
     }

    render() {
        console.log("CartItem render", this.props.item.id);         
        let {item} = this.props;
        return(
            <tr>
                <td>{item.name}</td>
                <td>{item.price}
                   <p ref="discount"> </p>
                </td>
                <td> {item.qty} </td>
                <td> {item.price * item.qty} </td>
            </tr>
        )
    }
}

// {!this.props.donotrender ?<td>
//     <input value={this.state.qty} 
//            type="number"
//            onChange={this.onChangeText}
//            ref = {(elem) => this.inputElem = elem}
//     />   
//  </td> : 
//  <td>{item.qty}</td>}
