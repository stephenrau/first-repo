import {connect} from "react-redux";
import ProductAdd from "../../Component/Product/ProductADDComponent";
import {APIaddProduct} from "../../State/Actions";


let mapStateToProps = (state) => {
    console.log("ProductADDContainer  map state to props: ", state)
    return {
        product: state.product,
//        loading: state.user.loading
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        addProduct: (product) => {
            dispatch(APIaddProduct(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd);

