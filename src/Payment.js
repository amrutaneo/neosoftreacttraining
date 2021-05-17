import axios from "axios"
import {connect} from "react-redux"


function Payment(props) {

    let payment = function(){
        let url = process.env.REACT_APP_BASE_URL+"addcakeorder"
        var token = localStorage.token
        let data = {
            price:props.price,
            name:props.name,
            address:props.address,
            city:props.city,
            phone:props.phone,
            pincode:props.pincode,
            cakes:props.cakes
        }
        axios({
            url:url,
            method:"post",
            headers:{
                authtoken:token
            },
            data:data
          
        }).then((response)=>{
            alert("Order placed successfully..!")
            props.history.push("/")
            
        },(error)=>{
            console.log("Error from order Api",error)
        })
        
    }
    return (
    <div>
        <div className="card" style={{margin:"10px"}}>
            <div className="card-header">Payment method
            </div>
            <div className="card-body">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                    <label class="form-check-label" for="exampleRadios1">
                        Cash on Delivery
                    </label>
                </div>  
                <div style={{float:"right"}}>
                <button className="btn btn-primary" onClick={payment}>Place Order</button> 
                </div>
            </div>
        </div>

    </div>)
}

export default connect(function(state,props){
    return {
        price:state?.total,
        name: state?.user?.name,
        address:state?.address,
        city:state?.city,
        phone:state?.phone,
        pincode:state?.pincode,
        cakes:state?.cart
        
    }
})(Payment)