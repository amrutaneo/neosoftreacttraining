import Card from "./Card.js";
import {useEffect,useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";

function Search(props) {
    let [cakeresult,setCakes] = useState([])
    // let query = new URLSearchParams(useLocation().search);
   

    useEffect(()=>{
      let query = new URLSearchParams(props.location.search).get("query");
      let searchcakeapi = process.env.REACT_APP_BASE_URL+"searchcakes?q="+query
        axios({
          method:"get",
          url:searchcakeapi

        }).then((response)=>{
          console.log("Response from all cakes Api",response.data)
          setCakes(response.data.data)
        },(error)=>{
          console.log("Error from cakes Api",error)
        })
    },[props])
    return (
        <div className="container">
        
            <div className="row">
              {cakeresult?.length >0 ? cakeresult.map((each,index)=>{
                      return( <Card cakedata={each} key={index} />)
                    }):<div className="alert alert-danger">No record found. Please try some other criteria</div> } 
            </div>
        </div>
        
    )
}

export default Search;
    