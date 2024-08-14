import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const SideAction = () => {
    return (
        // <div className="fixed left-0 top-1/2 transform -translate-y-1/2 ">
        //   <div>
        //     <div className="text-[35px] flex flex-col items-center space-y-4 text-black bg-second rounded-r-lg p-2">
        //     <FontAwesomeIcon icon={faInstagram} className='text-white text-3xl' />
        //     <FontAwesomeIcon icon={faFacebook} className='text-white text-3xl' />
        //     <FontAwesomeIcon icon={faTwitter} className='text-white text-3xl' />
        //     <FontAwesomeIcon icon={faLinkedin} className='text-white text-3xl' />
        //     <FontAwesomeIcon icon={faYoutube} className='text-white text-3xl' />
        //     </div>
        //   </div>
        // </div>
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 ">
            <div>
                <div className="flex flex-col items-center gap-4 text-black bg-black rounded-r-lg p-1">
                    <div className='bg-second rounded-full p-2 w-10 flex items-center justify-center cursor-pointer'><FontAwesomeIcon icon={faInstagram} className='text-white text-2xl' /></div>
                   <div className='cursor-pointer'> <FontAwesomeIcon icon={faFacebook} className='text-white text-3xl' /></div>
                    <div className='cursor-pointer'><FontAwesomeIcon icon={faTwitter} className='text-white text-3xl' /></div>
                    <div className='cursor-pointer'><FontAwesomeIcon icon={faLinkedin} className='text-white text-3xl' /></div>
                    <div className='cursor-pointer'><FontAwesomeIcon icon={faYoutube} className='text-white text-3xl' /></div>
                </div>
            </div>
        </div>
    );
}

export default SideAction;