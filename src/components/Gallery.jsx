import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
          <img className='w-full h-full object-cover ' src="https://images.unsplash.com/photo-1517176191003-46c068487dd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvbGlkYXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
        <div>
          <img className='w-full h-full object-cover ' src="https://images.unsplash.com/photo-1515678821046-f1ba75cb9f9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNydWlzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
        <div>
          <img className='w-full h-full object-cover ' src="https://images.unsplash.com/photo-1560251180-1a0b93970379?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXhjdXJzaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
        <div>
          <img className='w-full h-full object-cover ' src="https://images.unsplash.com/photo-1602217401645-2f11316f48cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGV4Y3Vyc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
        <div>
          <img className='w-full h-full object-cover ' src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGV4Y3Vyc2lvbiUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Gallery