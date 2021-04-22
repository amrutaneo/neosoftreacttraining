import axios from "axios";
import { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {connect} from "react-redux"

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
    width:"660px",
    marginTop:"30px",
    marginBottom:"30px"
   
  }

function ForgotPassword(props){
   
    var [formerrors,setFormerrors]=useState({})
   
    let [user,setUser] = useState([])

    useEffect(()=>{
       if(localStorage.token && localStorage.email){
           props.history.push("/")
       }
    },[])

    let getEmail= (event)=>{
        setUser({
            ...user,
            email:event.target.value

        })
    }
    
    var validate = function(elements){
        console.log("elements",)
        var errors = {}
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!elements.email.value){
            errors.email = "Email is required"
        } else if (!pattern.test(elements.email.value)) {
            errors.email = "Please enter valid email address.";
        }
        var errorkeys = Object.keys(errors)
        console.log("keys",errorkeys)
        if(errorkeys.length > 0)
        return errors
        else
        return false
    } 

    let forgotPassword = function(){
        
        var form = document.getElementById("form")
        var errors = validate(form.elements)
        if(errors){
            setFormerrors(errors)
        } else {
            setFormerrors({})
            let loginurl = "https://apibyashu.herokuapp.com/api/recoverpassword"
            axios({
                url:loginurl,
                method:"post",
                data:user
            }).then((response)=>{
                alert(response.data.message)
                
            },(error)=>{
                console.log("Error from forgot password Api",error)
            })
        }
    }
    
    return (
        <div style={{width:"50%",margin:"auto"}}>
            <form id="form">
                <button style={navbutton}>Forgot Password</button>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" onChange={getEmail}/>
                    <div className="form-error">{formerrors?.email && <div>{formerrors.email}</div>}</div>
                </div>
            </form>
            <button style={buttonstyle1} onClick={forgotPassword}>Forgot Password</button>
            
        {/* Hii user {this.state.onlineUsers}
        <input onChange={this.getEmail}></input>
        <button onClick={this.goOnline}>Go online</button> */}

        </div>
    )
    
} 

export default connect()(withRouter(ForgotPassword))