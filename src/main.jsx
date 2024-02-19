import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import './index.css'
import AboutUs from './AboutUs.jsx'
import Footer from './Footer.jsx'
import FrontPage from './FrontPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar/>
    {/* <FrontPage/> */}
    <AboutUs/>
    <Footer/> 


    
  </>

)
