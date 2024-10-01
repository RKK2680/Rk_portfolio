import React from 'react'
import { bannerimg  } from '../../Assets/index';
const RightBanner = () => {
  return (
    
       <div className='w-full lgl:1/2 flex justify-center items-center relative'>
            <img className='w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 '
            src={ bannerimg} alt='bannerimg'/>
            <div className='absolute bottom-0 w-[500px] h-[500px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r
            from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center ' />
            </div>
   
  )
}

export default RightBanner
