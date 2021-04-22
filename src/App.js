
import './App.css';
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Signup from "./Signup";
import Login from "./Login";
import Search from "./Search";
import CakeDetails from "./CakeDetails"
import Cart from './Cart'
import Checkout from './Checkout'
import ForgotPassword from "./ForgotPassword"

import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import {connect} from "react-redux"


function App(props) {
  // var [user,setUser] = useState()
  // var [loginstatus,setloginStatus] = useState(false)
  useEffect(() => {
    if(localStorage.token && !props.user){
      var token = localStorage.token
      let url = "https://apibyashu.herokuapp.com/api/getuserdetails"
          axios({
              url:url,
              method:"get",
              headers:{
                authtoken:token
              }
          }).then((response)=>{
              console.log("Response from login Api",response.data)
              // setloginStatus(true)
              props.dispatch({
                type:"SET_USER",
                payload:response.data.data
            })
          },(error)=>{
              console.log("Error from login Api",error)
          })
    }
  }, []);

  // function loginDone(data) {
  //   // alert("here")
  //   setUser(data)
  //   setloginStatus(true)
  // }
  return (
    <div>
    
    <Router>
    <Navbar />
    <div>
      {/* 
      <Login/>
      <Search />
      <Signup/>
      <Home />
      <Search /> */}
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact ><Login/></Route>
      <Route path="/signup" exact component={Signup} />
      <Route path="/search" exact component={Search} />
      <Route path="/cake/:cakeid" exact component={CakeDetails} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/forgot-password" component={ForgotPassword} />

      <Route path="/*" >
        <Redirect to="/" ></Redirect>
      </Route>
      </Switch>

    </div>
    </Router>
    </div>
  );
}

export default connect(function(state,props){
  return {
      user: state?.user
  }
})(App);
