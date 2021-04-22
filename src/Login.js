import axios from "axios";
import { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {connect} from "react-redux"

function Login(props){
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
    let login = function(){
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
    
    return (
        <div style={{width:"50%",margin:"auto"}}>
            
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" onChange={getEmail}/>
            </div>
            
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" onChange={getPassword}/>
            </div>
            <div style={{color:"red"}}>
                
            </div>
            <div style={{float:"right"}}>
            <Link to="/Forgot">Forgot password ?</Link>
            </div>
            <div>
            <Link to="/Signup">New user? Click here</Link>
            </div>
            <button class="btn btn-primary" onClick={login}>Login</button>
            
        {/* Hii user {this.state.onlineUsers}
        <input onChange={this.getEmail}></input>
        <button onClick={this.goOnline}>Go online</button> */}

        </div>
    )
    
} 

Login = withRouter(Login)
export default connect()(Login)