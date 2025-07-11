"use client"
import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineEmail } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Link from 'next/link';

function Page() {

    // image collection for slider
        const slide = [
            { url: '/assets/gallery1.jpg' },
            { url: '/assets/gallery2.jpg' },
            { url: '/assets/gallery3.jpg' },
        ];
    
        const [currentindex, setcurrentindex] = React.useState(0)
    
        const prevslide = () => {
            const isfirstslide = currentindex === 0;
            const newindex = isfirstslide ? slide.length - 1 : currentindex - 1;
            setcurrentindex(newindex);
        }
    
        const nextslide = () => {
            const islastslide = currentindex === slide.length - 1;
            const newindex = islastslide ? 0 : currentindex + 1;
            setcurrentindex(newindex)
        }
    
        const gotoslide = (index) => {
            setcurrentindex(index)
        }
    
        // Calculate the next index for the second image
        const nextindex = currentindex === slide.length - 1 ? 0 : currentindex + 1;

    return (
        <div className='flex flex-col items-center text-xs py-10 px-4 bg-white text-gray-600 '>
            <Link href={'/donate'} target="_blank" rel="noopener noreferrer"  onClick={(e) => {e.preventDefault(); window.open('/donate', '_blank')}} className='bg-yellow-500 text-gray-700 px-4 py-2 mb-6 rounded-sm flex'><FaArrowAltCircleRight className='mr-1'/> Donate Now</Link>
            <div className='border-y max-w-100 leading-5 py-5'>
                <p className='font-semibold mb-1'>Terms & Conditions:</p>
                <p>Before you donate please read the following points:</p>
                <p>1. As per the Indian Income Tax Authority Rule, a donor is required to add PAN number in case the donor wishes to avail the 80G tax exemption certificate.</p>
                <p>2. Only Indian Residents and NRI can donate, we are not accepting donations from any foreign account. NRI can only donate through an NRO account and not their foreign account.</p>
                <p>3. Donor will get their receipt on their Email ID and WhatsApp number.</p>
            </div>

            {/* image slider */}
            <div className='w-full'>
            <div className='max-w-3xl m-auto relative px-3 md:px-0 py-3 '>
                        {/* images box */}
                        <div className='flex gap-3'>
                            <div style={{ backgroundImage: `url(${slide[currentindex].url})` }} className='w-full h-[300px] sm:h-[400px] md:h-[300px] rounded-xl bg-center bg-cover duration-500'></div>
                            <div style={{ backgroundImage: `url(${slide[nextindex].url})` }} className='hidden md:block w-full h-[300px] rounded-xl bg-center bg-cover duration-500'></div>
                        </div>
            
                        {/* left side arrow */}
                        <div onClick={prevslide} className='absolute top-[50%] left-5 md:left-0 text-3xl'><MdKeyboardArrowLeft /></div>
                        {/* right side arrow */}
                        <div onClick={nextslide} className='absolute top-[50%] right-5 md:right-0 text-3xl'><MdKeyboardArrowRight /></div>
            
                        {/* dots for slider */}
                        <div className='flex justify-center mt-3 gap-1 '>
                            {
                                slide.map((item, index) => (
                                    <div key={index} onClick={() => gotoslide(index)} className={`cursor-pointer ${index === currentindex ? 'text-yellow-500 scale-120' : 'text-yellow-200'} text-sm`}>
                                        <GoDotFill />
                                    </div>
                                ))
                            }
                        </div>
            
                    </div>
                </div>

            <p className='text-2xl text-gray-800 my-3'>Support</p>
            <div className='max-w-2xl mx-auto text-center'>
            <p>Feel free to reach out to us at any time with any questions or concerns using the provided contact information </p>
            </div>

            <div className='flex'>
                <span className='flex py-2 mt-2 items-center mr-10 sm:mr-45'>
                    <MdOutlineEmail className='text-yellow-500 text-2xl mr-3' />
                    <div className='leading-5'>
                        <p>Email Address</p>
                        <p>info@umeed.org.in</p>
                    </div>
                </span>
                <span className='flex py-2 mt-2 items-center '>
                    <FaPhone className='text-yellow-500 text-2xl mr-3' />
                    <div className='leading-5'>
                        <p>Phone Number</p>
                        <p>91 8439335370 9699088779</p>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Page
