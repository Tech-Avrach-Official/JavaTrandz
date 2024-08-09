import React from 'react'

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
                    <div className='mt-8 flex gap-4'>
                        <div className='h-10 w-10 rounded-full bg-[#9CB2E6]'></div>
                        <div className='h-10 w-10 rounded-full bg-[#9CB2E6]'></div>
                        <div className='h-10 w-10 rounded-full bg-[#9CB2E6]'></div>
                        <div className='h-10 w-10 rounded-full bg-[#9CB2E6]'></div>
                    </div>
                </div>
                <div className='mt-7 md:mt-0'>
                    <div>
                        <h1 className='text-white text-2xl font-normal'>Resources</h1>
                    </div>
                    <div className='mt-5'>
                        <ul>
                            <li className='text-[#9CB2E6]'>Home</li>
                            <li className='text-[#9CB2E6]'>About</li>
                            <li className='text-[#9CB2E6]'>Services</li>
                            <li className='text-[#9CB2E6]'>Courses</li>
                            <li className='text-[#9CB2E6]'>Contact</li>
                        </ul>
                    </div>
                </div>

                <div className='mt-7 md:mt-0'>
                    <div>
                        <h1 className='text-white text-2xl font-normal'>Follow us on</h1>
                    </div>
                    <div className='mt-5'>
                        <ul>
                            <li className='text-[#9CB2E6]'>Youtube</li>
                            <li className='text-[#9CB2E6]'>Instagram</li>
                            <li className='text-[#9CB2E6]'>Facebook</li>
                            <li className='text-[#9CB2E6]'>Twitter</li>
                            <li className='text-[#9CB2E6]'>LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-7 md:mt-0'>
                    <div>
                        <h1 className='text-white text-2xl font-normal'>Get in Touch</h1>
                    </div>
                    <div className='mt-5'>
                        <ul>
                            <li className='text-[#9CB2E6]'>+91 123456789</li>
                            <li className='text-[#9CB2E6]'>Contact ;- xyz@gmail.com</li>
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