import React from 'react'
import {motion} from 'framer-motion'
import ResumeCard from './ResumeCard'
const Exp = () => {
  return (
    <motion.div initial={{opacity:0 }} animate={{opacity:1 ,transition:{duration:.5}}} className='w-full flex gap-20'>
    <div>
    <div className='py-12 font titleFont'>
    <p className='text-sm text-designColor tracking-[4px] font-bold'style={{fontSize:"20px"}}>EX-2023</p>
    <h2 className='text-4x1 font-bold ' style={{fontSize:"30px"}}>My Expereance</h2>
    </div>
    <div className='className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
        <ResumeCard
        title="Bacholer of Computer Application"
        subTitle="Era University Lucknow (2020-2023)"
        result="74.88%"
        des="The Provide pratical Knowlage & Deffirent Technology "/>
        <ResumeCard
        title="Bacholer of Arts"
        subTitle=" University of Lucknow (2017-2020)"
        result="59.68%"
        des="The Study of various Country &  Political science Lows "/>
        <ResumeCard
        title="EnterMedieate & HighSchool"
        subTitle="Govt. Jublee Inter Collage Lucknow (2015-2017)"
        result="60.74%"
        des="The Provide All Subject Information "/>
        
    </div>
    </div>
    <div>
    <div className='py-12 font titleFont'>
    <p className='text-sm text-designColor tracking-[4px] font-bold'style={{fontSize:"20px"}}>EX-2023</p>
    <h2 className='text-4x1 font-bold ' style={{fontSize:"30px"}}>My Expereance</h2>
    </div>
    <div className='className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
        <ResumeCard
        title="TCS NQT Program (IT)"
        subTitle="Technical Programming Like (Java, C )(2022-2023)"
        result="B Grade"
        des="The Provide pratical Knowlage & Deffirent Technologes Problames Solving Quetions. "/>
        <ResumeCard
        title="Artificial Intelligence & Machine Learning (AI&ML)"
        subTitle=" Artificial intelligence is a technology using which we can create intelligent systems that can simulate human intelligence. "
        result="A Grade"
        des="Machine learning is a subfield of artificial intelligence, which enables machines to learn from past data or experiences without being explicitly programmed. "/>
        <ResumeCard
        title="Course on Computer Concepts (CCC)"
        subTitle="This course is designed to aim at imparting a basic level IT Literacy programme for the common man ."
        result="B Grade"
        des="The Provide All Computers Fundamentals Subjects . "/>
        
    </div>
    </div>
    </motion.div>
  )
}

export default Exp
