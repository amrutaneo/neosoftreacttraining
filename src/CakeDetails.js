import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux"
var cake = "/product17.jpg";


const rcorners = {
  borderRadius:  "20px 20px 20px 20px",
  background: "#F5F5F5",
  border: "1px solid gray",
  height: "400px", 
  maxWidth: "300px" ,  
  objectFit: "contain",
  padding:"5px"
 
}

function CakeDetails(props) {
  let params = useParams();
  var token = localStorage.token
  console.log(params.cakeid);
  
  const [cakedata, setCakes] = useState();
  useEffect(() => {
    let apiurl = process.env.REACT_APP_BASE_URL+"cake/" + params.cakeid;
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
      let url = "https://apifromashu.herokuapp.com/api/addcaketocart"
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
        alert("Cake is added to cart..!")
          
      },(error)=>{
          console.log("Error from cart Api",error)
      })
    }
  }

  return (
    <div>
      <div className="row" >
        <div className="col-md-2"></div>
        <div className="col-md-8">

          <div className="card mt-5">
              <div className="card-header"> {cakedata?.name}
              </div>
              <div className="card-body">
              <div className="row">
  
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
                    <button  className="btn btn-primary" onClick={addToCart}>Add to cart</button>
                    <button className="btn btn-primary" style={{margin:"10px"}}><FontAwesomeIcon icon={ faHeart }/></button>
                  </div>
                  </div>
                
                
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
