import { useState } from 'react'
// import { BellIcon, CheckIcon } from "@radix-ui/react-icons"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import Navbar from './components/Layout/Navbar/Navbar'
import Hero from './components/Layout/Hero/Hero'
import FlipText from './components/ui/FlipText/FlipText'
import Report from './components/Download Report/Report'
import Promote from './components/Promote Section/Promote'
import PromoteCard from './components/ui/PromoteCard'
import Courses from './components/Courses Info/Courses'
import CardInfo from './components/Card-Info/CardInfo'
import Desgine from './components/degine/Desgine'
import MultipleCard from './components/Multiple-Cards/MultipleCard'
import ExploreCards from './components/Explore-Cards/ExploreCards'
import Footer from './components/Footer/Footer'
import InfoStrip from './components/Information-Strip/InfoStrip'
 
const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]


function App({ className, ...props }) {

  return (
    <>
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
    <Footer/>
   </div>

    </>
  )
}

export default App
