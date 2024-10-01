import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaReact } from 'react-icons/fa';
import { SiJavascript,SiC, } from 'react-icons/si';

const Leftbanner = () => {
    const [text] = useTypewriter({
        words: ["Web Developer.", "Full Stack Developer.", "App Developer", "React Developer", "UI/UX Designer", "Front End Developer"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className='w-full lgl:1/2 flex flex-col gap-20' >
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY PROGRAMMING WORLD</h4>
                <h1 className='text-6xl font-bold text-white ' style={{ fontSize: "50px" }}>

                    Hi, I'm {" "}
                    <span className='text-designColor capitalize'>Ram Kumar Kashyap</span>
                </h1>
                <h2 className='text-4xl font-bold text-yello' style={{ fontSize: "40px" }}>
                    <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor='#ff014f'
                    />
                </h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>
                    My name is Ram Kumar Kashyap I'm from Lucknow UP. I'm a 24-year-old. I have graduated with a Bachelor of Computer Applications from Era University Lucknow.
                    My technical skills are in C, MYSQL, Java, HTML, CSS, and JavaScript, and also familiar with JSP and Servlet etc.
                    My strengths are self-motivation and hard work.
                    My hobbies are playing PC Games, Traveling, and solving programming.
                </p>
            </div>
            <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        Find Me In
                    </h2>
                    <div className='flex gap-4'>
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
                <div>
                    <h2 className='text-base uppercase font-titltFont mb-4'>
                        My Skills
                    </h2>
                    <div className='flex gap-4'>
                        <a href='https://react.dev/learn'>
                         <span className='baner'>
                            <FaReact />
                        </span>
                        </a>
                        <a href='https://www.javatpoint.com/javascript-tutorial'>
                        <span className='baner'>
                            <SiJavascript />
                        </span>
                        </a>
                        <a href='https://www.geeksforgeeks.org/c-programming-language//'>
                        <span className='baner'>
                            <SiC />
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftbanner
