import React from 'react';

const Overview = () => {
  const overviewP = [
    'Frontend Developers help produce amazing user experiences on the web and in apps through the use of HTML, CSS and JavaScript – as well as a constantly changing battery of tools and programming languages.',
    'Frontend Developers essentially bring to life how designers, other team members, and clients imagine user experience. But it’s not just hard technical skills, you also need to have the ability to plan your projects, communicate your ideas and keep the team on track.',
    'Hyper Island puts Frontend Developers to work in teams with our design students. This way, you’ll learn useful ways to combine graphic design with coding principles and master the communication and teamwork needed to produce amazing interactive user experiences.',
  ];
  return (
    <div>
      <div>
        <div>
          <h4>Overview</h4>
          <h2>Frontend Developers produce amazing user experiences</h2>
        </div>
        <div>
          {overviewP.map((p, index) => (
            <p key={`overviewP-${index}`}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
