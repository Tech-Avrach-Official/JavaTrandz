import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import data from '../../../../src/Data/Service-course-detail.json';

const MobCourseDetail = () => {

  const [activeLevel, setActiveLevel] = useState(0);
  const [course, setCourse] = useState({});
  const [selectedModule, setSelectedModule] = useState(null); // State to store the selected module
  const [expandedModule, setExpandedModule] = useState(null); // Track which module is expanded

  useEffect(() => {
    // Initialize with the first course but do not set the module yet
    const initialCourse = data[0];
    setCourse(initialCourse);
    setActiveLevel(initialCourse.id);
  }, []);

  const handleAvtiveLevel = (id) => {
    setActiveLevel(id);
    let course = data.find(item => item.id === id);
    setCourse(course);

    // Clear the selected and expanded module when switching courses
    setSelectedModule(null);
    setExpandedModule(null);
  };

  const handleCourseDetail = (id) => {
    // Toggle the selected module based on its id
    if (expandedModule === id) {
      setExpandedModule(null); // Collapse if it's already expanded
    } else {
      setExpandedModule(id); // Expand the selected module
    }

    const moduleDetail = course.modules.find(module => module.id === id);
    setSelectedModule(moduleDetail); // Update the selected module state
  };

  return (
    <div className='w-full bg-[#F8F8F8] px-4 py-10 '>
      <div className=''>
        <div className='text-2xl md:text-3xl font-normal text-center'>
          <span className='font-semibold'>Curriculum </span>
          is designed to make you a
          <span className='font-semibold'>solid engineer</span>
        </div>
        <div className='flex items-center justify-center gap-1 md:gap-4 mt-10'>
          {
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`w-full p-3 text-center rounded-md font-semibold text-white cursor-pointer duration-300 hover:scale-[1.03]
                    ${activeLevel === item.id ? 'scale-[1.03] bg-second' : 'bg-first'}`} // Active/inactive conditional classes
                  onClick={() => handleAvtiveLevel(item.id)}
                >
                  <div>
                    <h1 className='text-lg'>{item.name}</h1>
                    <p className='text-xs mt-1'>{item.period} Months</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='px-2 py-5'>
          <div className='flex justify-center gap-10'>
            <div className='w-[100%] px-2 '>
              <div className='flex flex-col gap-5'>
                {
                  course && course.modules && course?.modules.map((item, index) => {
                    return (
                      <div
                        key={index}
                        id='summary'
                        onClick={() => handleCourseDetail(item.id)}
                        className={`duration-300 hover:scale-[1.02] drop-shadow-md rounded-md px-4 py-5 cursor-pointer 
                          ${selectedModule && selectedModule.id === item.id ? 'bg-first scale-[1.02] text-white' : 'bg-white text-first'}`}
                      >
                        <div className="py-2">
                        <div className='text-xs'>MODULE - {item.id}</div>
                        <div className={`flex justify-between `}>
                          <p className='text-md lg:text-xl font-bold'>{item.name}</p>
                          <p className='text-sm lg:text-md'>{item.period} Months</p>
                        </div>
                        </div>
                        
                        {/* Drawer-like smooth expanding/collapsing effect */}
                        <div 
                          className={`transition-all duration-500 overflow-y-scroll ${expandedModule === item.id ? 'max-h-[300px]' : 'max-h-0'}`}
                        >
                          {
                            selectedModule && selectedModule.id === item.id && (
                              <div id='detail'>
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
                              </div>
                            )
                          }
                        </div>

                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobCourseDetail;
