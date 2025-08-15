import React from 'react'

const Footer = () => {
  return (
    <div className='h-screen relative bg-transparent text-[#EFEAE3]'>
      <div className='fixed h-screen w-full gradient text-[#EFEAE3] z-[9] bottom-0 p-4'>

      <div className='flex items-center justify-between px-18 pt-26 w-full'>
          <div className='text-2xl font-bold'>
          <h3>Work</h3>
          <h3>Studio</h3>
          <h3>Contact</h3>
          </div>
          <div className='w-92 pr-30'>
            <h5>Get industry insights and creative inspiration straight into your inbox.</h5>
            <p className='text-[#8e8989ee] border-b border-[#EFEAE3] pt-4'>Email Address</p>
          </div>
      </div>
      
      <div className='text-center font-bold px-4'>
        <h1 className='text-[22vw] border-b border-[#efeae37b] leading-80'>Sundown</h1>
        <div className='text-[#EFEAE3] flex items-center justify-between px-6 py-4 text-sm font-normal'>
          <h5>Copyright &copy; Sundown Studio</h5>
          <h5>Brooklyn,NY</h5>
          <h5>Instagram</h5>
          <h5>LinkedIn</h5>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Footer