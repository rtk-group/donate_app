import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import Socialmediabox from '../../../components/sociamediabox'
import Locator from '../../../components/locator'

function Page() {
    return (
        <main className='bg-white'>
        <Locator text='Teachers &'/>
            <div className='pt-2 md:pt-10  pb-10 grid grid-rows lg:grid-cols-[2fr_1fr] lg:max-w-5xl mx-auto'>
                                      {/* left section */}
                      
                                      <div className='px-4 pr-10 text-black'>
                                          <p className='text-3xl md:text-2xl tet-gray-600'>Teachers</p>
                                          
                                          <div className='lg:max-w-130 rounded-lg overflow-hidden my-4 md:pl-10 md:px-5 lg:pl-0 lg:px-0'>
                                              <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full lg:h-90 object-cover rounded-lg' />
                                          </div>

                                        <p className='text-xs text-gray-600'>At Umeed Global School, our primary objective is to provide a nurturing environment and high-quality education for children who otherwise lack the resources to access such opportunities. To achieve this, we have assembled a team of highly trained, qualified, and passionate educators who are dedicated to fostering both the academic and holistic development of our students.</p>
                                          <p className='text-xs text-gray-600 my-7'>Our teachers are not merely instructors; they are facilitators in the truest sense, guiding students through the learning process with care, innovation, and insight. They create dynamic, interactive learning environments that encourage curiosity, critical thinking, and active participation, both inside and outside the classroom. Recognizing that effective facilitation requires staying relevant in an ever-changing world, our educators regularly undergo comprehensive teacher training programs. These programs ensure they are equipped with contemporary teaching methodologies and remain attuned to the latest educational advancements.</p>
                                          <p className='text-xs text-gray-600 mt-6'>At Umeed Global School, facilitation goes beyond traditional teaching. Our educators serve as mentors and role models, empowering students to take ownership of their learning journeys while providing unwavering support. By fostering a culture of collaboration and exploration, our facilitators inspire students to grow into confident, compassionate, and capable individuals ready to make a positive impact on the world</p>
                                         

                                        
                                          
                                          <div className='lg:max-w-130 rounded-lg overflow-hidden my-4 md:pl-10 md:px-5 lg:pl-0 lg:px-0'>
                                              <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full lg:h-90 object-cover rounded-lg' />
                                          </div>

                                           <p className='text-3xl md:text-2xl tet-gray-600'>House Parents</p>

                                        <p className='text-xs text-gray-600 my-6'>At Umeed Global School we have a compulsory residential program where students live with us 24/7, making our campus not just a place of learning but also a second home. Recognizing that our students spend a significant amount of time away from their families and guardians, we are committed to providing them with a caring, nurturing, and holistic environment that supports their emotional, physical, and intellectual growth.</p>
                                          <p className='text-xs text-gray-600 my-7'>At UGS, we believe in creating a family-like atmosphere that fosters trust and belonging. This philosophy is reflected in how we run our residential facilities—there is no concept of traditional wardens overseeing our hostels. Instead, we have dedicated individuals who we proudly refer to as House Parents. These House Parents go beyond mere supervision; they act as mentors, caregivers, and role models, ensuring that every child feels valued, supported, and loved.</p>
                                          <p className='text-xs text-gray-600 mt-6'>Our House Parents take on a parental role, nurturing and guiding the students as if they were their own children. They provide not only structure and discipline but also warmth, encouragement, and emotional support. Their unwavering dedication is evident in numerous ways, one of which is personally accompanying the students each morning to drop them to the school building, ensuring a smooth and reassuring start to their academic day. In the afternoon, during dispersal, they stand at the school entrance, ready to receive and welcome the children with warmth and affection—just like parents—before safely escorting them back to the residential facility. This seamless transition and coordinated handover between House Parents and teachers ensure that students remain under continuous care, supervision, and emotional support 24/7, fostering a secure, nurturing, and well-structured environment for their holistic growth and development.</p>
                                         
                                         

                                             <p className='text-xs text-gray-600 my-7'></p>
                                         <Socialmediabox/>
                      
                                      </div>
                      
                      
                      
                                      {/* right section */}
                                      <div className='px-12 lg:px-5 flex justify-center lg:block mt-10 lg:mt-0 mb-3 lg:mb-0 w-full '>
                                          <div className='w-full md:max-w-80 flex flex-col'>
                                              <Image src='/assets/gallery2.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover rounded-t-lg' />
                                              <div className='py-7 px-10 shadow-[0_5px_25px_0_gray] rounded-b-lg'>
                                              <button className='text-gray-700 text-xs py-3 w-full bg-yellow-500 rounded-sm relative top-0 hover:-top-2 transition-all duration-400 cursor-pointer'>DONATE NOW</button>
                                              </div>
                                          </div>
                      
                                          <div className='hidden lg:flex flex-col mt-5 gap-3 text-gray-600 '>
                                              <p className='text-xl text-black'>Quick Links</p>
                                              <Link href='' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Founder</p></Link>
                                              <Link href='' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Managing Committi</p></Link>
                                              <Link href='' className='flex group '> <FaAngleRight className='text-black mr-2 pt-1 group-hover:text-gray-600' /> <p className='group-hover:text-black text-sm'>Advisory Board</p></Link>
                      
                                          </div>
                      
                                      </div>
                      
                      
                                  </div>
        </main>
    )
}

export default Page
