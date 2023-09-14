import React from 'react';

const CourseContent = () => {
  const courseContent = [
    {
      title: 'Bring ideas and concepts to life',
      p: 'The 80 week Frontend Developer Course will give you the skills and know-how to take ideas and concepts and make them into real web products and projects. You’ll spend 53 weeks at our Stockholm campus, plus 27 weeks doing an internship anywhere in the world.',
    },
    {
      title: 'An Essential Toolkit',
      p: 'Learn everything from HTML, CSS, PHP, Javascript and MySQL. Vue & web components, Headless CMS Stylesheet Languages (SASS) to advanced web development such as ASP.net, React, Node.js, REST, RubyonRails, elm. and developing mobile applications for iOS and Android. Search engine principles, server rendering, tracking implementation for Google Analytics through Google Tag Manager. Databases: knowledge in SQL, MySQL, MongoDB or similar.',
    },
    {
      title: 'Agile Development',
      p: 'Learn how to work in agile development teams and processes. Agile software development is an approach to Frontend development that promotes iterative development throughout the life-cycle of the project, close collaboration between the development team and business side, constant communication, and tightly-knit teams.',
    },
    {
      title: 'UX, UI, and Tools for Interface design',
      p: 'Learn to work with different design tools and visual forms of expression to understand the important connection between frontend design and UX and graphic design. UX and UI designers are key stakeholders in a Frontend Development project, so you will also learn how to work with UX and UI design in frontend projects.',
    },
  ];
  return (
    <div>
      <div>
        <div>
          <div>
            <h4>Course Content</h4>
            <h2>What you'll learn</h2>
          </div>

          <div>
            {courseContent.map((item, index) => (
              <div key={`courseContent-${index}`}>
                <p>
                  <strong>{item.title}</strong>
                  <br />
                  {item.p}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <a
            href='https://www.hyperisland.com/programs-and-courses/frontend-developer/syllabus'
            title='See full course description'
            target='_blank'
            rel='noreferrer'
          >
            <span>
              <span>See full course description</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
