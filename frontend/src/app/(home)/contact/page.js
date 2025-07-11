import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
// import { FaGreaterThan } from "react-icons/fa6";
import Locator from '../../../../components/locator';


function Page() {
    return (
        <main className='bg-gray-100'>

            <Locator text='contact'/>

            <div className='flex flex-col md:flex-row justify-center md:pb-16 md:pt-8'>
                <div className='md:w-[40%] text-gray-500 px-6'>
                    <p className='text-lg text-yellow-500 font-semibold'>Contact Us</p>
                    <p className='text-3xl my-2     '>Get In Touch</p>
                    <p>At Quadri Khair Foundation, we work hard to give our children a better future. If you need more information or have questions, please call or email us. You can also fill out the form on the side, and we’ll get back to you immediately.</p>
                    <div className='mt-5'>
                        <span className='flex mt-2 items-center text-sm'>< FaLocationDot className='text-yellow-500 mr-2' /> <p>Bahoranpur Kalan, Post Manpur, Moradabad 244001, India</p></span>
                        <span className='flex py-2 mt-1 items-center text-sm'><FaPhone className='text-yellow-500 mr-2' /><p>9557940516 <p>91 9758490592</p> </p></span>
                        <span className='flex  mt-1 items-center text-sm'>< MdOutlineEmail className='text-yellow-500 mr-2' /> <p>Qadrikhairfoundation@Gmail.Com</p></span>
                    </div>
                </div>

                <div className='flex flex-col md:w-[40%] p-8 m-4 my-10 md:my-0 rounded-2xl shadow-[0_3px_15px_0_gray]'>
                    <div className='flex flex-col'>
                        <input className='outline-none placeholder:text-gray-600 text-sm  p-2 mb-3 rounded-sm border text-black border-gray-400' type='text' placeholder='Name'/>
                        <input className='outline-none placeholder:text-gray-600 text-sm p-2 rounded-sm border text-black border-gray-400' type='email' placeholder='Email'/>
                    </div>
                    <textarea className='outline-none placeholder:text-gray-600 text-sm p-2 mt-3 h-30 rounded-sm border text-black border-gray-400' placeholder='Message'/>
                    <button className='bg-yellow-500 p-2 w-15 text-sm mt-3 rounded-sm'>Send</button>
                </div>
            </div>
        </main>
    )
}

export default Page
