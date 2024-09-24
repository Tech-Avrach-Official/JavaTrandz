import React from 'react'

const ServiceHeader = () => {
    return (
        <div className='relative bg-[#F8F8F8] w-full pb-10'>
            <div className='h-full px-10 md:px-24 lg:px-52 pt-14 bg-first bg-[linear-gradient(to_right,#80808035_1px,transparent_1px),linear-gradient(to_bottom,#80808035_1px,transparent_1px)] bg-[size:24px_24px]'>
               <div>
               <h1 className='text-3xl md:text-5xl text-center font-bold text-white '>Our Services</h1>
               <p className='text-center text-base md:text-xl text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum dolore neque consequatur ipsa consequuntur a, libero alias eaque. Et quod, hic sequi dolorem dicta nobis fugit quas laudantium odio, molestiae, repellat perferendis cum tempora? Soluta ex doloribus ullam mollitia.</p>
               </div>
               <div className='mt-5 w-full h-[300px] md:h-[400px]'>
                <img className='w-full h-full object-cover rounded-lg' src="https://media.istockphoto.com/id/505239248/photo/humayun-tomb-new-delhi-india.jpg?s=612x612&w=0&k=20&c=UQTU6YOnVsSklzHi34cOhNW5AhsACDxKLiD9--T-3Kg=" alt="" />
               </div>

            </div>
            <div className='absolute bottom-0 px-5 md:px-16 lg:px-32 left-0 w-full'>
                <div className='bg-white rounded-lg drop-shadow-md h-20'>

                </div>
            </div>
        </div>
    )
}

export default ServiceHeader