import React from 'react'
import Nike from './JORDAN.png'

import { NavLink, Outlet } from 'react-router-dom'

const Lunch = () => {
  return (
    <>
    <div className='nested'>

     <NavLink to='/LunchIndex'>LunchIndex</NavLink>
     
    </div>
    <img src={Nike} alt="" width={400} />

     
     <Outlet/>
     </>
  )
}

export default Lunch