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
                    {this.state.product.name}
                    {this.state.showDetails ?
                    <ul className={"productdetailSubitems"}>
                        <li>{this.state.product.camera}</li>
                        <li>{this.state.product.cpu}</li>
                        <li>{this.state.product.display}</li>
                        <li>{this.state.product.ram}</li>
                    </ul>
                    :""}
                </li>
            </React.Fragment>
        )
    }
}