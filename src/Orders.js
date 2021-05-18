import axios from "axios"
import { useEffect,useState } from "react";


function Orders() {
    let [orders,setOrders] = useState([])
    
    useEffect(() => {
      let apiurl = process.env.REACT_APP_BASE_URL+"cakeorders";
      var token = localStorage.token
      axios({
        url: apiurl,
        method: "post",
        headers:{
            authtoken:token
        }
      })
      .then((response) => {
     
        setOrders(response.data.cakeorders)
      })
      .catch((error) => console.log(error));
    }, []);
    
    return (
    <div style={{margin:"10px"}}>
      <h6>Your orders</h6>
       <table class="table">
        <thead>
          <tr>
            <th scope="col">Order date</th>
            <th scope="col">Order id</th>
            <th scope="col">Price</th>
            <th scope="col">Address</th>
            <th scope="col">Cake</th>
          </tr>
        </thead>
        <tbody>
     
        {orders?.length >0 && orders.map((each,index)=>{
        console.log("",each)
          return(  
           
            <tr>
              <td>{each.orderdate}</td>
              <td>{each.orderid}</td>
              <td>{each.price}</td>
              <td>{each.address}</td>
            
              
              {each.cakes?.length >0 && each.cakes.map((cakeeach)=>{
       
                return(  
                    <td><img src={cakeeach.image} className="card-img-top" alt="" style={{height:"100px"}} /></td>
                  )  
              }) } 
            </tr>)
            
        }) } 
        </tbody>
      </table>
    </div>)
}

export default Orders