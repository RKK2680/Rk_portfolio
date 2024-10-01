import {React,useState}from 'react'
import { logo } from '../../Assets/index'
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { navbarlink } from '../../Constent';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-scroll';
const Navbar = () => {
   const [show, setShow] = useState(false);

  return (

    <div className='sticky top-0 z-50 bg-bodyColor w-full h-40 mx-auto flex justify-between items-center font-titleFont border-b-[2px] border-b-gray-600'>

      <div >
        <img src={logo} alt='Logo' style={{ height: 110, width: 170 }}></img>
      </div>
      <div>
        <ul className='hidden mdl:inline-flex items-center gap-4 lgl:gap-10'>
          {
            navbarlink.map(({ _id, Title, link }) => (
              <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration=300'
                key={_id}>

                <Link activeClass='active' to={link} spy={true} smooth={true} offset={-70} duration={500}>
                  {Title}
                </Link>
              </li>
            ))
          }
        </ul>
        <span  onClick={()=>setShow(!show)} 
         className='text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer' >
          <FiMenu/>
          </span>
          {
           show && (
            <div className ="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide" >
              <div className='flex flex-col gap-8 py-2 relative'>
              
                <div>

                  <img className='w-32' src={logo} alt='logo'/>
                  <p className='text-sm text-gray-400 mt-2'>
                  My name is Ram Kumar Kashyap I'm from Lucknow UP. I'm a 24-year-old. I have graduated with a Bachelor of Computer Applications from Era University Lucknow.
                  My technical skills are in C, MYSQL, Java, HTML, CSS, and JavaScript, and also familiar with JSP and Servlet etc.
                  My strengths are self-motivation and hard work.
                  My hobbies are playing PC Games, Traveling, and solving programming.
    
                  </p>
                 </div>
                 <ul className='flex flex-col gap-4'>
                  {
                    navbarlink.map((item) => (
                      <li key={item._id}  
                      className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'>
                        <Link
                        onClick={()=>setShow(false)}
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        {item.Title}
                        </Link>
                        </li>
                    ))
                  }
                 </ul>
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
              <span 
               onClick={()=>setShow(false)}
               className ="absolute top-4 right-5 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer">
                 <MdClose/>
               </span>
              </div>
               
           )}
      </div>
    </div>
  )
}

export default Navbar
