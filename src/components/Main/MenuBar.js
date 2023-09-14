import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
  const topics = [
    'Overview',
    'Course Content',
    'Career Opportunities',
    'Our Methodology',
    'Alumni',
    'FAQ',
  ];
  return (
    <div>
      <div>
        <div className='topics'>
          {topics.map((topic, index) => (
            <div className='topic' key={`topics-${index}`}>{topic}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
