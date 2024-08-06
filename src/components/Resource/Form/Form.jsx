import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from '@/components/ui/input'
import { Select } from '@radix-ui/react-select'
import {
    // Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import SignUpSidebar from '../../Auth/SignUp-Sidebar/SignUpSidebar'


const Form = () => {
    return (
        <div>
            <div className='w-full mt-5 lg:pt-[71px] relative '>
                <div className='lg:max-h-[550px] lg:min-w-[500px] lg:absolute  bg-white rounded-lg p-3 sm:p-6 shadow-bottom'>
                    <div>
                        <h1 className='text-3xl tracking-wide'>Book a Live Class, For <span className='font-bold text-3xl text-red-600'>Free!</span></h1>
                        <p className='mt-5 text-gray-700'>Your Topic of Interest <span className='text-red-800'>*</span></p>
                    </div>
                    <div className='flex justify-center gap-5 sm:justify-between sm:items-center mt-5'>
                        <div className='flex items-center gap-2'>
                            <Checkbox id="Software Development" />
                            <label
                                htmlFor="terms"
                                className="text-xs sm:text-sm text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Java
                            </label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Checkbox id="DevOps" />
                            <label
                                htmlFor="terms"
                                className="text-xs sm:text-sm text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                DevOps
                            </label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Checkbox id="Data Science" />
                            <label
                                htmlFor="terms"
                                className="text-xs sm:text-sm text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Data Science
                            </label>
                        </div>
                    </div>
                    <hr className='mt-5 mb-5' />
                    <div>
                        <div>
                            <Input
                                placeholder="Full Name"
                                type="text"
                            />
                        </div>
                        <div className='mt-5'>
                            <Input
                                placeholder="Email Address"
                                type="Email"
                            />
                        </div>
                        <div className='mt-5 flex gap-3'>
                            <Select>
                                <SelectTrigger className="w-[130px]">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input
                                placeholder="Enter your number"
                                type="Number"
                            />
                        </div>
                    </div>
                    <div className='mt-7 flex flex-wrap-reverse gap-3 items-center'>
                        <div><Button size="lg">Continue Booking Live Class</Button></div>
                        <div className='flex items-center'><span className='ml-2'>Limited seats left</span></div>
                    </div>
                    <div className='mt-5 flex items-center gap-1'>
                        <div className='text-sm text-gray-700'>Already have an account?</div> 
                        <div className='text-blue-700 cursor-pointer'><SignUpSidebar/></div>
                    </div>
                    <div className='mt-2'>
                        <p className='text-xs text-gray-700'>By creating an account I have read and agree to Scaler's <span className='text-blue-700'>Terms</span> and <span className='text-blue-700'>Privacy Policy</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form