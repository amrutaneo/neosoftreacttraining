import {connect} from "react-redux"
import {Link} from "react-router-dom"
  
const img = {
  height: "150px",
  width: "120px",
  objectFit:"contain"
} 

const rcorners2 = {
  borderRadius: "15px 50px 30px",
  background: "#F5F5F5",
  border: "2px solid gray",
  padding: "20px",
  width: "90%",
  height: "80%",
  margin:"20px"
} 

const rcorners = {
  borderRadius:  "15px 50px 30px 5px",
  background: "#F5F5F5",
  border: "1px solid gray",
  height: "100px", 
  maxWidth: "150px" ,  
  objectFit: "contain",
  padding:"5px"
 
}

const navbutton= {
  backgroundColor:  "gray",
  border: "none",
  color: "white",
  padding: "15px 20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inlineBlock",
  fontSize: "20px",
  cursor: "pointer",
  width:"780px",
  marginLeft:"10px"
}

const buttonstyle1= {
  backgroundColor:  "#008CBA",
  border: "none",
  color: "white",
  padding: "12px 25px",
  textAlign: "center",
  textDecoration: "none",
  display: "inlineBlock",
  fontSize: "16px",
  margin: "10px 2px",
  cursor: "pointer",
 
}

function CartSummery(props) {
    console.log("cart Summery",props.cart)
    return (
        <div>
        <button style={navbutton}>Cart Summery</button>
        { props.cart?.length >0 && props.cart.map((each,index)=>{
          return (
            <div >
               
            <div className="row" >
             
              <div className="col-md-12">
             
                <div className="row" style={rcorners2}>
                
                  <div className="col-md-4">
                
                      <img style={rcorners} src={each?.image}/>
                  </div>
                  <div className="col-md-6">
                    <h2>
                      {each?.name}
                    </h2>     
                    <h6>
                      PRICE: {each?.price}
                    </h6>        
                  </div>
                  <div className="col-md-2">
                   
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
          <Link to={"/checkout/address"}><button style={buttonstyle1}>Continue</button></Link>
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