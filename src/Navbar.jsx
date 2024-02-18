import './Navbar.css'
import React from "react";
import team from './images/teamicon-removebg-preview.png'
import logo from './images/logo.png'
import home from './images/homeicon-removebg-preview.png';
import contact from './images/contacticon-removebg-preview.png'
import eventGallery from './images/eventicon-removebg-preview.png'

function Navbar(){
  
  
  return( 
    <>

      <div id= 'homeP' className="main">
        <div className="navbar">
          <ul>
            <li><img className='homelogo pic' src={home} alt="" /><p>Home</p></li>
            <li><img className='teamlogo pic' src={team} alt="" /><p>Team</p></li>
            <li><img className='contactlogo pic' src={contact} alt="" /><p>Contact Us</p></li>
            <li><img className='eventlogo pic' src={eventGallery} alt="" /><p>Event Gallery</p></li>
          </ul>
        </div>
        
        <div className="container">
          <div className="hash">
            <h3>#ChaosInCalm</h3>
          </div>
          <div className="logo" >
              <img src={logo} alt="DJS NOVA logo" />
          </div>
              <h1 className='subtitle'>The official Astronomy and Astrophysics club of DJSCE</h1>
        </div>
        
      </div>
      

    </>
  )
}


export default Navbar