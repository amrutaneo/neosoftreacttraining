import axios from "axios"
import {connect} from "react-redux"
import {useState} from "react"


function Payment(props) {

    var [formerrors,setFormerrors]=useState({})
    var validate = function(elements){
        console.log("elements",elements)
        var errors = {}
        console.log(elements.paymentMethod.checked)
        if(!elements.paymentMethod.checked){
            errors.paymentMethod = "Please select payment method"
        } 
      
        var errorkeys = Object.keys(errors)
        console.log("keys",errorkeys)
        if(errorkeys.length > 0)
        return errors
        else
        return false
    }
 
    let payment = function(){
        var form = document.getElementById("paymentForm")
        var errors = validate(form.elements)
        if(errors){
            setFormerrors(errors)
        } else {
            setFormerrors({})
      
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
        
    }
    return (
    <div>
        <div className="card" style={{margin:"10px"}}>
            <div className="card-header">Payment method
            </div>
            <div className="card-body">
                <form id="paymentForm">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="paymentMethod" />
                        <label class="form-check-label" for="paymentMethod1">
                            Cash on Delivery
                        </label>
                    </div> 
                    <div className="form-error">{formerrors?.paymentMethod && <div>{formerrors.paymentMethod}</div>}</div>
                </form>
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