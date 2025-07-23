import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import Socialmediabox from '../../../../components/sociamediabox'
import Locator from '../../../../components/locator'

function page() {
    return (
        <main className='bg-white'>
        <Locator text='Advisory Board'/>
           <div className='pt-2 md:pt-10  pb-10 grid grid-rows lg:grid-cols-[1fr_1fr] lg:max-w-5xl mx-auto'>
                          {/* left section */}
          
                          <div className=' pr-10 px-3 sm:px-5 text-black'>
                              
                              {/* detail 1 */}
                              <div className=' '>
                                <div className='md:max-w-90 rounded-lg overflow-hidden mb-1'>
                                  <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full md:h-60 object-cover rounded-lg' />
                              </div>
                              <p className='text-lg font-semibold relative top-1'>Dr. Anjan Bhattacharya</p>
                              <i className='text-sm'>– HOD Child Development Center, Apollo Multispecialty Hospital Kolkata</i>
                              <div className='border max-w-60 mx-auto my-6'></div>
                              </div>
                              {/* detail 2 */}
                              <div className=' '>
                                <div className='md:max-w-90 rounded-lg overflow-hidden mb-1'>
                                  <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full md:h-60 object-cover rounded-lg' />
                              </div>
                              <p className='text-lg font-semibold relative top-1'>Ms. Shabana Anwar</p>
                              <i className='text-sm'> - Academic Consultant, UGS, Expert in Early Childhood Education and Teacher Training with 20+ Years of Experience.</i>
                              <div className='border max-w-60 mx-auto my-6'></div>
                              </div>
                              {/* detail 3 */}
                              <div className=' '>
                                <div className='md:max-w-90 rounded-lg overflow-hidden mb-1'>
                                  <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full md:h-60 object-cover rounded-lg' />
                              </div>
                              <p className='text-lg font-semibold relative top-1'>Ms. Asma Alam</p>
                              <i className='text-sm'>School Administrator</i>
                              <div className='border max-w-60 mx-auto my-6'></div>
                              </div>
                              {/* detail 4 */}
                              <div className=''>
                                <div className='md:max-w-90 rounded-lg overflow-hidden mb-1'>
                                  <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full md:h-60 object-cover rounded-lg' />
                              </div>
                              <p className='text-lg font-semibold relative top-1'>Mr. Vijay Kumar, I.P.S(Retired)</p>
                              <i className='text-sm'>- Former IPS Officer and Expert in Human Resource Management.</i>
                              <div className='border max-w-60 mx-auto my-6'></div>
                              </div>
                              {/* detail 5 */}
                              <div className=' '>
                                <div className='md:max-w-90 rounded-lg overflow-hidden mb-1'>
                                  <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full md:h-60 object-cover rounded-lg' />
                              </div>
                              <p className='text-lg font-semibold relative top-1'>Mufti Anwar Khan Sargiroh</p>
                              <i className='text-sm'>- Islamic Scholar, Entrepreneur, and Founder of Halal Council of India.</i>
                              <div className='border max-w-60 mx-auto my-6'></div>
                              </div>
                              {/* detail 6 */}
                              <div className=''>
                                <div className='md:max-w-90 rounded-lg overflow-hidden mb-1'>
                                  <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full md:h-60 object-cover rounded-lg' />
                              </div>
                              <p className='text-lg font-semibold relative top-1'>Ms Shibanti Bhowmik</p>
                              <i className='text-sm'>- Former Founder Principal and Director with 30+ years of expertise in international CBSE education.</i>
                              <div className='border max-w-60 mx-auto my-6'></div>
                              </div>

                              {/* detail 7 */}
                              <div className='mb-8'>
                                <div className='md:max-w-90 rounded-lg overflow-hidden mb-1'>
                                  <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full md:h-60 object-cover rounded-lg' />
                              </div>
                              <p className='text-lg font-semibold relative top-1'>Mr. Pradeep Paul</p>
                              <i className='text-sm'>- Principal, Genesis Global School, Noida; Accomplished Educator with 20+ Years of Experience in Child-Centered Learning.</i>
                              </div>

                             <Socialmediabox/>
          
                          </div>
          
          
                          {/* right section */}
                          <div className='px-12 lg:px-0 flex justify-center lg:block mt-10 lg:mt-0 mb-3 lg:mb-0 w-full'>
                              <div className='w-full md:max-w-110 flex flex-col mx-auto'>
                                  <Image src='/assets/gallery2.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover rounded-t-lg' />
                                  <div className='py-7 px-10 shadow-[0_5px_25px_0_gray] rounded-b-lg'>
                                  <Link href={'/donate-us'}> <button className='text-gray-700 text-xs py-3 w-full bg-yellow-500 rounded-sm relative top-0 hover:-top-2 transition-all duration-400 cursor-pointer'>DONATE NOW</button> </Link>
                                  </div>
                              </div>
          
                              <div className='hidden lg:flex flex-col mt-5 gap-3 text-gray-600 md:max-w-110 mx-auto '>
                                  <p className='text-xl text-black'>Quick Links</p>
                                  <Link href={'/teachers-house-partners'} className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Teachers & House Partners</p></Link>
                                  <Link href={'/founder'} className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Founder</p></Link>
                                  <Link href={'/managing-committi'} className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Managing Committi</p></Link>
                              </div>
          
                          </div>
          
          
                      </div> 
        </main>
    )
}

export default page
