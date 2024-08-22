import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const SideAction = () => {
    const [isTransparent, setIsTransparent] = useState(false);
    let scrollTimeout;

    const handleScroll = () => {
        clearTimeout(scrollTimeout);
        setIsTransparent(false);

        scrollTimeout = setTimeout(() => {
            setIsTransparent(true);
        }, 3000); // 3 seconds delay
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <div 
            className={`z-50 fixed left-0 top-1/2 transform -translate-y-1/2 ${isTransparent ? 'opacity-50' : ''}`} 
            style={{ transition: 'opacity 0.5s ease' }}
            onMouseEnter={() => handleScroll()}
            
            // Added transition for smooth effect
        >
            <div>
                <div className="flex flex-col items-center gap-4 text-black bg-black rounded-r-lg p-1">
                    <div className='bg-second rounded-full p-2 w-10 flex items-center justify-center cursor-pointer'>
                        <FontAwesomeIcon icon={faInstagram} className='text-white text-2xl' />
                    </div>
                    <div className='cursor-pointer'>
                        <FontAwesomeIcon icon={faFacebook} className='text-white text-3xl' />
                    </div>
                    <div className='cursor-pointer'>
                        <FontAwesomeIcon icon={faTwitter} className='text-white text-3xl' />
                    </div>
                    <div className='cursor-pointer'>
                        <FontAwesomeIcon icon={faLinkedin} className='text-white text-3xl' />
                    </div>
                    <div className='cursor-pointer'>
                        <FontAwesomeIcon icon={faYoutube} className='text-white text-3xl' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideAction;
