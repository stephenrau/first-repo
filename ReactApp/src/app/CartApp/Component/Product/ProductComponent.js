import React from "react";
import ProductDetails from "./ProductDetailsComponent";
import ProductDetails2 from "./ProductDetails2Component";

export default class Product extends React.Component{

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchProductsNEW();
    }

    render(){
        let products = this.props.products || [];
        let products_NEW = this.props.products_NEW || [];
        console.log("products :" , products);
        console.log("products_NEW :" , products_NEW);
        return(
            <div>
                <h2>Product List {this.props.loading ? "Loading " : " Loaded "}</h2>
                <ul>
                {
                    products_NEW.map (product => (
                        <ProductDetails2 key={product._id} product={product}/>
                        // <li key={product.id}> {product.name} <b> {product.camera}</b></li> 
                    ))
                }
                </ul>
                <ul>
                {
                    products.map (product => (
                        <ProductDetails key={product.id} product={product}/>
                        // <li key={product.id}> {product.name} <b> {product.camera}</b></li> 
                    ))
                }
                </ul>
            </div>
        )
    }
    
}