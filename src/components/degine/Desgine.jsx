import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Desgine = () => {
  return (
    <div className=' px-3 lg:px-32 bg-[#F8F8F8]'>
      <div className='lg:px-10'>
        <div className='relative  h-36 md:h-60 flex justify-between rounded-lg py-6 md:py-8'>
          <div className='border border-blue-800 w-[50%]  bg-black rounded-lg'>

          </div>
          <div className='absolute top-0 left-0 flex justify-center items-center w-full h-full'>
            <div className='relative border-[5px] md:border-[15px] border-[#F8F8F8] h-full w-36 md:w-60 rounded-full bg-black'>
              <div className='absolute top-2 h-5 w-5 left-[55px] md:left-[90px] md:h-8 md:w-8 '>
                <FontAwesomeIcon icon={faStar} className='w-full h-full text-second' />
              </div>
              <div className='absolute top-5 h-5 w-5 left-[25px] md:left-[50px] md:h-8 md:w-8 '>
                <FontAwesomeIcon icon={faStar} className='w-full h-full text-second' />
              </div>
              <div className='absolute top-5 h-5 w-5 left-[85px] md:left-[130px] md:h-8 md:w-8 '>
                <FontAwesomeIcon icon={faStar} className='w-full h-full text-second' />
              </div>
              <div className='absolute top-[40%] h-10 w-10 left-[45px] md:left-[65px] md:h-20 md:w-20 bg-second'></div>

            </div>
          </div>
          <div className='border border-blue-800 w-[50%] bg-black rounded-lg'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Desgine