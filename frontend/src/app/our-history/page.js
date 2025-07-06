import React from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import Locator from '../../../components/locator';
import Link from 'next/link';

function Page() {
    return (
        <main className=' bg-white'>

            <Locator text='our history' />
            <div className='pt-2 md:pt-10  pb-18 grid grid-rows lg:grid-cols-[2fr_1fr] lg:max-w-5xl mx-auto'>
                {/* left section */}

                <div className='px-4 pr-10'>
                    <p className='text-xs text-gray-600'>At just 18 years of age, when Mr. Wali Rahmani passed out of high school, he found himself deeply moved by the pervasive poverty and glaring inequality around him and throughout our country. The stark contrast between the affluent and the poor left an indelible mark on his conscience. He recognized an urgent need for leadership—leaders who could unite and
                        inspire change—yet found that those in power often perpetuated corruption or spread divisive ideologies. From a young age, Mr. Rahmani had visited slums and ghettos, bearing witness to the heart-breaking realities of those trapped in poverty. Mr. Rahmani realized that it’s not merely poverty that people are trapped in, but generational poverty—a vicious cycle that robs entire families of opportunities, hinders their potential, and extinguishes
                        their hope for a brighter future.
                    </p>
                    <p className='text-xs text-gray-600 my-8'>Believing in the transformative power of education, Mr. Rahmani envisioned it as the ultimate tool to break this vicious cycle. To him, leadership wasn’t just about guiding others but about empowering them to become leaders themselves, creating a ripple effect of positive change. It was this conviction that led him to make a life-altering vow: before his time in this world ended, he would mentor at least ten impoverished children to rise as leaders who would work toward eradicating poverty and uplifting humanity.</p>
                    <p className='text-xs text-gray-600 mb-3'>However, turning this vision into reality proved challenging. As a young man barely out of his teens, he faced skepticism and resistance. Many parents were understandably hesitant to entrust their children to an 18-year-old, regardless of his noble intention. Yet, despite the discouragement, he refused to give up.<br />One day, a divine inspiration altered the course of his mission. Instead of seeking children with families, Mr. Rahmani realized that his true calling lay in caring for those without one. A powerful saying of Prophet Muhammad (PBUH) reignited his purpose: ‘to care for and uplift orphans,’ offering them not just shelter but a chance at a brighter future.</p>
                    <div className='h-60 p-5 border-l-yellow-500 border-l-5 max-w-125'>
                        <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover' />
                    </div>

                    <p className='text-xs text-gray-600 mb-7 mt-1'>This marked a turning point in his journey. With renewed determination, he pledged to
                        adopt at least ten orphaned children before turning 20.</p>
                    <p className='text-xs text-gray-600 mb-7'>The very first batch of Umeed Home, filled with gratitude and reverence, affectionately
                        began calling Mr. Rahmani, Abbaji (father). This title symbolized not just his role as a guardian but also the deep trust and love he had cultivated with them.</p>
                    <p className='text-xs text-gray-600 mb-7'>By the end of 2018, Umeed Home had grown to house 10–20 students, all boys. However, a significant change came in 2019, when Umeed began welcoming girls as well. During his visits to slum areas, Mr. Rahmani noticed how girls would look up to him with silent hope, yearning for the opportunities their brothers were receiving. Their unspoken pleas resonated deeply with him, and he expanded Umeed’s mission to include them.</p>
                    <p className='text-xs text-gray-600 mb-7'>What began as Umeed Home for a handful of children soon evolved into a miniature school. Over time, its reputation spread, and the number of students swelled. Unable to turn away any child seeking help, Mr. Rahmani and his team embraced the challenge of accommodating all. By the end of 2019, Umeed Home had grown from three to sixty students—an equal number of boys and girls.</p>
                    <p className='text-xs text-gray-600 mb-4'>As the institution grew, so did its aspirations. What once operated on a 1200 sq. ft. apartment slowly expanded into 6000 sq. ft. premises growing from Umeed Home to Umeed Academy.</p>

                    <div className='max-w-125'>
                        <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover' />
                    </div>

                    <p className='text-xs text-gray-600 my-7'>By the end of 2021, Mr. Rahmani’s unwavering resilience started bearing fruit as Umeed Academy’s name gained prominence across the city and started establishing its credibility. The pilot project that Mr. Rahmani had already been working upon for the past four years now just required the right foundation to grow and take flight. This vision started converting
                        into reality when he acquired a 2-acre land in 2022, and in 2023, the construction for Umeed Global School started.</p>
                    <p className='text-xs text-gray-600 mb-7'>However, funding remained a major hurdle. Mr. Rahmani had hoped that the wealthy businessmen of the community would step forward to support this noble cause through generous donations. But to his disappointment, financial backing did not materialize as
                        expected. While a few extended their support, the amount required to complete the construction of a world class school remained insufficient. As a result, even though construction began in June 2023, progress was painfully slow for the next three months.</p>
                    <p className='text-xs text-gray-600 mb-7'>Faced with this challenge, Mr. Rahmani made an emotional appeal through a YouTube video. He reached out to the Indian Muslims—particularly those from modest backgrounds— urging just 10 lakh people to contribute ₹100 each. His call was not just for funds but for faith, unity, and a shared dream of education for all.</p>
                    <p className='text-xs text-gray-600 mb-7'>Then, something extraordinary happened. On 15th September 2023, his prayers, hard work,
                        and unwavering belief were answered. Within few hours of him releasing the video, it went
                        viral across social media platforms. The response was nothing short of historic—within just seven days, ₹7 crores were raised. Over the following months, the goal of ₹10 crores was achieved, as over 5 lakh people, each donating ₹100, came together to turn his vision into reality. It was a testament to the power of collective goodwill, proving that when a cause is pure, even small contributions can create monumental change. This fundraising effort exemplified the proverb, “every drop makes an ocean,” as each individual contribution, no matter how small, collectively amassed to create a mighty impact.</p>
                    <p className='text-xs text-gray-600 mb-7'>With the inflow of funds, construction gained momentum. What had once seemed like an uphill battle turned into a remarkable feat. And then, another historic milestone was achieved—the school was not only built but fully completed within just 365 days from the time the crowdfunding took place. By September 2024, a fully functional institution stood
                        tall—equipped with classrooms, facilities, and a promise of a brighter future for countless children. Umeed Global School opened its gates to its first batch of students from KG to Class 7—a testament to the unwavering dedication of its founder and supporters.</p>
                    <p className='text-xs text-gray-600 mb-7'>Today, Umeed Global School serves over 400 children, primarily from disadvantaged and volatile backgrounds. These children, who once faced an uncertain future, are now embraced by a nurturing environment that empowers them to heal, learn, and grow. They are no longer mere victims of circumstance but torchbearers of hope and agents of change.</p>
                    <p className='text-xs text-gray-600 mb-7'>The journey from Umeed Home to Umeed Global School is a story of resilience, vision, and relentless faith. It is a testament to the power of education as a tool for liberation and transformation. With every child who walks through its doors, Umeed continues to build a legacy of hope—a legacy that defies the odds and inspires the world to dream of a better tomorrow.</p>

                    <div className='mt-10'>
                        <p className='text-sm text-gray-600 mb-3'>Share This:</p>
                        <div className='flex gap-2'>
                            <div className='p-2 text-gray-700 bg-yellow-500 rounded-lg '><FaWhatsapp /></div>
                            <div className='p-2 text-gray-700 bg-yellow-500 rounded-lg '><FaFacebook /></div>
                            <div className='p-2 text-gray-700 bg-yellow-500 rounded-lg '><FaLinkedin /></div>
                            <div className='p-2 text-gray-700 bg-yellow-500 rounded-lg '><FaTwitter /></div>
                        </div>
                    </div>

                </div>



                {/* right section */}
                <div className='px-12 lg:px-0 flex justify-center lg:block mt-20 lg:mt-0 mb-3 lg:mb-0 w-full '>
                    <div className='w-full md:max-w-90 flex flex-col'>
                        <Image src='/assets/gallery2.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover' />
                        <div className='py-7 px-10 shadow-[0_5px_25px_0_gray]'>
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
