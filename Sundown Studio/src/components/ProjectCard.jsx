import React from 'react'

const Project = ({name,brand,env,src}) => {
  return (
    <>
    <div className='project  hover:bg-amber-500'>
          <div className='flex items-center justify-between pr-3 border-b border-[#8c828261] py-8 relative'>
          <h1 className='text-4xl font-bold capitalize'>{name}</h1>
           <div className='leading-[20px] uppercase'>
            <h3 className='text-right'>{brand}</h3>
            <h3 className='text-[#8f7f7f81]'>{env}</h3>
           </div>
          </div>
        <div className='relative'>
        <img className='fixed_image' src={src} alt="" />
    </div> 
    </div>


      </>
  )
}

export default Project