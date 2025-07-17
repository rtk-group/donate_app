import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Socialmediabox from '../../../../components/sociamediabox';
import Link from 'next/link';
import Locator from '../../../../components/locator';

function Page() {
    return (
        <main className='bg-white'>
            <Locator text='About Trust' />
            <div className='pt-2 md:pt-10  pb-18 grid grid-rows lg:grid-cols-[2fr_1fr] lg:max-w-5xl mx-auto'>
                {/* left section */}

                <div className='pl-4 text-black p-3'>
                    <p className='text-2xl mb-2'>About Us</p>
                    <p className='text-sm font-semibold'>Qadri Khair Foundation</p>
                    <p className='text-xs text-gray-700 mb-2'>was established on *7th November 2024* to <br /> uplift underprivileged communities through education. It runs <br /> *Q K Academy, which provides **school education for boys and girls up to 12 years*.</p>

                    <div className='p-2 lg:p-5 lg:py-7 border-l-yellow-500 border-l-5 w-full lg:max-w-130 '>

                        <div className='text-xs'>

                            <div className='ml-2 text-sm'>

                                <p className='font-semibold'>* Medium: English & Urdu</p>
                                <p className='font-semibold mt-1'>* Syllabus: Independent</p>
                                <p className='font-semibold mt-1'>* Focus: Day school (non-residential)</p>
                                <p className='font-semibold mt-1'>* Future Goal: 5-acre campus</p>
                            </div>
                        </div>
                    </div>
                    <Socialmediabox />
                </div>


                {/* right section */}
                <div className='px-12 lg:px-0 flex justify-center lg:block mt-20 lg:mt-0 mb-3 lg:mb-0 w-full '>

                    <div className='w-full md:max-w-80'>
                        <div className='py-7 px-10 shadow-[0_5px_25px_0_gray] rounded-lg'>
                          <Link href={'/donate-us'}>  <button className='text-gray-700 text-xs py-3 w-full bg-yellow-500 rounded-sm relative top-0 hover:-top-2 transition-all duration-400 cursor-pointer'>DONATE NOW</button> </Link>
                        </div>
                    </div>

                    <div className='hidden lg:flex flex-col mt-10 gap-3 text-gray-600 '>
                        <p className='text-2xl text-black'>Quick Links</p>
                        <Link href='vision-mission' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Vision & Mission Statement</p></Link>
                        <Link href='our-logo' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Our Logo</p></Link>
                        <Link href='about-trust' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>About Our Trust</p></Link>
                        <Link href='future-plans' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Future plans</p></Link>
                        <Link href='our-partners' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Our Partners</p></Link>
                    </div>

                </div>

            </div>
        </main>
    )
}

export default Page
