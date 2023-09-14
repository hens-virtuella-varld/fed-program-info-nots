import React from 'react';
import MethodologyHIWayimg from '../../assets/MethodologyHIWay.jpeg';

const OurMethodology = () => {
  const ourMethodology = [
    {
      title: 'Learn by doing',
      p: 'Build, create, experiment! We know from more than 20 years of experience that people learn best through active doing and making.',
    },
    {
      title: 'Work in teams',
      p: 'Collaboration is the modern core competence in a world of complexity and constant change.',
    },
    {
      title: 'Real-world ready',
      p: 'We build learning around actual examples and practical tasks to make it all immediately relevant and useful.',
    },
    {
      title: 'Global network of experts',
      p: 'We work with world-leading industry experts to provide the most cutting-edge content.',
    },
  ];
  return (
    <div>
      <div>
        <div>
          <h4>Our methodology</h4>
          <h2>The Hyper Island Way</h2>
        </div>
        <div>
          <div>
            <img src={MethodologyHIWayimg} alt='Methodology Hyper Island Way' />
          </div>
          <div>
            <span>
              <p>
                Hyper Island methodology is based on a learner-centered,
                experience-based approach. We facilitate learning journeys,
                where discovering, uncovering, applying and reflecting is all
                part of the process by which participants learn useful skills
                and knowledge they can apply right away.
              </p>
            </span>
          </div>
        </div>
        <div>
          {ourMethodology.map((item, index) => (
            <div key={`ourMethodology-${index}`}>
              <h3>{item.title}</h3>
              <div>
                <p>{item.p}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>
            <h2>Vocational education at its best</h2>
          </div>
          <div>
            <p>
              This program is a vocational diploma program which means that you
              will practice experience-based learning; no textbooks, tests or
              traditional teachers. Instead, you will be a part of a
              collaborative and high-energy learning environment that mirrors
              the modern workplace dynamics. Surrounded by a diverse set of
              talent and industry experts from all over the world, you will get
              a chance to create solutions based on real problems of real
              clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMethodology;
