import React from 'react'

const Layout = ({title,des}) => {
  return (
    <div className='flax flex-col gap-4 titleFont mb-14'>
<h3 className='text-sm uppercase font-light text-designColor tracking-wide'>
  {title}
</h3>
<h1 className='text-4xl md:text-5xl text-gray-300 font-bold capitalize'>
{des}
</h1>
</div>
  )
}

export default Layout
