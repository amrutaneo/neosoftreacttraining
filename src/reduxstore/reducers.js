const demo = (state={
    user:null,
    cart:[],
    stage:1,
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
            state["stage"] = 1;
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

        case "CHECKOUT": {    
            state["stage"] = 1;   
            return state;
        }


        case "ADD_ADDRESS": {
            state = { ...state };
            state["name"]       = action.payload.name.value;
            state["address"]    = action.payload.address.value;
            state["city"]       = action.payload.city.value;
            state["phone"]      = action.payload.phone.value;
            state["pincode"]    = action.payload.pincode.value;    
            state["stage"] = 2;   
            return state;
        }


        default: return state;
    }
}
    
export default demo;