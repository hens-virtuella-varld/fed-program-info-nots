import React from 'react';
import hyperIslandImg from '../assets/hyperIsland.svg';

const Header = () => {
  return (
    <div>
      <div>
        <a href='https://www.hyperisland.com/' title='Hyper Island'>
          <img src={hyperIslandImg} alt='Hyper Island' />
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
