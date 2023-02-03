import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from "react-icons/ai";
import {BsChatSquareDots} from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className='flex items-center'>
        <BsChatSquareDots size={30} className="text-[var(--primary-dark)] mr-2" />
        <h1 className='text-xl fontbold text-gray-800'>HOLYDAY</h1>
      </div>
     
      <div className='flex'>
      <div className='hidden md:flex items-center px-6'>
        <AiOutlineClockCircle size={20} className="mr-2 text-[var(--primary-dark)]" />
        <p className='text-sm text-gray-800'>9AM-5AM</p>
      </div>
      <div className='hidden md:flex items-center px-6'>
        <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]"/>
        <p className='text-sm text-gray-800'>+4 0746 886 045</p>
      </div>
      <a href="https://www.briantracy.com/blog/personal-success/inspirational-quotes/?utm_source=google&utm_medium=cpc&utm_campaign=19545448079&utm_content=145855312755&utm_term=&gadid=644475009569&gclid=CjwKCAiA_vKeBhAdEiwAFb_nrcN0VCwn-czT-3hhI66wm3iResm-ezIpZATDMlrc14gGL5iKNn7AAhoCLmEQAvD_BwE" target="_blank"><button> Get a Free Quote</button></a>
    </div>
    </div>
  )
}

export default TopBar;