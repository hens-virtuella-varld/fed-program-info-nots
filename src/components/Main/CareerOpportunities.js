import React from 'react';

const CareerOpportunities = () => {
  const careerOpportunities = [
    {
      title: 'An endless industry need for talent',
      p: 'Frontend Developers are in demand! Swedish IT & Telecom companies estimate the hiring need for system and software developers, where Frontend developers are included, will be approximately 24,000 new individuals within the next four years. A Frontend Development Course has also long been requested by Hyper Island’s network of hiring companies, who are now delighted to be able to hire talent from this program. Additionally, all course content is designed to meet the needs of today’s industries and is delivered by industry professionals at the forefront of their fields. Real project briefs set by real clients form the core of the program’s modules and are developed in close collaboration with our network of industry partners.',
    },
    {
      title: 'Launch your career',
      p: 'The insights, knowledge, and array of skills you will gain will help you reach a position as frontend Developer, Web Developer, Interface Developer, Web Programmer, Javascript Developer, among many others.',
    },
  ];

  return (
    <div>
      {' '}
      <div>
        <div>
          <h4>Career Opportunities</h4>
          <h2>Get the skills to accelerate your career</h2>
        </div>
        <div>
          {careerOpportunities.map((item, index) => (
            <p key={`careerOpportunities-${index}`}>
              <strong>{item.title}</strong>
              <br />
              {item.p}
            </p>
          ))}
          <p>
            <a
              href='https://www.linkedin.com/school/hyper-island/people'
              target='_blank'
              rel='noreferrer'
            >
              Learn more on the Hyper Island alumni LinkedIn page
            </a>
          </p>
          <h2>Nordic students can study for free</h2>
          <div>
            <p>
              To be considered a Nordic student who qualifies for a free YH
              education, you MUST hold a personal identity number AND fulfil at
              least one of the following criteria:
              <br />
              1) Be a citizen of Sweden, Iceland, Norway, Denmark, Finland or
              any of the related territories.
              <br />
              2) Have permanent right of residence in one of the countries
              mentioned above.
              <br />
              3) Have temporary right of residence in Sweden for the full
              duration of the program. You may be asked to upload proof of your
              right of residence.
            </p>
            <p>
              Your right of residency must not be dependent on your studies at
              Hyper Island. Please note that Hyper Island is unable to provide
              immigration support or sponsorship of any kind to Nordic students.
            </p>
            <p>
              You may be asked to upload proof of your right of residence. Still
              have questions about whether you qualify? Write to us here{' '}
              <a href='mailto:applicants@hyperisland.com'>
                applicants@hyperisland.com
              </a>
            </p>
            <p>
              Swedish students may qualify for financial support (from CSN)
              while studying. Please{' '}
              <a
                href='https://www.csn.se/bidrag-och-lan/for-din-situation/utlandsk-medborgare/ratt-till-svenskt-studiestod/sverige.html'
                target='_blank'
                rel='noreferrer'
              >
                check here
              </a>{' '}
              or contact{' '}
              <a
                href='https://www.csn.se/kontakta-oss.html'
                target='_blank'
                rel='noreferrer'
              >
                CSN
              </a>{' '}
              directly. For those applying from Norway, Denmark, Iceland,
              Finland and the Faroe Islands, you should contact your local
              education support provider.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunities;
