import axios from "axios"
import { useEffect } from "react";

function Orders() {
    
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
          console.log("all orders", response.data);
        
        })
        .catch((error) => console.log(error));
    }, []);
    return (
    <div>
        Orders
    </div>)
}

export default Orders