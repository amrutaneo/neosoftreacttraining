import {connect} from "react-redux"
import {Link} from "react-router-dom"
  
const img = {
  height: "150px",
  width: "120px",
  objectFit:"contain"
} 

function CartSummery(props) {
    console.log("cart Summery",props.cart)
    return (
        <div>
        { props.cart?.length >0 && props.cart.map((each,index)=>{
          return (
            <div className="row">
              <div class="col-12">
                
                <div class="card mb-1">
                  <div class="row no-gutters">
                    <div className="row">
                      <div class="col-4">
                        <img src={each.image} alt="..." style={img} />
                      </div>
  
                      <div class="col-6">
                        <div class="card-body">
                          <h5 class="card-title">{each.name}</h5>
                          <p class="card-text"><small class="text-muted">Price : {each.price}</small></p>
                          <p class="card-text"><small class="text-muted">Weight : {each.weight} kg</small></p>
                        </div>
                      </div>
                      <div class="col-2">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          )
        }) }
        <div className="row">
        <div class="col-8"></div>
       
        
        <div class="col-4">
          <Link to={"/checkout/address"}><button className="btn btn-primary">Continue</button></Link>
        </div>
      
      </div>
        </div>
      )
}
  
export default connect(function(state,props){
    return { 
        cart: state?.cart
    }
})(CartSummery);