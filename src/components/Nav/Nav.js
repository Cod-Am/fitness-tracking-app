import React from 'react'
import Navrow from './Nav-row/Navrow'
import './Nav.css'
const Nav = () => {
  return (
    <div className='Nav'>
        <div className='gym_name'>
            The Fit Factory
        </div>
        {/* Navigation Row */}
        <div className='navbar'>
            <Navrow />
        </div>
    </div>
  )
}

export default Nav