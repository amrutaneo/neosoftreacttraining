import {connect} from "react-redux"
import {Link} from "react-router-dom"

const rcorners2 = {
  borderRadius: "20px 20px 20px 20px",
  background: "#F5F5F5",
  border: "1px solid gray",
  padding: "20px",
  width: "90%",
  height: "80%",
  margin:"20px"
} 

const rcorners = {
  borderRadius:  "20px 20px 20px 20px",
  background: "#F5F5F5",
  border: "1px solid gray",
  height: "100px", 
  maxWidth: "150px" ,  
  objectFit: "contain",
  padding:"5px"
 
}

function CartSummery(props) {
    console.log("cart Summery",props.cart)
    return (
      <div style={{marginTop:"10px",marginLeft:"50px"}}>
      <div className="card ">
        <div className="card-header"> Cart Summery
        </div>
        <div className="card-body">
   
          {props.cart?.length >0 && props.cart.map((each,index)=>{
            return (
              <div >    
                  <div className="row" style={rcorners2}>
                    <div className="col-md-4">
                      <img style={rcorners} src={each?.image}/>
                    </div>
                    <div className="col-md-8">
                      <h2>
                        {each?.name}
                      </h2>     
                      <h6>
                        PRICE: {each?.price}
                      </h6>        
                      
                    </div>
                  </div>
              </div>
            )
          }) }
          <div style={{float:"left"}}>
          <h5>Total:{props.total}</h5>
          </div>
          <div style={{float:"right"}}>
          <Link to={"/checkout/address"}><button className="btn btn-primary">Continue</button></Link>
        </div>
         
      </div>
    </div>
  </div>
      )
}
  
export default connect(function(state,props){
    return { 
        cart: state?.cart,
        total: state?.total
    }
})(CartSummery);