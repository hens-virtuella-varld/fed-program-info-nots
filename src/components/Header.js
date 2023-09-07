import React from 'react';
import { ReactComponent as ArrowSvg } from '../assets/arrow.svg';
import { ReactComponent as HyperIslandSvg } from '../assets/hyperIsland.svg';
import headerInfo from '../data/headerInfo.js';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <a
          href='https://www.hyperisland.com/'
          title='Hyper Island'
          target='_blank'
          rel='noreferrer'
        >
          <HyperIslandSvg />
        </a>
      </div>
      <div className='headerInfoWrapper'>
        {headerInfo.main.map((item, index) => (
          <div className='categoryWrapper'>
            <div key={`${item}-${index}`} className='category'>
              {item.category}
            </div>
            <ArrowSvg className='dropDownArrow' />
          </div>
        ))}
        <div className='categoryWrapper'>
          <div className='category'>More</div>
          <ArrowSvg />
        </div>
      </div>
    </div>
  );
};

export default Header;
