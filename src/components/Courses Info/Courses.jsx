import React from 'react'
import lineLeft from '../../assets/line-left.svg'
import lineRight from '../../assets/line-right.svg'
import { Button } from '../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faNode, faPython, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'

const Courses = () => {
    return (
        <div className='px-3 md:px-10 lg:px-32 bg-[#F8F8F8] p-10 md:pt-20'>
            <div >
                <div>
                    <div className='flex items-center justify-center gap-4'>
                        <img className='hidden md:block lg:w-[full]' src={lineLeft} alt="" />
                        <span className='text-base lg:text-xl font-semibold -tracking-tight'>ON-CAMPUS PROGRAMS</span>
                        <img className='hidden md:block lg:w-[full]' src={lineRight} alt="" />
                    </div>
                </div>
                <div className='rounded-lg bg-white mt-10 md:mt-20 md:flex shadow-[0px_6px_15px_3px_rgba(204,204,204,0.59)]'>
                    <div className='w-full md:w-[35%] gap-0.5 md:gap-2 p-1 md:p-5 flex md:flex-col'>
                        <div className='bg-black border border-black h-14 w-1/2 md:w-full md:full md:h-24 rounded-sm md:rounded-md lg:px-8 flex items-center justify-center md:justify-normal'>
                            <div className='flex justify-center items-center gap-7'>
                                <FontAwesomeIcon icon={faJava} className=' text-white text-3xl lg:text-6xl' />
                                <p className='hidden md:block text-2xl font-medium text-white'>Java Devlopment</p>
                            </div>
                        </div>

                        <div className='bg-black border border-black h-14 w-1/2 md:w-full md:full md:h-24 rounded-sm md:rounded-md lg:px-8 flex items-center justify-center md:justify-normal'>
                            <div className='flex justify-center items-center gap-7'>
                                <FontAwesomeIcon icon={faPython} className=' text-white text-3xl lg:text-6xl' />
                                <p className='hidden md:block text-2xl font-medium text-white'>Python Devlopment</p>
                            </div>
                        </div>

                        <div className='bg-black border border-black h-14 w-1/2 md:w-full md:full md:h-24 rounded-sm md:rounded-md lg:px-8 flex items-center justify-center md:justify-normal'>
                            <div className='flex justify-center items-center gap-7'>
                                <FontAwesomeIcon icon={faSquareJs} className=' text-white text-3xl lg:text-6xl' />
                                <p className='hidden md:block text-2xl font-medium text-white'>JavaScript Devlopment</p>
                            </div>
                        </div>

                        <div className='bg-black border border-black h-14 w-1/2 md:w-full md:full md:h-24 rounded-sm md:rounded-md lg:px-8 flex items-center justify-center md:justify-normal'>
                            <div className='flex justify-center items-center gap-7'>
                                <FontAwesomeIcon icon={faNode} className=' text-white text-3xl lg:text-6xl' />
                                <p className='hidden md:block text-2xl font-medium text-white'>Nodejs Devlopment</p>
                            </div>
                        </div>

                        <div className='bg-black border border-black h-14 w-1/2 md:w-full md:full md:h-24 rounded-sm md:rounded-md lg:px-8 flex items-center justify-center md:justify-normal'>
                            <div className='flex justify-center items-center gap-7'>
                                <FontAwesomeIcon icon={faReact} className=' text-white text-3xl lg:text-6xl' />
                                <p className='hidden md:block text-2xl font-medium text-white'>React Devlopment</p>
                            </div>
                        </div>

                    </div>
                    <div className='p-4 md:p-8 md:w-[65%]'>
                        <div className='h-[85%]'>
                            <div className='text-2xl md:text-3xl font-normal text-center mt-5'>Java Trandze's Historical <span className='font-semibold '>Career Transition Report</span>
                            </div>
                            <div className='flex flex-wrap justify-center mt-8 gap-5'>
                                <div className='xl:w-[350px] text-gray-600 text-base text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime culpa omnis explicabo voluptatibus voluptas atque nulla officiis consequuntur dolorem. Dicta odit non esse ratione cupiditate. Saepe sapiente ratione autem architecto.</div>

                                <div className='xl:w-[350px] text-gray-600 text-base text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime culpa omnis explicabo voluptatibus voluptas atque nulla officiis consequuntur dolorem. Dicta odit non esse ratione cupiditate. Saepe sapiente ratione autem architecto.</div>

                                <div className='xl:w-[350px] text-gray-600 text-base text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime culpa omnis explicabo voluptatibus voluptas atque nulla officiis consequuntur dolorem. Dicta odit non esse ratione cupiditate. Saepe sapiente ratione autem architecto.</div>

                                <div className='xl:w-[350px] text-gray-600 text-base text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime culpa omnis explicabo voluptatibus voluptas atque nulla officiis consequuntur dolorem. Dicta odit non esse ratione cupiditate. Saepe sapiente ratione autem architecto.</div>

                            </div>
                        </div>
                        <div className='flex items-end justify-center h-[10%]'>
                            <Button className="mt-10  w-48" >Quick Action</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses