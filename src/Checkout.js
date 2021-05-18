import {Route, useRouteMatch} from "react-router"
import Address from "./Address";
import Payment from "./Payment";
import Orders from "./Orders";
import CartSummery from "./CartSummery";
import {Link} from "react-router-dom";
import {connect} from "react-redux"

const sidenav = {
    marginTop:"58px",
    height: "100%",
    width: "200px",
    position: "absolute",
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
  
  

  
function Checkout(props) {
    var route = useRouteMatch()
    var url = route.url;
    var path = route.path;
    console.log("props.stage",props.stage)
    return (
    <div className="row">
        <div className="col-md-4" style={sidenav}>
            <Link to={url}><div style={options}>Cart Summery</div></Link>
            {props.stage == 1 || props.stage == 2 ? (
              <Link to={url+"/address"}><div style={options}>Add Address</div></Link>
            ) : (
                <Link to={url+"/address"}  style={{ cursor: "not-allowed" }}><div style={options}>Add Address</div></Link>
            )}
            {props.stage == 2 ? (
                <Link to={url+"/payment"} ><div style={options}>Payment</div></Link>
            ):(
                <Link to={url+"/payment"} style={{ cursor: "not-allowed" }}><div style={options}>Payment</div></Link>
            )}

            <Link to={url+"/orders"} ><div style={options}>Order</div></Link>
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

export default connect(function(state,props){
    return {
        stage: state?.stage
    }
})(Checkout)