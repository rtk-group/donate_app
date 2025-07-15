import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";


function Page() {
  return (
    <>

      <div className='bg-white relative' >
        <div style={{backgroundImage:"url('/assets/qinnovation.jpg')"}} className='bg-center bg-cover h-[70vh] sm:h-[80vh] overflow-hidden text-black relative -top-9'>
        </div>
        {/* banner */}
        <div className='text-yellow-700 absolute bottom-15 sm:bottom-20 left-4 sm:left-20 pr-3'>
          <p className='text-3xl sm:text-5xl font-semibold sm:mb-5 '>Qadri Khair Foundation</p>
          <p className='sm:mt-2 font-semibold'>Education is Hope — Q K Academy is the Path</p>
          <p className='text-xs my-1 sm:my-5 font-semibold'>Bahoranpur, Moradabad, UP – India</p>
          <Link href={'donate-us'}><button className='px-5 py-2 bg-yellow-500 text-black text-xs rounded-[5px] relative top-0 hover:-top-2 duration-300 cursor-pointer'>Donate Now</button></Link>
        </div>
      </div>


      <div className='flex flex-col items-start px-5 md:flex-row bg-white md:justify-center md:py-3 md:pb-9 '>

        <div className='w-full md:w-100 rounded-2xl overflow-hidden'>
          <Image width={200} className='w-full h-full object-cover' height={200} src='/assets/about.jpg' alt='' />
        </div>

        <div className=' text-gray-500 grid justify-items-stretch py-5 mt-5 md:py-0 md:mt-0 text-sm md:ml-10 mb-8'>
          <p className='text-xl text-yellow-500'>About us</p>
          <p className='text-2xl mb-2 text-black '>We are on the Mission to:</p>
          <div className='ml-4'>
            <i>1.Create a World Class School & a center of Excellence.</i><br />
            <i>2.Create Community & Global Leaders.</i><br />
            <i>3.Promote STEM Learning, Innovation & Entrepreneurship.</i><br />
            <i>4.Inculcate 21st Century Skills.</i><br />
            <i>5.Nurture Upright Character through Islamic Values & Tarbiyah.</i>
          </div>
          <button className='justify-self-center md:justify-self-start px-6 py-4 md:px-4 md:py-2 mt-5 bg-yellow-500 text-black text-xs rounded-[5px]'>Read More</button>
        </div>

      </div>

      <div className='bg-white px-4 py-5'>
        <div className='flex flex-col items-center text-center text-sm text-gray-500 px-4'>
          <p className='text-lg text-yellow-500'>Operations</p>
          <p className='text-2xl mb-3 -mt-1 text-black'>Introduction</p>
          <p className='mx-auto'>Qadri Khair Foundation (“we,” “our,” or “us”) values your privacy and is committed to safeguarding your personal information.</p>
          <p>outlines how we collect, use, store, and protect your data when you donate through our platform.</p>
        </div>

        <div className='md:flex justify-center gap-5 pt-12 md:py-6'>

          <div className='md:w-80 pb-10 rounded-2xl shadow-[gray_0_5px_25px_0]'>
            <Image width={200} height={200} className='h-60 relative top-0 hover:-top-3 w-full transition-all duration-400 rounded-t-2xl object-cover ' src='/assets/qacadmic.jpg' alt='' />
            <div className='text-sm text-gray-500 mt-5 ml-5'>
              <p className='text-xl font-semibold text-black'>Academics</p>
              <p>We provide an CBSE curriculum focusing on discussions, debates, outcome-based, and interdisciplinary learning.</p>
              <button className='py-2 px-5 mt-5 relative top-0 hover:-top-2 cursor-pointer duration-400 rounded-sm border border-yellow-500 text-black'>Know More</button>
            </div>
          </div>
          <div className='md:w-80 pb-10 my-10 md:my-0 rounded-2xl shadow-[gray_0_5px_25px_0]'>
            <Image width={200} height={200} className='h-60 relative top-0 hover:-top-3 w-full transition-all duration-400 rounded-t-2xl object-cover ' src='/assets/qresidential.jpg' alt='' />
            <div className='text-sm text-gray-500 mt-5 ml-5'>
              <p className='text-xl font-semibold text-black'>Residential Programme</p>
              <p>At Qadri Khair Foundation, we believe holistic development thrives in an immersive environment.</p>
              <button className='py-2 px-5 mt-5 relative top-0 hover:-top-2 cursor-pointer duration-400 rounded-sm border border-yellow-500 text-black'>Know More</button>
            </div>
          </div>
          <div className='md:w-80 md:hidden lg:block pb-10 rounded-2xl shadow-[gray_0_5px_25px_0]'>
            <Image width={200} height={200} className='h-60 relative top-0 hover:-top-3 transition-all duration-400 w-full rounded-t-2xl object-cover ' src='/assets/qinnovation.jpg' alt='' />
            <div className='text-sm text-gray-500 mt-5 ml-5'>
              <p className='text-xl font-semibold text-black'>Innovation & Technology</p>
              <p>At Qadri Khair Foundation, we believe that innovation and scientific curiosity are the cornerstones of a progressive education system. </p>
              <button className='py-2 px-5 mt-5 relative top-0 hover:-top-2 cursor-pointer duration-400 rounded-sm border border-yellow-500 text-black'>Know More</button>
            </div>
          </div>

        </div>

        <div className='flex justify-center'>
          <button className='py-2 px-7 mt-5 md:mt-0 relative top-0 hover:-top-2 duration-400 cursor-pointer rounded-sm bg-yellow-500 text-black flex'><FaArrowAltCircleRight className='mr-1 mt-1' /> Read More</button>
        </div>
      </div>

      {/* <div className=' border bg-white py-5'>
        <div className='flex flex-col items-center'><p className='text-2xl text-black md:text-3xl'>Our Latest Features</p><p className='border border-yellow-500 w-30 md:w-50 mt-2'></p></div>

        <div className='border flex flex-col items-center gap-4 text-black px-3 my-4 mb-7 md:mb-6 md:px-5 '>

          <div className='md:flex max-w-280 '>
            <div className='border border-yellow-500 p-6 rounded-xl md:mr-2'>
              <p className='text-semibold border-b border-yellow-500 inline'>TIMES OF INDIA</p>
              <p className='text-2xl text-semibold my-4'>Bengal man crowdfunds "school of rich for poor", raises Rs 6 crore in 6 days</p>
              <p className='text-sm text-gray-500 mb-6'>Wali Rahmani, a 25-year-old from West Bengal, has successfully crowdfunded Rs 6 crore in just six days for his plan to build a English-medium for underprivileged children</p>
              <button className='py-3 px-5  text-xs mt-5 md:mt-0 relative top-0 hover:-top-2 cursor-pointer duration-300 rounded-sm bg-yellow-500 text-black flex'><FaArrowAltCircleRight className='mr-1 mt-[1px]' /> Read More</button>
            </div>
            <div className='border border-black p-6 rounded-xl md:ml-2 mt-4 md:mt-0'>
              <p className='text-semibold border-b border-yellow-500 inline'>NEWS CUBIC</p>
              <p className='text-2xl text-semibold my-4'>25 year old Wali Rahmani raised Rs 6 crore for children in 6 days, ‘Umeed Academy’ will open, know how?</p>
              <p className='text-sm text-gray-500 mb-6'>25 year old Wali Rahmani, resident of West Bengal, is in discussion on social media these days. The reason is the Rs 6 crore fund raised for the education of poor children</p>
              <button className='py-3 px-5  text-xs mt-5 md:mt-0 relative top-0 hover:-top-2 cursor-pointer duration-300 rounded-sm bg-yellow-500 text-black flex'><FaArrowAltCircleRight className='mr-1 mt-[1px]' /> Read More</button>
            </div>
          </div>

          <div className='md:flex max-w-280'>
            <div className='border border-black p-6 rounded-xl md:mr-2'>
              <p className='text-semibold border-b border-yellow-500 inline'>TIMES NOW</p>
              <p className='text-2xl text-semibold my-4'>Academy That Raised Rs 5.5 Crore in 5 Days, All About Umeed Academy Wali Rahmani</p>
              <p className='text-sm text-gray-500 mb-6'>Umeed Academy Founder Wali Rahmani, a social activist and lawyer from West Bengal has successfully crowfunded Rs 5.5 crore in 5 days.</p>
              <button className='py-3 px-5  text-xs mt-5 md:mt-0 relative top-0 hover:-top-2 cursor-pointer duration-300 rounded-sm bg-yellow-500 text-black flex'><FaArrowAltCircleRight className='mr-1 mt-[1px]' /> Read More</button>
            </div>
            <div className='border border-yellow-500 p-6 rounded-xl md:ml-2 mt-4 md:mt-0'>
              <p className='text-semibold border-b border-yellow-500 inline'>THE LOGICAL INDIAN</p>
              <p className='text-2xl text-semibold my-4'>Wali Rahmani Crowdfunds 6 Crore in 6 Days to Establish Quality School for Poor Students</p>
              <p className='text-sm text-gray-500 mb-6'>When Wali Rahmani, 25, appealed for crowdfunding to establish a quality school for poor children last week, he received overwhelming response. In the last six days,<br /> he has been able to collect donation of Rs 6 crore out of Rs 10 crore that he has planned for.</p>
              <button className='py-3 px-5  text-xs mt-5 md:mt-0 relative top-0 hover:-top-2 cursor-pointer duration-300 rounded-sm bg-yellow-500 text-black flex'><FaArrowAltCircleRight className='mr-1 mt-[1px]' /> Read More</button>
            </div>
          </div>

        </div>

        <button className='max-w-53 mx-auto py-2 px-7 relative top-0 hover:-top-2 cursor-pointer duration-300 text-xs rounded-sm bg-yellow-500 text-black flex'><FaArrowAltCircleRight className='mr-1 mt-1' /> Check Previous Mentions</button>
      </div> */}

    </>
  )
}

export default Page


