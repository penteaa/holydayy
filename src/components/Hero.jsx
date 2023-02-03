import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img src="https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" 
      className='w-full h-full object-cover'
      />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='font-bold text-4xl'>Find Your special Trip</h1>
          <h2 className='text-4xl py-4 italic'>With Holyday!</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Iure reiciendis provident, veniam praesentium natus eum perferendis! Aut rem ab recusandae.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
