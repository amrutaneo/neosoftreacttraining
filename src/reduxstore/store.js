import {createStore,applyMiddleware} from "redux";
import demo from "./reducers"
import {logger} from "./middleware.js"


var  middleware = applyMiddleware(logger)
var store = createStore(demo,middleware)

export default store