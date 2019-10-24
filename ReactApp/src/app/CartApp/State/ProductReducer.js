import * as ActionTypes from "./ActionTypes";//alias import
//we have two things in ever reducer(state)
//initialize the state
//update the state per dispatched action

const INITIAL_STATE = {
    products: [],

    product: {
        productName: "",
        description: "",
        price: 0,
        rating: "",
        _id: ""
    },

    products_NEW: []

}

export default function productReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        
        case ActionTypes.GET_PRODUCTS_FULFILLED : //promise way instead of thunk
            return {...state, products : action.payload}

        case ActionTypes.GET_PRODUCTS_NEW_FULFILLED : //promise way instead of thunk
            return {...state, products_NEW : action.payload}

        case ActionTypes.ADD_PRODUCT: 
            console.log("Payload Address", action.payload.product)
            return {...state, product: action.payload.product} 

        default: return state
    }
}