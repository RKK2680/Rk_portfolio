import React from 'react'

const Card = ({ title, des, icon }) => {

    return <div className='w-full h-100 px-12 py-10 rounded-lg shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#ffeb3b] group hover:bg-gradient-to-b hover:from-black hover:to-[#4caf50] transition-colors duration-100 group '>
        <div className='h-90 overflow-y-hidden '>
           <div className='flex h-full flex-col gap-8 translate-y-14 group-hover:translate-y-0 transition-transform duration-500 '>
           <div>
                <span className='text-5x1 text-designColor 'style={{ Size: "20px" }}>
                    {icon}
                </span>
            </div>
            <div className='flex flex-col gap-6'>
                <h2 className='text-xl md:text-2xl font-titleFont font-bold text-gray-300  'style={{ fontSize: "25px" }}>
                    {title}
                </h2>
                <p className='base'>
                    {des}
                </p>
            </div>
           </div>
        </div>
    </div>
}
//#1e2024
export default Card
