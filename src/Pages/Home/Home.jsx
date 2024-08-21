import React from 'react'
import InfoStrip from '@/components/Information-Strip/InfoStrip'
import Navbar from '@/components/Layout/Navbar/Navbar'
import Hero from '@/components/Layout/Hero/Hero'
import Report from '@/components/Download Report/Report'
import Promote from '@/components/Promote Section/Promote'
import Courses from '@/components/Courses Info/Courses'
import CardInfo from '@/components/Card-Info/CardInfo'
import Desgine from '@/components/degine/Desgine'
import MultipleCard from '@/components/Multiple-Cards/MultipleCard'
import ExploreCards from '@/components/Explore-Cards/ExploreCards'
import SideAction from '@/components/Side-Quick-Action/SideAction'
import ChatBoat from '@/components/ChatBoat/ChatBoat'
import Footer from '@/components/Footer/Footer'
import PageNotFound from '@/Pages/404-PageNotFound/PageNotFound'
import Maintenance from '@/Pages/Maintenance/Maintenance'

const Home = () => {
  return (
    <div>
    <InfoStrip/>
    <Navbar/>
    <Hero/>
    {/* <FlipText/> */}
    <Report/>
    <Promote/>
    {/* <PromoteCard/> */}
    <Courses/>
    <CardInfo/>
    <Desgine/>
    <MultipleCard/>
    <ExploreCards/>
    <SideAction/>
    {/* <ChatBoat/> */}
    <ChatBoat/>
    {/* <ImageSlider/> */}
{/* <Chart/> */}
    <Footer/>
    {/* <PageNotFound/>
    <Maintenance/> */}
    </div>
  )
}

export default Home