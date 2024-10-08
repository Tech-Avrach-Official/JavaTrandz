import CourseDetail from '@/components/Service-component/Course-Detail/CourseDetail'
import Footer from '@/components/Layout/Footer/Footer'
import Navbar from '@/components/Layout/Navbar/Navbar'
import React from 'react'
import LiveLearning from '@/components/Service-component/Live-Learning/LiveLearning'
import ServiceExplore from '@/components/Service-component/Service-Explore/ServiceExplore'
import MobCourseDetail from '@/components/Service-component/Course-Detail/MobCourseDetail'
import ServiceHeader from '@/components/Service-component/Service-header/ServiceHeader'
import ExploreCards from '@/components/Home-component/Explore-Cards/ExploreCards'
import Live from '@/components/Home-component/Live-Info/Live'
import SideAction from '@/components/Layout/Side-Quick-Action/SideAction'

const Services = () => {
  return (
    <div>
      <Navbar />
      <ServiceHeader />
      <LiveLearning />
      <div>
        <div className="hidden lg:block">
          <CourseDetail />
        </div>
        <div className="block lg:hidden">
          <MobCourseDetail />
        </div>

      </div>
      <Live />
      <ServiceExplore />
      <ExploreCards />
      <SideAction />
      <Footer />
    </div>
  )
}

export default Services