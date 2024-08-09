import React from 'react'
import { useState } from 'react'

const InfoStrip = () => {

    const [strip, setStrip] = useState(true)

    const closeInfoStrip = () => {
        setStrip(!strip);
    }
  return (
    <div className={`info-strip flex items-center justify-between px-7 py-1 ${strip ? '' : 'hidden'}`}>
        <div></div>
        <div>
            <p className='font-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex items-center justify-end text-xl cursor-pointer'
        onClick={closeInfoStrip}
        >
            X
        </div>
    </div>
  )
}

export default InfoStrip