import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <div className='relative p-4'>
        <h3 className='text-white absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold'>Resorts</h3>
        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc29ydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="/" 
       className='w-full h-full object-cover relative border-4 border-white shadow-lg'
       />
      </div>
      <div className='relative p-4'>
        <h3 className='text-white absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold'>Cruises</h3>
        <img src="https://images.unsplash.com/photo-1565543236200-cc00fd702470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J1aXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="/" 
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'
        />
      </div>
      <div className='relative p-4'>
        <h3 className='text-white absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold'>Excurions</h3>
        <img src="https://images.unsplash.com/photo-1567426183522-7e92539528b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNjdWJhJTIwZGl2aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/"
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'
        />
      </div>

    </div>
  )
}

export default Activities