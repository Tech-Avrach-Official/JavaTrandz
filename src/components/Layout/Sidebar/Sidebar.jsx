import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const Sidebar = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>Click</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <VisuallyHidden>
                            <SheetTitle>Sidebar Menu</SheetTitle>
                        </VisuallyHidden>
                        <SheetDescription></SheetDescription>
                    </SheetHeader>
                    <div className='mt-10'>
                        <ul>
                            <li className='text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200' >Home</li>
                            <li className='text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 mt-2' >About</li>
                            <li className='text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 mt-2' >Services</li>
                            <li className='text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 mt-2' >Blog</li>
                            <li className='text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 mt-2' >Contact</li>
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Sidebar
