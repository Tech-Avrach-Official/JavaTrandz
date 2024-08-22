import React from 'react'

const AboutInfo = ({ aboutheading, abouttext, imgsrc, alignment }) => {
    return (
        <div>

            {
                alignment === "true" ?
                    <div className='w-full flex items-center justify-center pb-20'>
                        <div className='xl:flex items-center justify-center  gap-10 xl:pl-10'>
                            <div className='xl:w-1/2 p-4 ' ><AboutText aboutheading={aboutheading} abouttext={abouttext} /></div>
                            <div className='xl:w-1/2 mt-10 xl:mt-0 ' ><AboutCardRight imgsrc={imgsrc} /></div>
                        </div>
                    </div>
                    :
                    <div className='w-full flex items-center justify-center pb-20'>
                        <div className='xl:flex items-center justify-center  gap-10 xl:pr-10'>
                            <div className='xl:w-1/2 mt-10 xl:mt-0 ' ><AboutCardLeft imgsrc={imgsrc} /></div>
                            <div className='xl:w-1/2 p-4 mt-5 md:mt-0 ' ><AboutText aboutheading={aboutheading} abouttext={abouttext} /></div>
                        </div>
                    </div>
            }


        </div>
    )
}

export default AboutInfo

export const AboutText = ({ aboutheading, abouttext }) => {
    return (
        <>
            <div>
                <div className='w-full'>
                    <h1 className='text-3xl font-bold'>{aboutheading}</h1>
                    <p className='text-base mt-4'>{abouttext}</p>
                </div>
            </div>
        </>
    )
}

export const AboutCardRight = ({ imgsrc }) => {
    return (
        <>
            <div className='w-full'>
                <div className=" ">
                    <div className='relative flex justify-end'>
                        <div className='w-[70%] border-4 py-5 pl-5 border-black'>
                            <div className='w-full h-60 md:h-72  bg-first bg-[linear-gradient(to_right,#80808035_1px,transparent_1px),linear-gradient(to_bottom,#80808035_1px,transparent_1px)] bg-[size:14px_14px]'>
                            </div>
                        </div>
                        <div className='absolute w-[320px] h-[180px] md:w-[450px] md:h-[250px] left-6 md:left-16 top-[50%] translate-y-[-50%]'>
                            <img className='w-full h-full object-cover rounded-lg' src={imgsrc} alt="" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}
export const AboutCardLeft = ({ imgsrc }) => {
    return (
        <>
            <div className='w-full'>
                <div className="">
                    <div className='relative flex justify-start'>
                        <div className='w-[70%] border-4 py-5 pr-5 border-black'>
                            <div className='w-full h-60 md:h-72  bg-first bg-[linear-gradient(to_right,#80808035_1px,transparent_1px),linear-gradient(to_bottom,#80808035_1px,transparent_1px)] bg-[size:14px_14px]'>
                            </div>
                        </div>
                        <div className='absolute  w-[320px] h-[180px] md:w-[450px] md:h-[250px] right-6 md:right-16 top-[50%] translate-y-[-50%]'>
                            <img className='w-full h-full object-cover rounded-lg' src={imgsrc} alt="" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}
