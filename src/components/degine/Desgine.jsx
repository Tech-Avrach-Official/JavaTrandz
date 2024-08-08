import React from 'react'

const Desgine = () => {
  return (
    <div className=' px-3 lg:px-32'>
    <div className='lg:px-10'>
        <div className='relative  h-36 md:h-60 flex justify-between rounded-lg py-6 md:py-8'>
            <div className='border border-blue-800 w-[50%]  bg-slate-700 rounded-lg'>
                
            </div>
            <div className='absolute top-0 left-0 flex justify-center items-center w-full h-full'>
                <div className='relative border-[5px] md:border-[15px] border-white h-full w-36 md:w-60 rounded-full bg-gray-500'>
                   <div className='absolute top-2 h-5 w-5 left-[55px] md:left-[90px] md:h-8 md:w-8 bg-second rounded-full'></div>
                   <div className='absolute top-5 h-5 w-5 left-[25px] md:left-[50px] md:h-8 md:w-8 bg-second rounded-full'></div>
                   <div className='absolute top-5 h-5 w-5 left-[85px] md:left-[130px] md:h-8 md:w-8 bg-second rounded-full'></div>
                   <div className='absolute top-[40%] h-10 w-10 left-[45px] md:left-[65px] md:h-20 md:w-20 bg-second'></div>

                </div>
            </div>
            <div className='border border-blue-800 w-[50%] bg-slate-700 rounded-lg'>
                
            </div>
        </div>
    </div>
</div>
  )
}

export default Desgine