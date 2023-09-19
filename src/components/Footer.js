import React from 'react';
import './Footer.css';
import ShortcutsNCourses from './Footer/ShortcutsNCourses';
import Subscription from './Footer/Subscription';
import TermsNSocialMedia from './Footer/TermsNSocialMedia';

const Footer = () => {
  return (
    <div className='footer'>
      <Subscription />
      <ShortcutsNCourses />
      <TermsNSocialMedia />
    </div>
  );
};

export default Footer;
