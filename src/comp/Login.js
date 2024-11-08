import React from 'react'
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
    <div>

<div className='navb'>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/Lunch'>Lunch </NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
<h1>Login page her</h1>
    </div>

    
  )
}

export default Login