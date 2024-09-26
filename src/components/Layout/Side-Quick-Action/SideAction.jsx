import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useSelector } from 'react-redux';

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

    const handleMouseEnter = () => {
        clearTimeout(scrollTimeout);  // Clear timeout when hovering
        setIsTransparent(false);      // Make it fully opaque
    };

    const handleMouseLeave = () => {
        // Start the timer again when the mouse leaves
        scrollTimeout = setTimeout(() => {
            setIsTransparent(true);
        }, 3000); // Delay of 3 seconds after mouse leaves
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    const { isOpen } = useSelector(state => state.popup);

    useGSAP(() => {
        if (!isOpen) {
            // Trigger GSAP animations only when isOpen becomes false
            gsap.from('#sideAction', {
                x: -100,
                duration: 1,
            });
        }
    }, [isOpen]);

    return (
        <div
            id='sideAction'
            className={`z-50 fixed left-0 top-1/2 transform -translate-y-1/2 ${isTransparent ? 'opacity-50' : 'opacity-100'}`}
            style={{ transition: 'opacity 0.5s ease' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div>
                <div className="flex flex-col items-center gap-2 md:gap-4 text-black bg-black rounded-r-lg p-2">
                    <div className='cursor-pointer'>
                        <FontAwesomeIcon icon={faInstagram} className='text-white md:text-3xl text-2xl hover:scale-[1.1] duration-100' />
                    </div>
                    <div className='cursor-pointer'>
                        <FontAwesomeIcon icon={faFacebook} className='text-white md:text-3xl text-2xl hover:scale-[1.1] duration-100' />
                    </div>
                    <div className='cursor-pointer'>
                        <FontAwesomeIcon icon={faTwitter} className='text-white md:text-3xl text-2xl hover:scale-[1.1] duration-100' />
                    </div>
                    <div className='cursor-pointer'>
                        <FontAwesomeIcon icon={faLinkedin} className='text-white md:text-3xl text-2xl hover:scale-[1.1] duration-100' />
                    </div>
                    <div className='cursor-pointer'>
                        <FontAwesomeIcon icon={faYoutube} className='text-white md:text-3xl text-2xl hover:scale-[1.1] duration-100' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideAction;
