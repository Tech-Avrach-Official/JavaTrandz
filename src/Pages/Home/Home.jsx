import React from 'react'
import InfoStrip from '@/components/Layout/Information-Strip/InfoStrip'
import Navbar from '@/components/Layout/Navbar/Navbar'
import Hero from '@/components/Home-component/Hero/Hero'
import Report from '@/components/Home-component/Download Report/Report'
import Promote from '@/components/Home-component/Promote Section/Promote'
import Courses from '@/components/Home-component/Courses Info/Courses'
import CardInfo from '@/components/Home-component/Card-Info/CardInfo'
import Desgine from '@/components/Home-component/degine/Desgine'
import MultipleCard from '@/components/Home-component/Multiple-Cards/MultipleCard'
import ExploreCards from '@/components/Home-component/Explore-Cards/ExploreCards'
import SideAction from '@/components/Layout/Side-Quick-Action/SideAction'
import ChatBoat from '@/components/Home-component/ChatBoat/ChatBoat'
import Footer from '@/components/Layout/Footer/Footer'
import Popup from '../Popup'
import PageNotFound from '@/Pages/404-PageNotFound/PageNotFound'
import Maintenance from '@/Pages/Maintenance/Maintenance'
import Live from '@/components/Home-component/Live-Info/Live'

const Home = () => {
  return (
    <div>
    <InfoStrip/>
    <Navbar/>
    <Hero/>
    {/* <FlipText/> */}
    <Report/>
    <Popup Color={''}/>
    <Promote/>
    {/* <PromoteCard/> */}
    <Courses/>
    <Live/>
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