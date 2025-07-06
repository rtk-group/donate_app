import React from 'react'
import Image from 'next/image';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
// import Locator from '../../../components/locator';
import Link from 'next/link';
import Socialmediabox from '../../../components/sociamediabox';
import Locator from '../../../components/locator';

function page() {
    return (
        <main className='bg-white'>
        <Locator text='Future plans'/>
           <div className='pt-2 md:pt-10  pb-18 grid grid-rows lg:grid-cols-[2fr_1fr] lg:max-w-5xl mx-auto'>
                           {/* left section */}
           
                           <div className='px-4 pr-10'>
                               <p className='text-xs leading-5 text-gray-600'>At Umeed Global School, we envision a future where quality education is not just a dream but a tangible reality for every aspiring mind. Our institution stands as a Center of Excellence, with a special emphasis on STEM education, entrepreneurship, and innovation, all deeply rooted in Islamic doctrine and culture. We believe in nurturing young minds, empowering them with knowledge and skills that prepare them for the challenges of the modern world while staying firmly grounded in their values and heritage.</p>
                               <p className='text-xs leading-5 text-gray-600 my-7'>Our long-term vision is to establish one such Center of Excellence in every state across India. As we lay the foundation of this transformative educational movement, we are eagerly anticipating the graduation of our first batch in 2030. This milestone will mark a significant achievement, showcasing our successful and impactful educational model.</p>
                               <p className='text-xs leading-5 text-gray-600 my-7'>With the success of our first batch, we will take a bold leap forward, expanding our reach and establishing Umeed Global School branches across the country. Our goal is to create a replicable model that provides high-quality education, fosters leadership, and nurtures a strong sense of identity and purpose in students from all backgrounds.</p>
                               <p className='text-xs leading-5 text-gray-600'>By staying true to our mission and values, we aspire to transform the educational landscape of India, championing the cause of excellence in education. Umeed Global School shall stand as a beacon of innovation and inspiration, recognized as a pioneer in shaping young minds. With a steadfast commitment to providing world-class learning enriched with ethical and cultural principles, we embark on an ambitious journey—one that empowers generations to dream, lead, and create a brighter future.</p>
                                
                                <div className='border border-black my-7 w-50 md:max-w-xs mx-auto'></div>

                               <Socialmediabox/>
                           </div>
           
           
           
                           {/* right section */}
                           <div className='px-12 lg:px-0 flex justify-center lg:block mt-5 lg:mt-0 mb-3 lg:mb-0 w-full '>
                               <div className='w-full md:max-w-80 flex flex-col'>
                                   <Image src='/assets/gallery2.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover rounded-t-lg' />
                                   <div className='py-7 px-10 shadow-[0_5px_25px_0_gray] rounded-b-lg'>
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

export default page
