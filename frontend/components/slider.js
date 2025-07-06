"use client"
import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoDotFill } from "react-icons/go";


function Slider() {

    // image collection for slider
    const slide = [
        { url: '/assets/gallery1.jpg' },
        { url: '/assets/gallery2.jpg' },
        { url: '/assets/gallery3.jpg' },
    ];

    const [currentindex, setcurrentindex] = React.useState(2)

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

        <div className='bg-white w-full'>
        <div className='max-w-3xl m-auto relative px-3 md:px-0 py-3 '>
            {/* images box */}
            <div className='flex gap-3'>
                <div style={{ backgroundImage: `url(${slide[currentindex].url})` }} className='w-full h-[200px] rounded-xl bg-center bg-cover duration-500'></div>
                <div style={{ backgroundImage: `url(${slide[nextindex].url})` }} className='hidden md:block w-full h-[200px] rounded-xl bg-center bg-cover duration-500'></div>
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

    )
}

export default Slider
