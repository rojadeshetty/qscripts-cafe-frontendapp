import React from 'react'
import { Link } from 'react-router-dom'

function TopNavigation() {
  return (
    <nav>
        <Link to="/" className='navLink'>Home</Link>
        <Link to="/AboutUs" className='navLink'>AboutUs</Link>
        <Link to="/Menu" className='navLink'>Menu</Link>
        <Link to="/ContactUs" className='navLink'>ContactUs</Link>
    </nav>
  )
}

export default TopNavigation