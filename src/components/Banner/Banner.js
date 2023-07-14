import React from 'react'
import './Banner.css'
import Stats from './Stats/Stats'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
const Banner = () => {
  return (
    <div className='banner bg-gradient'>
      <div className='title '>
        Elevate Your Workout
      </div>
      {/* banner content */}
      <div className='banner_content '>
        <div className='stats'>
          <Stats />
        </div>
        {/* image */}
        <div className='banner_image '>
          <img
            className='image'
            src='https://th.bing.com/th/id/R.ad94d5779e703eece77d7bf85cc7cb8c?rik=RzDrK%2bgfLnrR9w&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2018%2f04%2fFitness-PNG-Picture.png&ehk=FNYHlFoY3ehXUM3L8I8ev2VQooDkje9YrcUr7ZKqOJA%3d&risl=&pid=ImgRaw&r=0'
            alt=''
          />
        </div>
        {/* right-side pane content */}
        <div className='right_content'>
          {/* quote */}
          <div className='quote'>
            Every day is another chance to get stronger, to eat better, to live healthier, and to be the best version of you.
          </div>
          {/* icon */}
          <div className='arrow_icon'>
            <KeyboardDoubleArrowDownIcon fontSize='large' />
          </div>
          {/* botton */}
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