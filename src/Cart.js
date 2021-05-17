
import {useEffect} from 'react';
import axios from 'axios';
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';


 

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

const buttonstyle= {
  backgroundColor:  "red",
  border: "none",
  color: "white",
  padding: "8px 10px",
  textAlign: "center",
  textDecoration: "none",
  display: "inlineBlock",
  fontSize: "16px",
  margin: "10px 2px",
  cursor: "pointer",
  float:"right"
 
}




function Cart(props){
  var token = localStorage.token
  var total = 0
  useEffect(() => {
      let apiurl = "https://apifromashu.herokuapp.com/api/cakecart"
      axios({
        url: apiurl,
        method: "post",
        headers:{
          authtoken:token
        }
      })
      .then((response) => {
        response.data.data.map(({price}) => {
          total= total+price
        })
        console.log("all cake", response.data.data);
        props.dispatch({
          type:"SET_CART",
          payload: response.data.data,
          total:total
        })
      })
      .catch((error) => console.log(error));
    }, []);


    let remove = function(cakeid,price){
      let url = process.env.REACT_APP_BASE_URL+"removecakefromcart"
      axios({
        url:url,
        method:"post",
        headers:{
          authtoken:token
        },
        data:{
          cakeid:cakeid
        }
      }).then((response)=>{
        
        props.dispatch({
            type:"REMOVE_CAKE",
            payload:cakeid,
            price: price 
        })
      },(error)=>{
        console.log("Error from login Api",error)
      })
    }
    
    return (
      <div style={{marginTop:"10px"}}>
        <div className="card mt-5" style={{marginLeft:"20%",marginRight:"20%"}}>
          <div className="card-header"> Cart Details
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
                        <button style={buttonstyle}  onClick={remove.bind(null,each.cakeid,each.price)}><FontAwesomeIcon icon={ faTrashAlt }/></button>
                      </div>
                    </div>
                </div>
              )
            }) }
            <div style={{float:"left"}}>
            <h5>Total:{props.total}</h5>
            </div>
            <div style={{float:"right"}}>
              <Link to={"/checkout"}><button className="btn btn-primary">Checkout</button></Link>
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
})(Cart);