import {Component} from "react";
import axios from "axios";

class Signup extends Component{
    constructor() {
        super()
        this.state = {
            onlineUsers:0
        }
    }
    user = {} 

   

    getEmail = (event)=>{
        console.log("event is",event.target.value)
        this.user.email = event.target.value
    }
    getName = (event)=>{
        this.user.name = event.target.value
    }
    getPassword = (event)=>{
        this.user.password = event.target.value
    }

    goOnline = ()=>{
        this.setState ({
            onlineUsers : this.state.onlineUsers+1
        })
    } 

    register =() =>{
        if(!this.user.email || !this.user.password || !this.user.name){
            this.setState({
                errorMessage:"Please enter details"
            })

        } else {
            let apiurl = "https://apibyashu.herokuapp.com/api/register"
            axios({
                url:apiurl,
                method:"POST",
                data:this.user
            })
            // this.setState({
            //     errorMessage:null
            // })

        }
        console.log('---User Details--',this.user)

    }

    render() {
        return (
            <div style={{width:"50%",margin:"auto"}}>
               
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" onChange={this.getEmail}/>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" onChange={this.getName}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={this.getPassword}/>
                </div>
                <div style={{color:"red"}}>
                    {this.state.errorMessage}
                </div>
                <button class="btn btn-primary" onClick={this.register}>Register</button>
               
            {/* Hii user {this.state.onlineUsers}
            <input onChange={this.getEmail}></input>
            <button onClick={this.goOnline}>Go online</button> */}

            </div>
        )
    }

} 

export default Signup;