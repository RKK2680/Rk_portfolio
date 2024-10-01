import React from 'react'
import Layout from "../Layout/Layout"
import ProjectCard from './ProjectCard'
import { P1,P2,P3,P4,P5,P6  } from '../../Assets/index';
const Project = () => {
  return (
    <section
    id='project'
    className='w-full py-20 border-b-[1px] border-b-black '>
    <div className='flex justify-center item-center contect-center text-center'>
    <Layout
    title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK'
    des='My Projects'
    />
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectCard 
        title="University Management System"
        des="University  Management  System  is  a  clever,  versatile,  and  cost-effective  solution  for universities, colleges, and schools. It's a whole end-to-end system that takes care of every detail of a university workflow, which is exactly what we needed Useing Technology Java Swing , MySQL Database and Tomcate Server."
        src={P1}/>
        <ProjectCard 
        title="Just In (Social Media Website )"
        des="Social Media App is a fully-featured social media web application, built with the MERN stack.Create, read, update and delete posts Like and unlike posts. Sign up and login using JWT for authentication. Private message users in real-time using socket.io"
        src={P2}/>
        <ProjectCard
        title="E Book Store System "
        des="E Book Store  System  is  a  clever,  versatile,  and  cost-effective  solution  for universities, colleges, and schools. It's a whole end-to-end system that takes care of every detail of a Study workflow, which is exactly what we needed Useing Technology Java Web ,JSP , Servlet , MySQL Database and Tomcate Server."
        src={P3}/>
        <ProjectCard
        title="Logical Infity "
        des="Logical Infity Web Site to use Mathmatical Opretion .It's a whole end-to-end system that takes care of every detail of a Real time Study workflow, which is exactly what we needed Useing Technology Java , Html Css Js  ,JSP , Servlet , MySQL Database and Tomcate Server."
        src={P4}/>
        <ProjectCard 
        title="Coching Management System (CMS)"
        des="Coching Management System (CMS) Web Site to use Provide different Study Envirments .It's a whole end-to-end system that takes care of every detail of a Real time Study workflow, which is exactly what we needed Useing Technology Java , Html Css Js  ,JSP , Servlet , MySQL Database and Tomcate Server."
        src={P5}/>
        <ProjectCard
        title="Quiz Game"
        des=" Quiz Game Web site its helpfull to your increese the Knowlage.which is exactly what we needed Useing Technology Java , Html Css Js  ,JSP , Servlet , MySQL Database and Tomcate Server."
        src={P6}/>
    </div>
    </section>
  )
}

export default Project
