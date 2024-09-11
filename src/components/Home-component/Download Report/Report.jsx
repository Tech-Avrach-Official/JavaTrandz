import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '../../ui/button'
// import chart from '../ui/chart'
import Chart from '../../ui/chart'


const Report = () => {

    const [value, setValue] = useState('')



    const handleDownload = () => {
        // console.log('hello')
        const link = document.createElement('a');
        if (value === 'Java') {
            link.href = '/path/to/your/Java.pdf';
            link.download = 'Java.pdf';
            link.click() // Replace with the actual file path
        }
        else if (value === 'Python') {
            link.href = '/path/to/your/python.pdf';
            link.download = 'Python.pdf';
            link.click() // Replace with the actual file path
        }
        else if (value === 'React') {
            link.href = '/path/to/your/React.pdf';
            link.download = 'React.pdf';
            link.click() // Replace with the actual file path
        }

    }

    return (
        <div className='py-12 px-3 md:p-24 bg-[#F8F8F8]'>
            <div className='rounded-xl xl:px-32 p-5 shadow-[0px_6px_15px_3px_rgba(204,204,204,0.59)] bg-white'>
                <div className='text-2xl md:text-4xl font-normal text-center'>Java Trandze's Historical <span className='font-semibold'>Career Transition Report</span>
                </div>
                <div className='mt-5 xl:p-5 lg:flex md:mt-10'>
                    <div className='w-full lg:w-[50%]'>
                        <Chart value={value} />
                    </div>
                    <div className='lg:w-[50%] mt-5 md:mt-0 md:border-2 md:border-black rounded-lg'>
                        <div className='text-center mt-5 text-base lg:text-xl font-semibold -tracking-tight'>
                            Lorem, ipsum.
                        </div>
                        <div className='flex flex-col gap-5 items-center justify-center mt-5 md:mt-16'>
                            <div>
                                <Select onValueChange={(value) => setValue(value)}>
                                    <SelectTrigger className="w-[200px] md:w-[330px] md:h-12 rounded-sm">
                                        <SelectValue placeholder="Java" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Java">Java</SelectItem>
                                        <SelectItem value="Python">Python</SelectItem>
                                        <SelectItem value="React">React</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Button onClick={handleDownload} className="w-[200px] md:w-[330px] md:h-12 ">Download Report</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-3 text-gray-600'>Disclaimer: Past outcomes are not indicative of future placements.</div>
            </div>
        </div>
    )
}

export default Report