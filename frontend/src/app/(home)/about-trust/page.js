import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Socialmediabox from '../../../../components/sociamediabox';
import Link from 'next/link';
import Locator from '../../../../components/locator';

function Page() {
    return (
        <main className='bg-white'>
            <Locator text='About Trust' />
            <div className='pt-2 md:pt-10  pb-18 grid grid-rows lg:grid-cols-[2fr_1fr] lg:max-w-5xl mx-auto'>
                {/* left section */}

                <div className='pl-4 text-black'>
                    <p className='text-2xl mb-2'>Details</p>
                    <p className='text-sm'>AL-HADI EDUCATIONAL TRUST DETAILS.</p>
                    <p className='text-xs text-gray-700 mb-2'>Umeed Global School, managed by Al Hadi Educational Trust.<br />Details of the trust are are follows:</p>

                    <div className='p-2 lg:p-5 lg:py-10 border-l-yellow-500 border-l-5 w-full lg:max-w-130 '>

                        <div className='text-xs'>
                            <p className=' '> <span className='font-semibold'>AL-HADI EDUCATIONAL TRUST</span> is a Trust registered under the provisions of the Indian Trust Act, 1882 with an objective of establishing educational institutions.</p>

                            <div className='ml-3'>
                                <p className='font-semibold mt-5'>. Vital Documents of Al Hadi Educational Trust :</p>
                                <p className='ml-9'>Trust registration number: IV - 2060/2000</p>
                                <p className='ml-9'>PAN No : AAITA0997L</p>
                                <p className='ml-9'>TAN No: CALA30044A</p>

                                <p className='font-semibold mt-5'>. Al Hadi Educational Trust is registered under 12AA of Income Tax Act:</p>
                                <p className='ml-9'>Registration No: CIT (exemption) Kolkata/12AA/2020-</p>
                                <p className='ml-9'>21/A/10707 Din & Order No: ITBA/EXM/S/12AA/2020-</p>
                                <p className='ml-9'>21/1031340048(1)</p>
                                <p className='ml-9'>Date: 09/03/2021</p>

                                <p className='font-semibold mt-5'>. Al Hadi Educational Trust is registered under 80G of Income Tax Act:</p>
                                <p className='ml-9'>Registration No: CIT (exemption) Kolkata/80G/2020-</p>
                                <p className='ml-9'>21/A/10573 Din & Order No: ITBA/EXM/S/80G/2020-</p>
                                <p className='ml-9'>21/1031340235(1)</p>

                                <p className='font-semibold mt-5'>. Al Hadi Educational Trust is eligible for undertaking CSR activities.</p>
                                <p className='ml-9'>CSR No : CSR00015906</p>
                            </div>
                        </div>
                    </div>
                    <Socialmediabox />
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
                        <Link href='vision-mission' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Vision & Mission Statement</p></Link>
                        <Link href='our-logo' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Our Logo</p></Link>
                        <Link href='about-trust' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>About Our Trust</p></Link>
                        <Link href='future-plans' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Future plans</p></Link>
                        <Link href='our-partners' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Our Partners</p></Link>
                    </div>

                </div>

            </div>
        </main>
    )
}

export default Page
