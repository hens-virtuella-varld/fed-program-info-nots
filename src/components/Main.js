import React from 'react';

import './Main.css';
import Alumni from './Main/Alumni';
import CSNandYH from './Main/CSNandYH';
import CareerOpportunities from './Main/CareerOpportunities';
import CourseContent from './Main/CourseContent';
import EmbedVideo from './Main/EmbedVideo';
import Faq from './Main/Faq';
import MenuBar from './Main/MenuBar';
import OurMethodology from './Main/OurMethodology';
import Overview from './Main/Overview';
import UXDProgramAds from './Main/UXDProgramAds';
import StudentStories from './Main/StudentStories';

const Main = () => {
  return (
    <div>
      <MenuBar />
      <Overview />
      <CourseContent />
      <UXDProgramAds />
      <CareerOpportunities />
      <CSNandYH />
      <EmbedVideo />
      <OurMethodology />
      <Alumni />
      <Faq />
      <StudentStories />
    </div>
  );
};

export default Main;
