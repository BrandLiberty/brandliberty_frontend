import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../assets/css/includes/slider.css';

// Import images
import image1 from '../assets/images/Slider1.jpg';
import image2 from '../assets/images/Slider2.jpg';
import image3 from '../assets/images/Slider3.jpg';
import image4 from '../assets/images/Slider2.jpg';
import image5 from '../assets/images/Slider1.jpg';
import image6 from '../assets/images/Slider3.jpg';

const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
  const CustomArrows = ({ next, previous }) => (
    <div>
      <NextArrow onClick={next} />
      <PrevArrow onClick={previous} />
    </div>
  );

  const Imgslider = ({ sliderText }) => {
  const settings = {
    infinite: true,
    // fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: function(i) {
        return <a></a>;
      },
      appendDots: dots => (
        <div>
          <ul>{dots}</ul>
        </div>
      ),
  };

  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="slider-container">
      <div className="content-overlay">
        {/* Use the provided custom text and style */}
        <h1 className="slider-text">{sliderText}</h1>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-image">
            <img className='img-slide' src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default Imgslider;
