import React from 'react'

const Maintenance = () => {
    return (
        <div>
            <div className='sm:px-[5%] inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808035_1px,transparent_1px),linear-gradient(to_bottom,#80808035_1px,transparent_1px)] bg-[size:25px_25px] shadow-custom-inset'>
                <div className='h-screen w-full flex justify-center py-32'>
                    <div>
                        <div>

                            <h1 className='text-white text-5xl font-semibold text-center'>Website Under Maintenance</h1>
                            <p className='text-white text-lg text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className='mt-10'>
                            <img className='rounded-lg' src="https://media.istockphoto.com/id/1139968862/photo/barrier-under-construction.jpg?s=612x612&w=0&k=20&c=UdMTWQ5dIjW8PP4HXRkmd5TYdImu1cZpYPR-l9oXiwA=" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maintenance