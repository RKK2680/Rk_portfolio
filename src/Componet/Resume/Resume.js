import React, { useState } from 'react'
import Layout from "../Layout/Layout"
import Eucation from './Eucation'
import Skills from './Skills'
import Exp from './Exp'
import Achivments from './Achivments'
const Resume = () => {
    const [EducationData, setEducationdata]=useState(true);
    const [Skilldata, setSkillData]=useState(false);
    const [AchivData, setAchivData]=useState(false);
    const [ExpData,setExpData]=useState(false);
  return (
    <section
    id='resume'
    className='w-full py-20 border-b-[1px] border-b-black '>
    <div className='flex justify-center item-center contect-center text-center'>
    <Layout
    title='My  Educational & Technical Experience'
    des='My Resume'
    />
    </div>
    <div>
        <ul className='w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 xl:grid-cols-4 gap-5 '>
            <li onClick={()=>setEducationdata(true)& setAchivData(false)&setExpData(false)&setSkillData(false)} className= "resumeLi">Profesional Education</li>
            <li onClick={()=>setSkillData(true)&setEducationdata(false)&setExpData(false)&setAchivData(false)} className='resumeLi'>Profesional Skils</li>
            <li onClick={()=>setExpData(true)&setEducationdata(false)&setSkillData(false)&setAchivData(false)} className='resumeLi'>Experience</li>
            <li onClick={()=>setAchivData(true)&setEducationdata(false)&setSkillData(false)&setExpData(false)} className='resumeLi'>Achievements</li>
        </ul>
    </div>
    {EducationData && <Eucation/>}
    {Skilldata && <Skills/>}
    {ExpData && <Exp/>}
    {AchivData && <Achivments/>}
    
    </section>
  )
}

export default Resume
