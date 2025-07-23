"use client"

import React from 'react'
import Image from 'next/image'
import Socialmediabox from '../../../../components/sociamediabox';
import { IoIosArrowUp } from "react-icons/io";
import Locator from '../../../../components/locator';

function Page() {
    const [open, setopen] = React.useState(false);

    return (
        <main className='bg-white'>
        <Locator text='Annual reports' />
            <div className='pt-2  pb-4 sm:pb-2 grid grid-rows lg:grid-cols-[2fr_1fr] lg:max-w-5xl mx-auto'>
        {/* left section */}

        <div className=' justify-items-stretch py-5 pl-4 '>


          <div className='pb-9 px-3 md:px-5  flex flex-col items-center gap-4 text-black my-4 mb-7 md:mb-0 lg:my-6  '>

            <div className=' flex flex-col md:flex-row w-full lg:max-w-280 gap-14'>
              <div className='flex flex-col items-center w-full lg:w-60 p-10 rounded-xl  shadow-[0_5px_25px_0_gray]'>
               <p className='text-2xl font-semibold'>Year 2022-23</p>
               <button className=' border border-yellow-500 text-sm px-5 py-2 mt-5 relative top-0 hover:-top-1 duration-300 rounded-sm'>Check Now</button>
              </div>
              <div className='flex flex-col items-center w-full lg:w-60 p-10 rounded-xl  shadow-[0_5px_25px_0_gray]'>
               <p className='text-2xl font-semibold'>Year 2021-22</p>
               <button className=' border border-yellow-500 text-sm px-5 py-2 mt-5 relative top-0 hover:-top-1 duration-300 rounded-sm'>Check Now</button>
              </div>
            </div>

            <div className=' flex flex-col md:flex-row w-full lg:max-w-280 gap-14 my-12 md:my-15 '>
              <div className='flex flex-col items-center w-full lg:w-60 p-10 rounded-xl  shadow-[0_5px_25px_0_gray]'>
               <p className='text-2xl font-semibold'>Year 2020-21</p>
               <button className=' border border-yellow-500 text-sm px-5 py-2 mt-5 relative top-0 hover:-top-1 duration-300 rounded-sm'>Check Now</button>
              </div>
              <div className='flex flex-col items-center w-full lg:w-60 p-10 rounded-xl shadow-[0_5px_25px_0_gray]'>
               <p className='text-2xl font-semibold'>Year 2019-20</p>
               <button className=' border border-yellow-500 text-sm px-5 py-2 mt-5 relative top-0 hover:-top-1 duration-300 rounded-sm'>Check Now</button>
              </div>
            </div>

            <div className=' flex flex-col md:flex-row w-full lg:max-w-280 gap-14 '>
              <div className='flex flex-col items-center w-full lg:w-60 p-10 rounded-xl  shadow-[0_5px_25px_0_gray]'>
               <p className='text-2xl font-semibold'>Year 2018-19</p>
               <button className=' border border-yellow-500 text-sm px-5 py-2 mt-5 relative top-0 hover:-top-1 duration-300 rounded-sm'>Check Now</button>
              </div>
       
            </div>

        </div>
          <Socialmediabox />
        </div>

        {/* right section */}
        <div className='px-10 lg:px-0 flex justify-center lg:block mt-10 lg:mt-0 mb-7 lg:mb-0 w-full'>
                    <div className='w-full md:max-w-90 flex flex-col lg:pr-4 '>
                        <Image src='/assets/gallery2.jpg' alt='Gallery image ' width={600} height={400} className='w-full h-full object-cover rounded-t-lg' />
                        <div className='py-7 px-10 shadow-[0_5px_25px_0_gray] rounded-b-lg'>
                               <Link href={'/donate-us'}> <button className='text-xs text-gray-700 py-3 w-full bg-yellow-500 rounded-sm relative top-0 hover:-top-2 transition-all duration-400 cursor-pointer'>DONATE NOW</button> </Link>
                        </div>
                    </div>

                    <div className='hidden lg:block mt-5 text-gray-600'>
                        <div className='flex border gap-2 justify-between p-3 text-xs font-semibold'>
                            <p>Quick Links</p>
                            <span className={`${open ? 'rotate-180' : ""} px-1 cursor-pointer`} onClick={() => setopen(!open)}><IoIosArrowUp /></span>
                        </div>

                        <div className={`border ${open ? 'h-44' : 'h-0'} duration-400 overflow-hidden`}>
                            <div className='text-xs gap-2 flex flex-col p-4'>
                                <p>1. Annual Reports</p>
                                <p>1.1. Year 2022-23</p>
                                <p>1.2. Year 2021-22</p>
                                <p>1.3. Year 2020-21</p>
                                <p>1.4. Year 2019-20</p>
                                <p>1.5. Year 2018-19</p>
                                
                            </div>
                        </div>
                    </div>
                </div>

      </div>
        </main>
    )
}

export default Page




                
