import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer>
      <div className='footer-cols p-1'>
          <div className="p-03">
            <SocialIcon target="_blank" url="https://twitter.com/ZakkFast" />
          </div>
          <div className="p-03">
          <SocialIcon target="_blank" url="https://www.linkedin.com/in/zachary-fast/" />\
          </div>
          <div className="p-03">
          <SocialIcon target="_blank" url="https://github.com/ZakkFast" />
          </div>
          <div className="p-03">
          <SocialIcon target="_blank" url="https://drive.google.com/file/d/1omG7wWL8QHU8tFZekWPmao2lz_2fHIr5/view?usp=sharing" />
          </div>
          <div className="p-03">
          <SocialIcon target="_blank" url="mailto:webdev@zakkfast.com" />
          </div>
      </div>
    </footer>
  );
}

export default Footer;
