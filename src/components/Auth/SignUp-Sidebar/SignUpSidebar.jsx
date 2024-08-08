import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';


const Sidebar = () => {

    // const [showInput, setShowInput] = useState(false)
    // const [hideInput, setHideInput] = useState(true)

    // const handleShowClicked = () =>{
    //     setShowInput(true)
    //     setHideInput(false)
    // }


    return (
        <div>   
            <Sheet>
                <SheetTrigger>Click here</SheetTrigger>
                <SheetContent>
                <SheetHeader>
                        <VisuallyHidden>
                            <SheetTitle>Sidebar Menu</SheetTitle>
                        </VisuallyHidden>
                        <SheetDescription></SheetDescription>
                        </SheetHeader>
                    <div className='mt-20'>
                        <div>
                            <h1 className='text-3xl font-bold'>Login</h1>
                            <p className='mt-2 text-gray-500'>or <span className='text-blue-600 font-bold cursor-pointer'>create your scaler account</span></p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-black font-semibold'>Mobile Number <span className='text-red-500'>*</span></p>
                        </div>
                        <div className='mt-3 flex gap-3'>
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
                        <div className='mt-10 flex justify-between items-end'>
                            <div><Button size="xl">Login</Button></div>
                            <div><p className='text-blue-600 font-bold border-b border-dashed border-blue-600 cursor-pointer' 
                            // onClick={handleShowClicked}
                            >continue using email</p></div>
{/* 
                            {
                                showInput && (
                                    <div>
                                        <p>Hy</p>
                                        <p>By</p>
                                    </div>
                                )
                            }

                            {
                                hideInput && (
                                    setHideInput(false)
                                )
                            }
                             */}

                        </div>
                        <div class="flex items-center justify-center mt-5">
                            <div class="flex-grow border-t border-gray-400"></div>
                            <span class="mx-3 text-gray-500">OR</span>
                            <div class="flex-grow border-t border-gray-400"></div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Sidebar