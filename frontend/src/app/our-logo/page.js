import React from 'react'
import Locator from '../../../components/locator'
import { FaWhatsapp, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

function Page() {
    return (
        <main className='bg-white'>
            <Locator text='Our Logo' />
            <div className='pt-2 md:pt-10  pb-18 grid grid-rows lg:grid-cols-[2fr_1fr] lg:max-w-5xl mx-auto'>
                {/* left section */}

                <div className='px-4 pr-10 text-black'>
                    <div className='lg:p-5 border-l-gray-700 border-l-5 w-full lg:max-w-125 '>
                        <Image src='/assets/Logo.png' alt='Gallery image 1' width={600} height={400} className='w-60 h-60 sm:w-110 sm:h-110 lg:w-60 lg:h-60 mx-auto' />
                    </div>
                    <p className='text-2xl mb-3'>Our Logo</p>

                    <p className='text-xs text-gray-600 mb-7'>The logo of Umeed Global School represents and embodies the core principles that form the foundation of our school. It symbolizes the four guiding values of Courage, Truth, Justice and Leadership, each represented by a distinct emblem within the logo.</p>
                    <p className='text-xs text-gray-600 mb-7'>The Eagle signifies courage, reflecting the strength and determination we instil in our students. The pen in “Truth” symbolizes our commitment to nurturing children who write, speak, and uphold truth in all they do. The Scales stand for justice, representing fairness and equity as integral components of our values. Finally, the Four Hands Holding Each Other depicts leadership, highlighting the unity and collaboration essential for fostering future leaders.</p>
                    <p className='text-xs text-gray-600 mb-7'>These principles are inspired by the profound teachings of the renowned poet, Allama Iqbal,
                        and are rooted in his timeless lines:</p>



                    <p className='text-xs text-gray-700 mb-7 font-semibold mx-w-md mx-auto text-center'>“Sabaq phir padh sadaqat ka, adalat ka, shuja-at ka,
                        Liya jayega tujhse kaam duniya ki imamat ka.”</p>


                    <p className='text-xs text-gray-600 mb-7'>This verse reminds us to relearn the timeless lessons of truth, justice, courage, and leadership. By embracing these values, our students are empowered to rise as influential leaders, shaping a better tomorrow.</p>




                    <div className='mt-8'>
                        <p className='text-sm text-gray-600 mb-3'>Share This:</p>
                        <div className='flex gap-2'>
                            <div className='p-2 text-gray-700 bg-yellow-500 rounded-lg '><FaWhatsapp /></div>
                            <div className='p-2 text-gray-700 bg-yellow-500 rounded-lg '><FaFacebook /></div>
                            <div className='p-2 text-gray-700 bg-yellow-500 rounded-lg '><FaLinkedin /></div>
                            <div className='p-2 text-gray-700 bg-yellow-500 rounded-lg '><FaTwitter /></div>
                        </div>
                    </div>

                </div>


                {/* right section */}
                <div className='px-12 lg:px-0 flex justify-center lg:block mt-20 lg:mt-0 mb-3 lg:mb-0 w-full '>

                    <div className='w-full md:max-w-80'>
                        <div className='py-7 px-10 shadow-[0_5px_25px_0_gray]'>
                            <button className='text-gray-700 text-xs py-3 w-full bg-yellow-500 rounded-sm relative top-0 hover:-top-2 transition-all duration-400 cursor-pointer'>DONATE NOW</button>
                        </div>
                    </div>

                    <div className='hidden lg:flex flex-col mt-10 gap-3 text-gray-600 '>
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
