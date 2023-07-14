import React from 'react'
import './Banner.css'
import Stats from './Stats/Stats'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
const Banner = () => {
  return (
    <div className='banner'>
      <div className='title'>
        Elevate Your Workout
      </div>
      {/* banner content */}
      <div className='banner_content'>
        <div className='stats'>
          <Stats />
        </div>
        {/* image */}
        <div className='banner_image'>
          <img
            className='image'
            src='https://www.pngarts.com/files/6/Male-Fitness-PNG-Transparent-Image.png'
            alt=''
          />
          <img
            className='image'
            src='https://www.pngarts.com/files/6/Female-Fitness-Transparent-Image.png'
            alt=''
          />
        </div>
        {/* right-side pane content */}
        <div>
          <div className='quote'>
            Every day is another chance to get stronger, to eat better, to live healthier, and to be the best version of you.
          </div>
          <div className='arrow'>
            <KeyboardDoubleArrowDownIcon fontSize='large' />
          </div>
          <div>
            <button>
              Join Now
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Banner