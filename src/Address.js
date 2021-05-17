import {useState} from "react"
import { useSelector,connect } from "react-redux"
 
function Address(props) {
    var [formerrors,setFormerrors]=useState({})
    var validate = function(elements){
      
        var errors = {}
        if(!elements.name.value){
            errors.name = "Name is required"
        }
        if(!elements.phone.value){
            errors.phone = "Phone is required"
        }
        if(!elements.address.value){
            errors.address = "Address is required"
        }
        if(!elements.city.value){
            errors.city = "City is required"
        }
        if(!elements.pincode.value){
            errors.pincode = "Pincode is required"
        }
        var errorkeys = Object.keys(errors)
       
        if(errorkeys.length > 0)
        return errors
        else
        return false
    }
    
    var continuebtn = function(){
        
        var form = document.getElementById("addressForm")
       
        var errors = validate(form.elements)
        if(errors){
            setFormerrors(errors)
        } else {
            setFormerrors({})
            props.dispatch({
                type:"ADD_ADDRESS",
                payload:form.elements
            })
            props.history.push("/checkout/payment")
        }
       
    }
    return (
        <div >
             <div className="card" style={{margin:"10px"}}>
                <div className="card-header">Add address
                </div>
                <div className="card-body">
                    <form id="addressForm" className="container">
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" name="name" />
                            <div className="form-error">{formerrors?.name && <div>{formerrors.name}</div>}</div>
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" className="form-control" name="phone" />
                            <div className="form-error">{formerrors?.phone && <div>{formerrors.phone}</div>}</div>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" name="address" />
                            <div className="form-error">{formerrors?.address && <div>{formerrors.address}</div>}</div>
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control" name="city" />
                            <div className="form-error">{formerrors?.city && <div>{formerrors.city}</div>}</div>
                        </div>
                        <div className="form-group">
                            <label>Pincode</label>
                            <input type="text" className="form-control" name="pincode" />
                            <div className="form-error">{formerrors?.pincode && <div>{formerrors.pincode}</div>}</div>
                        </div>
                        
                    </form>
                    <button className="btn btn-primary" onClick={continuebtn}>Continue</button>
                </div > 
            </div >
                
           
        
</div>)
}
export default connect(function(state,props){
   
})(Address)