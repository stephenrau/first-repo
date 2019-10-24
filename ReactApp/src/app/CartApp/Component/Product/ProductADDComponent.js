import React from "react";
import ProductDetails from "./ProductDetailsComponent";

export default class ProductAdd extends React.Component{

    constructor(props, context){
        super(props);
        
        this.state = {
            // productName: props.product.product.productName,      
            // description: props.product.description,
            // price: props.product.product.price,
            // rating: props.product.product.rating
             productName: props.product.productName,
            description: props.product.description,
            price: props.product.price,
            rating: props.product.rating
        }
    }

    AddProduct = ()=>{
        let product = {
            productName: this.state.productName,
            description: this.state.description,
            price: this.state.price,
            rating: this.state.rating
        }
        console.log("PRODUCT  .......   ", product)
        this.props.addProduct(product);
    }


    componentDidMount() {
//        this.props.fetchProducts();
    }

    onChangeText = (e) => {
        // target is input element, real dom element
        let target = e.target;
        let classlist = target.classList.toString();

        if(classlist.indexOf("pname")>=0){
            this.setState({
                productName: target.value
            })
        }else if(classlist.indexOf("description")>=0){
            this.setState({
                description: target.value
            })
        }else if(classlist.indexOf("price")>=0){
            this.setState({
                price: target.value
            })
        }else if(classlist.indexOf("rating")>=0){
            this.setState({
                rating: target.value
            })
        }else{
            if (target.value && target.value.length <= 100) {
                this.setState({
                    rating: target.value
                })    
            }            
        }
    }

/*
    render(){
        let products = this.props.products || [];
        console.log("products :" , products);
        return(
            <div>
                <h2>Product List {this.props.loading ? "Loading " : " Loaded "}</h2>
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
*/

render() {
    return (
        <div className={"componentClass"}>
            <div className="form col-md-8">
                <div className="col-md-12">
                    <b>Product Name</b>
                    <input type="text" className="form-control col-md-6 pname" value={this.state.productName} 
                        placeholder="prodname"
                        onChange={this.onChangeText} />
                </div>
                
                <div className="col-md-12">
                    <b>Description </b>
                    <input type="text" className="form-control col-md-6 description" value={this.state.description} 
                      placeholder="description"
                      onChange={this.onChangeText} />
                </div>
                
                <div className="col-md-12">
                    <b>Price </b>
                <input type="number" className="form-control col-md-6 price" value={this.state.price} 
                      placeholder="price"
                      onChange={this.onChangeText} />
                </div>
                
                <div className="col-md-12">
                    <b>Rating </b>
                    <input type="text" className="form-control col-md-6 rating" value={this.state.rating} 
                        placeholder="rating" 
                        onChange={this.onChangeText} />
                </div>
                
                <input type="button" className={"btn btn-primary col-md-2"} value={"ADD PRODUCT"} onClick={this.AddProduct}/>
            </div>
        </div>
    )
}   

}




