import React from 'react'
import { Button } from '../ui/button'

const ExploreCards = () => {
  return (
    <div className='px-3 py-10 md:px-10 lg:px-32 lg:py-24'>
            <div className='text-2xl md:text-4xl font-normal text-center'>Explore <span className='font-semibold'>Free Courses</span> from <span className='font-semibold'>Java Trandze</span></div>
            <div className='py-5 md:py-16 flex items-center justify-center flex-wrap gap-7'>
                <div className='w-[261px] h-60 rounded-xl shadow-bottom hover:shadow-[0px_10px_13px_3px_rgba(204,204,204,0.51)] cursor-pointer'>
                    <div className='h-[60%] w-full'>
                        <img className='w-full h-full object-cover rounded-t-lg' src="https://assets-v2.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz" alt="" />
                    </div>
                    <div className='px-5 mt-4 '>
                        <p className='text-lg font-semibold'>Lorem, ipsum dolor.</p>
                        <p className='text-sm text-gray-700 font-medium mt-2'>98765 Lorem, ipsum.
                        </p>
                    </div>
                </div>                
                <div className='w-[261px] h-60 rounded-xl shadow-bottom hover:shadow-[0px_10px_13px_3px_rgba(204,204,204,0.51)] cursor-pointer'>
                    <div className='h-[60%] w-full'>
                        <img className='w-full h-full object-cover rounded-t-lg' src="https://assets-v2.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz" alt="" />
                    </div>
                    <div className='px-5 mt-4 '>
                        <p className='text-lg font-semibold'>Lorem, ipsum dolor.</p>
                        <p className='text-sm text-gray-700 font-medium mt-2'>98765 Lorem, ipsum.
                        </p>
                    </div>
                </div>                
                <div className='w-[261px] h-60 rounded-xl shadow-bottom hover:shadow-[0px_10px_13px_3px_rgba(204,204,204,0.51)] cursor-pointer'>
                    <div className='h-[60%] w-full'>
                        <img className='w-full h-full object-cover rounded-t-lg' src="https://assets-v2.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz" alt="" />
                    </div>
                    <div className='px-5 mt-4 '>
                        <p className='text-lg font-semibold'>Lorem, ipsum dolor.</p>
                        <p className='text-sm text-gray-700 font-medium mt-2'>98765 Lorem, ipsum.
                        </p>
                    </div>
                </div>                
                <div className='w-[261px] h-60 rounded-xl shadow-bottom hover:shadow-[0px_10px_13px_3px_rgba(204,204,204,0.51)] cursor-pointer'>
                    <div className='h-[60%] w-full'>
                        <img className='w-full h-full object-cover rounded-t-lg' src="https://assets-v2.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz" alt="" />
                    </div>
                    <div className='px-5 mt-4 '>
                        <p className='text-lg font-semibold'>Lorem, ipsum dolor.</p>
                        <p className='text-sm text-gray-700 font-medium mt-2'>98765 Lorem, ipsum.
                        </p>
                    </div>
                </div>                
            </div>
            <div className='flex items-center justify-center'>
                <Button className='w-52'>View All Courses</Button>
            </div>
            
        </div>
  )
}

export default ExploreCards