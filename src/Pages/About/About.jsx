import AboutInfo from '@/components/About-Component/About-Information/AboutInfo'
import InfoStrip from '@/components/Layout/Information-Strip/InfoStrip'
import Navbar from '@/components/Layout/Navbar/Navbar'
import React from 'react'
import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import { cn } from '@/lib/utils'
// import chevr
import { ChevronRight } from 'lucide-react'
import Footer from '@/components/Layout/Footer/Footer'
import backgroundimg from '@/assets/backgroundimg.png'
import SideAction from '@/components/Layout/Side-Quick-Action/SideAction'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const About = () => {

    useGSAP(
        () => {
            // gsap code here...
            gsap.from('#about-bg', {
                // scrollTrigger: {
                //     trigger: '#about-bg',
                //     start: '20% bottom',
                //     markers: true,
                //     // scrub: true
                    
                // },
                opacity: 0,
                // scale: 0.8,
                // x: 100,
                duration: 1,
                // stagger: 0.5,
                // ease: 'power2.inOut'
            });
            gsap.from('#about-card-1', {
                scrollTrigger: {
                    trigger: '#about-card-1',
                    start: '20% bottom',
                    // markers: true,
                    // scrub: true
                    
                },
                opacity: 0,
                // scale: 0.8,
                // x: 100,
                duration: 1,
                // stagger: 0.5,
                // ease: 'power2.inOut'
            });
            gsap.from('#about-card-2', {
                scrollTrigger: {
                    trigger: '#about-card-2',
                    start: '20% bottom',
                    // markers: true,
                    // scrub: true
                    
                },
                opacity: 0,
                // scale: 0.8,
                // x: 100,
                duration: 1,
                // stagger: 0.5,
                // ease: 'power2.inOut'
            });
            gsap.from('#about-card-3', {
                scrollTrigger: {
                    trigger: '#about-card-3',
                    start: '20% bottom',
                    // markers: true,
                    // scrub: true
                    
                },
                opacity: 0,
                // scale: 0.8,
                // x: 100,
                duration: 1,
                // stagger: 0.5,
                // ease: 'power2.inOut'
            });
            gsap.from('#about-card-4', {
                scrollTrigger: {
                    trigger: '#about-card-4',
                    start: '20% bottom',
                    // markers: true,
                    // scrub: true
                    
                },
                opacity: 0,
                // scale: 0.8,
                // x: 100,
                duration: 1,
                // stagger: 0.5,
                // ease: 'power2.inOut'
            });
        },);
 
    return (
        <div>
            {/* <InfoStrip /> */}
            <Navbar />
            <SideAction />
            {/* <div className='flex items-center justify-center gap-10 pl-10'>
                <div className='w-1/2' ><AboutText /></div>
                <div className='w-1/2' ><AboutCard /></div>
            </div> */}

            <div id='about-bg' class="relative h-[400px] md:h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${"https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg"})` }}>
                <svg class="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1" d="M0,128L120,144C240,160,480,192,720,192C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
            </div>

            <div id='about-card-1'>
            <AboutInfo
                aboutheading={"Lorem ipsum dolor sit amet consectetur."}
                abouttext={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur nulla tenetur delectus, adipisci quibusdam odio placeat. Dolorem ducimus magnam quis. Corrupti adipisci modi tempore officia numquam architecto minus recusandae doloribus perferendis. Neque est exercitationem fuga quidem impedit cumque eligendi hic excepturi laborum, saepe tempore in ducimus doloremque ipsam quia maxime reprehenderit veritatis totam ad nemo possimus. Expedita adipisci, optio quibusdam voluptatum ullam, id ipsa dolor non fugit velit voluptates autem alias sunt ratione consectetur sint vero assumenda commodi placeat dolore totam! Vero fuga beatae magnam aspernatur, perferendis vel laudantium laboriosam eos tenetur quia accusamus, esse similique libero voluptate accusantium!"}
                imgsrc={"https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg"}
                alignment={"tru"}
            />
            </div>
            <div id='about-card-2'>
            <AboutInfo
                aboutheading={"Lorem ipsum dolor sit amet consectetur."}
                abouttext={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur nulla tenetur delectus, adipisci quibusdam odio placeat. Dolorem ducimus magnam quis. Corrupti adipisci modi tempore officia numquam architecto minus recusandae doloribus perferendis. Neque est exercitationem fuga quidem impedit cumque eligendi hic excepturi laborum, saepe tempore in ducimus doloremque ipsam quia maxime reprehenderit veritatis totam ad nemo possimus. Expedita adipisci, optio quibusdam voluptatum ullam, id ipsa dolor non fugit velit voluptates autem alias sunt ratione consectetur sint vero assumenda commodi placeat dolore totam! Vero fuga beatae magnam aspernatur, perferendis vel laudantium laboriosam eos tenetur quia accusamus, esse similique libero voluptate accusantium!"}
                imgsrc={"https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg"}
                alignment={"true"}
            />
            </div>

            <AboutMiddleContainer />

            <div id='about-card-3'>
            <AboutInfo
                aboutheading={"Lorem ipsum dolor sit amet consectetur."}
                abouttext={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur nulla tenetur delectus, adipisci quibusdam odio placeat. Dolorem ducimus magnam quis. Corrupti adipisci modi tempore officia numquam architecto minus recusandae doloribus perferendis. Neque est exercitationem fuga quidem impedit cumque eligendi hic excepturi laborum, saepe tempore in ducimus doloremque ipsam quia maxime reprehenderit veritatis totam ad nemo possimus. Expedita adipisci, optio quibusdam voluptatum ullam, id ipsa dolor non fugit velit voluptates autem alias sunt ratione consectetur sint vero assumenda commodi placeat dolore totam! Vero fuga beatae magnam aspernatur, perferendis vel laudantium laboriosam eos tenetur quia accusamus, esse similique libero voluptate accusantium!"}
                imgsrc={"https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg"}
                alignment={"tru"}
            />
            </div>

            <div id='about-card-4'>
            <AboutInfo
                aboutheading={"Lorem ipsum dolor sit amet consectetur."}
                abouttext={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur nulla tenetur delectus, adipisci quibusdam odio placeat. Dolorem ducimus magnam quis. Corrupti adipisci modi tempore officia numquam architecto minus recusandae doloribus perferendis. Neque est exercitationem fuga quidem impedit cumque eligendi hic excepturi laborum, saepe tempore in ducimus doloremque ipsam quia maxime reprehenderit veritatis totam ad nemo possimus. Expedita adipisci, optio quibusdam voluptatum ullam, id ipsa dolor non fugit velit voluptates autem alias sunt ratione consectetur sint vero assumenda commodi placeat dolore totam! Vero fuga beatae magnam aspernatur, perferendis vel laudantium laboriosam eos tenetur quia accusamus, esse similique libero voluptate accusantium!"}
                imgsrc={"https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg"}
                alignment={"true"}
            />
            </div>
            <Footer />
        </div>

    )
}

export default About



export const AboutMiddleContainer = () => {
    return (
        <>
            <div className='pb-32'>
                <div className='relative px-3 md:px-10 lg:px-40 py-10'>
                    <div style={{
                        backgroundImage: `url(${backgroundimg})`,
                        backgroundSize: 'cover', // Ensures the image is fully visible
                        backgroundPosition: 'center', // Centers the image horizontally and vertically
                        backgroundRepeat: 'no-repeat'
                        // Prevents the image from repeating
                    }} className=' bg-first  h-[500px] md:h-[600px] rounded-3xl'>
                        <div className='absolute bottom-0 left-[50%] translate-x-[-50%] w-[320px] h-[300px] md:w-[550px] md:h-[420px]'>
                            <div className='w-full flex items-center justify-center'>
                                <div className='w-64 h-14 md:h-16 md:w-96 rounded-xl bg-white flex items-center justify-center'>




                                    <div>
                                        <AnimatedGradientText>
                                            <span
                                                className={cn(`
inline animate-gradient bg-gradient-to-r from-[#68fff0] via-[#5f8cff] to-[#499bff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-xl md:text-2xl lg:text-3xl font-bold 
`)}
                                            >
                                                About Java Trandze
                                            </span>
                                            {/* <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
                                        </AnimatedGradientText>
                                    </div>








                                </div>
                            </div>
                            <div className='mt-5 rounded-t-3xl bg-white px-5 pt-5'>
                                <div className='bg-gray-800 w-full h-full rounded-3xl'>
                                    <img className='w-full h-full object-cover rounded-3xl' src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}