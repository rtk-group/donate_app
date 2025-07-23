'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Locator from '../../../../components/locator';
import Socialmediabox from '../../../../components/sociamediabox';


function Page() {

    return (
        <main className='bg-white'>
            <Locator text='what we do' />

            <div className='py-5 pb-12 text-black grid grid-rows lg:grid-cols-[2fr_1fr] lg:max-w-5xl mx-auto'>
                {/* left section */}

                <div className='px-4 pr-10'>

                    <p className='text-xl mb-1 '>What We Do </p>

                    <p className='text-sm font-semibold mt-3'>. School Education (Q K Academy)</p>
                    <p className='text-sm font-semibold'>. Educational Awareness Drives</p>
                    <p className='text-sm font-semibold'>. Future Plans:</p>

                    <p className='text-sm font-semibold mt-5'>* Plantation Projects</p>
                    <p className='text-sm font-semibold'>* Relief & Support</p>
                    <p className='text-sm font-semibold mb-7'>* Women Empowerment</p>

                    <Socialmediabox />

                </div>

                {/* right section */}
                <div className='px-4 text-gray-600'>
                    <div className='max-w-90 flex flex-col '>
                        <Image src='/assets/gallery2.jpg' alt='Gallery image ' width={600} height={400} className='w-full h-full object-cover rounded-t-sm' />
                        <div className='py-7 px-10 shadow-[0_5px_25px_0_gray] rounded-b-sm'>
                            <Link href={'/donate-us'}> <button className='text-xs py-3 w-full bg-yellow-500 rounded-sm relative top-0 hover:-top-2 transition-all duration-400 cursor-pointer'>DONATE NOW</button> </Link>
                        </div>
                    </div>

                </div>

            </div>

        </main>
    )
}

export default Page
