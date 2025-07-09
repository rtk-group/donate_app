import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Link from 'next/link';

function Footer() {
  return (
    <footer className='borer border-red-400 bg-gray-200 px-5 lg:px-20 xl:px-30 pt-11'>

      <div className=''>
        <div className=' md:grid md:grid-cols-4 '>
          <div className=' pb-5 flex md:justify-center'>
            <div className='text-sm space-y-3 text-gray-500'>
              <p className='text-[17px] text-black'>Quick Links</p>
              <p>Home</p>
              <p>About Our Trust</p>
              <p>Vison & Missson</p>
              <p>What we do</p>
              <p>Annual Report</p>
            </div>
          </div>

          <div className='hidden md:flex pb-5 md:justify-center'>
            <div className='text-sm space-y-3 text-gray-500'>
              <p className='text-[17px] text-black'>Other Pages</p>
              <p>Managing Committe</p>
              <p>Founder</p>
              <p>FAQ</p>
              <p>Advosory Board</p>
              <p>Teachers & House Parents</p>
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
            
            <Link href='/donate-us'>
            <button className='bg-yellow-500 font-semibold text-black px-5 py-2 mb-2 rounded-[6px] relative top-0 hover:-top-1 transition-all duration-400 cursor-pointer'>donate us</button>
            </Link>
            
            <p className='text-black text-[16px] md:text-sm'>Privacy Policy for Donations</p>
          </div>

        </div>
        <div className='flex justify-center border-t pt-9 pb-1 text-xs text-black'><p>Copyright © 2022. All rights reserved.</p></div>
      </div>

    </footer>
  )
}

export default Footer
