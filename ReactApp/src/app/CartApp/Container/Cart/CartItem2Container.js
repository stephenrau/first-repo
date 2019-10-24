import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import CartItem2 from "../../Component/Cart/CartItem2Component";
import * as actions from "../../state/Actions";

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

//CartItem(connect(mapStateToProps, mapDispatchToProps))

export default connect(null, mapDispatchToProps)(CartItem2) //subscribing to dispatch actions