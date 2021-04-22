import {useState} from "react"
import { useSelector } from "react-redux"

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
    float:"right"
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
    width:"640px",
    marginLeft:"10px",
    marginBottom:"20px"
  }

function Address() {
    var [formerrors,setFormerrors]=useState({})
    var validate = function(elements){
        console.log("elements",)
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
        console.log("keys",errorkeys)
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
            alert("Form validated successfully")
        }
       
    }
    return (
        <div >
            <div className="row" >
                <div className="col-md-12">
                    <button style={navbutton}>Add address</button>
                    <form id="addressForm" className="container">
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" name="name" onChange={continuebtn}/>
                            <div className="form-error">{formerrors?.name && <div>{formerrors.name}</div>}</div>
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" className="form-control" name="phone" onChange={continuebtn}/>
                            <div className="form-error">{formerrors?.phone && <div>{formerrors.phone}</div>}</div>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" name="address" onChange={continuebtn}/>
                            <div className="form-error">{formerrors?.address && <div>{formerrors.address}</div>}</div>
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control" name="city" onChange={continuebtn
            }/>
                            <div className="form-error">{formerrors?.city && <div>{formerrors.city}</div>}</div>
                        </div>
                        <div className="form-group">
                            <label>Pincode</label>
                            <input type="text" className="form-control" name="pincode" onChange={continuebtn
            }/>
                            <div className="form-error">{formerrors?.pincode && <div>{formerrors.pincode}</div>}</div>
                        </div>
                        
                    </form>
                
                </div > 
            </div >
                
            <button style={buttonstyle1} onClick={continuebtn}>Continue</button>
        
    </div>)
}

export default Address