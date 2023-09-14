import React from 'react';
import BlackWhiteColorsImg from '../../assets/black-white-colors.jpeg';
import GuyWithDogImg from '../../assets/guy-with-dog.jpeg';
import MeetLouiseImg from '../../assets/meet-louise.jpeg';
import './StudentStories.css';

const StudentStories = () => {
  const articles = [
    {
      description:
        '‘Hyper Island’s methodology made me feel like I have more control over my life’ – meet Louise',
      link: 'https://www.hyperisland.com/blog/hyper-island-s-methodology-made-me-feel-like-i-have-more-control-over-my-life-meet-louise',
      img: { MeetLouiseImg },
      imgAlt: 'Meet louise',
    },
    {
      description:
        '“I’ve experienced so many great things here, I can’t even remember all the stuff that has happened.”',
      link: 'https://www.hyperisland.com/blog/i-ve-experienced-so-many-great-things-here-i-can-t-even-remember-all-the-stuff-that-has-happened',
      img: { BlackWhiteColorsImg },
      imgAlt: 'Black white colors',
    },
    {
      description:
        '“I didn’t want to risk falling behind in the real world while trying to get ahead academically.”',
      link: 'https://www.hyperisland.com/blog/i-didn-t-want-to-risk-falling-behind-in-the-real-world-while-trying-to-get-ahead-academically',
      img: { GuyWithDogImg },
      imgAlt: 'Guy with dog',
    },
  ];
  return (
    <div>
      <div>
        <div></div>
        <div>
          <h2>Student stories</h2>
        </div>
      </div>
      <div>
        <div>
          {articles.map((article, index) => (
            <a
              key={`articles-${index}`}
              href={article.link}
              title={article.description}
            >
              <div>
                <img src={article.img} alt={article.imgAlt} />
              </div>
              <article>
                <span>{article.description}</span>
              </article>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentStories;
