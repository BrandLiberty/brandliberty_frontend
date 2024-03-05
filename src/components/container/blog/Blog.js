import React, { useContext, useEffect,useState } from 'react';
import { Context } from '../../../App';
import { Link } from 'react-router-dom';
import '../../assets/css/containers/blog.css';
import bli1 from '../../assets/images/services/application.jpg';
import bli2 from '../../assets/images/services/smm.jpg';
import bli3 from '../../assets/images/services/software.jpg';
import ScrollTopButton from '../../atoms/ScrollTopButton';
import It_sector from '../../includes/It_sector'
import Loader from '../../screen/loader';


const Blog = () => {

    const [showPageLoader , setShowPageLoader] = useState(true)

    useEffect(()=>{
      setTimeout(()=>{setShowPageLoader(false)},1650)
    },[])
  
    if(showPageLoader){
      return <Loader />
    }else{
  

    return (
        <div className='blog-main'>
            <div className='blog-head'>
                <h2 className='section-heading' data-aos="fade-down">Blogs</h2>
                <h3 data-aos="fade-right">Non-stop knowledge and inspiration</h3>
            </div>
            <div className="blog-container">
                <div className="blog-box" data-aos="fade-right">
                    <div className="blog-img">
                        <img src={bli1} alt="blog" />
                    </div>
                    <div className="blog-text">
                        <span>24 june 2023 / IT Sector</span>
                        <Link to="" className="blog-title">What has happened to all of the IT Sector</Link>
                        <p>Web design gives out freebies, such as icon sets, templates, and plugins for tools like WordPress, Sketch, and Photoshop</p>
                        <Link className='blog-rm' to="/It_sector">Read More...</Link>
                    </div>
                </div>

                <div className="blog-box" data-aos="fade-up">
                    <div className="blog-img">
                        <img src={bli2} alt="blog" />
                    </div>
                    <div className="blog-text">
                        <span>24 june 2023 / Digital Marketing</span>
                        <Link to="" className="blog-title">What has happened to all of the Digital Marketing</Link>
                        <p>Social media platforms like Facebook, Instagram, and Twitter have become an integral part of our daily lives, and businesses that...</p>
                        <Link className='blog-rm' to="/It_sector">Read More...</Link>
                    </div>
                </div>

                <div className="blog-box" data-aos="fade-left">
                    <div className="blog-img">
                        <img src={bli3} alt="blog" />
                    </div>
                    <div className="blog-text">
                        <span>24 june 2023 / Company</span>
                        <Link to="" className="blog-title">Check More About Company And Culture</Link>
                        <p>Welcome to our company's personal blog! Here, we share insights, updates, and stories about our journey, products, and industry... </p>
                        <Link className='blog-rm' to="">Read More...</Link>
                    </div>
                </div>
            </div>
            {/* Scroll-to-top button */}
            <ScrollTopButton/>
        </div>
    )
}
}

export default Blog;
