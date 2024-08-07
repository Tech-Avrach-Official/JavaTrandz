import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import Form from '@/components/Resource/Form/Form'
import FlipText from '@/components/ui/FlipText/FlipText'


const Hero = ({ }) => {
  return (
    <div>
      <div className='sm:px-[5%] inset-0 h-full w-full bg-first bg-[linear-gradient(to_right,#80808035_1px,transparent_1px),linear-gradient(to_bottom,#80808035_1px,transparent_1px)] bg-[size:24px_24px] '>
        <div className='lg:flex' >
          <div className='relative lg:w-[50%] xl:w-[65%] w-full h-full pt-10 md:p-5 text-center'>
            <div>
              <h1 className='text-3xl md:text-[45px] md:mt-10 font-bold text-white md:leading-[55px] tracking-tight'>India's best tech <br />
                learning Company</h1>
              <h2 className='text-sm md:text-lg text-white mt-2 tracking-wide'>Learn industry-relevant skills with top tech veterans</h2>
              

            </div>
            {/* <FlipText /> */}
            <div className='h-80 px-12 mt-5'>
              <img className='rounded-lg w-full h-full object-cover' src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg" alt="" />
            </div>
            <div className='lg:absolute lg:bottom-[-35px] w-full lg:w-[95.5%] shadow-bottom flex items-center justify-between bg-white px-5 lg:px-20 py-5 lg:mt-5 rounded-lg'>
              <div className='lg:flex items-center gap-3'>
                <span className='font-bold text-lg text-green-700'>126%</span>
                <p className='text-xs'>Avg. CTC Hike</p>
              </div>
              <div className='lg:flex items-center gap-3'>
                <span className='font-bold text-lg text-yellow-500'>Top 1%</span>
                <p className='text-xs'>Industry Instructors</p>
              </div>
              <div className='lg:flex items-center gap-3'>
                <span className='font-bold text-lg text-red-700'>900+</span>
                <p className='text-xs'>Placement Partners</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[40%]'>
            <Form/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero