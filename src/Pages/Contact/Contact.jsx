import Footer from '@/components/Layout/Footer/Footer'
import Navbar from '@/components/Layout/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='px-4 md:px-10 xl:px-40 py-20 bg-[#F8F8F8] flex flex-col gap-20'>
                <div className='flex flex-col lg:flex-row items-center justify-center rounded-md bg-white shadow-md shadow-slate-400 lg:gap-10'>
                    <div className='bg-first rounded-l-md h-[350px] md:h-[500px] w-full lg:w-[45%] text-white text-3xl flex items-center justify-center'>
                        Map
                    </div>
                    <div className='lg:w-[55%] w-full py-10 lg:py-0 px-10 bg-white'>
                        <div>
                            <h1 className='text-3xl md:text-5xl font-semibold'>Get in Touch</h1>
                            <p className='mt-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate obcaecati modi ea ducimus qui dolore quis deserunt consectetur voluptates.</p>
                        </div>
                        <hr className='mt-7 mb-7 bg-black'/>
                        <div>
                            <h2 className='text-lg md:text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                            <div className='flex items-center gap-5 mt-5'>
                                <div>
                                <FontAwesomeIcon icon={faPhoneVolume} className='text-3xl md:text-4xl text-first' />
                                </div>
                                <div>
                                    <p className='text-xl'>+1-( 234 ) 567-890</p>
                                    <p className='text-sm font-semibold text-first'>needhelp@company.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div>
                        <p className='text-sm font-semibold text-center'>CONTACT US</p>
                        <h1 className='text-4xl font-bold mt-1'>Write a Message</h1>
                    </div>
                    <div className='mt-10 w-full flex flex-col gap-3 sm:gap-5'>
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5'>
                            <Input type="text" placeholder="Full name" className="w-full md:w-[300px] h-14" />
                            <Input type="text" placeholder="Email address" className="w-full md:w-[300px] h-14" />
                        </div>
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5'>
                            <Input type="text" placeholder="Full name" className="w-full md:w-[300px] h-14" />
                            <Input type="text" placeholder="Email address" className="w-full md:w-[300px] h-14" />
                        </div>
                        <div className='flex items-center justify-center'>
                            <Textarea placeholder="Write a message" className="w-full md:w-[620px]" />
                        </div>
                    </div>
                    <div>
                        <Button className='w-40 mt-10'>Submit</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact