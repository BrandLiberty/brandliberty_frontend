import React, { useEffect } from 'react';
import '../assets/css/comman/star.css';

const StarFiled = () => {
    useEffect(() => {
        const createStars = (container, size, count) => {
          for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.background = 'transparent';
            star.style.position = 'absolute';
            star.style.top = '0';
            star.style.boxShadow = generateBoxShadow(size);
            container.appendChild(star);
          }
        };
    
        const generateBoxShadow = (size) => {
          let boxShadow = '';
          for (let i = 0; i < size; i++) {
            boxShadow += `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF, `;
          }
          return boxShadow.slice(0, -2); 
        };
    
        const starsContainer = document.getElementById('stars');
        const stars2Container = document.getElementById('stars2');
      
    
        createStars(starsContainer, 1, 300);
        createStars(stars2Container, 2, 20);
       
      }, []);
    
      return (
        <div className='star-container'>
          <div id="stars"></div>
          <div id="stars2"></div>
          
        </div>
      );
    };

export default StarFiled
