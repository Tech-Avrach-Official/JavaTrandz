import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'// import { faHouse } from 'awesome.me/kit-KIT_CODE/icons/classic/solid'

const InfoStrip = () => {

    const [strip, setStrip] = useState(true)

    const closeInfoStrip = () => {
        setStrip(!strip);
    }
  return (
    
    
    // <div role="status" className="animate-pulse">
    <div className={`info-strip bg-black flex items-center justify-between px-7 py-1 ${strip ? '' : 'hidden'}`}>
        <div>
        </div>
        <div>
            <p className='font-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex items-center justify-end text-xl cursor-pointer'
        onClick={closeInfoStrip}
        >
            <FontAwesomeIcon icon={faXmark} className='text-white' />
        </div>
    </div>
// </div>
  )
}

export default InfoStrip