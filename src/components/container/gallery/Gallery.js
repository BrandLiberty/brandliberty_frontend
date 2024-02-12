import React from 'react'
import '../../assets/css/containers/gallery.css';
import ScrollTopButton from '../../atoms/ScrollTopButton';
import galleryImg1 from '../../assets/images/dog.jpg';
import galleryImg2 from '../../assets/images/dog.jpg';
import galleryImg3 from '../../assets/images/dog.jpg';
import galleryImg4 from '../../assets/images/dog.jpg';
import galleryImg5 from '../../assets/images/dog.jpg';
import galleryImg6 from '../../assets/images/dog.jpg';
import galleryImg7 from '../../assets/images/dog.jpg';
import galleryImg8 from '../../assets/images/dog.jpg';
import galleryImg9 from '../../assets/images/dog.jpg';
import galleryImg10 from '../../assets/images/dog.jpg';
import galleryImg11 from '../../assets/images/dog.jpg';


const Gallery = () => {

  const images = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg5, galleryImg6, galleryImg7, galleryImg8,
    galleryImg9, galleryImg10, galleryImg11,
  ];

  return (


    <div className="gallery-container">
      <h2 data-aos="fade-down">Gallery</h2>
      <div className="image-gallery" data-aos="flip-down">
        {images.map((image, index) => (
          <div key={index} className="gallery-item fade-in" data-aos="fade-up">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* Scroll-to-top button */}
      <ScrollTopButton/>
    </div>


  );
};


export default Gallery
