import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../assets/css/navigation/footer.css';
import video1 from '../assets/images/video/video1.mp4'
import img1 from '../assets/images/tab.png';

const Footer = () => {
  return (
    <footer className='foot-container'>
      <div className='footer-img'>
        <img src={img1} alt="" />
        <video className='video-overlay' autoPlay loop muted>
          <source src={video1} type='video/mp4' />
        </video>
      </div>
      <div className='f-con'>
      <p>Contact us</p>
      <h1>info@.brandliberty.in</h1>
      <h1>brandlibertyhr99@gmail.com</h1>
      </div>
      <div className="social-links">
          {/* Add your social links with icons here */}
          <div className="social-icons">
              <Link className='linki' to="" target="_blank" rel="noopener noreferrer"><FaFacebook /></Link>
              <Link className='linki' to="" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
              <Link className='linki' to="" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
              <Link className='linki' to="" target="_blank" rel="noopener noreferrer"><FaYoutube /></Link>
          </div>
       </div>
       <hr />
       <div className='footer-copyright'>© Copyright FreshPulp. All Rights Reserved Powered by <a className="copy-right-link" href='https://brandliberty.in/' target="_blank">Brand Liberty</a></div>


    </footer>
  );
}

export default Footer;
