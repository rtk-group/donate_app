"use client"
import React from "react";
import { usePathname } from "next/navigation";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { GiCrossMark } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

function Header() {

  const [show, setshow] = React.useState(false);

  // Track which item is open by its index (null means none are open)
  const [openIndex, setOpenIndex] = React.useState(null);

  const togglelinks = (index) => {
    // If clicking the already open item, close it. Otherwise open the clicked one
    setOpenIndex(openIndex === index ? null : index);
  };

  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  function closeboth() {
    // console.log('hello function')
    setOpenIndex(null)
    setshow(false);
  }

  return (
    <>
      <style xml>
        {`
      ul>li{
      padding: 13px 20px;
      cursor: pointer;
      }
      `}
      </style>
      <header>

        <div className="lg:px-20 xl:px-25 bg-[#F5F5F5]">

          <div className="grid lg:grid-cols-[1fr_4fr] gap-2 text-black bg-[#F5F5F5] m-auto">
            <div className="flex w-full justify-center">
              <img className="max-[500px]:w-32 w-45 sm:w-60 md:w-30 lg:w-32" src="/assets/Logo.png" alt="" />
            </div>

            <div className=" hidden md:grid mb-7 lg:mb-0 grid-cols-[4fr_1fr] text-sm items-center">
              <div className=" flex justify-end mr-13 lg:mr-0 lg:justify-start">
                <div className="flex">
                  <span className="flex items-center mr-3 text-yellow-500 text-2xl"><MdOutlineEmail /></span>
                  <div>
                    <p className="text-xs mb-1">Email Address</p>
                    <p className="font-semibold">info@umeed.org.in</p>
                  </div>
                </div>
                <div className="flex mx-7">
                  <span className="flex items-center mr-3 text-yellow-500 text-2xl"><FaPhone /></span>
                  <div>
                    <p className="text-xs mb-1">Phone Number</p>
                    <p className="font-semibold">9690909619</p>
                  </div>
                </div>
                <div className="flex">
                  <span className="flex items-center mr-3 text-yellow-500 text-2xl"><FaLocationDot /></span>
                  <div>
                    <p className="text-xs mb-1">Our Location</p>
                    <p className="font-semibold">South 24 Pargana</p>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-end ">
                <Link href={'/donate-us'}>
                  <button className="w-30 py-3 text-[10px] mr-6 lg:w-35 lg:text-[15px] rounded-[8px] bg-[#FFC20E] font-semibold relative top-0 hover:-top-2 transition-all duration-400 cursor-pointer">Donate Now</button>
                </Link>
              </div>

            </div>

          </div>

          <nav className="flex items-center justify-between relative lg:grid z-2 lg:grid-cols-[3fr_1fr] px-9 py-2 md:px-6 md:py-6 lg:py-3 lg:px-5 mx-4 bg-[#FFFFFF] rounded-[5px] shadow-[0_3px_15px_0_gray]">
            <div className="hidden lg:flex flex-col items-center text-gray-700 ">
              <ul className="flex gap-3">
                <li className="relative before:content-[''] before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-300">
                  <Link href={'/'}>Home</Link>
                </li>

                {/* About page */}
                <div className="group">
                  <p className="cursor-pointer py-3 px-5 flex relative before:content-[''] before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-300 ">About <FaCaretDown className="ml-2" /></p>

                  <div className="bg-gray-200  absolute z-3 left-46 top-15 group-hover:h-88 transition-all duration-500 h-0 overflow-hidden">
                    <div className="text-xs text-gray-600 flex flex-col ">
                      <Link href={'/our-history'} className="px-3 py-2 hover:text-black hover:bg-gray-300">Our History</Link>
                      <Link href={'/vision-mission'} className="px-3 py-2 hover:text-black hover:bg-gray-300">Vision,Mission and Principal</Link>
                      <Link href={'/our-logo'} className="px-3 py-2 hover:text-black hover:bg-gray-300">Our Logo</Link>
                      <Link href={'/founder'} className="px-3 py-2 hover:text-black hover:bg-gray-300"><p>Founder`s Message</p></Link>
                      <Link href={'/about-trust'} className="px-3 py-2 hover:text-black hover:bg-gray-300"><p>About Our Trust</p></Link>
                      <Link href={'/infrastructure'} className="px-3 py-2 hover:text-black hover:bg-gray-300"><p>Infrastructure</p></Link>
                      <Link href={'/news'} className="px-3 py-2 hover:text-black hover:bg-gray-300"><p>News</p></Link>
                      <Link href={'/future-plans'} className="px-3 py-2 hover:text-black hover:bg-gray-300"><p>Future Plans</p></Link>
                      <Link href={'/our-partners'} className="px-3 py-2 hover:text-black hover:bg-gray-300"><p>Our Partners</p></Link>
                      <Link href={'/annual-report'} className="px-3 py-2 hover:text-black hover:bg-gray-300"><p>Annual Report</p></Link>
                      <Link href={'/faq'} className="px-3 py-2 hover:text-black hover:bg-gray-300"><p>FAQ</p></Link>
                    </div>
                  </div>
                </div>

                {/* people page */}
                <div className="group">
                  <p className="cursor-pointer py-3 px-5 flex relative before:content-[''] before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-300 ">People <FaCaretDown className="ml-2" /></p>

                  <div className="bg-gray-200 absolute z-3 left-75 top-15 group-hover:h-24 transition-all duration-500 h-0 overflow-hidden">
                    <div className=" text-xs text-gray-600 flex flex-col ">
                      <Link href={'managing-committi'} className="px-3 py-2 hover:text-black hover:bg-gray-300"><p>Managing Commitee</p></Link>
                      <Link href={'advisory-board'} className="px-3 py-2 hover:text-black hover:bg-gray-300"><p>Advisory Board</p></Link>
                      <Link href={'teachers-house-partners'} className="px-3 py-2 hover:text-black hover:bg-gray-300"><p>Teachers & House Partners</p></Link>
                    </div>
                  </div>
                </div>


                {/* what we do page */}
                <li className="relative before:content-[''] before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-300">
                  <Link href={'/what-we-do'}>What we do</Link>
                </li>

                {/* Addimission page */}
                <div className="group ">
                  <p className="cursor-pointer py-3 px-5 flex relative before:content-[''] before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-300 ">Admission <FaCaretDown className="ml-2" /></p>

                  <div className="bg-gray-200 absolute z-3 left-140 top-15 group-hover:h-17 transition-all duration-500 h-0 overflow-hidden">
                    <div className="text-xs text-gray-600 flex flex-col ">
                      <Link href={'/adimission-process'} className="px-3 py-2 hover:text-black hover:bg-gray-300"><p>Addimission Process</p></Link>
                      <Link href={'/fee-policy'} className="px-3 py-2 hover:text-black hover:bg-gray-300"><p>Fee Policy</p></Link>
                    </div>
                  </div>
                </div>

              </ul>
              <ul className="flex gap-3">
                <li className="relative before:content-[''] before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-300">School Calendar 2025</li>
                {/* contact page */}
                <li className="relative before:content-[''] before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-300">
                  <Link href='/contact'>Contact</Link>
                </li>

                {/*gallery page */}
                <li className="relative before:content-[''] before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-300">
                  <Link href='/gallery'>Gallery</Link>
                </li>
              </ul>
            </div>


            {/* side bar for mid screen */}
            <div className="lg:hidden sm:ml-7">
              <div onClick={() => setshow(!show)} className="w-9 p-[2px] md:rounded-[5px] text-black text-[42px] md:text-[30px] md:bg-[#F5F5F5]"><IoMenu className="sm:block md:hidden" /><IoMenu className={`${show ? 'hidden' : 'hidden md:block'}`} /><GiCrossMark className={show ? 'hidden md:block' : 'hidden'} /></div>
              <div className={`${show ? ' max-h-0 md:max-h-[705px]' : 'max-h-0'} overflow-hidden w-0 md:w-85 bg-red-300 mt-2 transition-all duration-300`} >
                <h1 className="text-black text-sm bg-[#EEEEEE] px-6 py-2" onClick={() => closeboth()}><Link href='/'>Home</Link></h1>
                <ul className="text-sm text-gray-700 bg-gray-100">
                  <li onClick={() => togglelinks(0)} className="flex gap-1">About <IoMdArrowDropdown className="text-xl" />
                  </li>
                  <div className={`${openIndex === 0 ? 'h-90 pt-2' : 'h-0'} duration-300 overflow-hidden text-xs flex flex-col`}>
                    <Link href={'/our-history'} onClick={() => closeboth()} className={`${isActive('/our-history') ? 'bg-gray-300 text-black ' : ''} pl-7 pb-2`}>Our History</Link>
                    <Link href={'/vision-mission'} onClick={() => closeboth()} className={`${isActive('/vision-mission') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Vision, Mission & Principal</Link>
                    <Link href={'/our-logo'} onClick={() => closeboth()} className={`${isActive('/our-logo') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Our Logo</Link>
                    <Link href={'/founder'} onClick={() => closeboth()} className={`${isActive('/founder') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Founder & Message</Link>
                    <Link href={'/about-trust'} onClick={() => closeboth()} className={`${isActive('/about-trust') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>About Our Trust</Link>
                    <Link href={'/infrastructure'} onClick={() => closeboth()} className={`${isActive('/infrastructure') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Infrastructure</Link>
                    <Link href={'/news'} onClick={() => closeboth()} className={`${isActive('/news') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>news</Link>
                    <Link href={'/future-plans'} onClick={() => closeboth()} className={`${isActive('/future-plans') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Future Plans</Link>
                    <Link href={'/our-partners'} onClick={() => closeboth()} className={`${isActive('/our-partners') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Our Partners</Link>
                    <Link href={'/annual-report'} onClick={() => closeboth()} className={`${isActive('/annual-report') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Annual Report</Link>
                    <Link href={'/faq'} onClick={() => closeboth()} className={`${isActive('/faq') ? 'bg-gray-300 text-black ' : ''} pl-7 pt-2`}>FAQ</Link>
                  </div>

                  {/* people page */}
                  <li onClick={() => togglelinks(1)} className="flex gap-1">People <IoMdArrowDropdown className="text-xl" /></li>
                  <div className={`${openIndex === 1 ? 'h-25' : 'h-0'} duration-300 overflow-hidden text-xs flex flex-col`}>
                    <Link href={'/managing-committi'} onClick={() => closeboth()} className={`${isActive('/managing-committi') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Managing Commitee</Link>
                    <Link href={'/advisory-board'} onClick={() => closeboth()} className={`${isActive('/advisory-board') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Advisory Board</Link>
                    <Link href={'/teachers-house-partners'} onClick={() => closeboth()} className={`${isActive('/teachers-house-partners') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Teachers & House Partners</Link>
                  </div>

                  <Link href='/what-we-do' onClick={() => closeboth()} className={`${isActive('/what-we-do') ? 'bg-gray-300 text-black ' : ''} flex pl-5 py-3`}>
                    What we do
                  </Link>

                  {/* Addimission page */}
                  <li onClick={() => togglelinks(2)} className="flex gap-1">Admission <IoMdArrowDropdown className="text-xl" /> </li>
                  <div className={`${openIndex === 2 ? 'h-17' : 'h-0'} duration-300 overflow-hidden text-xs flex flex-col`}>
                    <Link href={'/adimission-process'} onClick={() => closeboth()} className={`${isActive('/adimission-process') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Addimission Process</Link>
                    <Link href={'/fee-policy'} onClick={() => closeboth()} className={`${isActive('/fee-policy') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Fee Policy</Link>
                  </div>

                  <li>School Calendar 2025</li>
                  <Link href='/contact' onClick={() => closeboth()} className={`${isActive('/contact') ? 'bg-gray-300 text-black ' : ''} flex pl-5 py-3`} >
                    Contact
                  </Link>
                  <Link href='/gallery' onClick={() => closeboth()} className={`${isActive('/gallery') ? 'bg-gray-300 text-black ' : ''} flex pl-5 py-3`} >
                    Gallery
                  </Link>
                </ul>
              </div>
            </div>

            <div className="flex gap-2 justify-center items-center text-black  sm:mr-7 lg:mr-1">
              <p className="hidden md:flex">Follow Us:</p>

              <div className="flex gap-1 text-gray-700">
                <span className=" md:w-6 md:h-6 text-sm w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer"> <FaFacebook /> </span>
                <span className=" md:w-6 md:h-6 text-sm w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer"> <FaInstagram /> </span>
                <span className=" md:w-6 md:h-6 text-sm w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer"> <FaLinkedin /> </span>
                <span className=" md:w-6 md:h-6 text-sm w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer">  <FaTwitter /> </span>
              </div>

            </div>
          </nav>


        </div>
        <section className="bg-transparent lg:bg-white h-22 w-full absolute top-41 z-0"></section>

        {/* menu bar for mobile */}
        <div className={` ${show ? 'left-0' : '-left-[82%]'} bg-white md:hidden z-2 w-[82%] fixed h-screen overflow-y-auto top-0 text-black transition-all duration-400`}>

          <div className="p-1 text-yellow-500 sticky top-5 z-3 text-3xl left-[80%] w-10" onClick={() => setshow(!show)}>
            <GiCrossMark />
          </div>

          <div className="flex max-[490px]:flex-col mt-13 mb-20">
            <ul className="font-semibold  pl-4 flex flex-col max-w-60">

              <Link href='/' onClick={() => closeboth()} className={`${isActive('/') ? 'bg-gray-300 text-black ' : ''} flex pl-5 py-3`}>Home</Link>

              <li onClick={() => togglelinks(0)} className="flex gap-1">About <IoMdArrowDropdown className="text-xl" /></li>
              <div className={`${openIndex === 0 ? 'h-90' : 'h-0   '} duration-300 overflow-hidden text-xs flex flex-col`}>
                <Link href={'/our-history'} onClick={() => closeboth()} className={`${isActive('/our-history') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Our History</Link>
                <Link href={'/vision-mission'} onClick={() => closeboth()} className={`${isActive('/vision-mission') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Vision, Mission & Principal</Link>
                <Link href={'/our-logo'} onClick={() => closeboth()} className={`${isActive('/our-logo') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Our Logo</Link>
                <Link href={'/founder'} onClick={() => closeboth()} className={`${isActive('/founder') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Founder & Message</Link>
                <Link href={'/about-trust'} onClick={() => closeboth()} className={`${isActive('/about-trust') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>About Our Trust</Link>
                <Link href={'/infrastructure'} onClick={() => closeboth()} className={`${isActive('/infrastructure') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Infrastructure</Link>
                <Link href={'/news'} onClick={() => closeboth()} className={`${isActive('/news') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>news</Link>
                <Link href={'/future-plans'} onClick={() => closeboth()} className={`${isActive('/future-plans') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Future Plans</Link>
                <Link href={'/our-partners'} onClick={() => closeboth()} className={`${isActive('/our-partners') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Our Partners</Link>
                <Link href={'/annual-report'} onClick={() => closeboth()} className={`${isActive('/annual-report') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Annual Report</Link>
                <Link href={'/faq'} onClick={() => closeboth()} className={`${isActive('/faq') ? 'bg-gray-300 text-black ' : ''} pl-7 pt-2`}>FAQ</Link>
              </div>

              <li onClick={() => togglelinks(1)} className="flex gap-1">People <IoMdArrowDropdown className="text-xl" /></li>
              <div className={`${openIndex === 1 ? 'h-25' : 'h-0'} duration-300 overflow-hidden text-xs flex flex-col`}>
                <Link href={'/managing-committi'} onClick={() => closeboth()} className={`${isActive('/managing-committi') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Managing Commitee</Link>
                <Link href={'/advisory-board'} onClick={() => closeboth()} className={`${isActive('/advisory-board') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Advisory Board</Link>
                <Link href={'/teachers-house-partners'} onClick={() => closeboth()} className={`${isActive('/teachers-house-partners') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Teachers & House Partners</Link>
              </div>

              <Link href='/what-we-do' className={`${isActive('/what-we-do') ? 'bg-gray-300 text-black ' : ''} flex pl-5 py-3`}>What we do</Link>

              {/* Addimission page */}
              <li onClick={() => togglelinks(2)} className="flex gap-1">Admission <IoMdArrowDropdown className="text-xl" /> </li>
              <div className={`${openIndex === 2 ? 'h-17' : 'h-0'} duration-300 overflow-hidden text-xs flex flex-col`}>
                <Link href={'/adimission-process'} onClick={() => closeboth()} className={`${isActive('/adimission-process') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Addimission Process</Link>
                <Link href={'/fee-policy'} onClick={() => closeboth()} className={`${isActive('/fee-policy') ? 'bg-gray-300 text-black ' : ''} pl-7 py-2`}>Fee Policy</Link>
              </div>

              <li>School Calendar 2025</li>
              <Link href='/contact' onClick={() => closeboth()} className={`${isActive('/contact') ? 'bg-gray-300 text-black ' : ''} flex pl-5 py-3`}>Contact</Link>
              <Link href='/gallery' onClick={() => closeboth()} className={`${isActive('/gallery') ? 'bg-gray-300 text-black ' : ''} flex pl-5 py-3`}>Gallery</Link>
            </ul>
            {/* donate button */}
            <Link href={'/donate-us'} onClick={() => setshow(false)}>
              <button className=" ml-7 min-[490px]:relative -top-2 rounded-[6px] bg-yellow-500 font-semibold text-sm px-6 py-2">Donate Now</button>
            </Link>

          </div>
        </div>

      </header>

    </>
  );
}

export default Header;

