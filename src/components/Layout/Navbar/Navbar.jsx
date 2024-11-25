import React from 'react'
import { Button } from '@/components/ui/button'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const isAdmin = localStorage.getItem('tempData')
    return (
        <div className='sticky shadow-md  top-0 z-50'>
            <div className='px-4 md:px-12 lg:px-24  bg-white h-14 flex items-center justify-between'>
                <Link to='/'>
                <div><img src='logo.png' alt="" height={70} width={70}/></div>
                </Link>
                <div>
                    <ul className='flex gap-2'>
                        <Link to='/'>
                            <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer'>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >About</li>
                        </Link>
                        <Link to={'/service'}>
                            <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Services</li>
                        </Link>
                        <Link to={'/blog'}>
                            <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Blog</li>
                        </Link>
                        <Link to={'/contact'}>
                        <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Contact</li>
                        </Link>
                        
                        {
                            isAdmin && 
                            <Link to={'/blog-form/add-blog'}>
                            <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Add Blog</li>
                            </Link>
                        }
                        
                    </ul>
                </div>
                <div className='hidden md:block'><Button>Quick Action</Button></div>
                <div className='md:hidden'>
                    <Sidebar />
                </div>
            </div>

        </div>
    )
}

export default Navbar