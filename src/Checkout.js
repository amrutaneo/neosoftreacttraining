import {Route, useRouteMatch} from "react-router"
import Address from "./Address";
import Payment from "./Payment";
import Orders from "./Orders";
import CartSummery from "./CartSummery";
import {Link} from "react-router-dom"

const sidenav = {
    marginTop:"50px",
    height: "100%",
    width: "200px",
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: "#F5F5F5",
    overflowX: "hidden",
    color: "#818181"

  }

  const options = {
    padding: "6px 8px 6px 16px",
    textDecoration: "none",
    fontSize: "15px",
    color: "#818181",
    display: "block",
  }
  
  

  
function Checkout() {
    var route = useRouteMatch()
    var url = route.url;
    var path = route.path;
    return (
    <div className="row">
        <div className="col-md-4" style={sidenav}>
            <Link to={url}><div style={options}>Cart Summery</div></Link>
            <Link to={url+"/address"}><div style={options}>Add Address</div></Link>
            <Link to={url+"/payment"}><div style={options}>Payment</div></Link>
            <Link to={url+"/orders"}><div style={options}>Order</div></Link>
        </div>
        <div className="col-md-6" style={{marginLeft:"200px"}}>
            <Route exact path={path} component={CartSummery}></Route>
            <Route exact path={path+"/address"} component={Address}></Route>
            <Route exact path={path+"/payment"} component={Payment}></Route>
            <Route exact path={path+"/orders"} component={Orders}></Route>
        </div>
        <div className="col-md-2" ></div>
    </div>)
}

export default Checkout