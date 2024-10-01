import {React} from 'react'
import { FaFacebookF,FaInstagram,FaLinkedinIn } from 'react-icons/fa'
import { logo } from '../../Assets/index'

const Futter = () => {
 
  return (
    <section
    id='testi'>
    <div className='w-full py-20 h-auto border-b-[1px] border-black grid grid-cols-1 md:grid-cols-4 lgl:grid-col-4 gap-8 '>
      <div className='w-full h-full' >
        <img src={logo} alt='Logo' style={{ height: 110, width: 170 }}></img>
       <div className='flex gap-5 py-5'>
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
      <div className='w-full h-full'>
        <h3 className='text-xl uppercase text-designColor tracking-wider'>
            Quick Links                                 
        </h3>
         <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
        <a href='google.com' target='-blank'>
             <li >
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Home
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
            </li>
             </a>
            <a href='google.com' target='-blank'> 
              <li>
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Project
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
             
            </li> </a>
            <a href='google.com'> <li>
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Skills
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
             
            </li> </a>
            <a href='google.com'> <li>
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Resume
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
             
            </li> </a>
            <a href='google.com'> <li>
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Contect
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
             
            </li> </a>
        </ul> 
        {/*{
           show && (
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
           )}*/}
      </div>
      <div className='w-full h-full'>
      <h3 className='text-xl uppercase text-designColor tracking-wider'>
            Developers                                
        </h3>
        <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
        <a href='https://www.geeksforgeeks.org/front-end-development/'> <li>
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Front-End Development
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
             
            </li> </a>
            <a href='https://www.geeksforgeeks.org/back-end-developer-roadmap/'> <li>
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Back-End Development
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
             
            </li> </a>
            <a href='https://www.javatpoint.com/dbms-tutorial'> <li>
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Database Management
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
             
            </li> </a>
            <a href='https://www.geeksforgeeks.org/web-design/'> <li>
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Web Design
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
             
            </li> </a>
            <a href='https://www.ibm.com/topics/data-science'> <li>
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Data Science
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
             
            </li> </a>
        </ul>
      </div>
      <div className='w-full h-full'>
      <h3 className='text-xl uppercase text-designColor tracking-wider'>
      Services                                 
        </h3>
        <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
        <a href='https://en.wikipedia.org/wiki/Blog'> <li>
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Blogs
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
             
            </li> </a>
            <a href='https://en.wikipedia.org/wiki/Advertising_agency'> <li>
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Advertisment
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
             
            </li> </a>
            <a href='https://en.wikipedia.org/wiki/Digital_marketing'> <li>
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Digital Marketing
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
             
            </li> </a>
            <a href='https://www.facebook.com/pages/create/?ref_type=site_footer'> <li>
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Facebook Page
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
             
            </li> </a>
            <a href='https://en.wikipedia.org/wiki/Social_networking_service'> <li>
                <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer '>Social Network
                <span className='absolute has-[1px] w-full inline-flex bg bg-designColor -bottom-1 left-0 -translate-x-[100px%]: group-hover:translate-x-0 transition-transform duration-300'>
                </span>
                </span> 
             
            </li> </a>
        </ul>
      </div>
    </div>
    </section>
  )
}

export default Futter
