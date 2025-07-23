"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { IoMdArrowDropright } from "react-icons/io";
import Locator from '../../../../components/locator';


function Page() {
    // Track which item is open by its index (null means none are open)
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleAccordion = (index) => {
    // If clicking the already open item, close it. Otherwise open the clicked one
    setOpenIndex(openIndex === index ? null : index);
  };

    return (
        <main className='bg-white'>
            <Locator text='FAQ'/>
            <div className='flex flex-col items-center px-5 py-3 text-black'>
                <p className='text-2xl my-5'>Frequently Asked Questions</p>

                {/* questions box */}
                <div className=''>

                    {/* FAQ 1 */}
                    <div className='border border-gray-100 px-5 pt-4'>
                        <div onClick={() => toggleAccordion(0)} className='flex justify-between text-sm '>
                            <p>1. Does Qadri Khair Foundation accept donation in cash?</p>
                            <p className={`${openIndex === 0 ? 'hidden': 'block' } text-lg ml-2`}><IoMdArrowDropright /></p>
                        </div>
                        <div className={`max-w-200 mt-5 text-gray-600 overflow-hidden duration-300 ease-in-out text-sm ${openIndex === 0 ? 'h-auto max-h-[500px] pb-4' : 'h-0'}`}>Yes, Qadri Khair Foundation accepts donations in both account and cash, however you have to provide us with your PAN number for every donation you make. </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className='border border-gray-100 px-5 pt-4 mt-2'>
                        <div onClick={() => toggleAccordion(1)} className='flex justify-between text-sm '>
                            <p>2. Does Qadri Khair Foundation cater to only muslim children?</p>
                            <p className={`${openIndex === 1 ? 'hidden': 'block' } text-lg ml-2`}><IoMdArrowDropright /></p>
                        </div>
                        <div className={`max-w-200 mt-5 text-gray-600 overflow-hidden text-sm duration-300 ease-in-out ${openIndex === 1 ? 'h-auto max-h-[500px] pb-4' : 'h-0'}`}>Yes, Qadri Khair Foundation accepts donations in both account and cash, however you have to provide us with your PAN number for every donation you make. </div>
                    </div>
                    {/* FAQ 3 */}
                    <div className='border border-gray-100 px-5 pt-4 mt-2'>
                        <div onClick={() => toggleAccordion(2)} className='flex justify-between text-sm '>
                            <p>3. Is Qadri Khair Foundation a free school ?</p>
                            <p className={`${openIndex === 2 ? 'hidden': 'block' } text-lg ml-2`}><IoMdArrowDropright /></p>
                        </div>
                        <div className={`max-w-200 mt-5 text-gray-600 overflow-hidden text-sm duration-300 ease-in-out ${openIndex === 2 ? 'h-auto max-h-[500px] pb-4' : 'h-0'}`}>Qadri Khair Foundation is not a “free” school—we prefer the term “sponsored.” We fully sponsor 75% of our students, covering everything that accompanies education, including school fees, books, uniforms, and meals. The remaining 25% of our students are fee-paying and contribute to sustaining and expanding our impact. </div>
                    </div>
                    {/* FAQ 4 */}
                    <div className='border border-gray-100 px-5 pt-4 mt-2'>
                        <div onClick={() => toggleAccordion(3)} className='flex justify-between text-sm '>
                            <p>4. How to get admission in Qadri Khair Foundation ?</p>
                            <p className={`${openIndex === 3 ? 'hidden': 'block' } text-lg ml-2`}><IoMdArrowDropright /></p>
                        </div>
                        <div className={`max-w-200 mt-5 text-gray-600 overflow-hidden text-sm duration-300 ease-in-out ${openIndex === 3 ? 'h-auto max-h-[500px] pb-4' : 'h-0'}`}>Qadri Khair Foundation admits orphaned, destitute, and economically disadvantaged children, as well as those from middle-class and privileged families, through a structured admission process. Application forms for the entrance test are made available from October 15th to November 15th, along with the announcement of class-wise vacancies. The Entrance Test is conducted in January to assess the child’s academic potential, followed by an interview with parents or guardians of shortlisted candidates. The final list of selected students is announced in February. Admission is granted only after document verification and completion of background checks at the time of admission. </div>
                    </div>
                    {/* FAQ 5 */}
                    <div className='border border-gray-100 px-5 pt-4 mt-2'>
                        <div onClick={() => toggleAccordion(4)} className='flex justify-between text-sm '>
                            <p>5. How can I be a teacher at Qadri Khair Foundation ?</p>
                            <p className={`${openIndex === 4 ? 'hidden': 'block' } text-lg ml-2`}><IoMdArrowDropright /></p>
                        </div>
                        <div className={`max-w-200 mt-5 text-gray-600 overflow-hidden text-sm duration-300 ease-in-out ${openIndex === 4 ? 'h-auto max-h-[500px] pb-4' : 'h-0'}`}>It is a simple process when it comes to applying to be teacher at Qadri Khair Foundation; you can either mail your application with your resume at the official mail – alhadi.resume@gmail.com – or you can drop by and submit your CV at the registered academy office, and a member of our team will contact you, if the vacancy arises. </div>
                    </div>
                    {/* FAQ 6 */}
                    <div className='border border-gray-100 px-5 pt-4 mt-2'>
                        <div onClick={() => toggleAccordion(5)} className='flex justify-between text-sm '>
                            <p>6. How can I volunteer/do internship at Qadri Khair Foundation?</p>
                            <p className={`${openIndex === 5 ? 'hidden': 'block' } text-lg ml-2`}><IoMdArrowDropright /></p>
                        </div>
                        <div className={`max-w-200 mt-5 text-gray-600 overflow-hidden text-sm duration-300 ease-in-out ${openIndex === 5 ? 'h-auto max-h-[500px] pb-4' : 'h-0'}`}>You can become a part of our vibrant Youth Wing, which currently includes over 50 dedicated volunteers. If you’re interested in volunteering or interning with us, please drop your CV at *alhadi.resume@gmail.com*. We’d love to hear from you! </div>
                    </div>
                    {/* FAQ 7 */}
                    <div className='border border-gray-100 px-5 pt-4 mt-2'>
                        <div onClick={() => toggleAccordion(6)} className='flex justify-between text-sm '>
                            <p>7. Is Qadri Khair Foundation a secular institution?</p>
                            <p className={`${openIndex === 6 ? 'hidden': 'block' } text-lg ml-2`}><IoMdArrowDropright /></p>
                        </div>
                        <div className={`max-w-200  mt-5 text-gray-600 overflow-hidden text-sm duration-300 ease-in-out ${openIndex === 6 ? 'h-auto max-h-[500px] pb-4' : 'h-0'}`}>Yes, Qadri Khair Foundation is a secular institution, but it caters mainly to the children from muslim community. It also aim at getting the minority affiliation and getting registered as a minority institute under the Article 30, that gives right to minorities to establish and administer educational institutions. </div>
                    </div>
                    {/* FAQ 8 */}
                    <div className='border border-gray-100 px-5 pt-4 mt-2'>
                        <div onClick={() => toggleAccordion(7)} className='flex justify-between text-sm '>
                            <p>8. Can I donate books, food and clothes for the children of Qadri Khair Foundation?</p>
                            <p className={`${openIndex === 7 ? 'hidden': 'block' } text-lg ml-2`}><IoMdArrowDropright /></p>
                        </div>
                        <div className={`max-w-200  mt-5 text-gray-600 overflow-hidden text-sm duration-300 ease-in-out ${openIndex === 7 ? 'h-auto max-h-[500px] pb-4' : 'h-0'}`}>Yes, donations of books, food, and clothes are welcome at Qadri Khair Foundation. However, all donations must go through a specific process to ensure they align with our standards and current requirements. Please note that we only accept new items, as we are committed to providing the best for our children. </div>
                    </div>
                    {/* FAQ 9 */}
                    <div className='border border-gray-100 px-5 pt-4 mt-2'>
                        <div onClick={() => toggleAccordion(8)} className='flex justify-between text-sm '>
                            <p>9. Does Qadri Khair Foundation accept anonymous donations?</p>
                            <p className={`${openIndex === 8 ? 'hidden': 'block' } text-lg ml-2`}><IoMdArrowDropright /></p>
                        </div>
                        <div className={`max-w-200 mt-5 text-gray-600 overflow-hidden text-sm duration-300 ease-in-out ${openIndex === 8 ? 'h-auto max-h-[500px] pb-4' : 'h-0'}`}>Yes, we accept anonymous donations, however we would like to inform you that 30% of your donations would be given while filing the IT return if the donor wishes to be anonymous </div>
                    </div>


                </div>

                {/* right section */}
                        
                                    <div className='border border-white w-full md:max-w-80 my-8 px-2  flex flex-col  '>
                                        <Image src='/assets/gallery2.jpg' alt='Gallery image ' width={600} height={400} className='w-full h-full object-cover rounded-t-lg' />
                                        <div className='py-7 px-10 shadow-[0_5px_25px_0_gray] rounded-b-lg'>
                                                <Link href={'/donate-us'}> <button className='text-xs py-3 w-full bg-yellow-500 rounded-sm relative top-0 hover:-top-2 transition-all duration-400 cursor-pointer'>DONATE NOW</button> </Link>
                                        </div>
                                    </div>
                
                                    
                                
            </div>
        </main>
    )
}

export default Page



