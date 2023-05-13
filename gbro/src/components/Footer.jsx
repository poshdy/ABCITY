import React from 'react'

import { Link } from 'react-router-dom'

const Footer = () => {
const koko = "<Roshdy/>"

  return (
    <div className='w-full flex justify-center items-center flex-col bg-zinc-900 p-3'>
 <Link to={"/"}>
          <h1 className="md:text-4xl text-xl font-bold text-[#FA6A19]">AB CITY</h1>
        </Link>
<ul className='font-bold text-white flex gap-2 '>
    <li><Link className='text-lg font-normal' to='/' >Home</Link></li>
    <li><Link  className='text-lg font-normal' to='/bmi' >BMI</Link></li>
    <li><Link  className='text-lg font-normal' to='/exercises' > Nutrition</Link></li>
</ul>
<p className='text-gray-300 text-sm'>Designed and Developed by{koko}  </p>
    </div>
  )
}

export default Footer