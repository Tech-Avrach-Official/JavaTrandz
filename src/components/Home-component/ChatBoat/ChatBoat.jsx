import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { CloudFog } from 'lucide-react';

const ChatBoat = () => {
    const [isOpenVisible, setIsOpenVisible] = useState(false);
    const [isChatBoatOpen, setIsChatBoatOpen] = useState(false);

    const handleCircleClick = () => {
        setIsChatBoatOpen(!isChatBoatOpen);  // Toggle the ChatBoat visibility when clicked
        setIsOpenVisible(false);  // Hide the open div when clicked
    };

    const handleXmarkClick = (e) => {
        e.stopPropagation();  // Prevent the circle's onClick from firing
        setIsChatBoatOpen(false);  // Close the ChatBoat
        setIsOpenVisible(true);  // Show the "open" div on hover
    };

    return (
        <div>
            <div>
                {/* ChatBoat div */}
                <div className={`fixed bottom-20 right-5 rounded-xl w-80 h-96 bg-white border-2 border-black transition-opacity duration-500 ease-in-out ${isChatBoatOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className='relative h-full'>
                        <div className='bg-black w-full h-10 rounded-t-lg flex items-center justify-center'>
                            <p className='text-white text-lg font-semibold px-3 py-2'>ChatBoat</p>
                        </div>
                        <div className='w-full h-[78%] p-2'>
                            <div className='mt-2'>
                                <p  className='text-sm bg-black w-fit p-1 text-white rounded-sm px-3'>Hello Everyone.</p>
                            </div>
                            <div className='flex items-center justify-end mt-2 '>
                                <p className='text-sm bg-second text-white rounded-sm px-3 py-1'>Hello Buddy</p>
                            </div>
                        </div>
                        <div className="absolute bottom-1 flex w-full max-w-sm items-center space-x-1 px-1">
                            <Input type="email" placeholder="Type a message..." />
                            <Button type="submit"><FontAwesomeIcon icon={faPaperPlane} className='text-xl text-white' /></Button>
                        </div>
                    </div>
                </div>

                {/* Open div, initially hidden */}
                <div
                    className={`fixed bottom-7 right-[4.5rem] rounded-3xl w-36 h-8 bg-black text-sm text-white px-3 flex items-center  cursor-pointer transition-opacity duration-300 ease-in-out ${isOpenVisible && !isChatBoatOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                >
                    Click The Circle
                </div>

                {/* Circle div */}
                <div
                    className='fixed bottom-5 right-5 rounded-full w-12 h-12 bg-black cursor-pointer text-white text-xl flex items-center justify-center'
                    onMouseEnter={() => setIsOpenVisible(true)}  // Show the open div on hover
                    onMouseLeave={() => setIsOpenVisible(false)}  // Hide the open div when hover ends
                    onClick={handleCircleClick}
                >
                    {isChatBoatOpen ? (
                        <FontAwesomeIcon icon={faXmark} className='text-white text-2xl' onClick={handleXmarkClick} />
                    ) : (
                        "🤖"
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatBoat;
