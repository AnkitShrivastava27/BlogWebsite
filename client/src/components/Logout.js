import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    Cookies.remove('username');

   
    navigate('/login');
  };

  return (
    <div className="text-center">
      <a onClick={handleLogout} href='#' style={{textDecoration:'none', color:'brown' , marginTop:'10px'}} className="text-button">
        Logout
      </a>
    </div>
  );
}

export default Logout;
