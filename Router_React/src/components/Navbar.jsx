import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='mainNav'> 
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink> 
        <NavLink to="/History">History</NavLink>
        <NavLink to="/Member">Member</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
