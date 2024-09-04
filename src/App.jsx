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
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Main/Main'

 

function App({ className, ...props }) {

  return (
    <>
   <div>
   <Router>
    <Main/>
   </Router>
   
   </div>

    </>
  )
}

export default App
