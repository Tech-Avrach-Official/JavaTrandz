import React from 'react'
import { LoaderCircle } from 'lucide-react'

function Loading() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <LoaderCircle className='animate-spin h-10 w-10'/>
    </div>
  )
}

export default Loading