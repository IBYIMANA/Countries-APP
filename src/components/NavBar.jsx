import React from 'react'

const NavBar = () => {
  return (
   <nav className='text-white lg:px-24 '>
    <ul className='flex float-left pl-40 mt-9'>
      <li>
     <img src="./public/images/logo.png" alt="" />
      </li>
    </ul>
    <ul className='flex float-right pr-40 space-x-4 mt-9'>
     <li>
        <a href="#" className='hover:text-blue-700'>Countries</a>
      </li>
      <li>
        <a href="#" className='hover:text-blue-700'>Continents</a>
      </li>
      <li>
        <a href="#" className='hover:text-blue-700'>Regions</a>
      </li>
    </ul>
   </nav>
  )
}

export default NavBar