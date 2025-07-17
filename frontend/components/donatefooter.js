import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Link from 'next/link';

function Donatefooter() {
  return (
    <footer className='borer border-red-400 bg-gray-200 px-5 lg:px-20 xl:px-30 pt-11'>

      <div className=''>
        <div className=' md:grid md:grid-cols-4 '>
          <div className=' pb-5 flex md:justify-center'>
            <div className='text-sm space-y-3 text-gray-500 flex flex-col'>
              <p className='text-[17px] text-black'>Quick Links</p>
              <Link href={'/'}>Home</Link>
              <Link href={'/about-trust'}>About Our Trust</Link>
              <Link href={'/vision-mission'}>Vison & Missson</Link>
              <Link href={'/what-we-do'}>What we do</Link>
              <Link href={'/annual-report'}>Annual Report</Link>
            </div>
          </div>

          <div className='hidden md:flex pb-5 md:justify-center'>
            <div className='text-sm space-y-3 text-gray-500 flex flex-col'>
              <p className='text-[17px] text-black'>Other Pages</p>
              <Link href={'/managing-committi'}>Managing Committe</Link>
              <Link href={'/fouder'}>Founder</Link>
              <Link href={'/faq'}>FAQ</Link>
              <Link href={'/advisory-board'}>Advosory Board</Link>
              <Link href={'/teachers-house-partners'}>Teachers & House Parents</Link>
            </div>
          </div>

          <div className='text-gray-500'>
            <p className='text-[17px] text-black'>Contact info</p>
            <span className='flex mt-2 items-center text-sm'>< FaLocationDot className='text-yellow-500 text-xl mr-2' /> <p>Bahoranpur Kalan, Post Manpur, Moradabad 244001, India</p></span>
            <span className='flex py-2 mt-2 items-center border-t text-sm'>
              <FaPhone className='text-yellow-500 mr-2' />
              <div>
                <p>8755292703</p>
                <p>91 7248856187</p>
              </div>
            </span>
            <span className='flex  py-1 pt-2 mt-2 items-center border-t text-sm'>< MdOutlineEmail className='text-yellow-500 mr-2' /> <p>qadrikhairfoundation@gmail.com</p></span>
          </div>

          <div className='text-sm space-y-3 md:pl-6 mb-5 md:mb-3 mt-5 md:mt-0 text-gray-500'>
            <p className='text-[17px] text-black'>Donate Us</p>
            <p>Your Support Will Help A Child Come Out Of The Vicious Cycle Of Generational Poverty Through Education, Health Care And Good Upbringing</p>
            
            <p className='text-black text-[16px] md:text-sm'>This site is managed and maintained by WebDuality Technologies Pvt Ltd.</p>
          </div>

        </div>
        <div className='flex flex-col items-center  border-t pt-7 pb-1 text-xs text-black'><p>Copyright © 2025. All rights reserved.</p> <a href='https://www.webduality.in'>www.webduality.in</a></div>
      </div>

    </footer>
  )
}

export default Donatefooter

