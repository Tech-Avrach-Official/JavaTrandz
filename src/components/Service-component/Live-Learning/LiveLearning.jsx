import React from 'react'
import lineLeft from '../../../assets/line-left.svg'
import lineRight from '../../../assets/line-right.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava } from '@fortawesome/free-brands-svg-icons'

const LiveLearning = () => {
    return (
        <div className='w-full bg-[#F8F8F8] py-10 px-4 xl:px-32'>
            <div className='flex items-center justify-center gap-4'>
                <img className='hidden md:block lg:w-[full]' src={lineLeft} alt="" />
                <span className='text-base lg:text-xl font-semibold -tracking-tight'>LIVE SECTIONS</span>
                <img className='hidden md:block lg:w-[full]' src={lineRight} alt="" />
            </div>
            <div className='py-10 h-full'>
                <div className="grid grid-cols-2 gap-3 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4" style={{ "grid-auto-rows": "86px" }} >
                    <div
                        className="bg-white row-start-1 row-end-3 col-span-2 md:col-span-1 md:row-start-1 md:row-end-3 lg:row-start-1 lg:row-end-3 border border-gray-400 rounded-xl">
                        <div className='flex flex-col items-center justify-center h-full p-4'>
                            <p className='text-xl font-semibold'>Practice with</p>
                            <span className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-300 to-red-500 bg-clip-text text-transparent">
                                Assignments & Home Works
                            </span>
                        </div>
                    </div>

                    <div
                        className="bg-[url('https://assets-v2.scaler.com/assets/programs/devops/webp/live-classroom-banner-9064b5165c0a7cca8eb10229dae8dde77a1ae334c25572fa04ddf50230bbe153.webp')] bg-cover bg-center row-start-5 row-end-8 col-span-2 md:row-start-3 md:row-end-7 md:col-span-3 lg:row-start-1 lg:row-end-5 lg:col-span-2 rounded-xl">
                        <div className='lg:py-14 py-5 px-4 md:py-10 md:px-10 h-full lg:px-10 flex flex-col justify-between'>
                            <div>
                                <h1 className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold'>Live Classroom</h1>
                                <p className='text-white font-semibold text-base md:text-xl lg:text-xl mt-2'>Engage with instructors and connect <br /> with your peers in real-time.</p>
                            </div>
                            <div>
                                <h1 className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold'>Live Doubt Solving</h1>
                                <p className='text-white font-semibold text-base md:text-xl lg:text-xl mt-2'>Interactive Q&A to tackle situational <br /> queries on-the-spot.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white row-start-3 row-end-5 col-span-1 md:col-span-1 md:row-start-1 md:row-end-3 lg:row-start-1 lg:row-end-4 border border-gray-400 rounded-xl">
                        <div className='flex flex-col justify-between h-full px-2 py-4 lg:p-5'>
                            <div className='flex justify-center'>
                                <FontAwesomeIcon className='text-5xl lg:text-8xl text-black' icon={faJava} />
                            </div>
                            <div className='text-center'>
                                <h1 className='text-lg sm:text-xl lg:text-2xl text-black font-semibold'>Live Doubt Solving</h1>
                                <p className='text-black font-normal md:font-semibold text-xs  sm:text-sm lg:text-base lg:mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, animi!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[url('https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg')]  bg-cover bg-center row-start-3 row-end-5 col-span-1 md:col-span-1 md:row-start-1 md:row-end-3 lg:row-start-3 lg:row-end-6 rounded-xl">
                        <div className='relative rounded-xl bg-gradient-to-b from-transparent via-[#0000009b] to-black h-full'>
                            <div className='absolute bottom-0 p-5'>
                                <h1 className='text-center text-lg sm:text-xl lg:text-2xl text-white font-semibold'>Live Doubt Solving</h1>
                                <p className='text-center text-white font-normal md:font-semibold text-xs  sm:text-sm lg:text-base lg:mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white row-start-10 row-end-12 md:row-start-9 md:row-end-11 md:col-span-2 lg:col-span-1 lg:row-start-6 lg:row-end-8 border border-gray-400 rounded-xl">
                    <div className='flex flex-col items-center justify-center h-full'>
                            <p className='text-lg sm:text-xl font-semibold'>Practice with</p>
                            <span className="text-xl sm:text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                                Assignments & Home Works
                            </span>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-gray-200 via-gray-600 to-black row-start-10 row-end-12 md:row-start-9 md:row-end-11 md:col-span-1 lg:row-start-4 lg:row-end-8 rounded-xl">
                        <div className='h-full relative'>
                            <div className='absolute bottom-0 py-5 px-3  md:py-10 md:px-5'>
                                <h1 className='text-lg lg:text-2xl text-white font-semibold'>Live Doubt Solving</h1>
                                <p className='text-white font-semibold text-xs lg:text-base lg:mt-2'>
                                    Interactive Q&A to tackle situational queries on-the-spot.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[url('https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg')] bg-cover bg-center row-start-8 row-end-10 col-span-2 md:row-start-7 md:row-end-9 md:col-span-3 lg:row-start-5 lg:row-end-8 lg:col-span-2 rounded-xl">
                        <div className='bg-gradient-to-r from-black via-[#000000d1] to-transparent lg:py-14 rounded-2xl px-5 py-5 h-full lg:px-10'>
                            <div >
                                <h1 className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold'>Live Doubt Solving</h1>
                                <p className='text-white font-semibold text-base md:text-xl lg:text-xl mt-2'>Interactive Q&A to tackle situational <br /> queries on-the-spot.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveLearning




{/* <div className="flex flex-col gap-6 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4" style={{"grid-auto-rows": "96px"}} >
                    <div className="row-start-1 row-end-3 lg:row-start-1 lg:row-end-3 border border-red-500 rounded-xl">1</div>
                    <div className="row-start-3 row-end-6 col-span-3 lg:row-end-5 lg:col-span-2 border border-red-500 rounded-xl">2</div>
                    <div className="row-start-1 row-end-3 lg:row-start-1 lg:row-end-4 border border-red-500 rounded-xl">3</div>
                    <div className="row-start-1 row-end-3 lg:row-start-3 lg:row-end-6 border border-red-500 rounded-xl">4</div>
                    <div className=" lg:row-start-6 lg:row-end-7 border border-red-500 rounded-xl">5</div>
                    <div className=" lg:row-start-4 lg:row-end-7 border border-red-500 rounded-xl">6</div>
                    <div className=" lg:row-start-5 lg:row-end-7 lg:col-span-2 border border-red-500 rounded-xl">7</div>
                </div> */}