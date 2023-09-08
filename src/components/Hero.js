import React from 'react';
import './Hero.css';

const Hero = () => {
  const labels = [
    'TECHNOLOGY & DESIGN',
    'FULL TIME',
    '2 YEARS',
    'CSN APPROVED',
    'FULL-TIME DIPLOMA',
  ];

  return (
    <div>
      <div className='bg-img'>
        <div className='overlay'>
          <div className='title'>
            <div>
              <h3>
                <a
                  href='https://www.hyperisland.com/programs-and-courses'
                  title='Programs and Courses'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>Programs and Courses</span>
                </a>
              </h3>
              <h3> / </h3>
            </div>
            <h1>Frontend Developer</h1>
          </div>
          <div className='content'>
            <div>
              <p className='main-description'>
                Want to be the bridge between designers, project managers and
                clients? Want to produce amazing user experiences? If so, this
                Frontend Developer Course is for you.
              </p>
            </div>
            <div className='labels-n-loc'>
              <div className='labels'>
                {labels.map((label, index) => (
                  <span className='label' key={index}>
                    <span>{label}</span>
                  </span>
                ))}
              </div>
              <div className='loc'>
                <h5>Location</h5>
                <p>
                  <span>Stockhom</span>
                </p>
              </div>
              <div className='syllabus-access'>
                <div>
                  <a
                    href='https://www.hyperisland.com/programs-and-courses/frontend-developer/syllabus'
                    title='Access the syllabus'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span>Access the syllabus</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
