import React from 'react'
import DesktopLogo from './icons/DesktopLogo'
import MobileLogo from './icons/MobileLogo'
import { SectionHolder } from '../styled-components/GeneralComponents'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center w-full py-5 bg-slate-200'>
      <SectionHolder className='gap-4'>
        <MobileLogo />
        <DesktopLogo />
        <p className='text-gray-500'>Copyright &copy; {new Date().getFullYear()}. All rights reserved </p>
      </SectionHolder>
    </footer>
  )
}

export default Footer