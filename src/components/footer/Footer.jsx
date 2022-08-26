import React from 'react';
import "./footer.scss";
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className='footer-container'>
        <div className='footer-inner-container'>
          <div className='first-part'>
            <h3>COINCAP.IO</h3>
            <div>
              <p className='light-color-text'>Methodology</p>
              <p className='light-color-text'>Support</p>
              <p className='light-color-text'>Our API</p>
              <p className='light-color-text'>Rate Comparison</p>
              <p className='light-color-text'>Careers</p>
            </div>
          </div>

          <div className='sec-part'>
            <div>
              <h3>LEGALS</h3>
              <p className='light-color-text'>Terms of Service</p>
              <p className='light-color-text'>Privacy Policy</p>
            </div>

            <div>
              <h3>DISCLAIMER</h3>
              <p className='address light-color-tex'>Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</p>
            </div>
          </div>

          <div className='third-part'>
            <h3>FOLLOW US</h3>
            <div>
              <AiOutlineTwitter className='social-icons' />
              <AiFillFacebook className='social-icons' />
            </div>
          </div>

          <div className='forth-part'>
            <h3>COINCAP APP AVAILABLE ON</h3>
            <div className='download-links'>
              <img src="https://coincap.io/static/images/stores/google_play.svg" alt="" className='download-icons' />
              <img src="https://coincap.io/static/images/stores/apple_store.svg" alt="" className='download-icons' />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;