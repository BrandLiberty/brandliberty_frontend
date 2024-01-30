/* SwiperSlider.js */
import React, { useRef } from 'react';
import Slider from 'react-slick';
import '../assets/css/comman/swiperslider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Image1 from "../assets/images/dog.jpg"
import Image2 from "../assets/images/dog1.jpg"

const SwiperSlider = () => {
  const sliderRef = useRef(null);
  const images = [Image1, Image2]; // Include only image paths

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: images.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed as needed
  };

  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="swiper-slider-container">
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index}>
            <img className='swip-img' src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="swiper-navigation">
        <button onClick={previousSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default SwiperSlider;
