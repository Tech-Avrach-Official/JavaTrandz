import React, { useState } from 'react'
import { Button } from '../../ui/button'
import lineLeft from '../../../assets/line-left.svg'
import lineRight from '../../../assets/line-right.svg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { LiveStatus } from './LiveStatus'

const Live = () => {
    return (
        <div className='px-3 md:px-10 lg:px-32 bg-[#F8F8F8] py-10 '>
            <div className='flex items-center justify-center gap-4'>
                <img className='hidden md:block lg:w-[full]' src={lineLeft} alt="" />
                <span className='text-base lg:text-xl font-semibold -tracking-tight'>LIVE SECTIONS</span>
                <img className='hidden md:block lg:w-[full]' src={lineRight} alt="" />
            </div>
            <div className='flex flex-wrap items-center justify-center gap-5 mt-16 '>
                <div className='w-[405px] hover:shadow-[0px_6px_15px_3px_rgba(204,204,204,0.59)] duration-200 border border-gray-400 bg-white h-[550px] rounded-[25px] p-4'>
                    <div>
                        <div className='flex items-center gap-3'>
                            <LiveStatus />
                            <p className='text-red-500 text-lg font-bold'>Live</p>
                        </div>
                        <div className='mt-3'>
                            <img className='w-full h-[250px] object-cover rounded-[25px]' src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg" alt="" />
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet.</h1>
                            <p className='mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ipsam tempora nostrum exercitationem consectetur culpa praesentium eius dolor omnis aut.</p>
                        </div>
                        <div className='flex items-center justify-between mt-5'>
                            <div>
                                <p className='text-lg font-bold'>Lorem, ipsum dolor.</p>
                            </div>
                            <div>
                                <div className='flex items-center gap-2 bg-black text-white rounded-md px-5 py-2'>
                                    <span>ENROLL NOW </span> <span><FontAwesomeIcon icon={faArrowRight} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[405px] border border-gray-400 bg-white h-[550px] rounded-[25px] hover:shadow-[0px_6px_15px_3px_rgba(204,204,204,0.59)] duration-200 p-4'>
                    <div>
                        <div className='flex items-center gap-3'>
                            <LiveStatus />
                            <p className='text-red-500 text-lg font-bold'>Live</p>
                        </div>
                        <div className='mt-3'>
                            <img className='w-full h-[250px] object-cover rounded-[25px]' src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg" alt="" />
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet.</h1>
                            <p className='mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ipsam tempora nostrum exercitationem consectetur culpa praesentium eius dolor omnis aut.</p>
                        </div>
                        <div className='flex items-center justify-between mt-5'>
                            <div>
                                <p className='text-lg font-bold'>Lorem, ipsum dolor.</p>
                            </div>
                            <div className='flex items-center gap-2 bg-black text-white rounded-md px-5 py-2  cursor-pointer'>
                                <span>ENROLL NOW</span>
                                <span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-[405px] border border-gray-400 bg-white h-[550px] hover:shadow-[0px_6px_15px_3px_rgba(204,204,204,0.59)] duration-200 rounded-[25px] p-4'>
                    <div>
                        <div className='flex items-center gap-3'>
                            <LiveStatus />
                            <p className='text-red-500 text-lg font-bold'>Live</p>
                        </div>
                        <div className='mt-3'>
                            <img className='w-full h-[250px] object-cover rounded-[25px]' src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg" alt="" />
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet.</h1>
                            <p className='mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ipsam tempora nostrum exercitationem consectetur culpa praesentium eius dolor omnis aut.</p>
                        </div>
                        <div className='flex items-center justify-between mt-5'>
                            <div>
                                <p className='text-lg font-bold'>Lorem, ipsum dolor.</p>
                            </div>
                            <div>
                                <div className='flex items-center gap-2 bg-black text-white rounded-md px-5 py-2'>
                                    <span>ENROLL NOW </span> <span><FontAwesomeIcon icon={faArrowRight} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Live



export const LiveStatus = () => {
    // const [isLive, setIsLive] = useState(true);

    return (
        <div className="flex items-center">
            <div
                className={`w-3 h-3 rounded-full bg-red-500 shadow-[0_0_6px_3px_rgba(231,29,69)] animate-blinkRed`}
            //   onClick={() => setIsLive(!isLive)}
            />
        </div>
    );
};
