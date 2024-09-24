import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import data from '../../../../src/Data/Service-course-detail.json';

const CourseDetail = () => {
  const [activeLevel, setActiveLevel] = useState(0);
  const [course, setCourse] = useState({});
  const [selectedModule, setSelectedModule] = useState(null); // State to store the selected module

  useEffect(() => {
    // Initialize with the first course and module when the component mounts
    const initialCourse = data[0];
    setCourse(initialCourse);
    setActiveLevel(initialCourse.id);

    // Set the first module of the course as the initially selected module
    const initialModule = initialCourse.modules[0];
    setSelectedModule(initialModule); // Set default selected module
  }, []);

  const handleAvtiveLevel = (id) => {
    setActiveLevel(id);
    let course = data.find(item => item.id === id);
    setCourse(course);

    // Set the first module of the newly selected course
    const firstModule = course.modules[0];
    setSelectedModule(firstModule);
  };

  const handleCourseDetail = (id) => {
    // Find the selected module based on its id
    const moduleDetail = course.modules.find(module => module.id === id);
    setSelectedModule(moduleDetail); // Update the selected module state
  };

  return (
    <div className='w-full bg-[#F8F8F8] px-4 py-10 xl:px-40'>
      <div className=''>
        <div className='text-2xl md:text-3xl font-normal text-center'>
          <span className='font-semibold'>Curriculum </span>
          is designed to make you a 
          <span className='font-semibold'> solid engineer</span>
        </div>
        <div className='flex items-center justify-center gap-5 mt-10'>
          {
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`w-full p-5 rounded-md font-semibold text-white cursor-pointer duration-300 hover:scale-[1.03]
                    ${activeLevel === item.id ? 'scale-[1.03] bg-second' : 'bg-first'}`} // Active/inactive conditional classes
                  onClick={() => handleAvtiveLevel(item.id)}
                >
                  <div>
                    <h1 className='text-xl lg:text-3xl'>{item.name}</h1>
                    <p className='text-sm lg:text-md mt-1'>{item.period} Months</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='p-7'>
          <div className='flex justify-center gap-10'>
            <div className='h-[510px] w-[60%] px-2 overflow-y-auto no-scrollbar'>
              <div className='flex flex-col gap-5'>
                {
                  course && course.modules && course?.modules.map((item, index) => {
                    return (
                      <div
                        key={index}
                        id='summary'
                        onClick={() => handleCourseDetail(item.id)}
                        className={`duration-300 hover:scale-[1.02] drop-shadow-md rounded-md px-4 py-5 cursor-pointer 
                ${selectedModule && selectedModule.id === item.id ? 'bg-first scale-[1.02] text-white' : 'bg-white text-first'}`}>
                        <div className='text-xs'>MODULE - {item.id}</div>
                        <div className='flex justify-between'>
                          <p className='text-md lg:text-xl font-semibold'>{item.name}</p>
                          <p className='text-sm lg:text-md'>{item.period} Months</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='w-[40%] flex flex-col justify-between'>
              <div className='p-8 rounded-lg drop-shadow-lg bg-white h-[440px] overflow-hidden'>
                {/* Content inside the scrollable container */}
                <div className='overflow-y-auto h-full pr-3 custom-scrollbar'>
                  {
                    selectedModule ? (
                      <>
                        <div id='summary-detail'>{selectedModule.period} Months</div>
                        <hr className='mt-3 mb-3' />
                        <div>
                          <p className='text-md lg:text-lg font-semibold'>{selectedModule.summeryTitle}</p>
                          <div className='ml-5'>
                            {
                              selectedModule.summery.map((item, index) => (
                                <li className='text-sm lg:text-base' key={index}>{item}</li>
                              ))
                            }
                          </div>
                        </div>
                      </>
                    ) : (
                      <p>Select a module to see details.</p>
                    )
                  }
                </div>
              </div>
              <div>
                <Button className='w-full'>Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail;
