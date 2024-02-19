import './Navbar.css'
import React from "react";
import team from './images/teamicon-removebg-preview.png'
import logo from './images/logo.png'
import home from './images/homeicon-removebg-preview.png';
import contact from './images/contacticon-removebg-preview.png'
import eventGallery from './images/eventicon-removebg-preview.png'

function Navbar(){
  
  
  return( 
      <div id= 'homeP' className="main">
        <div className="navbar">
          <ul>
            <li><img className='homelogo pic' src={home} alt="" /><p>Home</p></li>
            <li><img className='teamlogo pic' src={team} alt="" /><p>Team</p></li>
            <li><img className='contactlogo pic' src={contact} alt="" /><p>Contact Us</p></li>
            <li><img className='eventlogo pic' src={eventGallery} alt="" /><p>Event Gallery</p></li>
          </ul>
        </div>       
      </div>

  )
}


export default Navbar