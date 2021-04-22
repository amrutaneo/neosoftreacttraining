import {Component} from "react";
import axios from "axios";

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
    validate = (elements)=>{
        
        var errors = {}
      
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!elements.email.value){
            errors.email = "Email is required"
        } else if (!pattern.test(elements.email.value)) {
            errors.email = "Please enter valid email address.";
        }
        if(!elements.password.value){
            errors.password = "Password is required"
        }
        if(!elements.name.value){
            errors.name= "Name is required"
        }
        var errorkeys = Object.keys(errors)
        
        if(errorkeys.length > 0)
        return errors
        else
        return false
    } 

    register =() =>{
        var form = document.getElementById("signupForm")
        var errors = this.validate(form.elements)
        if(errors){
        
            this.setState({
                formerrors:  errors
            })

        }else {
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
                <form id="signupForm">
                <button style={navbutton}>Signup</button>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" onChange={this.getEmail}/>
                    <div className="form-error">{this.state.formerrors?.email && <div>{this.state.formerrors.email}</div>}</div>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" onChange={this.getName}/>
                    <div className="form-error">{this.state.formerrors?.name && <div>{this.state.formerrors.name}</div>}</div>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" onChange={this.getPassword}/>
                    <div className="form-error">{this.state.formerrors?.password && <div>{this.state.formerrors.password}</div>}</div>
                </div>
                <div style={{color:"red"}}>
                    {this.state.errorMessage}
                </div>
                </form>
                <button style={buttonstyle1} onClick={this.register}>Register</button>
               
            {/* Hii user {this.state.onlineUsers}
            <input onChange={this.getEmail}></input>
            <button onClick={this.goOnline}>Go online</button> */}

            </div>
        )
    }

} 

export default Signup;