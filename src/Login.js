import axios from "axios";
import { useEffect, useState } from "react";

function Login(){
    let [user,setUser] = useState([])
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
            <button class="btn btn-primary" onClick={login}>Login</button>
            
        {/* Hii user {this.state.onlineUsers}
        <input onChange={this.getEmail}></input>
        <button onClick={this.goOnline}>Go online</button> */}

        </div>
    )
    
} 

export default Login;