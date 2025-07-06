"use client"
import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineEmail } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Locator from '../../../components/locator';
// import Slider from '../../../components/slider';


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
        <main className='bg-white'>
        <Locator text='Fee Policy'/>
        <div className='flex flex-col items-center text-xs pb-10 px-4 bg-white text-gray-600'>
            <p className='text-2xl font-bold text-black'>Admission and Fee Policy:</p>

            <div className='max-w-110 leading-5 py-4'>
                <p className='mb-4'>Umeed Global School is dedicated to providing equitable and accessible education to all students, irrespective of their socioeconomic backgrounds. Our mission is to eliminate barriers to educational opportunities and empower students to realize their full potential.</p>
                <p className='mb-4'>To promote equitable access to education, the school will prioritize admissions for candidates from underprivileged backgrounds, including orphans, destitute children, and those from economically challenged families. 75% of the seats will be available for merit-based scholarships sponsored by the school board, which will cover tuition fees, hostel accommodation, and meals, ensuring these candidates receive a 100% scholarship.</p>
                <p className='mb-4'>In order to maintain the school’s financial stability and sustainability, 25% of the seats will be reserved for merit-based candidates who are able to pay the full school and hostel fees.</p>
                <p className='mb-4'><span className='font-bold text-gray-800'>Discretion:</span>The allocation of seats to different candidates will be determined through a comprehensive evaluation process conducted by our admissions team. This process will assess whether candidates qualify for the scholarship or non-scholarship category.</p>
                <div className='border max-w-50 md:max-w-sm mx-auto my-4'></div>



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
        </main>
    )
}

export default Page
