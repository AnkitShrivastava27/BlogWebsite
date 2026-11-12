import React from 'react';
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
      <button
        type="button"
        onClick={handleLogout}
        style={{ background: 'none', border: 'none', padding: 0, textDecoration: 'none', color: 'brown', marginTop: '10px', cursor: 'pointer' }}
        className="text-button"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
