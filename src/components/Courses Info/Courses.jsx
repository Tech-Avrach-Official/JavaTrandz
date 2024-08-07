import React from 'react'
import lineLeft from '../../assets/line-left.svg'
import lineRight from '../../assets/line-right.svg'
import { Button } from '../ui/button'

const Courses = () => {
    return (
        <div className='px-3 md:px-10 lg:px-32'>
            <div >
                <div className='mt-10 md:mt-16'>
                    <div className='flex items-center justify-center gap-4'>
                        <img className='hidden md:block lg:w-[full]' src={lineLeft} alt="" />
                        <span className='text-base lg:text-xl font-semibold -tracking-tight'>ON-CAMPUS PROGRAMS</span>
                        <img className='hidden md:block lg:w-[full]' src={lineRight} alt="" />
                    </div>
                </div>
                <div className='border rounded-lg border-black mt-10 md:mt-20 md:flex'>
                    <div className='border border-green-800 w-full md:w-[35%] p-1 md:p-5 flex md:flex-col'>
                        <div className='bg-green-700 h-10 w-1/2 md:w-full md:full md:h-28'>

                        </div>
                        <div className='bg-yellow-500 h-10 md:w-full w-1/2 md:h-28'>

                        </div>
                        <div className='bg-orange-700 h-10 md:w-full w-1/2 md:h-28'>

                        </div>
                        <div className='bg-red-700 h-10 md:w-full w-1/2 md:h-28'>

                        </div>
                        <div className='bg-blue-700 h-10 md:w-full w-1/2 md:h-28'>

                        </div>
                    </div>
                    <div className='p-4 md:p-8 md:w-[65%]'>
                        <div className='h-[90%]'>
                        <div className='text-2xl md:text-3xl font-normal text-center mt-5'>Java Trandze's Historical <span className='font-semibold '>Career Transition Report</span>
                        </div>
                        <div className='flex flex-wrap justify-center mt-8 gap-5'>
                            <div className='xl:w-[350px] text-gray-600 text-base text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime culpa omnis explicabo voluptatibus voluptas atque nulla officiis consequuntur dolorem. Dicta odit non esse ratione cupiditate. Saepe sapiente ratione autem architecto.</div>
                            
                            <div className='xl:w-[350px] text-gray-600 text-base text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime culpa omnis explicabo voluptatibus voluptas atque nulla officiis consequuntur dolorem. Dicta odit non esse ratione cupiditate. Saepe sapiente ratione autem architecto.</div>
                            
                            <div className='xl:w-[350px] text-gray-600 text-base text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime culpa omnis explicabo voluptatibus voluptas atque nulla officiis consequuntur dolorem. Dicta odit non esse ratione cupiditate. Saepe sapiente ratione autem architecto.</div>
                            
                            <div className='xl:w-[350px] text-gray-600 text-base text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime culpa omnis explicabo voluptatibus voluptas atque nulla officiis consequuntur dolorem. Dicta odit non esse ratione cupiditate. Saepe sapiente ratione autem architecto.</div>
                            
                        </div>
                        </div>
                        <div className='flex items-center justify-center h-[10%]'>
                            <Button className="mt-5" >Quick Action</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses