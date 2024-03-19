import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../App';
import { Link } from 'react-router-dom';
import '../../assets/css/containers/blog.css';
import bli1 from '../../assets/images/services/software.jpg';
import bli2 from '../../assets/images/services/influencer-marketing.jpg';
import bli3 from '../../assets/images/services/seo.jpg';
import ScrollTopButton from '../../atoms/ScrollTopButton';
import Loader from '../../screen/loader';

const Blog = () => {
    const [showPageLoader, setShowPageLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowPageLoader(false);
        }, 1650);
    }, []);

    const blogPosts = [
        {
            image: bli1,
            date: '24 june 2023',
            category: 'IT Sector',
            title: 'What has happened to all of the IT Sector',
            excerpt: 'Web design gives out freebies, such as icon sets, templates, and plugins for tools like WordPress, Sketch, and Photoshop',
            link: '/blog_detail' 
        },
        {
            image: bli2,
            date: '24 june 2023',
            category: 'Digital Marketing',
            title: 'What has happened to all of the Digital Marketing',
            excerpt: 'Social media platforms like Facebook, Instagram, and Twitter have become an integral part of our daily lives, and businesses that...',
            link: '/blog_detail' 
        },
        {
            image: bli3,
            date: '24 june 2023',
            category: 'Company',
            title: 'Check More About Company And Culture',
            excerpt: "Welcome to our company's personal blog! Here, we share insights, updates, and stories about our journey, products, and industry...",
            link: '/blog_detail' 
        },
    ];

    if (showPageLoader) {
        return <Loader />;
    } else {
        return (
            <div className='blog-main'>
                <div className='blog-head'>
                    <h2 className='section-heading' data-aos='fade-down'>
                        Blogs
                    </h2>
                    <h3 data-aos='fade-right'>Non-stop knowledge and inspiration</h3>
                </div>
                <div className='blog-container'>
                    {blogPosts.map((post, index) => (
                        <div className='blog-box' key={index} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                            <div className='blog-img'>
                                <img src={post.image} alt='blog' />
                            </div>
                            <div className='blog-text'>
                                <span>{post.date} / {post.category}</span>
                                <Link to={post.link} className='blog-title'>
                                    {post.title}
                                </Link>
                                <p>{post.excerpt}</p>
                                <Link className='blog-rm' to={post.link}>
                                    Read More...
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Scroll-to-top button */}
                <ScrollTopButton />
            </div>
        );
    }
};

export default Blog;
