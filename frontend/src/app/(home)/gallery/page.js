"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Locator from '../../../../components/locator';


function Page() {
    return (
        <main className='bg-white'>
            
            {/* locator component */}
            <Locator text='gallery'/>

            <div className='flex justify-center text-2xl font-semibold mb-7 text-black'>
                <p>Pictures</p>
            </div>

            <div className='grid md:grid-cols-3 mx-2 rounded-lg overflow-hidden'>
                <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover' />
                <Image src='/assets/gallery2.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover' />
                <Image src='/assets/gallery3.jpg' alt='Gallery image 3' width={600} height={400} className='w-full h-full object-cover' />
                <Image src='/assets/gallery4.jpg' alt='Gallery image 3' width={600} height={400} className='w-full h-full object-cover' />
                <Image src='/assets/gallery5.jpg' alt='Gallery image 3' width={600} height={400} className='w-full h-full object-cover' />
                <Image src='/assets/gallery6.jpg' alt='Gallery image 3' width={600} height={400} className='w-full h-full object-cover' />
                <Image src='/assets/gallery7.jpg' alt='Gallery image 3' width={600} height={400} className='w-full h-full object-cover' />
                <Image src='/assets/gallery8.jpg' alt='Gallery image 3' width={600} height={400} className='w-full h-full object-cover' />
                <Image src='/assets/gallery9.jpg' alt='Gallery image 3' width={600} height={400} className='w-full h-full object-cover' />
                <Image src='/assets/gallery10.jpg' alt='Gallery image 3' width={600} height={400} className='w-full h-full object-cover' />
                <Image src='/assets/gallery11.jpg' alt='Gallery image 3' width={600} height={400} className='w-full h-full object-cover' />
                <Image src='/assets/gallery12.jpg' alt='Gallery image 3' width={600} height={400} className='w-full h-full object-cover' />
            </div>


            <div className='py-17 md:py-15 flex justify-center px-4'>
                <div className=' md:text-xs px-2 text-center max-w-md mx-auto text-black'>
                    <p className='text-3xl md:text-2xl mb-3'>Your Contribution Matters</p>
                    <p className='text-gray-600'>Your Support Will Help A Child Come Out Of The Vicious Cycle Of Generational</p>
                    <p className='py-1 text-gray-600'>Poverty Through Education, Health Care And Good Upbringing</p>
                    <div className=' flex justify-center mt-3'>
                        <Link href={'/donate-us'} className='text-xs py-3 px-5 bg-yellow-500 rounded-sm cursor-pointer relative top-0 hover:-top-2 duration-300'>Donate Now</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page
