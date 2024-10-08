import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';

const  PromoteCard = () => {

    // useGSAP(
    //     () => {
    //         // gsap code here...
    //         gsap.from('#promote-card-1', {
    //             scrollTrigger: {
    //                 trigger: '#promote-card-parent',
    //                 start: '20% bottom',
    //                 markers: true,
    //                 // scrub: true
                    
    //             },
    //             opacity: 0,
    //             // scale: 2,
    //             x: -80,
    //             duration: 0.5,
    //             yoyo: true,
    //             // smoothOrigin: true,
    //             // stagger: 0.5,
    //             // ease: 'power2.inOut'
    //         });
    //         gsap.from('#promote-card-2', {
    //             scrollTrigger: {
    //                 trigger: '#promote-card-parent',
    //                 start: '20% bottom',
    //                 markers: true,
    //                 // scrub: true
                    
    //             },
    //             opacity: 0,
    //             // scale: 2,
    //             x: 80,
    //             duration: 0.5,
    //             yoyo: true,
    //             // smoothOrigin: true,
    //             // stagger: 0.5,
    //             // ease: 'power2.inOut'
    //         });
    //     },);
 

    return (
        <div id='promote-card-parent' className='w-full px-4 py-4 flex flex-col lg:flex-row gap-5 overflow-x-hidden'>
            <div id='promote-card-1' className='relative w-full hover:scale-[1.02] lg:w-1/2 flex flex-col md:flex-row duration-300'>
                <div className='w-full flex flex-row sm:flex-col p-4 md:w-[40%] lg:w-[45%] md:p-6 bg-black rounded-t-lg md:rounded-l-lg'>
                    <div className='text-2xl md:text-3xl mt-7 text-white font-semibold md:leading-normal'>18-Month PG Program in Mgmt & Tech</div>
                    {/* <div className='md:mt-7 flex items-center'><img className='w-28' src="https://assets-v2.scaler.com/assets/scaler/svg/mba-logo-bd22b1c79073b6e41788739397491760d704eae64728806ebb8120db5957e5b4.svg.gz" alt="" /></div> */}
                </div>
                <div className='w-full p-4 md:w-[60%] lg:w-[55%] md:p-8 shadow-[5px_2px_10px_3px_rgba(204,204,204,0.39)] bg-white rounded-b-lg md:rounded-r-lg'>
                    <div className="flex items-center">

                        <p className="text-gray-600 text-sm">Designed & Delivered by Business Leaders</p>
                    </div>

                    <div className="mt-3">
                        <h2 className="text-lg font-semibold text-gray-900">Career Outcome</h2>
                        <p className="text-gray-600 text-sm mt-3">Leadership roles in tech & non-tech across industries</p>
                    </div>

                    <div className='mt-3'>
                        <h2 className="text-lg font-semibold text-gray-900">What You Will Learn</h2>

                        <div className="mt-5">
                            <p className="text-gray-600 text-sm leading-6">Phase 1 (6 Months): Learn core principles of business</p>
                        </div>

                        <div className="mt-5">
                            <p className="text-gray-600 text-sm leading-6">Phase 2 (6 Months): Choose functional specialisations (Marketing, Operations, Finance & Strategy)</p>
                        </div>

                        <div className="mt-5">
                            <p className="text-gray-600 text-sm leading-6">Phase 3 (3 Months): Intern at top companies to gain real-world industry experience</p>
                        </div>

                        <div className="mt-5">
                            <p className="text-gray-600 text-sm leading-6">Phase 4 (3 Months): Learn industry-relevant skills for new-age businesses (Health Tech, EdTech, SaaS, GenAI, Blockchain & Web3)</p>
                        </div>

                        <div className="text-blue-600 hover:underline font-semibold mt-12">Learn More</div>
                    </div>
                </div>
                <div className='absolute top-0 left-10 w-14 h-8 md:h-10 bg-white font-semibold text-black rounded-b-lg p-1 md:p-2 text-center'>NEW</div>
            </div>
            <div id='promote-card-2' className='w-full hover:scale-[1.02] duration-300 lg:w-1/2 md:flex mt-5 md:mt-0 '>
                <div className='w-full flex flex-row sm:flex-col p-4 md:w-[40%] lg:w-[45%] md:p-6 bg-second  rounded-t-lg md:rounded-l-lg'>
                    <div className='text-2xl md:text-3xl mt-7 text-white font-semibold md:leading-normal'>18-Month PG Program in Mgmt & Tech</div>
                    {/* <div className='md:mt-7 flex items-center'><img className='w-28' src="https://assets-v2.scaler.com/assets/scaler/svg/mba-logo-bd22b1c79073b6e41788739397491760d704eae64728806ebb8120db5957e5b4.svg.gz" alt="" /></div> */}
                </div>
                <div className='w-full p-4 md:w-[60%] lg:w-[55%] md:p-8 shadow-[5px_2px_10px_3px_rgba(204,204,204,0.39)] bg-white rounded-b-lg md:rounded-r-lg'>
                    <div className="flex items-center">
                        <p className="text-gray-600 text-sm">Designed & Delivered by Business Leaders</p>
                    </div>

                    <div className="mt-3">
                        <h2 className="text-lg font-semibold text-gray-900">Career Outcome</h2>
                        <p className="text-gray-600 text-sm mt-3">Leadership roles in tech & non-tech across industries</p>
                    </div>

                    <div className='mt-3'>
                        <h2 className="text-lg font-semibold text-gray-900">What You Will Learn</h2>

                        <div className="mt-5">
                            <p className="text-gray-600 text-sm leading-6">Phase 1 (6 Months): Learn core principles of business</p>
                        </div>

                        <div className="mt-5">
                            <p className="text-gray-600 text-sm leading-6">Phase 2 (6 Months): Choose functional specialisations (Marketing, Operations, Finance & Strategy)</p>
                        </div>

                        <div className="mt-5">
                            <p className="text-gray-600 text-sm leading-6">Phase 3 (3 Months): Intern at top companies to gain real-world industry experience</p>
                        </div>

                        <div className="mt-5">
                            <p className="text-gray-600 text-sm leading-6">Phase 4 (3 Months): Learn industry-relevant skills for new-age businesses (Health Tech, EdTech, SaaS, GenAI, Blockchain & Web3)</p>
                        </div>

                        <div className="text-blue-600 hover:underline font-semibold mt-12">Learn More</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PromoteCard