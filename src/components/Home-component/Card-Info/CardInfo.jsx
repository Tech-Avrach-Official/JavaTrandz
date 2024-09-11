import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const CardInfo = () => {

    useGSAP(
        () => {
            // gsap code here...
            gsap.from('#card-info-heading', {
                scrollTrigger: {
                    trigger: '#card-info-parent',
                    start: '20% bottom',
                    markers: true,
                },
                opacity: 0,
                scale: 0.8,
                // x: -50,
                duration: 0.8,
                // yoyo: true,
                stagger: 0.3,
            });
            gsap.from('#card-info-card', {
                scrollTrigger: {
                    trigger: '#card-info-parent',
                    start: '40% bottom',
                    markers: true,
                },
                opacity: 0,
                // scale: 0.8,
                y: -50,
                duration: 0.5,
                // yoyo: true,
                stagger: 0.3,
            });
        },);

    return (
        <div id='card-info-parent' className='px-3 py-10 md:px-10 lg:px-32 lg:py-20 bg-[#F8F8F8]'>
            <div id='card-info-heading' className='text-2xl md:text-4xl font-normal text-center flex items-center justify-center'><p className='w-fit bg-second px-5 py-1 rounded-lg'>Java Trandze's Historical <span className='font-semibold'>Career Transition Report</span></p></div>
            <div className='py-5 md:py-10'>
                <div>
                    <h1 id='card-info-heading' className='text-3xl md:text-[45px] font-semibold text-black md:leading-[55px] tracking-tight text-center'>India's Company</h1>
                    <h2 id='card-info-heading' className='text-sm md:text-2xl font-medium text-black mt-2 tracking-wide text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Lorem ipsum dolor sit amet. </h2>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='md:flex md:flex-wrap items-center justify-center mt-8 md:mt-14 gap-6'>
                        <div id='card-info-card' className='border bg-gray-100 border-gray-800 sm:w-80 p-2 rounded-lg'>
                            <div className='flex items-center justify-center'>
                                <img className='w-20' src="https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz" alt="" />
                            </div>
                            <div className='md:p-2'>
                                <h2 className='md:text-[17px] text-gray-700 font-normal mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, error. Quis nihil praesentium sed ratione laudantium.
                                </h2>
                            </div>
                        </div>
                        <div className='flex items-center justify-center text-6xl font-extrabold'>
                            +
                        </div>
                        <div id='card-info-card'  className='border bg-gray-100 border-gray-800 sm:w-80 p-2 rounded-lg'>
                            <div className='flex items-center justify-center'>
                                <img className='w-20' src="https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz" alt="" />
                            </div>
                            <div className='md:p-2'>
                                <h2 className='md:text-[17px] text-gray-700 font-normal mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, error. Quis nihil praesentium sed ratione laudantium.
                                </h2>
                            </div>
                        </div>
                        <div className='flex items-center justify-center text-6xl font-extrabold'>
                            =
                        </div>
                        <div id='card-info-card'  className='border bg-gray-100 border-gray-800 sm:w-80 p-2 rounded-lg'>
                            <div className='flex items-center justify-center'>
                                <img className='w-20' src="https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz" alt="" />
                            </div>
                            <div className='md:p-2'>
                                <h2 className='md:text-[17px] text-gray-700 font-normal mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, error. Quis nihil praesentium sed ratione laudantium.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardInfo