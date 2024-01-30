import React, { useState, useEffect } from 'react';
import '../assets/css/atoms/scroll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100); // Adjust the threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-top-btn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} size="2x" />
    </button>
  );
};

export default ScrollTopButton;
