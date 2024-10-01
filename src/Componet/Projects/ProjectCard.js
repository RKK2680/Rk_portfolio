import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
const ProjectCard = ({title,des,src}) => {
  return (
    <div className='w-full p-4 h-auto xl:px-12 xl:py-10 rounded-lg shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#ffeb3b] 
    group hover:bg-gradient-to-b hover:from-gray-900 hover:to-[#4caf50] transition-colors duration-1000 group '>
      <div className='w-full h-[80%] overflow-y-hidden rounded-lg group hover:scale-110 duration-300 cursor-pointer'>
        <img src={src} alt='src'/>
      </div>
      <div className='w-full mt-5 flex flex-col gap-6'>
        <div className='flex item-center justify-between text-designColor font-bold font-size-20px'>
            <h3  >
            {title}
            </h3>
            <div className='flex gap-3 '>
                <a href='https://github.com/'>
                <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center 
                text-gray-400 hover:text-designColor duration-300 cursor-pointer'> 
                <BsGithub/>
                </span>
                </a>
                <a href='https://github.com/'>
                <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center 
                text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
                <FaGlobe/>
                </span>
                </a>
            </div>
        </div>
        <div>
            {des}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
