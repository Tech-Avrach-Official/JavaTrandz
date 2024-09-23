import React from 'react'
import lineLeft from '../../../assets/line-left.svg'
import lineRight from '../../../assets/line-right.svg'
import PromoteCard from '../../ui/PromoteCard'

const Promote = () => {
    return (
        <div className='md:px-10 lg:px-24 bg-[#F8F8F8]'>
            <div>
                <div>
                    <div className='text-3xl md:text-4xl font-normal text-center'>
                        <span className='font-semibold'>Programs</span> We Offer
                    </div>
                    <div className='mt-5 md:mt-14'>
                        <div className='flex items-center justify-center gap-4'>
                            <img className='hidden md:block lg:w-[full]' src={lineLeft} alt="" />
                            <span className='text-base lg:text-xl font-semibold -tracking-tight'>ON-CAMPUS PROGRAMS</span>
                            <img className='hidden md:block lg:w-[full]' src={lineRight} alt="" />
                        </div>
                    </div>
                </div>
                <div className='mt-10 md:mt-20'>
                    <PromoteCard/>
                </div>
            </div>
        </div>
    )
}

export default Promote