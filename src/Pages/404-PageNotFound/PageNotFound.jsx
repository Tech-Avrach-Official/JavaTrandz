import React from 'react'
import { Button } from '@/components/ui/button'

const PageNotFound = () => {
    return (
        <div>
            <div className='sm:px-[5%] inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808035_1px,transparent_1px),linear-gradient(to_bottom,#80808035_1px,transparent_1px)] bg-[size:25px_25px] shadow-custom-inset'>
                <div className='h-screen w-full flex justify-center'>
                    <div>
                        <h1 className='text-[150px] text-center lg:text-[300px] font-bold text-white  animate-pulse'>
                            404
                        </h1>
                        <p className='text-white text-center text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='flex items-center justify-center'>
                            <Button className='mt-5 bg-white text-black w-48 text-base'>back to home</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound