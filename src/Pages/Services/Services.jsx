import CourseDetail from '@/components/Service-component/Course-Detail/CourseDetail'
import Footer from '@/components/Layout/Footer/Footer'
import Navbar from '@/components/Layout/Navbar/Navbar'
import React from 'react'
import LiveLearning from '@/components/Service-component/Live-Learning/LiveLearning'
import ServiceExplore from '@/components/Service-component/Service-Explore/ServiceExplore'
import MobCourseDetail from '@/components/Service-component/Course-Detail/MobCourseDetail'

const Services = () => {
  return (
    <div>
      <Navbar />
      <LiveLearning />
      <ServiceExplore />
      <div>
        <div className="hidden lg:block">
          <CourseDetail />
        </div>
        <div className="block lg:hidden">
          <MobCourseDetail />
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Services