import React from 'react'

const NavBar = () => {
  return (
   <nav className='text-white lg:px-24 '>
    <ul className='flex float-left pl-40 mt-9'>
      <li>
     <img src="./public/images/logo.png" alt="" />
      </li>
    </ul>
    <ul className='flex float-right space-x-4 pr-40 mt-9'>
     <li>
        <a href="#" className='hover:text-blue-700'>countries</a>
      </li>
      <li>
        <a href="#" className='hover:text-blue-700'>continents</a>
      </li>
      <li>
        <a href="#" className='hover:text-blue-700'>regions</a>
      </li>
    </ul>
   </nav>
  )
}

export default NavBar