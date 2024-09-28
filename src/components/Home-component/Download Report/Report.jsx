import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '../../ui/button';
import Chart from '../../ui/chart';

const Report = () => {
  const [value, setValue] = useState('');

  const handleDownload = () => {
    if (!value) return;

    const fileMap = {
      'Java': '/path/to/your/Java.pdf',
      'Python': '/path/to/your/python.pdf',
      'React': '/path/to/your/React.pdf',
    };

    const filePath = fileMap[value];
    if (filePath) {
      const link = document.createElement('a');
      link.href = filePath;
      link.download = `${value}.pdf`;
      link.click();
    }
  };

  return (
    <div className='py-12 px-3 md:p-24 bg-[#F8F8F8] overflow-x-hidden'>
      <div className='rounded-xl xl:px-32 py-5 shadow-[0px_6px_15px_3px_rgba(204,204,204,0.59)] bg-white'>
        <div className='text-2xl md:text-4xl font-normal px-2 text-center'>
          Java Trandze's Historical <span className='font-semibold'>Career Transition Report</span>
        </div>
        
        <div className='mt-5 xl:p-5 flex flex-col gap-2 lg:flex-row md:mt-10'>
          {/* Chart Section */}
          <div className='w-full lg:w-[50%] overflow-x-hidden'>
            <Chart value={value} />
          </div>
          
          {/* Report Download Section */}
          <div className='lg:w-[50%] lg:border lg:border-black md:mt-0 rounded-lg'>
            <div className='text-center mt-5 text-base lg:text-xl font-semibold -tracking-tight'>
              Lorem, ipsum.
            </div>
            
            <div className='flex flex-col gap-5 items-center justify-center mt-5 md:mt-16'>
              {/* Select Dropdown */}
              <Select onValueChange={(selectedValue) => setValue(selectedValue)}>
                <SelectTrigger className="w-[200px] md:w-[330px] md:h-12 rounded-sm">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Java">Java</SelectItem>
                  <SelectItem value="Python">Python</SelectItem>
                  <SelectItem value="React">React</SelectItem>
                </SelectContent>
              </Select>

              {/* Download Button */}
              <Button onClick={handleDownload} className="w-[200px] md:w-[330px] md:h-12">
                Download Report
              </Button>
            </div>
          </div>
        </div>

        <div className='text-center mt-3 text-gray-600'>
          Disclaimer: Past outcomes are not indicative of future placements.
        </div>
      </div>
    </div>
  );
};

export default Report;
