import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/wRIGHTISTs_transparent.png';
//import Logout from "./Logout";
//import Cookies from 'js-cookie';

const Navbar = () => {
  //const usernameFromCookie = Cookies.get('username');

  return (
    <div>  
      <ul className='navar' >
        <li><Link to="/" style={{textDecoration:'none', color:'brown'}}>Home</Link></li>
        <li><Link to="/profile"  style={{textDecoration:'none', color:'brown'}}>Profile</Link></li>
        <li className="login"><Link to="/login" style={{textDecoration:'none', color:'brown'}}>Login/signup</Link></li>
       
        <li><img src={logo} alt='logo' className="logo" /></li>
      </ul>
    </div>
  );
}

export default Navbar;
