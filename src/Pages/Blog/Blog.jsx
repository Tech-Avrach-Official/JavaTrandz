import BlogCards from '@/components/Auth/Blog-Card-Section/BlogCards'
import BlogPage from '@/components/Blog-component/Blog-Page/BlogPage'
import Footer from '@/components/Layout/Footer/Footer'
import Navbar from '@/components/Layout/Navbar/Navbar'
import SideAction from '@/components/Layout/Side-Quick-Action/SideAction'
import React from 'react'

const Blog = () => {
  return (
    <div>
        <Navbar/>
        {/* <BlogPage/> */}
        <BlogCards/>
        <SideAction/>
        <Footer/>
    </div>
  )
}

export default Blog