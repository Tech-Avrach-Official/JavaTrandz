import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedin, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='bg-[#000000] px-5 md:px-28 xl:px-48 py-8 md:py-14'>
            <div className='lg:flex justify-between'>
                <div className='mt-5'>
                    <div className='flex items-center gap-4'>
                        <div className='border border-indigo-50 h-20 w-20 bg-[#9CB2E6]'>

                        </div>
                        <div>
                            <p className='text-white text-lg font-semibold'>Java Trandze</p>
                            <p className='text-white'>Lorem, ipsum.</p>
                        </div>
                    </div>
                    <div className='mt-8 flex gap-4 cursor-pointer'>
                        {/* <div className='h-10 w-10 rounded-full bg-[#9CB2E6]'> */}
                        <FontAwesomeIcon icon={faInstagram} className='text-white text-4xl' />
                        <FontAwesomeIcon icon={faFacebook} className='text-white text-4xl' />
                        <FontAwesomeIcon icon={faTwitter} className='text-white text-4xl' />
                        <FontAwesomeIcon icon={faLinkedin} className='text-white text-4xl' />
                        {/* </div> */}
                        {/* <div className='h-10 w-10 rounded-full bg-[#9CB2E6]'></div>
                        <div className='h-10 w-10 rounded-full bg-[#9CB2E6]'></div>
                        <div className='h-10 w-10 rounded-full bg-[#9CB2E6]'></div> */}
                    </div>
                </div>
                <div className='mt-7 md:mt-0'>
                    <div>
                        <h1 className='text-white text-2xl font-normal'>Resources</h1>
                    </div>
                    <div className='mt-5'>
                        <ul>
                            <li className='text-gray-400 cursor-pointer'>Home</li>
                            <li className='text-gray-400 cursor-pointer'>About</li>
                            <li className='text-gray-400 cursor-pointer'>Services</li>
                            <li className='text-gray-400 cursor-pointer'>Courses</li>
                            <li className='text-gray-400 cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                </div>

                <div className='mt-7 md:mt-0'>
                    <div>
                        <h1 className='text-white text-2xl font-normal'>Follow us on</h1>
                    </div>
                    <div className='mt-5'>
                        <ul>
                            <li className='text-gray-400 cursor-pointer'>
                                <span><FontAwesomeIcon
                                    icon={faYoutube}
                                    className='text-white text-base'
                                /></span> Youtube</li>
                            <li className='text-gray-400 cursor-pointer'>
                                <span><FontAwesomeIcon
                                    icon={faInstagram}
                                    className='text-white text-base'
                                /></span> Instagram</li>
                            <li className='text-gray-400 cursor-pointer'> <span><FontAwesomeIcon
                                icon={faFacebook}
                                className='text-white text-base'
                            /></span> Facebook</li>
                            <li className='text-gray-400 cursor-pointer'>
                                <span><FontAwesomeIcon
                                    icon={faTwitter}
                                    className='text-white text-base'
                                /></span> Twitter</li>
                            <li className='text-gray-400 cursor-pointer'>
                                <span><FontAwesomeIcon
                                    icon={faLinkedinIn}
                                    className='text-white text-base'
                                /></span> LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-7 md:mt-0'>
                    <div>
                        <h1 className='text-white text-2xl font-normal'>Get in Touch</h1>
                    </div>
                    <div className='mt-5'>
                        <ul>
                            <li className='text-gray-400 cursor-pointer'>+91 123456789</li>
                            <li className='text-gray-400 cursor-pointer'>Contact ;- xyz@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <hr className='text-[#9CB2E6]' />
            </div>
            <div className='mt-5'>
                <p className='text-white text-center'>Copyright © 2022. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer