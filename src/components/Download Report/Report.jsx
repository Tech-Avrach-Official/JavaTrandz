import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '../ui/button'


const Report = () => {
    return (
        <div className='py-12 px-3 md:p-24 bg-[#F8F8F8]'>
            <div className='border border-gray-400 rounded-xl xl:px-32 p-5 shadow-[0px_6px_15px_3px_rgba(204,204,204,0.59)] bg-white'>
                <div className='text-2xl md:text-4xl font-normal text-center'>Java Trandze's Historical <span className='font-semibold'>Career Transition Report</span>
                </div>
                <div className='mt-5 xl:p-5 lg:flex md:mt-10'>
                    <div className='lg:w-1/2 border border-red-600 h-72'> </div>
                    <div className='lg:w-1/2 flex flex-col gap-5 items-center justify-center '>
                        <div>
                            <Select>
                                <SelectTrigger className="w-[200px] md:w-[330px] md:h-12 rounded-sm">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Button className="w-[200px] md:w-[330px] md:h-12 bg-white text-second border-second border hover:bg-second hover:text-white duration-300">Download Report</Button>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-3 text-gray-600'>Disclaimer: Past outcomes are not indicative of future placements.</div>
            </div>
        </div>
    )
}

export default Report