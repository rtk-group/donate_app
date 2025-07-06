import React from 'react'
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from 'next/link';
import Socialmediabox from '../../../components/sociamediabox';
import Locator from '../../../components/locator';

function Page() {
  return (
    <main className='bg-white'>

      <Locator text='news' />
      <div className='pt-2 md:pt-10  pb-4 sm:pb-2 grid grid-rows lg:grid-cols-[2fr_1fr] lg:max-w-5xl mx-auto'>
        {/* left section */}

        <div className='justify-items-stretch bg-white py-5 pl-3 md:pl-5'>
          <div className='flex flex-col items-center'>
            <p className='text-2xl text-black md:text-3xl'>Our Latest Features</p>
            <p className='border border-yellow-500 w-30 md:w-50 mt-2'></p>
          </div>

          <div className='flex flex-col items-center gap-4 text-black pr-3 md:pr-5 my-4 mb-7 md:mb-0 lg:my-6  '>

            <div className='md:flex max-w-280 '>
              <div className='border border-yellow-500 p-6 rounded-xl md:mr-2'>
                <p className='font-semibold text-xs text-yellow-500 border-b border-yellow-500 inline'>TIMES OF INDIA</p>
                <p className='text-xl font-semibold text-gray-700 my-3'>Bengal man crowdfunds "school of rich for poor", raises Rs 6 crore in 6 days</p>
                <p className='text-sm text-gray-500 mb-6'>Wali Rahmani, a 25-year-old from West Bengal, has successfully crowdfunded Rs 6 crore in just six days for his plan to build a English-medium for underprivileged children</p>
                <button className='py-3 px-5  text-xs mt-5 md:mt-0 rounded-sm bg-yellow-500 text-black flex relative top-0 hover:-top-2 duration-300'><FaArrowAltCircleRight className='mr-1 mt-[1px]' /> Read More</button>
              </div>
              <div className='border border-black p-6 rounded-xl md:ml-2 mt-4 md:mt-0'>
                <p className='font-semibold text-xs text-yellow-500 border-b border-yellow-500 inline'>NEWS CUBIC</p>
                <p className='text-xl font-semibold text-gray-700 my-3'>25 year old Wali Rahmani raised Rs 6 crore for children in 6 days, ‘Umeed Academy’ will open, know how?</p>
                <p className='text-sm text-gray-500 mb-6'>25 year old Wali Rahmani, resident of West Bengal, is in discussion on social media these days. The reason is the Rs 6 crore fund raised for the education of poor children</p>
                <button className='py-3 px-5  text-xs mt-5 md:mt-0 rounded-sm bg-yellow-500 text-black flex relative top-0 hover:-top-2 duration-300'><FaArrowAltCircleRight className='mr-1 mt-[1px]' /> Read More</button>
              </div>
            </div>

            <div className='md:flex max-w-280'>
              <div className='border border-black p-6 rounded-xl md:mr-2'>
                <p className='font-semibold text-xs text-yellow-500 border-b border-yellow-500 inline'>TIMES NOW</p>
                <p className='text-xl font-semibold text-gray-700 my-3'>Academy That Raised Rs 5.5 Crore in 5 Days, All About Umeed Academy Wali Rahmani</p>
                <p className='text-sm text-gray-500 mb-6'>Umeed Academy Founder Wali Rahmani, a social activist and lawyer from West Bengal has successfully crowfunded Rs 5.5 crore in 5 days.</p>
                <button className='py-3 px-5  text-xs mt-5 md:mt-0 rounded-sm bg-yellow-500 text-black flex relative top-0 hover:-top-2 duration-300'><FaArrowAltCircleRight className='mr-1 mt-[1px]' /> Read More</button>
              </div>
              <div className='border border-yellow-500 p-6 rounded-xl md:ml-2 mt-4 md:mt-0'>
                <p className='font-semibold text-xs text-yellow-500 border-b border-yellow-500 inline'>THE LOGICAL INDIAN</p>
                <p className='text-xl font-semibold text-gray-700 my-3'>Wali Rahmani Crowdfunds 6 Crore in 6 Days to Establish Quality School for Poor Students</p>
                <p className='text-sm text-gray-500 mb-6'>When Wali Rahmani, 25, appealed for crowdfunding to establish a quality school for poor children last week, he received overwhelming response. In the last six days,<br /> he has been able to collect donation of Rs 6 crore out of Rs 10 crore that he has planned for.</p>
                <button className='py-3 px-5  text-xs mt-5 md:mt-0 rounded-sm bg-yellow-500 text-black flex relative top-0 hover:-top-2 duration-300'><FaArrowAltCircleRight className='mr-1 mt-[1px]' /> Read More</button>
              </div>
            </div>

            <div className='md:flex max-w-280'>
              <div className='border border-black p-6 rounded-xl md:mr-2'>
                <p className='font-semibold text-xs text-yellow-500 border-b border-yellow-500 inline'>BRUT.</p>
                <p className='text-xl font-semibold text-gray-700 my-3'>20-Year-Old Takes Cares For More Than 20 Orphans</p>
                <p className='text-xs leading-5 text-gray-500 mb-6'>He might not be their biological father, but they all call him abba ji. Here is an inspiring Father’s Day story about raising India’s next generation.</p>
                <button className='py-3 px-5  text-xs mt-5 md:mt-0 rounded-sm bg-yellow-500 text-black flex relative top-0 hover:-top-2 duration-300'><FaArrowAltCircleRight className='mr-1 mt-[1px]' /> Read More</button>
              </div>
              <div className='border border-yellow-500 p-6 rounded-xl md:ml-2 mt-4 md:mt-0'>
                <p className='font-semibold text-xs text-yellow-500 border-b border-yellow-500 inline'>TWO CIRCLES</p>
                <p className='text-xl font-semibold text-gray-700 my-3'>Source of inspiration for Kolkata’s underprivileged children</p>
                <i className='text-xs leading-5 text-gray-500'>Wali Rahmani’s work has earned him recognition and respect and people have come forward to sponsor the students in whatever way they can.</i>
                <button className='py-3 px-5  text-xs mt-5 rounded-sm bg-yellow-500 text-black flex relative top-0 hover:-top-2 duration-300'><FaArrowAltCircleRight className='mr-1 mt-[1px]' /> Read More</button>
              </div>
            </div>
            <div className='md:flex max-w-280'>
              <div className='border border-black p-6 rounded-xl md:mr-2'>
                <p className='font-semibold text-xs text-yellow-500 border-b border-yellow-500 inline'>NEWS ROOM</p>
                <p className='text-xl font-semibold text-gray-700 my-3'>Education of privileged’ for the underprivileged</p>
                <p className='text-xs leading-5 text-gray-500 mb-6'>The academy has a 12-hour (everyday) unique academic and activity system for the all-round development of the kids from downtrodden communities.</p>
                <button className='py-3 px-5  text-xs mt-5 md:mt-0 rounded-sm bg-yellow-500 text-black flex relative top-0 hover:-top-2 duration-300'><FaArrowAltCircleRight className='mr-1 mt-[1px]' /> Read More</button>
              </div>
              <div className='border border-yellow-500 p-6 rounded-xl md:ml-2 mt-4 md:mt-0'>
                <p className='font-semibold text-xs text-yellow-500 border-b border-yellow-500 inline'>INDIA TIMES</p>
                <p className='text-xl font-semibold text-gray-700 my-3'>Stories Of Fatherhood: 'Abba Ji' To 23 Orphaned Children</p>
                <p className='text-xs leading-5 text-gray-500 mb-6'>20-year-old Wali Rahmani, for instance, is a father to 23 kids who were not fortunate enough to be blessed with their parents’ love</p>
                <button className='py-3 px-5  text-xs mt-5 md:mt-0 rounded-sm bg-yellow-500 text-black flex relative top-0 hover:-top-2 duration-300'><FaArrowAltCircleRight className='mr-1 mt-[1px]' /> Read More</button>
              </div>
            </div>

          </div>
          <Socialmediabox />
        </div>

        {/* right section */}
        <div className='px-10 lg:px-5 lg:block lg:mt-10 mb-3 lg:mb-0 w-full '>
          <div className='w-full md:max-w-90 flex flex-col md:mx-auto'>
            <Image src='/assets/gallery2.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover rounded-t-lg' />
            <div className='py-7 px-10 shadow-[0_5px_25px_0_gray] rounded-b-lg'>
              <button className='text-gray-700 text-xs py-3 w-full bg-yellow-500 rounded-sm relative top-0 hover:-top-2 duration-400 cursor-pointer'>DONATE NOW</button>
            </div>
          </div>

        </div>

      </div>

    </main>
  )
}

export default Page
