
import {useEffect} from 'react';
import axios from 'axios';
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';


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
  marginLeft:"240px"
 
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

function Cart(props){
  var token = localStorage.token
  var total = 0
  useEffect(() => {
      let apiurl = "https://apibyashu.herokuapp.com/api/cakecart"
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
      let url = "https://apibyashu.herokuapp.com/api/removecakefromcart"
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
      <button style={navbutton}>Cart Details</button>
      {props.cart?.length >0 && props.cart.map((each,index)=>{
        return (
          <div >
          <div className="row" >
            <div className="col-md-2"></div>
            <div className="col-md-8">
              
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
                  <button style={buttonstyle}  onClick={remove.bind(null,each.cakeid,each.price)}><FontAwesomeIcon icon={ faTrashAlt }/></button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              
            </div>
            </div>
          </div>
        )
      }) }
      <div className="row" style={{margin:"30px"}}>
        <div class="col-2"></div>
        <div class="col-6"><h5 class="card-title">Total:{props.total}</h5></div>
        
        <div class="col-4">
          <Link to={"/checkout"}><button style={buttonstyle1}>Checkout</button></Link>
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