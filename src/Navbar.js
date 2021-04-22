import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import { useState } from "react";
import {connect} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignOutAlt, faSearch , faSignInAlt} from '@fortawesome/free-solid-svg-icons';


const buttonstyle = {
    background: "transparent",
    boxShadow: "0px 0px 0px transparent",
    border: "0px solid transparent",
    textShadow: "0px 0px 0px transparent",
    margin:"8px"
  };
function Navbar(props){
    console.log(props);
    var count = 0;
    let [searchText,setSearchText] = useState([])
    let search = function (event) {
        count++;
        event.preventDefault();
        alert(count);
    }  

    let getSearchText= (event)=>{
        setSearchText(
            searchText = event.target.value

        )
    }
    let logout= (event)=>{
        event.preventDefault()
        props.dispatch({
            type:"LOGOUT",
        })
    }
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"><a className="navbar-brand">My cakeshop</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" >Action</a>
                    <a className="dropdown-item" >Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" >Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled"  tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={getSearchText}></input>
                <Link to={"/search?query="+searchText}><button type="submit" style={buttonstyle}><FontAwesomeIcon icon={faSearch}/></button></Link>
                {props.loginStatus && <Link to={"/cart"}><button style={buttonstyle}><FontAwesomeIcon icon={ faShoppingCart }/></button></Link>}
                {props.loginStatus ? <div><button onClick={logout} style={buttonstyle}><FontAwesomeIcon icon={faSignOutAlt}/></button></div> :
                <Link to="/login"><div><button style={buttonstyle}><FontAwesomeIcon icon={faSignInAlt}/></button></div></Link>}
                </form>
            </div>
        </nav>
        </div>
    )
}

export default connect(function(state,props){
    return {
        user: state?.user?.name,
        loginStatus: state?.isLogin

    }
})(Navbar)