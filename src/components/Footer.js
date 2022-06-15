import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
             Lukács Pálinka 1969
            </Link>
          </div>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href="https://www.facebook.com/search/top?q=distilerie%20din%20ceche%C8%99ti-csekefalvi%20p%C3%A1linkaf%C5%91zde"
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
