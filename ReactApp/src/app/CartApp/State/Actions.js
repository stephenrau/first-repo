import * as ActionTypes from "./ActionTypes";//alias import

export const addUser = (user) => ({        
    type: ActionTypes.ADDUSER_USER,
    payload: {user}
})

export const addProduct = (product) => ({        
    type: ActionTypes.ADD_PRODUCT,
    payload: {product}
})


export const loading = (loading) => ({
    type: "LOADING",
    payload: {
        loading
    }
});

export const signInUpUser = (user) => {
    console.log('entering signin signup user');

    // thunk, returns function as an action
    return function(dispatch, getState) {
        // here we go with ajax call
        // thunk shall call
        console.log("called by thunk");
        dispatch(loading(true));

        window.fetch("http://localhost:9090/api/signInUpUser",{//uri
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)})//req.body.firstname,req.body.password...
        .then (response => response.json())
        .then (userresp => {
            console.log("response ", userresp);
            let action = addUser(userresp);
            dispatch(action);
            dispatch(loading(false));
            dispatch(getCartItems(userresp._id))
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })
    }
}

export const signInUpUser2 = (user2) => {
    console.log('entering signin signup user');

    // thunk, returns function as an action
    return function(dispatch, getState) {
        // here we go with ajax call
        // thunk shall call
        console.log("called by thunk");
        dispatch(loading(true));

        window.fetch("http://localhost:9090/api/TheOneYouHaveCreated",{//uri
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user2)})//req.body.firstname,req.body.lastName...
        .then (response => response.json())
        .then (userresp => {
            console.log("response ", userresp);
            let action = addUser2(userresp);
            dispatch(action);
            dispatch(loading(false));
            //dispatch(getCartItems(userresp._id))
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })
    }
}

export const addUser2 = (user2) => ({        
    type: ActionTypes.ADDUSER_USER2,
    payload: {user2}
})

//dispatching to product reducer using promise
export const GetProducts = (products) => ({    
    type : ActionTypes.GET_PRODUCTS,
    payload: {
            promise: new Promise((resolve, reject) => { 
//                fetch("http://localhost:9090/api/products", {
                    fetch("http://localhost:9090/api/products", {

                    method: 'GET'
                }).then(                
                    response => response.json(),
                    error => console.log('An error occurred.', error)
                ).then(json => {
                    // want to updatePath for the route here:
                    //dispatch(updatePath('/'));
                    resolve(json)
                })
                .catch(error => {
                    reject(error);
                    //dispatch(error); -- promise Issue                        
                })
            })
        }       
});

//dispatching to product reducer using promise
export const GetProductsNEW = (products_NEW) => ({    
    type : ActionTypes.GET_PRODUCTS_NEW,
    payload: {
            promise: new Promise((resolve, reject) => { 
                fetch("http://localhost:9090/api/products_NEW", {
// fetch("http://localhost:9090/api/products", {
                        method: 'GET'
                }).then(                
                    response => response.json(),
                    error => console.log('An error occurred.', error)
                ).then(json => {
                    // want to updatePath for the route here:
                    //dispatch(updatePath('/'));
                    resolve(json)
                })
                .catch(error => {
                    reject(error);
                    //dispatch(error); -- promise Issue                        
                })
            })
        }       
});


//functions of cart component
export const addItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        item
    }
})

export const empty = () => ({
    type: ActionTypes.EMPTY_CART
})

export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: {
        id
    }
})

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {
        id,
        qty: parseInt(qty)
    }
})

export const saveCartItems = (Items, userid) => {
    console.log("Items To Be Saved", Items);   

    window.fetch("http://localhost:9090/api/saveUserCart",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userid:userid, items:Items})})
    .then (response => response.json())
    .then (cartresponse => {
        console.log("response ", cartresponse);
        dispatch(loading(false));
    })
    .catch((err)=>{
        console.log("Error While Login", err)
    })        
}

export const showPaymentForm = (Items, userid) => {
    console.log("showPaymentForm ", Items);   

    // GreetMe = (greetMsg) =>{
         alert("PAY UP !!!   User "+ userid);
    //     this.setState({
    //         GreettingMsg:greetMsg
    //     })
    // }


}



export const getCartItems = (userid) => {
    return function(dispatch, getState) {
        console.log("Get List Of items");
        window.fetch("http://localhost:9090/api/getUserCart",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
        .then (response => response.json())
        .then (cartresponse => {
            console.log("response ", cartresponse);
            for (const item of cartresponse.cart) {
                console.log("item in for of", item);
                let action = addItem(item);
                dispatch(action);    
            }
            
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })  
    }       
}

//export const saveCartItems = (Items, userid) => {
export const processPayment = (amount, paymentMethod,  userid) => {
    console.log("Items To Be Saved", Items);   

    window.fetch("http://localhost:9090/api/saveUserCart",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userid:userid, items:Items})})
    .then (response => response.json())
    .then (cartresponse => {
        console.log("response ", cartresponse);
        dispatch(loading(false));
    })
    .catch((err)=>{
        console.log("Error While Login", err)
    })        

}


export const APIaddProduct = (product) => {
    console.log('entering addPRODUCT');

    // thunk, returns function as an action
    return function(dispatch, getState) {
        // here we go with ajax call
        // thunk shall call
        console.log("called by thunk");
        dispatch(loading(true));

        window.fetch("http://localhost:9090/api/addUpdateProduct",{//uri
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)})//req.body.firstname,req.body.password...
        .then (response => response.json())
        .then (prodresp => {
            console.log("response ", prodresp);
            let action = addProduct(prodresp);
            dispatch(action);
            dispatch(loading(false));
//            dispatch(getCartItems(userresp._id))
        })
        .catch((err)=>{
            console.log("Error in addPRODUCT", err)
        })
    }
}

