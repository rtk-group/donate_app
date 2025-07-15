'use client'
import React from 'react'
import Image from 'next/image'
import Locator from '../../../../components/locator';
import { IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp, FaTwitter, FaLinkedin, FaFacebook} from "react-icons/fa";
import Slider from '../../../../components/slider';


function Page() {
    const [open, setopen] = React.useState(false);

    return (
        <main className='bg-white'>
            <Locator text='what we do' />

            <div className='py-5 pb-12 text-black grid grid-rows lg:grid-cols-[2fr_1fr] lg:max-w-5xl mx-auto'>
                {/* left section */}

                <div className='px-4 pr-10'>

                    <p className='text-xl mb-1 '>Academics</p>

                    <Slider/>
                   

                    <p className='text-xs text-gray-600 my-2'>In alignment with our vision, we at Qadri Khair Foundation have adopted a holistic approach to education, ensuring that learning is accessible, inclusive, and enriching for all students. We follow the CBSE curriculum, placing special emphasis on discussions, debates, interdisciplinary learning, enquiry-based learning, and experiential learning. Our
                        instructional approach is structured using Bloom’s Taxonomy, ensuring a progressive learning experience from foundational knowledge to higher-order thinking skills such as analysis, evaluation, and creativity. Through this methodology, we enable students to learn by doing, develop critical and creative thinking, enhance problem-solving skills, and acquire essential 21st-century skills. We have developed a well-integrated system of curriculum, pedagogy, and assessment, where learning outcomes, teaching objectives, and goals are clearly defined for educators.</p>

                    <p className='text-xs text-gray-600 my-8'>Qadri Khair Foundation is proud to offer a comprehensive curriculum that integrates Science, Technology, Engineering, and Mathematics (STEM) disciplines. We believe that a strong foundation in STEM empowers students to become critical thinkers, innovative problemsolvers, and future pioneers in scientific discovery and technological advancement. To further enhance STEM learning, we have established an Innovation and Technology Lab that provides hands-on learning experiences in Robotics, AI, Coding, Data Analytics, 3D Designing & Printing, and Drone Technology. These subjects encourage students to explore emerging technologies, equipping them with the skills required to succeed in an ever-evolving digital world.</p>
                    <p className='text-xs text-gray-600 my-8'>At Qadri Khair Foundation, we offer six language subjects: English, Hindi, Bengali, Arabic,
                        Urdu, and Sanskrit. This multilingual approach fosters linguistic diversity, enhances cognitive flexibility, and broadens students’ perspectives, strengthen their cultural awareness, and prepare them for a globalized world.</p>
                    <p className='text-xs text-gray-600 my-8'>Along with the CBSE curriculum, we also offer an Islamic Curriculum, which is divided into two major divisions: Quran and Deeniyat. The Quran curriculum includes recitation of the Quran (Naazrah with Tajweed), memorization of the Quran (Hifz-ul-Quran), and
                        understanding of the Quran (Fahm-ul-Quran). The Deeniyat curriculum focuses on various aspects of Islamic knowledge, including Faith (Aqaid), Islamic rulings (Fiqh), Hadees, Seerah, and Du’aas. These teachings are imparted practically through various workshops, ensuring that students not only gain religious knowledge but also understand its application in daily life.</p>
                    <p className='text-xs text-gray-600 my-8'>At Qadri Khair Foundation, we strive to create an inspiring learning environment where academic excellence is blended with ethical values, innovation is nurtured alongside spiritual growth, and students are shaped into intelligent, responsible, and forward-thinking individuals prepared for the challenges of the modern world.</p>



                    <p className='text-xl my-3'>tarbiyah</p>
                    <div className='max-w-125'>
                        <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover' />
                    </div>

                    <p className='text-xs text-gray-600 my-8'>At Qadri Khair Foundation, education and Tarbiyah (nurturing/upbringing) go hand in hand, forming the bedrock of a child’s holistic development. Too often, education is reduced to academics, at Qadri Khair Foundation we believe that academics is just a single drop in the vast ocean of learning, while Tarbiyah encompasses the rest. It is Tarbiyat that shapes character, instills values, and nurtures identity. Sadly, this essential aspect of upbringing is often overlooked, though it is a lifelong journey, woven into every moment, guiding children not just in what to think, but in how to think, act, and conduct themselves also.</p>
                    <p className='text-xs text-gray-600 my-8'>Tarbiyah is not confined to classrooms or schedules—it permeates every interaction, from the playground to the prayer hall. A well-rounded approach nurtures emotional, psychological, and spiritual well-being, ensuring hearts remain inclined toward goodness and faith. The perfect model of Tarbiyah was demonstrated by Rasulullah ( صلى الله عليه وسلم), the greatest teacher of humanity. Without formal classrooms or modern tools, he imparted wisdom through dialogue, every Hadith beginning with “Qaala Rasulullah ( صلى الله عليه وسلم),” emphasizing the power of meaningful conversation and personal example.</p>
                    <p className='text-xs text-gray-600 my-8'>At Qadri Khair Foundation, we strive to adopt this Prophetic approach, where dialogue forms the foundation and actions reinforce lessons. Teachers play a crucial role—not merely imparting knowledge but embodying moral behavior. Through their interactions, they model politeness, humility, care, and respect, ensuring that students absorb values naturally through real-life examples.</p>
                    <p className='text-xs text-gray-600 my-8'>Aligning Tarbiyah with the Islamic calendar provides a meaningful framework for character development.The months of Rajab, Shaban, Ramadan and Rabi Al Awwal are among the most important months of the year therefore the school prioritises teaching the students about the importance of these months and embodying the Propeht’s Sunnah in daily life. The school conducts interactive learning sessions, structured workshops and activities corresponding to each month in the Islamic Calendar help students not only understand the significance of these sacred months but also embody Taqwa, Akhlaq, and a deep connection to Deen, striving to live by the pleasure of Allah (SWT). </p>
                    <p className='text-xs text-gray-600 my-8'>Daily Tarbiyah practices are seamlessly integrated into school life. The day begins with Fajr prayer and Quranic recitation, instilling discipline and spiritual mindfulness. Salah is a compulsory part of the routine, with all five prayers observed in Jama’ah, fostering unity, self-discipline, and devotion. Tahajjud is encouraged to cultivate sincerity in worship and strengthen one’s bond with Allah. The morning assembly sets the spiritual and moral tone through Tilawah, Hadith reflection, discussions, quizzes, teacher’s talks, thoughts of the day, and daily news headlines, while Tarbiyah lessons are naturally woven into academic subjects, ensuring Islamic values become an intrinsic part of learning. A compulsory Tarbiyat session is held daily between Asr and Maghrib Salah, through Hadith and understanding the importance of Salah, providing a sacred time for spiritual growth and strengthening our connection with Allah. Every Sunday, this blessed gathering includes a special Seerat-un-Nabi صلى الله عليه وسل session, focusing on the teachings of RasoolAllah صلى الله عليه وسلم, inspiring us to embody his Sunnah in our daily lives and instilling his true love in the heart of our students.</p>
                    <p className='text-xs text-gray-600 my-8'>Every Friday, a dedicated day of Tarbiyah, begins after Maghrib on Thursday, setting the tone for spiritual reflection and self-improvement. Students engage in reciting Surah Kahf, sending abundant Darood upon Rasulullah ( صلى الله عليه وسلم), and increasing supplications. On Friday morning, they follow the Sunnah by performing Ghusl, wearing clean clothes, applying fragrance, and arriving early for Jumu’ah prayer. The day is celebrated just like the day of Eid, marked by gratitude, congregational worship, and reflection, fostering a deep connection to faith and making Friday a day of renewal and transformation. Every Friday, a special Tarbiyah session is conducted by our founder himself with all the students of UGS, reflecting & understanding the purpose of life.</p>
                    <p className='text-xs text-gray-600 my-6'>The goal of Tarbiyah at Qadri Khair Foundation is to nurture individuals who are spiritually grounded, emotionally balanced, and mentally strong. Through dialogue, mentorship, life skills, and thematic guidance, we instill trustworthiness, kindness, discipline, and unwavering faith in Allah (SWT), shaping hearts that serve mankind with integrity. True Tarbiyah transcends academics, fostering Qalbe Saleem (a sound heart), Taqwa (consciousness of Allah), and deep love for Rasulullah صلى الله عليه وسلم, inspiring students to embody his noble character. By integrating Tarbiyah in education, we aspire to raise a generation that enlightens society with knowledge, righteousness, and service to humanity.</p>
                    




                    <p className='text-2xl my-3'>Health And Nutrition</p>
                    <Slider/>

                    <p className='text-xs text-gray-600 my-2'>At Qadri Khair Foundation, we believe that a healthy body and mind are the cornerstone of a child’s overall development. Many of our students come from impoverished and challenging backgrounds, where access to proper nutrition and healthcare is scarce. Usually when students from especially weaker sections of society join us, they are weak, malnourished, and show signs of stunted growth. Through our dedicated efforts, we have been able to restore their health, ensuring they not only look healthier but also feel physically and emotionally fit.</p>
                    <p className='text-xs text-gray-600 my-7'>Our students reside on campus full-time, and we take full responsibility for their nutrition and well-being. We provide them with three wholesome meals a day, along with nutritious snacks and milk at regular intervals. We take great pride in offering a balanced and nourishing diet that significantly enhances their energy levels and overall health. The visible improvements in their vitality and well-being stand as a testament to our dedication and care.</p>
                    <p className='font-semibold text-gray-700 my-7'>Comprehensive Health Check-Ups</p>
                    <p className='text-xs text-gray-600 my-7'>To ensure our students remain in the best of health, Qadri Khair Foundation conducts four comprehensive health check-ups annually, focusing on areas that are often neglected in underserved communities: general health check-up, dental check-up, eye examination, and ENT (ear, nose, and throat) check-up.</p>
                    <p className='text-xs text-gray-600 my-7'>In addition to this, we have a full-time, certified nurse on staff who is always available to attend to the children’s immediate medical needs. Our in-house pharmacy is fully stocked with essential medications and supplies, ensuring that we are well-equipped to provide prompt care and administer first aid whenever necessary. This comprehensive healthcare support is designed to prioritize the well-being and safety of every child in our care.</p>
                    <p className='text-xs text-gray-600 my-7'>These regular health assessments, combined with the proper nutrition we provide, empower our students to focus on their studies, extracurricular activities, and personal growth. Additionally, in cases where students fall ill, face medical emergencies, or experience any mishaps, the school fully sponsors the healthcare of those who cannot afford it, ensuring they receive the necessary treatment without financial burden.</p>
                    <p className='text-xs text-gray-600 my-7'>At Qadri Khair Foundation, our health and nutrition program reflects our mission to nurture our children into well nourished, healthy individuals. By addressing their nutritional and healthcare needs, we aim to provide them with a solid foundation for a brighter and healthier future.</p>
                    
                    
                    
                    <p className='text-2xl my-3'>Research and Presentation</p>
                    <Slider/>

                    <p className='text-xs text-gray-600 my-1'>We have introduced research and presentation as an integral part of our curriculum, particularly in subjects like Science and Social Studies. This initiative emphasizes the significance of research work, fostering curiosity, analytical thinking, and structured inquiry among our students.</p>
                    <p className='text-xs text-gray-600'>Every academic cycle includes dedicated research and presentation components, aimed at equipping students with essential skills such as data collection, critical analysis, and logical reasoning. Our goal is to help them navigate the complexities of research, ensuring they understand its nuances and methodologies.</p>
                    <p className='text-xs text-gray-600'>Equally important is the presentation of research findings. As the renowned Greek statesman Pericles once said, “Those who can think, but cannot express what they think, place themselves at the level of those who cannot think.” This underscores the importance of articulation—students must not only develop ideas but also effectively communicate them.</p>
                    <p className='text-xs text-gray-600'>Through this initiative, we also nurture the art of public speaking, an invaluable skill that builds confidence, enhances persuasion, and empowers students to express themselves with clarity and conviction. By presenting their research before an audience, they learn to engage listeners, structure their thoughts coherently, and deliver their ideas with impact—preparing them to be effective communicators in any field they choose.<br />We emphasize both the content of their presentations and the manner in which they present—how they articulate their thoughts, structure their arguments, and engage with their audience. Throughout the process, their intellectual capabilities are continuously challenged through questioning and discussion, mirroring real-world scenarios. This dynamic approach prepares them to think on their feet, defend their viewpoints, and communicate with confidence—essential skills for future success. By responding to spontaneous queries and discussions, students sharpen their ability to think quickly, adapt, and articulate their thoughts under pressure, fostering a mindset of agility and resilience.</p>


                    <p className='text-2xl my-3'>Innovation & Technology</p>
                    <Slider/>
                    <p className='text-xs text-gray-600 my-1'>At Qadri Khair Foundation, we believe that innovation and scientific curiosity are the cornerstones of a progressive education system. By emphasizing a strong foundation in STEM (Science, Technology, Engineering, and Mathematics) education, we empower our students to become analytical thinkers, problem solvers, and visionaries prepared to address global challenges and drive technological advancements. Our STEM-focused curriculum is designed to spark curiosity and cultivate a passion for innovation & discovery among students. It goes beyond theoretical learning by offering practical, real-world applications of science and technology, nurturing critical thinking & higher order thinking from a young age.</p>
                    <p className='text-sm font-semibold text-gray-700 my-7 border-b inline'>State-of-the-Art Innovation & Technology Lab</p>
                    <p className='text-xs text-gray-600 my-5'>To support this vision, we have established a state-of-the-art Innovation & Technology Lab, which serves as a dynamic space for exploration, creativity, and hands-on learning. The lab is equipped with advanced tools and resources that provide students with opportunities to delve into emerging technologies and gain practical expertise in areas that define the future.<br />The Innovation & Technology Lab empowers students with hands-on experience in cuttingedge fields, including robotics, AI, coding, data analytics, 3D designing, and drone technology. Students design, build, and program robots, explore AI concepts like machine learning and ethics, and develop coding skills across various languages. They gain proficiency in data collection, analysis, and visualization while bringing creative ideas to life through 3D modelling and printing. Additionally, hands-on training in drone mechanics and flight operations prepares them for real-world applications.<br />At Qadri Khair Foundation, the Innovation & Technology Lab is more than just a facility—it is a space where ideas take shape, curiosity is encouraged, and the leaders of tomorrow are nurtured. By integrating STEM education with practical applications, we aim to inspire students to think boldly, innovate fearlessly, and contribute meaningfully to a technology driven world.</p>





                    <p className='text-2xl my-3'>Sports and Self Defense</p>
                    <Slider/>
                    <p className='text-xs text-gray-600 my-1'>At Qadri Khair Foundation, sports play a vital role in shaping the holistic development of our students. Beyond physical fitness, sports instil discipline, teamwork, leadership, and a spirit of excellence. We offer a diverse range of sporting activities, ensuring that students remain active, mentally sharp, and prepared for challenges both on and off the field.</p>
                    <p className='text-xs text-gray-600 my-7'>We provide a variety of engaging sports activities that enhance coordination, agility, strategic thinking, and endurance. Students can participate in football, basketball, badminton, table tennis, chess, carom, and archery.</p>
                    <p className='text-xs text-gray-600 my-7'>These sports not only contribute to students’ physical well-being but also equip them with essential life skills such as perseverance, resilience, and strategic decision-making.</p>
                    <p className='font-semibold text-gray-700'>Self-Defense Training</p>
                    <p className='text-xs text-gray-600 my-7'>Considering the diverse backgrounds of our students, Qadri Khair Foundation prioritizes selfdefense training as a crucial part of its curriculum. These sessions empower students with essential self-defense skills while enhancing their confidence, discipline, and physical endurance. The form of self-defense we teach is kickboxing, and every second child in our school is a skilled fighter. For the last three years, the state championship trophy has remained with us. We have proudly produced a dozen state-level champions and four national champions, solidifying our reputation as a powerhouse in the sport.</p>




                    <p className='text-2xl my-3'>Residential Programme</p>
                    <Slider/>
                    <p className='text-xs text-gray-600 my-1'>At Qadri Khair Foundation, we believe holistic development thrives in an immersive environment. Our compulsory Residential Programme provides a structured, value-driven space where students experience personal growth, academic excellence, and character building under the continuous guidance of House Parents.</p>
                    <p className='text-xs text-gray-600 my-7'>Living on campus full-time, students benefit from a safe, nurturing, and home-like atmosphere that fosters trust, comfort, and meaningful relationships. The programme seamlessly integrates academic rigor with moral, emotional, and spiritual development, following a Tarbiyat-centered approach rooted in the school’s ethos.</p>
                    <p className='text-xs text-gray-600 my-7'>The well-organized dormitories ensure a comfortable and secure living environment. Spacious, well-ventilated rooms provide fresh air and natural light, while each student has a personal bed with comfortable bedding and dedicated storage. Modern, hygienic bathrooms, a well-equipped dining hall serving nutritious meals, and a dedicated laundry facility contribute to a healthy, well-maintained lifestyle. House Parents oversee hygiene, discipline, and emotional well-being, ensuring students feel at home.</p>
                    <p className='text-xs text-gray-600 my-7'>The well-organized dormitories ensure a comfortable and secure living environment. Spacious, well-ventilated rooms provide fresh air and natural light, while each student has a personal bed with comfortable bedding and dedicated storage. Modern, hygienic bathrooms, a well-equipped dining hall serving nutritious meals, and a dedicated laundry facility contribute to a healthy, well-maintained lifestyle. House Parents oversee hygiene, discipline, and emotional well-being, ensuring students feel at home.</p>

                    <div className='my-7 pl-4'>
                        <p className='text-xs text-gray-600 my-2'>1. Extended Learning goes beyond the classroom, encouraging deeper engagement with subjects instead of conventional homework.</p>
                        <p className='text-xs text-gray-600 my-2'>2. Revision Work helps reinforce concepts taught during the day, while,</p>
                        <p className='text-xs text-gray-600 my-2'>3. Advanced Reading allows students to prepare for upcoming lessons, fostering a proactive learning habit.</p>
                    </div>
                    <p className='text-xs text-gray-600 my-7'>With personalized mentorship, students develop effective study skills, confidence, and a sense of academic ownership. Beyond academics, the programme emphasizes physical and emotional well-being through regular exercise, games, counseling, and ongoing guidance. Rooted in Tarbiyat, it nurtures character development through mentorship, dialogue, and personal example.</p>
                    <p className='text-xs text-gray-600 my-7'>More than just a place to stay, the Residential Programme is a transformative journey— shaping well-rounded individuals with the skills, values, and resilience to thrive in all aspects of life.</p>





                    <p className='text-2xl my-5'>Books & Uniform</p>
                    <div className='max-w-125'>
                        <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover' />
                    </div>
                    <p className='text-xs text-gray-600 my-7'>At Qadri Khair Foundation, we believe that every child deserves a chance to learn, dream, and build a brighter future—regardless of their financial background. For us, education is not just about books and classrooms; it's about nurturing potential and creating opportunities.</p>
                    <p className='text-xs text-gray-600 my-7'>That’s why we don’t just teach; we support. We provide free education, books, uniforms, and other essentials to orphans, destitute children, and those who cannot afford them. We want every child who walks through our doors to feel valued, included, and empowered to chase their dreams.</p>
                    <p className='text-xs text-gray-600 my-7'>Umeed is more than a school—it’s a home of hope, where no child is left behind, and every student gets the support they need to thrive. Because at Umeed, education is not aprivilege; it’s a right.</p>
                    
                    
                    
                    
                    <p className='text-2xl my-3'>Learning beyond the Classroom</p>
                    <Slider/>
                    <p className='text-xs text-gray-600 my-1'>At Qadri Khair Foundation, we believe that education is not just about memorizing facts and passing exams—it’s about shaping young minds, building character, and preparing our students for life. For us, a school is not just a place where lessons are taught; it’s a space where dreams take flight, confidence is built, and values are nurtured.</p>
                    <p className='text-xs text-gray-600 my-7'>We take pride in offering a learning experience that goes beyond textbooks and classrooms, fostering creativity, leadership, and moral values through a rich variety of co-curricular and extracurricular activities. Throughout the year, we organize engaging competitions and hands-on experiences that encourage students to explore their potential.</p>
                    <p className='text-xs text-gray-600 my-7'>The Azaan Competition helps students perfect the call to prayer with devotion, while the Handwriting & Calligraphy Competition instils patience and precision. Our Spelling & Dictation Competition strengthens language skills, and Elocution & Public Speaking Competitions inspire students to express themselves with confidence. To deepen their connection with faith, we host the Qur’an & Tafseer Competition, and through the Naat Competition, students find a soulful way to express their love for the Prophet (PBUH). The Art & Craft Week sparks creativity, and activities like Debates and Mock Parliament challenge young minds to think critically, communicate persuasively, and step into leadership roles.</p>
                    <p className='text-xs text-gray-600 my-7'>We also offer Islamic Workshops, where students deepen their understanding of faith, ethics, and values. Our Field Trips and Educational Excursions provide real-world exposure, bridging classroom learning with practical experiences. Special assemblies dedicated to national and historical figures such as Mahatma Gandhi, Rabindranath Tagore, Dr B R Ambedkar, Maulana Abdul Kalam Azaad and Subhas Chandra Bose instill a sense of history, patriotism, and respect for their diverse contributions to society.</p>
                    <p className='text-xs text-gray-600 my-7'>At our core, we are more than just a school—we are a community that nurtures young hearts and minds. Beyond academics, we encourage students to engage in community service, leadership initiatives, and hands-on experiences that instill a sense of responsibility, kindness, and empathy. We want every child who walks through our doors to leave not just with knowledge, but with the confidence, integrity, and strength to make a positive difference in the world.</p>
                    <p className='text-xs text-gray-600 my-7'>At Qadri Khair Foundation, learning is a journey—one that shapes confident, compassionate, and well-rounded individuals, ready to embrace the future with open minds and kind hearts. Because real education isn’t just about what we learn, but about who we become.</p>



                    <p className='text-2xl my-3'>Mentorship Program</p>
                    <Slider/>
                    <p className='text-xs text-gray-600 mt-1'>At Qadri Khair Foundation, we believe that true education extends beyond textbooks and classrooms. Our Mentorship Program is designed to nurture leadership, inspire ambition, and provide students with direct guidance from accomplished individuals across various fields.<br />Through this program, we connect our students with leaders, change makers, and industry experts who serve as mentors. Each mentor is assigned a group of students, guiding them through real-world challenges, helping them refine their skills, and shaping them into future leaders. This initiative is built on the principle that leadership is best learnt from leaders. While our teachers provide a strong academic foundation, mentors bring practical insights, life experiences, and industry exposure that prepare students for success beyond and after school.<br />Each mentorship program is structured based on its unique requirements, taking into account the mentor’s availability, student’s need and the intensity of the mentorship needed. The program is designed to be flexible, ensuring that mentors can contribute their time in a way that is effective and sustainable. It can be: a few days every month, Quarterly sessions, Annual mentorship engagements or a customized structure.</p>
                    <p className='text-xs text-gray-600 '>The mentor-mentee bond is at the heart of this initiative. This program creates an environment where students receive first-hand guidance from experienced professionals, allowing them to learn, grow, and evolve under the mentorship of those who have walked the path of leadership. The relationship built through this program goes beyond academics —mentors serve as role models, guides, and catalysts for transformations, helping students become better versions of themselves.<br />In today’s rapidly changing world, leadership is not just about theoretical knowledge—it requires real-world experience, practical wisdom, and exposure to challenges and opportunities. Our mentorship program addresses this critical gap by connecting leaders at the top level with young minds at the grassroots level, where they can train, inspire, and shape young minds. This initiative ensures that the wisdom of experienced leaders is passed down to the next generation, fostering a culture of guidance, empowerment, and growth.</p>
                    <p className='text-xs text-gray-600 mb-5'>Through mentorship, students at Qadri Khair Foundation gain the knowledge, confidence, and skills they need to step into leadership roles and create a meaningful impact later in the society.<br />At Qadri Khair Foundation, we don’t just educate students—we empower them to lead, innovate, and inspire. Through mentorship, we are shaping a future where every student has the opportunity to learn from the best and become better leaders of tomorrow.</p>


                    <p className='text-2xl my-5'>Sustainable Development Goals</p>
                    <div className=' max-w-100 '>
                        <Image src='/assets/gallery1.jpg' alt='Gallery image 1' width={600} height={400} className='w-full h-full object-cover' />
                    </div>
                    <p className='text-xs text-gray-600 my-7'>Goals are a set of global objectives finalised by the United Nations in 2015, which comprise of 17 major issues that ail the modern world. The terminology used is specific about the underlying threat of unsustainable standards, as it gives primordial importance to sustainable development which signifies the essence of sustainability in combined global efforts. Umeed Academy has undertaken the onus to work on 8 of the 17 objectives specified in the SDGs list, released by the United Nations in the year 2021.</p>
                    <p className='text-xs text-gray-600 my-7'>We have concentrated our work and efforts in the areas that we believe need more attention and are those that we are competent to engage with.</p>
                    <p className='text-xs text-gray-600 my-7'>To begin with, a majority of our work is focussed on eradicating the festering malady called poverty by educating children, we combat hunger by providing food for the children, ensure good health and well being of the children by providing routine checkup’s and regular healthcare facilities, we are very particular about providing them with quality education, promoting gender equality by admitting children from both sexes alike, we make sure that high standards of sanitation and clean water are followed.</p>
                    <p className='text-xs text-gray-600 my-7'>We imbue the principles of equality and fraternity among our children to reduce the inequality prevalent in society. These objectives cannot be achieved single handedly but with the combined efforts and partnership with other social workers, NGO’s and other members committed towards a similar cause.</p>

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
                <div className='px-4 text-gray-600'>
                    <div className='max-w-90 flex flex-col '>
                        <Image src='/assets/gallery2.jpg' alt='Gallery image ' width={600} height={400} className='w-full h-full object-cover rounded-t-sm' />
                        <div className='py-7 px-10 shadow-[0_5px_25px_0_gray] rounded-b-sm'>
                                <button className='text-xs py-3 w-full bg-yellow-500 rounded-sm relative top-0 hover:-top-2 transition-all duration-400 cursor-pointer'>DONATE NOW</button>
                        </div>
                    </div>

                    <div className='hidden lg:block mt-5'>
                        <div className='flex border gap-2 justify-between p-3 text-xs'>
                            <p>Quick Links</p>
                            <span className={`${open ? 'rotate-180' : ""} px-1 cursor-pointer`} onClick={() => setopen(!open)}><IoIosArrowUp /></span>
                        </div>

                        <div className={`border ${open ? 'h-113' : 'h-0'} duration-400 overflow-hidden`}>
                            <div className='text-xs gap-2 flex flex-col p-4'>
                                <p>1. What We Do</p>
                                <p>2. Academics</p>
                                <p>3. Tarbiyah</p>
                                <p>4. Health And Nutrition</p>
                                <p>4.1. Comprehensive Health Check-Ups</p>
                                <p>5. Research and Presentation</p>
                                <p>6. Innovation & Technology</p>
                                <p>6.1. State-of-the-Art Innovation & Technology Lab</p>
                                <p>7. Sports and Self Defense</p>
                                <p>7.1. Self-Defense Training</p>
                                <p>8. Infrastructure</p>
                                <p>9. Residential Programme</p>
                                <p>10. Books & Uniform</p>
                                <p>11. Morals and Values</p>
                                <p>12. Combating Social Problems</p>
                                <p>13. Learning beyond the Classroom</p>
                                <p>14. Mentorship Program</p>
                                <p>15. Sustainable Development Goals</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </main>
    )
}

export default Page
