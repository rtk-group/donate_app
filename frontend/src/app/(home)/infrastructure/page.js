'use client'
import React from 'react';
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa6";
import Link from 'next/link';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
// import Locator from '../../../components/locator';
import Socialmediabox from '../../../../components/sociamediabox';
import Locator from '../../../../components/locator';

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

            <Locator text='Infrastructure' />

            {/* image slider */}
            <div className='w-full mb-10'>
                <div className='max-w-5xl m-auto relative px-3 md:px-0 py-3 '>
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

            <div className='pt-2 md:pt-10  pb-18 grid grid-rows lg:grid-cols-[2fr_1fr] lg:max-w-5xl mx-auto'>
                {/* left section */}

                <div className='px-4 pr-10 text-black'>

                    <p className='text-xs text-gray-600 leading-5'>At UGS, we take immense pride in offering a world-class infrastructure that nurtures holistic development, innovation, and an exceptional learning experience. Our thoughtfully designed campus provides a safe, comfortable, and inspiring environment, enriched with modern amenities that support both academic and extracurricular excellence.</p>
                    <p className='font-semibold text-gray-800 my-3'>Innovative Learning Spaces</p>
                    <p className='text-xs text-gray-600 leading-5'>UGS features spacious, well-ventilated classrooms, each equipped with Interactive Flat Panels (IFP) to enhance digital learning and student engagement. Designed in alignment with the Reggio Emilia philosophy, our classrooms foster creativity and collaboration with a minimalistic yet stimulating setup. Whiteboards, soft boards, and ergonomically designed desks and chairs ensure both comfort and flexibility, creating an interactive, studentcentered learning experience. With a maximum capacity of 40 students per class, we cultivate an environment that encourages active participation and focused exploration.</p>
                    <p className='font-semibold text-gray-800 my-3'>State-of-the-Art Laboratories & Library</p>
                    <p className='text-xs text-gray-600 leading-5'>Our advanced laboratories are designed to promote hands-on learning and innovation. The Innovation & Technology Lab empowers students to engage in creative problem-solving and cutting-edge research, while our well-equipped Physics, Chemistry, and Biology labs provide the necessary apparatus for experiential scientific exploration. Our Computer Lab, equipped with high-speed internet and advanced computing systems, enhances digital literacy and IT proficiency. Complementing these facilities is our world-class library—a dynamic space with a collection of over 5,000 books and digital resources, fostering a culture of research, curiosity, and lifelong learning.</p>
                    <p className='font-semibold text-gray-800 my-3'>Thoughtfully Designed Amenities</p>
                    <p className='text-xs text-gray-600 leading-5'>UGS prioritizes a supportive and professional campus environment, ensuring comfort and convenience for students, faculty, and visitors. This commitment extends to maintaining pristine, high-standard washrooms, a welcoming waiting lounge, and a dedicated Mentors’ Lounge that fosters faculty collaboration and focused preparation.</p>
                    <p className='font-semibold text-gray-800 my-3'>Comprehensive Sports & Recreational Facilities</p>
                    <p className='text-xs text-gray-600 leading-5'>At UGS, we believe in nurturing a balanced lifestyle through sports and recreation. Our campus boasts a professional-grade football field and basketball court, encouraging teamwork and active participation. A fully equipped gymnasium promotes physical fitness and well-being.</p>
                    <p className='font-semibold text-gray-800 my-3'>Comfortable Residential & Dining Facilities</p>
                    <p className='text-xs text-gray-600 leading-5'>UGS provides well-planned residential facilities that ensure a secure and comfortable living experience for students and faculty. Our dormitories are thoughtfully designed, wellventilated; has a separate bed and storage space for each student and are equipped with modern attached washrooms & toilets, creating a home-like atmosphere. Well-equipped rooms are available for house parents and faculty members, ensuring their close proximity to students while offering them a comfortable living space. Additionally, our state-of-the-art dining hall, supported by a high-tech kitchen, offers a modern and hygienic setting where nutritious meals are served. To enhance students’ convenience, a well-facilitated laundry room ensures access to clean and fresh attire at all times.</p>
                    <p className='font-semibold text-gray-800 my-3'>A Vision Beyond Infrastructure</p>
                    <p className='text-xs text-gray-600 leading-5 mb-10'>At UGS, we go beyond building infrastructure—we create an environment that inspires learning, growth, and success. Our world-class facilities, coupled with an unwavering commitment to academic and personal development, ensure that every student embarks on a journey of excellence, innovation, and holistic learning. UGS is more than just a school—it is a world of possibilities,preparing students for a future of limitless opportunities.</p>

                    <Socialmediabox />
                </div>

                {/* right section */}
                <div className='px-12 lg:px-0 flex justify-center lg:block mt-20 lg:mt-0 mb-3 lg:mb-0 w-full '>
                    <div className='w-full md:max-w-90 flex flex-col'>
                        <Image src='/assets/gallery2.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover rounded-t-lg ' />
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
