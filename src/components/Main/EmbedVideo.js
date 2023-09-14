import React from 'react'

const EmbedVideo = () => {
  return (
    <div>
      <div>
        <div>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube-nocookie.com/embed/V-cQVbhpNVE?si=o-J9jIFAw3s4xKNO'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <span>
            Watch this video and learn how to apply to our full-time diploma
            programs, as a Nordic student. Application process differs for
            international students - if you’re applying from outside the Nordic
            region then please contact applicants@hyperisland.com - our team
            will be happy to assist
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmbedVideo;