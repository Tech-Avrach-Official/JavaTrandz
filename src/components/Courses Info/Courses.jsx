import React, { useState } from 'react'
import lineLeft from '../../assets/line-left.svg'
import lineRight from '../../assets/line-right.svg'
import { Button } from '../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faNode, faPython, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'

const courseData = [
    {
        id: 1,
        name: "Java Development",
        icon: faJava,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem deserunt sed libero quo mollitia sit reiciendis repellendus odit aliquam."
    },
    {
        id: 2,
        name: "Node.js Development",
        icon: faNode,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem deserunt sed libero quo mollitia sit reiciendis repellendus odit aliquam.Lorem ipsum dolor sit amet."
    },
    {
        id: 3,
        name: "Python Development",
        icon: faPython,
        content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, officiis aliquam voluptatem deleniti nesciunt illum eveniet sed ipsum id impedit quae sapiente nihil voluptatum? Iure ea error esse eligendi?"
    },
    {
        id: 4,
        name: "React.js Development",
        icon: faReact,
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus qui cumque voluptates atque! Quos eum, aliquam totam voluptates voluptas minus esse? Quos, minus quaerat. Est dicta nobis dolores animi doloribus!"
    },
    {
        id: 5,
        name: "JavaScript Development",
        icon: faSquareJs,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem deserunt sed libero quo mollitia sit reiciendis repellendus odit aliquam.Lorem ipsum dolor"
    },
]

const Courses = () => {
    // Set the initial state to the Java course
    const [selectedCourse, setSelectedCourse] = useState(courseData[0]);

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
    }

    return (
        <div className='px-3 md:px-10 lg:px-32 bg-[#F8F8F8] p-10 md:pt-20'>
            <div>
                <div className='flex items-center justify-center gap-4'>
                    <img className='hidden md:block lg:w-[full]' src={lineLeft} alt="" />
                    <span className='text-base lg:text-xl font-semibold -tracking-tight'>ON-CAMPUS PROGRAMS</span>
                    <img className='hidden md:block lg:w-[full]' src={lineRight} alt="" />
                </div>
                <div className='rounded-lg bg-white mt-10 md:mt-20 md:flex shadow-[0px_6px_15px_3px_rgba(204,204,204,0.59)]'>
                    <div className='w-full md:w-[35%] gap-0.5 md:gap-2 p-1 md:p-5 flex md:flex-col'>
                        {courseData.map((course) => (
                            <div
                                key={course.id}
                                onClick={() => handleCourseClick(course)}
                                className={`border h-14 w-1/2 md:w-full md:h-24 rounded-sm md:rounded-md lg:px-8 flex items-center justify-center md:justify-normal cursor-pointer duration-300 ${
                                    selectedCourse && selectedCourse.id === course.id
                                        ? 'scale-[1.03] bg-second text-white' // Active state styles
                                        : 'bg-black text-white' // Inactive state styles
                                }`}
                            >
                                <div className='flex justify-center items-center gap-7'>
                                    <FontAwesomeIcon icon={course.icon} className='text-3xl lg:text-6xl' />
                                    <p className='hidden md:block text-2xl font-medium'>{course.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='p-4 md:p-8 md:w-[65%]'>
                        <div className='h-[85%]'>
                            {selectedCourse ? (
                                <div className='text-2xl md:text-3xl font-normal text-center mt-5'>
                                    {selectedCourse.name}'s Historical <span className='font-semibold'>Career Transition Report</span>
                                    <div className='flex flex-wrap justify-center mt-8 gap-5'>
                                        <div className='xl:w-[350px] text-gray-600 text-base text-center'>
                                            {selectedCourse.content}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className='text-2xl md:text-3xl font-normal text-center mt-5'>
                                    Select a course to see the details
                                </div>
                            )}
                        </div>
                        <div className='flex items-end justify-center h-[10%]'>
                            <Button className="mt-10 w-48">Quick Action</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;
