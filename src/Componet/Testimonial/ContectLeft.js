import React from 'react'
import { contect } from '../../Assets/index'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const ContectLeft = () => {
  return (
    
      <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-4 justify-center'> 
             
             <img className='w-full h-64 object-cover rounded-lg mb-2' 
              src={contect} alt='contect'/>
           <div className='flex flex-col gap-4'> 
             <h2 className='text-3xl font-bold text-white'> Ram kumar kashyap</h2>
             <p>Full Stack Developer </p>
             <p className='text-base text-gray-400 flex items-center gap-2'>
               Phone: <span className='text-bold text-white'>+91 8009992680</span>
               <span className='text-bold text-white'>+91 8707678331</span>
             </p>
             <p className='text-base text-gray-400 flex items-center gap-2'>
               Email:{" "} 
               <span className='text-bold text-white'> ramkumarkashyap57@gmail.com</span>
             </p>
           </div>
           <div className='flex flex-col gap-4 '>
             <h2 className='text-base uppercase font-titleFont mb-4'>
               Find me in
               </h2>
               <div className='flex gap-5'>
                <a href='https://www.facebook.com/'>
                <span className='baner'  >
                   <FaFacebookF /> 
                 </span>
                 </a>
                 <a href='https://www.linkedin.com/in/ramkumar-kashyap-736099216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                 <span className='baner'>
                   <FaLinkedinIn/>
                 </span>
                 </a>
                 <a href='https://www.instagram.com/ramkumarkashyap57?utm_source=qr&igsh=NWhsOGhzZmhyaDM2'>
                 <span className='baner'>
                   <FaInstagram />
                 </span>
                 </a>
               </div>
           </div>
     </div> 
    
  )
}

export default ContectLeft
