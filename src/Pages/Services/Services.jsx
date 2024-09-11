import CourseDetail from '@/components/Service-component/Course-Detail/CourseDetail'
import Footer from '@/components/Layout/Footer/Footer'
import Navbar from '@/components/Layout/Navbar/Navbar'
import React from 'react'
import LiveLearning from '@/components/Service-component/Live-Learning/LiveLearning'
import ServiceExplore from '@/components/Service-component/Service-Explore/ServiceExplore'

const Services = () => {
  return (
    <div>
      <Navbar />
      <CourseDetail />
      <LiveLearning/>
      <ServiceExplore/>
      <Footer />
    </div>
  )
}

export default Services