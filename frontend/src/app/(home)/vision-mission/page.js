import React from 'react'
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa6";
import Link from 'next/link';
import Locator from '../../../../components/locator';
import Socialmediabox from '../../../../components/sociamediabox';

function Page() {
    return (
        <main className='bg-white'>
        <Locator text='Vision, Mission & Principle'/>
        <div className='pt-2 md:pt-10  pb-18 grid grid-rows lg:grid-cols-[2fr_1fr] lg:max-w-5xl mx-auto'>
                        {/* left section */}
        
                        <div className='px-4 pr-10 text-black'>
                            <p className='text-2xl mb-3'>Mission</p>

                            <p className='text-sm font-semibold mb-3 text-gray-600 '>To ensure every child receives the education and care they deserve <br/> nurturing not just their minds but their future.</p>
                            
                            <Socialmediabox/>
        
                        </div>
        
        
                        {/* right section */}
                        <div className='px-12 lg:px-0 flex justify-center lg:block mt-20 lg:mt-0 mb-3 lg:mb-0 w-full '>
                            <div className='w-full md:max-w-90 flex flex-col'>
                                <Image src='/assets/gallery2.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover rounded-t-lg' />
                                <div className='py-7 px-10 shadow-[0_5px_25px_0_gray] rounded-b-lg'>
                                   <Link href={'/donate-us'}> <button className='text-gray-700 text-xs py-3 w-full bg-yellow-500 rounded-sm relative top-0 hover:-top-2 transition-all duration-400 cursor-pointer'>DONATE NOW</button> </Link>
                                </div>
                            </div>
        
                            <div className='hidden lg:flex flex-col mt-5 gap-3 text-gray-600 '>
                                <p className='text-2xl text-black'>Quick Links</p>
                                <Link href='' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Vision & Mission Statement</p></Link>
                                <Link href='' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Our Logo</p></Link>
                                <Link href='' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>About Our Trust</p></Link>
                                <Link href='' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Future plans</p></Link>
                                <Link href='' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Our Partners</p></Link>
                            </div>
        
                        </div>
        
        
                    </div>
        </main>
    )
}

export default Page
