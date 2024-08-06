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
    <Navbar/>
    <Hero/>
    {/* <FlipText/> */}
   </div>

    </>
  )
}

export default App
