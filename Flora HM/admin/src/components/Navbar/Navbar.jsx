import React from 'react'
import './Navbar.css'
import navprofile from "../../assets/profile-pic.svg"
import dropdown from "../../assets/dropdown_icon.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>FLORA</h1>
      <div className="image">
      <img className='nav-profile' src={navprofile} alt="" />
      <img src={dropdown} alt="" />
      </div>
      
    </div>
  )
}

export default Navbar
