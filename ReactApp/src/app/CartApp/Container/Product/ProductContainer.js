import {connect} from "react-redux";
import Product from "../../Component/Product/ProductComponent";
import {GetProducts} from "../../State/Actions";
import {GetProductsNEW} from "../../State/Actions";

let mapStateToProps = (state) => {
    return {
        products: state.product.products,
        products_NEW: state.product.products_NEW,
        loading: state.user.loading
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        fetchProducts: () =>{
            dispatch(GetProducts())
        },
        
        fetchProductsNEW: () =>{
            dispatch(GetProductsNEW())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);