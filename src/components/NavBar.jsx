import React from 'react'
import DesktopLogo from './icons/DesktopLogo'
import { Link, NavLink } from 'react-router-dom'
import MobileLogo from './icons/MobileLogo'
import { CiMenuFries } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className='flex justify-between w-full py-10 '>
      <Link to='/'>
        <DesktopLogo />
        <MobileLogo />
      </Link>
      <NavLink to={'/'} className={'block md:hidden'}><CiMenuFries /></NavLink>
      <NavLink to={'/'} className={'hidden md:block'}>Countries</NavLink>
      <NavLink to={'/'} className={'hidden md:block'}>Contact</NavLink>
    </div>
  )
}

export default NavBar