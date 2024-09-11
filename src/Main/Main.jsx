import React, { Suspense } from 'react';
import Navbar from '../components/Layout/Navbar/Navbar'; // Ensure you have this component
import Footer from '../components/Layout/Footer/Footer'; // Ensure you have this component
import RoutesComponent from '../Routes/RoutesComponent'; // Import the routes component
import InfoStrip from '@/components/Layout/Information-Strip/InfoStrip';
import SideAction from '@/components/Layout/Side-Quick-Action/SideAction';

const Main = () => {
  return (
    <>
    {/* <InfoStrip/>
      <Navbar />
      <SideAction/> */}
      <Suspense
        fallback={
          <div className="loader-container" style={{ width: "75vw", height: "75vh" }}>
            <div className="loader-container-inner">
              <div className="text-center">
                {/* <Loader type="ball-pulse-rise" /> */}
              </div>
              <h6 className="mt-5">Please wait...</h6>
            </div>
          </div>
        }
      >
        <RoutesComponent /> 
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
