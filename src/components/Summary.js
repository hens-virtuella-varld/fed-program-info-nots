import React from 'react';
import HILogo from '../assets/HILogo.jpeg';
import './Summary.css';

const Summary = () => {
  const details = [
    { title: 'Dates', description: 'August 7, 2023 – March 28, 2025' },
    {
      title: 'Length',
      description: '80 weeks (53 on campus – 27 on internship)',
    },
    { title: 'Location', description: 'Stockholm, Sweden' },
    {
      title: 'Tuition Fees',
      description:
        'International students – 209,000 SEK; Nordic students – government funded + CSN support',
    },
  ];
  return (
    <div className='card'>
      <div>
        <div className='details'>
          <div>
            {details.map((detail, index) => (
              <p className='detail' key={`${detail.title}-${index}`}>
                <strong>{detail.title}: </strong>
                {detail.description}
              </p>
            ))}
            <p className='detail'>
              <strong>Requirements: </strong>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.hyperisland.com/programs-and-courses/frontend-developer#faq'
              >
                See our FAQ
              </a>
            </p>
            <p className='detail' class='p1'>
              <b>Applications for Nordics: </b>The intake for 2023 is now
              closed. Applications for programs starting August 2024 will open
              in January 2024.
            </p>
          </div>
        </div>
        <div className='application-btn'>
          <div>
            <a
              href='https://hello.hyperisland.com/application-process'
              target='_blank'
              rel='noopener noreferrer'
              title='Nordic application'
            >
              <span>Nordic application</span>
            </a>
          </div>
        </div>
        <div className='internationals'>
          <div>
            <p>
              <b>
                Applications for internationals:
                <br />
              </b>
              Applications open for 2024
            </p>
          </div>
        </div>
        <div className='application-btn'>
          <div>
            <a
              href='https://www.hyperisland.com/full-time-programs/apply'
              target='_blank'
              rel='noopener noreferrer'
              title='International application '
            >
              <span>International application </span>
            </a>
          </div>
        </div>
        <div className='contact'>
          <div>
            <div></div>
            <div>Got questions?</div>
            <span>Contact us</span>
          </div>
          <span className='hi-logo'>
            <img src={HILogo} alt='Hyper Island Logo' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
