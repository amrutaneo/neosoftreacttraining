import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux"
var cake = "/product17.jpg";


const rcorners2 = {
  borderRadius: "15px 50px 30px",
  background: "#F5F5F5",
  border: "2px solid gray",
  padding: "20px",
  width: "100%",
  height: "100%",
  margin:"20px"
} 

const rcorners = {
  borderRadius:  "15px 50px 30px 5px",
  background: "#F5F5F5",
  border: "1px solid gray",
  height: "400px", 
  maxWidth: "300px" ,  
  objectFit: "contain",
  padding:"5px"
 
}
const buttonstyle= {
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
function CakeDetails(props) {
  let params = useParams();
  var token = localStorage.token
  console.log(params.cakeid);
  
  const [cakedata, setCakes] = useState();
  useEffect(() => {
    let apiurl = "https://apibyashu.herokuapp.com/api/cake/" + params.cakeid;
    axios({
      url: apiurl,
      method: "get",
    })
      .then((response) => {
        console.log("all cake", response.data.data);
        setCakes(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  let addToCart = function(){
    if(!props.token) {
      alert("Login please..!")
    } else {
      let url = "https://apibyashu.herokuapp.com/api/addcaketocart"
      console.log(cakedata.cakeid,cakedata.name,cakedata.image,cakedata.price,cakedata.weight)
      axios({
          url:url,
          method:"post",
          headers:{
            authtoken:token
          },
          data:{
            cakeid:cakedata.cakeid,
            name:cakedata.name,
            image:cakedata.image,
            price:cakedata.price,
            weight:cakedata.weight
          }
          
      }).then((response)=>{
          console.log("Response from add cart Api",response.data)
          
          props.dispatch({
            type:"ADD_TO_CART",
            payload:response.data.data
        })
          
      },(error)=>{
          console.log("Error from cart Api",error)
      })
    }
  }

  return (
    <div >
        <div className="row" >
        <div className="col-md-2"></div>
        <div className="col-md-8 container">
        
          <div className="row" style={rcorners2}>
          
          <div className="col-md-5">
           
          <img
            style={rcorners}
            src={cakedata?.image || cake}
          />
        </div>
          <div className="col-md-7">
            <h2>
              {cakedata?.name}
            </h2>

            <br></br>
            <p>{cakedata?.ratings} *</p>
            <p>{cakedata?.reviews} Reviews</p>
            <p style={{ wordBreak: "break-all" }}>{cakedata?.description}</p>
            <h5> PRICE:{" "}
              <span> {cakedata?.price} Rs</span>
            </h5>
            <p style={{ wordBreak: "break-all" }}>
            </p>
            {/* <h3>WEIGHT: {cakedata?.weight}</h3> */}
            <h5>
              FLAVOUR:{" "}
              <span>
                {cakedata?.flavour || "dumy"}
              </span>
            </h5>
            <h5>TYPE : {cakedata?.type}</h5>
            <button style={buttonstyle} onClick={addToCart}>Add to cart</button>
            <button style={buttonstyle}><FontAwesomeIcon icon={ faHeart }/></button>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default connect(function(state,props){
  return { 
  token:state?.user?.token
  }
})(CakeDetails);
