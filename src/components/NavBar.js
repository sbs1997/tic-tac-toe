import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <p>
        <NavLink to={"/"} exact className='navLink'>Game</NavLink>
        <NavLink to={"/about"} exact className='navLink'>About</NavLink>
    </p>
  )
}

export default NavBar