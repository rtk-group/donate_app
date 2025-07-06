import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";

function Locator(props) {
    return (
        <div className=''>
            <div className='relative -top-9 h-65 overflow-hidden'>
                <img className='w-full' src='/assets/headerimg.jpg' alt='header image' />
                <div className='h-full absolute top-0 flex flex-col md:flex-row items-center justify-center md:justify-around w-full'>
                    <div className='text-2xl font-semibold'>{props.text}</div>
                    <div className='flex gap-2'>Home <FaGreaterThan className='mt-1' /> {props.text}</div>
                </div>
            </div>
        </div>
    )
}

export default Locator
