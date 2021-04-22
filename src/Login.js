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

function Login(props){
   
    var [formerrors,setFormerrors]=useState({})
    console.log(">>>>>>>>>props of login",props)
    let [user,setUser] = useState([])

    useEffect(()=>{
       if(localStorage.token && localStorage.email){
           props.history.push("/")
       }
    },[])

   

    var [loginstatus,setloginStatus] = useState(false)
    let getEmail= (event)=>{
        setUser({
            ...user,
            email:event.target.value

        })
    }
    let getPassword= (event)=>{
        setUser({
            ...user,
            password:event.target.value

        })
    }
    var validate = function(elements){
        console.log("elements",)
        var errors = {}
        if(!elements.email.value){
            errors.email = "Email is required"
        } 
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(elements.email.value)) {
            errors.email = "Please enter valid email address.";
        }
        if(!elements.password.value){
            errors.password = "Password is required"
        }
        var errorkeys = Object.keys(errors)
        console.log("keys",errorkeys)
        if(errorkeys.length > 0)
        return errors
        else
        return false
    }
    let login = function(){
        
        var form = document.getElementById("loginForm")
        var errors = validate(form.elements)
        if(errors){
            setFormerrors(errors)
        } else {
            setFormerrors({})
            let loginurl = "https://apibyashu.herokuapp.com/api/login"
            axios({
                url:loginurl,
                method:"post",
                data:user
            }).then((response)=>{
                console.log("Response from login Api",response.data)
                // setloginStatus(true)
                if(response.data.token){
                    localStorage.token = response.data.token
                    localStorage.email = response.data.email
                    // props.loginDone(user)
                    props.dispatch({
                        type:"LOGIN",
                        payload:response.data
                    })
                    // sessionStorage.setItem('token', JSON.stringify(userToken));
                    props.history.push("/")
                } else {
                    alert("Invalid Credendials")
                }
            },(error)=>{
                console.log("Error from login Api",error)
            })
        }
    }
    
    return (
        <div style={{width:"50%",margin:"auto"}}>
            <form id="loginForm">
            <button style={navbutton}>Login</button>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name="email" onChange={getEmail}/>
                <div className="form-error">{formerrors?.email && <div>{formerrors.email}</div>}</div>
            </div>
            
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" onChange={getPassword}/>
                <div className="form-error">{formerrors?.password && <div>{formerrors.password}</div>}</div>
            </div>
            <div style={{color:"red"}}>
                
            </div>
            <div style={{float:"right"}}>
            <Link to="/forgot-password">Forgot password ?</Link>
            </div>
            <div>
            <Link to="/Signup">New user? Click here</Link>
            </div>
            </form>
            <button style={buttonstyle1} onClick={login}>Login</button>
            
        {/* Hii user {this.state.onlineUsers}
        <input onChange={this.getEmail}></input>
        <button onClick={this.goOnline}>Go online</button> */}

        </div>
    )
    
} 

Login = withRouter(Login)
export default connect()(Login)