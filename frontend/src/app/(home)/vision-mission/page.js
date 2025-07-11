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
                            <p className='text-2xl mb-3'>Our Vision</p>

                            <p className='text-xs text-gray-600 mb-7'>Our Vision is to create a world class institution where the underprivileged children, considered as liabilities to the society are transformed into the assets of the society. We aim to cultivate self-sufficient individuals and community leaders who will shape the society positively for generations to come.</p>
                            <p className='text-xs text-gray-600'>We also aim to create a platform that bridges the educational gap between privileged and underprivileged students, fostering true educational equity. Our goal is to provide a space where students from all socioeconomic backgrounds can learn and thrive together.</p>
                            <div className='h-75 max-w-130 my-6'>
                                <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover' />
                            </div>

                            <p className='text-2xl'>Our Mission</p>

                            <p className='text-xs text-gray-600 mt-7'>We are on a mission to end generational poverty through modern and contemporary education. Committed to empowering orphans, destitute children, underprivileged students, and those from diverse socioeconomic backgrounds, we provide access to quality education based on the CBSE curriculum, modern pedagogy, and STEM learning. Through a nurturing environment focused on confidence-building, holistic development, and 21st-century skills, we will equip them to become future leaders, guided by strong moral and ethical values rooted in Islamic doctrine.</p>
                            <p className='text-2xl my-4 '>Our Principle</p>

                            <p className='text-xs text-gray-600'>We firmly believe that what we do at Umeed Global School has nothing philanthropic about it. It is a matter of mutual interest where we enable our children to become leaders who shall be capable and willing to make more leaders like themselves, in the future. Our children and we are partners in this cause.</p>
                    
                            <Socialmediabox/>
        
                        </div>
        
        
                        {/* right section */}
                        <div className='px-12 lg:px-0 flex justify-center lg:block mt-20 lg:mt-0 mb-3 lg:mb-0 w-full '>
                            <div className='w-full md:max-w-90 flex flex-col'>
                                <Image src='/assets/gallery2.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover' />
                                <div className='py-7 px-10 shadow-[0_5px_25px_0_gray]'>
                                    <button className='text-gray-700 text-xs py-3 w-full bg-yellow-500 rounded-sm relative top-0 hover:-top-2 transition-all duration-400 cursor-pointer'>DONATE NOW</button>
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
