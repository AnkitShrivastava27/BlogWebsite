import React from 'react';
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login';
import Signup from './components/SignupPage';
import './App.css';
import Navbar from './components/Navbar';
import Scifi from './components/Scifi';
import All from './components/All';
import New from './components/New';
import Logout from './components/Logout';
import Science from './components/Science';
import Political from './components/Political';
import Sport from './components/Sport';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className='body'>
         <Navbar/>
        
        <Routes>
          
          <Route path='/' element={< Home/>} >
          <Route path=''  element={<All/>}/>
          <Route path='scifi' element={<Scifi/>}/>
          <Route path='science' element={<Science/>}/>
          <Route path='political' element={<Political/>}/>
          <Route path='sport' element={<Sport/>}/>
          <Route path='new' element={<New/>}/>
          <Route path='about' element={<AboutUs/>}/>
          <Route path='contact' element={<ContactUs/>}/>
          </Route>
          <Route path="/profile" element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/logout' element={<Logout/>}/>
         
          
        </Routes>
     
      
    </div>
  );
}

export default App;
