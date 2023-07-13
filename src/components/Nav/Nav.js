import React from 'react'
import Navrow from './Nav-row/Navrow'
import './Nav.css'
const Nav = () => {
  return (
    <div className='Nav'>
        <div>
            The Fit Factory
        </div>
        {/* Navigation Row */}
        <div>
            <Navrow />
        </div>
    </div>
  )
}

export default Nav