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
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
// import ChatBoat from './components/ChatBoat/ChatBoat'
// import ChatBoat from './components/ChatBoat/ChatBoat'

// ChatBoat
 
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
   {/* <Home/> */}
   <About/>
   </div>

    </>
  )
}

export default App
