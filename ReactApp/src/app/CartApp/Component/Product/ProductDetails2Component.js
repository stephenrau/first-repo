import React from "react";

export default class ProductDetails extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            product:this.props.product,
            showDetails:false
        }
    }

    showProductDetails = ()=>{
        this.setState({
            showDetails:!this.state.showDetails
        })
    }

    render(){
        return(
            <React.Fragment>
                <li className={"productDetail"} onClick={this.showProductDetails}>
                    {this.state.product.productName}
                    {this.state.showDetails ?
                    <ul className={"productdetailSubitems"}>
                        <li>Description: {this.state.product.description}</li>
                        <li>Price: $ {this.state.product.price}</li>
                        <li>Rating: {this.state.product.rating}</li>
                    </ul>
                    :""}
                </li>
            </React.Fragment>
        )
    }
}