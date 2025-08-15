import React from 'react'

const Slide = ({link}) => {
  return (
    <div className='pr-8 py-2 pl-4 border-l-1 border-[#8c828261] cursor-grab'>
         <img src={link} alt="" />
         <p className='w-[80%] p-1 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa consectetur aperiam quibusdam placeat possimus nihil eius reprehenderit voluptates a?</p>
    </div>
  )
}

export default Slide