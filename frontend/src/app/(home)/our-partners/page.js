import React from 'react'
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa6";
import Link from 'next/link';
import Locator from '../../../../components/locator';
import Socialmediabox from '../../../../components/sociamediabox';

function Page() {
    return (
        <main className='bg-white'>
            <Locator text='Partners' />
            <div className='pt-2 md:pt-10  pb-12 grid grid-rows lg:grid-cols-[2fr_1fr] lg:max-w-5xl mx-auto'>
                {/* left section */}

                <div className='px-4 pr-10 text-black'>
                    <p className='text-3xl'>Teach for India</p>

                    <div className=' w-full lg:max-w-130'>
                        <Image src='/assets/Logo.png' alt='Gallery image 1' width={600} height={400} className='w-70 h-70 sm:w-100 sm:h-100 lg:max-w-75 lg:max-h-75 object-cover mx-auto' />
                    </div>


                    <p className='text-xs text-gray-600 leading-5'>Teach For India (TFI) is a non-profit and a movement of leaders that was founded by Shaheen Mistri in 2009. It is a part of the Teach For All network. To build a growing movement of leaders, Teach For India runs a two-year Fellowship and supports an Alumni movement. The Fellowship recruits college graduates and working professionals to serve as full-time teachers in low-income schools for two years.The mission of Teach For India is “one day all children will attain an excellent education.</p>
                    <p className='text-xs text-gray-600 leading-5 mt-5'>Three new fellows have joined our team and are collaborating with us on our children to further our objective.</p>
                    <div className='border w-50 md:w-xs mx-auto my-7'></div>

                    <p className='text-2xl my-4 '>NSS UNIT of Shri Shikshayatan College</p>
                    <div className='w-full lg:max-w-130'>
                        <Image src='/assets/Logo.png' alt='Gallery image 1' width={600} height={400} className='w-70 h-70 sm:w-100 sm:h-100 lg:max-w-75 lg:max-h-75 object-cover mx-auto' />
                    </div>


                    <p className='text-xs text-gray-600 leading-5'>Shri Shikshayatan College has one NSS Unit with 100 volunteers operating since 2009. The unit works throughout the year doing various programmes. The students do regular activities in local NGOs, Little Sisters of the Poor, Society for Indian Children Welfare, Umeed, Tiljala Shed. A special camp is held every year to make some tangible change in the lives of the less privileged. Apart from this eye camp, menstraual hygiene camp are held every year in collaboration with NGOs. The students also organize various seminars on pertinent issues of environment and social importance. </p>
                    <p className='text-xs text-gray-600 leading-5 mt-5'>They have been sending regular flow of volunteers for the personality development of our children.</p>
                    <div className='border w-50 md:w-xs mx-auto my-7'></div>

                    <p className='text-3xl'>Samaritan Help Mission (SHM)</p>
                    <div className='w-full lg:max-w-130'>
                        <Image src='/assets/Logo.png' alt='Gallery image 1' width={600} height={400} className='w-70 h-70 sm:w-100 sm:h-100 lg:max-w-75 lg:max-h-75 object-cover mx-auto' />
                    </div>


                    <p className='text-xs text-gray-600 leading-5'>The Samaritan Help Mission (SHM) is a voluntary, non-profit organisation with its headquarters in the Indian slum of Tikipara.The majority of people in Tikiapara are Muslims, making up over 80% of the entire population.Samaritan Help Mission was founded in 2001 and is dedicated to working for the emancipation and empowerment of local women who lack opportunities to join the main stream of life through education and vocational training livelihood and poor children of the area who have previously been involved in various nefarious activities. We share a wide range of academic tools with each other, and there is a constant state of communication between the two organisation, in order  to make our society a better place. </p>
                    <div className='border w-50 md:w-xs mx-auto my-7'></div>

                    {/* locator component */}
                    <Socialmediabox />
                </div>

                {/* right section */}
                <div className='px-12 lg:px-0 flex justify-center lg:block mt-10 lg:mt-0 mb-3 lg:mb-0 w-full '>
                    <div className='w-full md:max-w-90 flex flex-col lg:pr-4'>
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

export default Page
