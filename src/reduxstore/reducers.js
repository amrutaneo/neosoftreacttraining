const demo = (state={
    user:null,
    cart:[]
}, action) => {
    switch (action.type) {
        case "LOGIN": {

            console.log("on login function");
            state = { ...state };
            state["isLogin"] = true;
            state["user"] = action.payload;
            return state;
        } 

        case "LOGOUT": {
            
            state = { ...state }
            localStorage.clear()
            delete state["isLogin"] 
            delete state["user"] 
            return state;
        } 

        case "SET_USER": {
            
            state = { ...state };
            state["isLogin"] = true;
            state["user"] = action.payload;
            return state;
        }

        case "ADD_TO_CART": {
            state = { ...state };
            state["cart"] = [...state.cart,action.payload];
            state["total"] = state.total + action.payload.price;
            console.log("cart",state.cart)
            return state;
        }

        case "SET_CART": {
            state = { ...state };
            state["cart"] = action.payload;
            state["total"] = action.total;
            return state;
        }

        case "REMOVE_CAKE": {
            state = { ...state };
            state["cart"]= state.cart.filter(x => x.cakeid !== action.payload)
            state["total"] = state.total - action.price;
            return state;
        }


        default: return state;
    }
}
    
export default demo;