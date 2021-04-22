import Courosal from "./Courosal.js";
import Card from "./Card.js";
// import cakes from "./data.js";
import CakeDetails from "./CakeDetails";
import { useEffect, useState } from "react";
import axios from "axios";

var img1 = "image.jpeg";
var img2 = "1.jpeg";
var img3 = "3.jpeg";

var obj1= {
  name:"iphone 11",
  image: "image.jpeg"
}
var obj2= {
  name:"other phone",
  image: "1.jpeg"
}
function Home(){
    let [cakes,setCakes] = useState([])
    let allcakeapi = "https://apibyashu.herokuapp.com/api/allcakes"
    

    useEffect(()=>{
        axios({
          method:"get",
          url:allcakeapi

        }).then((response)=>{
          console.log("Response from all cakes Api",response.data)
          setCakes(response.data.data)
        },(error)=>{
          console.log("Error from cakes Api",error)
        })
    },[])

    return (
        <div>
            
            <Courosal />
            {/* <CardDetail/> */}
                <div className="row" style={{margin:"5px"}}>
                    {/* <Card name="phone1" image={img1}/> */}
                    {/* <Card data={obj1}/>
                    <Card data={obj2}/> */}

                    {/* <Card name="phone3" image={img3}/> */}
                 
                    {cakes?.length >0 && cakes.map((each,index)=>{
                      return( <Card cakedata={each} key={index} />)
                    }) } 
                </div>
                
        </div>
        
    )
}

export default Home;