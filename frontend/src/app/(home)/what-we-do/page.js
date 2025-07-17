'use client'
import React from 'react'
import Image from 'next/image'
import Locator from '../../../../components/locator';
import { IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import Slider from '../../../../components/slider';
import Socialmediabox from '../../../../components/sociamediabox';


function Page() {
    const [open, setopen] = React.useState(false);

    return (
        <main className='bg-white'>
            <Locator text='what we do' />

            <div className='py-5 pb-12 text-black grid grid-rows lg:grid-cols-[2fr_1fr] lg:max-w-5xl mx-auto'>
                {/* left section */}

                <div className='px-4 pr-10'>

                    <p className='text-xl mb-1 '>What We Do</p>


                   <p className='text-sm font-semibold mt-3'>. School Education (Q K Academy)</p>
                    <p className='text-sm font-semibold'>. Educational Awareness Drives</p>
                    <p className='text-sm font-semibold'>. Future Plans:</p>

                    <p className='text-sm font-semibold mt-5'>* Plantation Projects</p>
                    <p className='text-sm font-semibold'>* Relief & Support</p>
                    <p className='text-sm font-semibold mb-7'>* Women Empowerment</p>

                    <Socialmediabox/>

                </div>



                {/* right section */}
                <div className='px-4 text-gray-600'>
                    <div className='max-w-90 flex flex-col '>
                        <Image src='/assets/gallery2.jpg' alt='Gallery image ' width={600} height={400} className='w-full h-full object-cover rounded-t-sm' />
                        <div className='py-7 px-10 shadow-[0_5px_25px_0_gray] rounded-b-sm'>
                            <button className='text-xs py-3 w-full bg-yellow-500 rounded-sm relative top-0 hover:-top-2 transition-all duration-400 cursor-pointer'>DONATE NOW</button>
                        </div>
                    </div>

                    <div className='hidden lg:block mt-5'>
                        <div className='flex border gap-2 justify-between p-3 text-xs'>
                            <p>Quick Links</p>
                            <span className={`${open ? 'rotate-180' : ""} px-1 cursor-pointer`} onClick={() => setopen(!open)}><IoIosArrowUp /></span>
                        </div>

                        <div className={`border ${open ? 'h-113' : 'h-0'} duration-400 overflow-hidden`}>
                            <div className='text-xs gap-2 flex flex-col p-4'>
                                <p>1. What We Do</p>
                                <p>2. Academics</p>
                                <p>3. Tarbiyah</p>
                                <p>4. Health And Nutrition</p>
                                <p>4.1. Comprehensive Health Check-Ups</p>
                                <p>5. Research and Presentation</p>
                                <p>6. Innovation & Technology</p>
                                <p>6.1. State-of-the-Art Innovation & Technology Lab</p>
                                <p>7. Sports and Self Defense</p>
                                <p>7.1. Self-Defense Training</p>
                                <p>8. Infrastructure</p>
                                <p>9. Residential Programme</p>
                                <p>10. Books & Uniform</p>
                                <p>11. Morals and Values</p>
                                <p>12. Combating Social Problems</p>
                                <p>13. Learning beyond the Classroom</p>
                                <p>14. Mentorship Program</p>
                                <p>15. Sustainable Development Goals</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </main>
    )
}

export default Page
