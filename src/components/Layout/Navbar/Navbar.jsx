import React from 'react'
import { Button } from '@/components/ui/button'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='px-4 md:px-12 lg:px-24 border h-14 flex items-center justify-between shadow-md shadow-gray-600 rounded-md'>
            <div><h1 className='text-2xl font-bold'>Java Trandze</h1></div>
            <div>
                <ul className='flex gap-2'>
                    <Link to='/'><li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer'>Home</li></Link>
                    <Link to='/about'><li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >About</li> </Link>
                    <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Services</li>
                    <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Blog</li>
                    <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Contact</li>
                </ul>
            </div>
            <div className='hidden md:block'><Button>Quick Action</Button></div>
            <div className='md:hidden'>
                <Sidebar/>
            </div>
        </div>
    </div>
  )
}

export default Navbar