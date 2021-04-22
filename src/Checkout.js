import {Route, useRouteMatch} from "react-router"
import Address from "./Address";
import Payment from "./Payment";
import Orders from "./Orders";
import CartSummery from "./CartSummery";
import {Link} from "react-router-dom"

function Checkout() {
    var route = useRouteMatch()
    var url = route.url;
    var path = route.path;
    return (
    <div className="row">
        <div className="col-md-4">
            <Link to={url}><li>Cart Summery</li></Link>
            <Link to={url+"/address"}><li>Add Address</li></Link>
            <Link to={url+"/payment"}><li>Payment</li></Link>
            <Link to={url+"/orders"}><li>Order</li></Link>


        </div>
        <div className="col-md-6" >
            <Route exact path={path} component={CartSummery}></Route>
            <Route exact path={path+"/address"} component={Address}></Route>
            <Route exact path={path+"/payment"} component={Payment}></Route>
            <Route exact path={path+"/orders"} component={Orders}></Route>
        </div>
        <div className="col-md-2" ></div>
    </div>)
}

export default Checkout