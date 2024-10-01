import React from 'react'
//import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'
const Skills = () => {
  return (
    <section
    id='Pskils'>
    <motion.div initial={{opacity:0 }} animate={{opacity:1 ,transition:{duration:.5}}} 
    className='w-full flex flex-col lgl:flex-row gap-20 lgl:gap-20'>
    <div className='w-full lgl:w-1/2'>
    <div className='py-12 font titleFont'>
    <p className='text-sm text-designColor tracking-[4px] font-bold uppercase'style={{fontSize:"20px"}}>Skills</p>
    <h2 className='text-3xl md:text-4xl font-bold ' style={{fontSize:"30px"}}>FrontEnd Design Skills</h2>
    </div>
    <div className='className="mt-14 w-full flex flex-col gap-6'>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>HTML CSS & JavaScript</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span 
          initial={{x:"-90%",opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{duration:0.5 , delay:0.5}}
          className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-400 rounded-md relative'>
            <span className='absolute -top-7 right-0'>90%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>React Js</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span 
          initial={{x:"-90%",opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{duration:0.5 , delay:0.5}} className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-400 rounded-md relative'>
            <span className='absolute -top-7 right-0'>85%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Aguler Js</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span 
          initial={{x:"-90%",opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{duration:0.5 , delay:0.5}} className='w-[72%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-400 rounded-md relative'>
            <span className='absolute -top-7 right-0'>72%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Bootstrep & TypeScript</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span 
          initial={{x:"-90%",opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{duration:0.5 , delay:0.5}} className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-400 rounded-md relative'>
            <span className='absolute -top-7 right-0'>70%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>JSP & Java Swing </p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span 
          initial={{x:"-90%",opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{duration:0.5 , delay:0.5}} className='w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-400 rounded-md relative'>
            <span className='absolute -top-7 right-0'>65%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>wordpress </p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span 
          initial={{x:"-90%",opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{duration:0.5 , delay:0.5}} className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-400 rounded-md relative'>
            <span className='absolute -top-7 right-0'>75%</span>
          </motion.span>
        </span>
      </div>
    </div>
    </div>

    <div className='w-full lgl:w-1/2'>
    <div className='py-12 font titleFont'>
    <p className='text-sm text-designColor tracking-[4px] font-bold uppercase'style={{fontSize:"20px"}}>Skills</p>
    <h2 className='text-3xl md:text-4xl font-bold ' style={{fontSize:"30px"}}>BackEnd Devlopment Skills</h2>
    </div>
    <div className='className="mt-14 w-full w-full flex flex-col gap-6'>
    <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Java</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span 
          initial={{x:"-90%",opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{duration:0.5 , delay:0.5}} className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-400 rounded-md relative'>
            <span className='absolute -top-7 right-0'>85%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Spring boot</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span 
          initial={{x:"-90%",opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{duration:0.5 , delay:0.5}} className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-400 rounded-md relative'>
            <span className='absolute -top-7 right-0'>75%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>python</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span 
          initial={{x:"-90%",opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{duration:0.5 , delay:0.5}} className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-400 rounded-md relative'>
            <span className='absolute -top-7 right-0'>70%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>My sql Sql server & mongo db</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span 
          initial={{x:"-90%",opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{duration:0.5 , delay:0.5}} className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-400 rounded-md relative'>
            <span className='absolute -top-7 right-0'>80%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>React</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span 
          initial={{x:"-90%",opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{duration:0.5 , delay:0.5}} className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-400 rounded-md relative'>
            <span className='absolute -top-7 right-0'>70%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Asp Dot net </p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span 
          initial={{x:"-90%",opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{duration:0.5 , delay:0.5}} className='w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-400 rounded-md relative'>
            <span className='absolute -top-7 right-0'>65%</span>
          </motion.span>
        </span>
      </div>    
    </div>
    </div>
    </motion.div>
    </section>
  )
}

export default Skills
