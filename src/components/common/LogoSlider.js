// LogoSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/comman/logoslider.css'; // Import the CSS file

import logo1 from '../assets/images/attachments/Premacha Chaha Main Logo.png';
import logo2 from '../assets/images/attachments/Ambar Foods Logo.png';
// import logo3 from '../assets/images/attachments/hotel publiq darbar Logo .png';
import logo4 from '../assets/images/attachments/Deshpande Kitchen.jpg';
import logo5 from '../assets/images/attachments/vithu.png';
import logo6 from '../assets/images/attachments/Divya Zesty Aroma.jpeg';
import logo7 from '../assets/images/attachments/kaya sprit logo.png';
import logo8 from '../assets/images/attachments/Socifly logo (1).png';
import logo9 from '../assets/images/attachments/Food Mascot Logo (4).png';

const partnerLogos = [logo1, logo2, , logo4, logo5, logo6, logo7, logo8, logo9];

const LogoSlider = () => {
    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: Math.min(5, partnerLogos.length),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: Math.min(4, partnerLogos.length),
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: Math.min(3, partnerLogos.length),
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: Math.min(3, partnerLogos.length),
            },
          },
        ],
      };
    
      return (
        <Slider {...settings} className="logo-slider">
          {partnerLogos.map((logo, index) => (
            <div className='logo-con' key={index}>
              <img src={logo} alt={`Partner Logo ${index + 1}`} style={{ border: 'none', outline: 'none' }} />
            </div>
          ))}
        </Slider>
      );
    };
    

export default LogoSlider;
