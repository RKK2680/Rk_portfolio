import React from 'react'
import Layout from '../Layout/Layout'
import Card from './Card'
import { LuWallpaper } from "react-icons/lu";
import { TfiBasketball } from "react-icons/tfi";
import { PiWallFill } from "react-icons/pi";
import { FaWordpress } from "react-icons/fa";
import { TbDeviceImacSearch } from "react-icons/tb";
import { BsClipboardDataFill } from "react-icons/bs";
const Fechars = () => {
  return (
   <section id='about' 
   className='w-full py-10  border-b-[1px] border-b-black'>
<Layout title= "Features" des="What I Do"/>
<div className=' grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-20'>
  <Card 
  title="Web Developer" 
  des="Web developer intern with experience in Java,JSP,Servlet,Spring Boot, HTML CSS JS , and React. Passionate about web development and excited to learn more. Skilled in problem solving and working independently. Developed and maintained web applications using Java, JavaScript, HTML5, CSS3, MySQL database etc."
  icon ={<TfiBasketball size = '80px' /> }/>
  <Card 
  title="Front End Developer " 
  des="Front End developer intern with experience in React,Anguler, HTML CSS JS , and JSP. Passionate about Front End development and excited to learn more. Skilled in problem solving and working independently. Developed and maintained web applications using React,typescript,Mongodb, JavaScript, HTML5, CSS3, MySQL database etc."
  icon ={<LuWallpaper size = '80px' /> }/>
  <Card 
  title="Full Stack Developer" 
  des="Full Stack developer intern with experience in Java, CRUD API , Postmsn, Github, JSP, Servlet, Spring Boot, MySql Server & Database Like Eclips , VS Code . Passionate about web & App development and excited to learn more. Skilled in problem solving and working independently. Developed and maintained web applications using Java, CRUD API , Postmsn, Github, JSP, Servlet, Spring Boot, MySql Server & Database etc."
  icon ={<PiWallFill size = '80px'  /> }/>
  <Card 
  title="Blog Creater & Static Web Page Devloper" 
  des="Blog Creater & Static Web Page developer intern with experience in Wordpress , HTML CSS JS , and React. Passionate about WordPress development and excited to learn more. Skilled in problem solving and working independently. Developed and maintained web applications using WordPress, JavaScript, HTML5, CSS3 etc."
  icon ={<FaWordpress  size = '80px'/> }/>
  <Card 
  title="Search Engine Optimization" 
  des="Making your content search-friendly matters because it's how you get more relevant users viewing your content. This is called search engine optimization (SEO), which can result in more interested users coming to your site. If Google Search has trouble understanding your page, you're possibly missing out on an important source of traffic. This guide covers what developers can do to make sure that their sites work well with Google Search. In addition to the items in this guide, make sure that your site is secure, fast, accessible to all, and works on all devices."
  icon ={<TbDeviceImacSearch size = '80px'/> }/>
  <Card 
  title="Data Analyst" 
  des="Data analysts translate numbers and data into information that can be used to solve problems or track business. They use data analysis to produce accessible graphs, charts, tables and reports. using Python, Excel, PowerPoint, MySQL database etc."
  icon ={<BsClipboardDataFill size = '80px'/> }/>
</div>
   </section>
  )
}

export default Fechars
 