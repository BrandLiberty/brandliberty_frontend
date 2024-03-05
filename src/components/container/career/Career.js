import React, { useContext, useEffect,useState } from 'react';
import { Context } from '../../../App';
import '../../assets/css/containers/career.css';
import ScrollTopButton from '../../atoms/ScrollTopButton';
import cimg from '../../assets/images/Poster_Frames_Mockup_1.jpg';
import cimg1 from '../../assets/images/BLwhyus7feb.jpg';
import hwimg from '../../assets/images/howwehire.jpg';
import ApplicationForm from '../../includes/ApplicationForm';
import Loader from '../../screen/loader';

const Career = () => {

  const [showPageLoader , setShowPageLoader] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{setShowPageLoader(false)},1650)
  },[])

  if(showPageLoader){
    return <Loader />
  }else{
  return (
    <div className='career-main'>
      <div className='c-sec'>
        <div className='c-head'>
        <h2 className='section-heading2' data-aos="fade-down">Career</h2>
          <h1 data-aos="fade-right">Shape The Future Of Technology & Digital Marketing</h1>
          <p data-aos="fade-right">Our company understands the importance of technology and digital marketing in our success,
           and we are committed to investing in these areas to remain on the cutting edge of innovation.
           Those with a deep understanding of both technical and creative aspects of digital 
           marketing and technology will shape the future of these fields.
          </p>
        </div>
        <div className='c-img' data-aos="fade-left">
          <img src={cimg} alt="" />
        </div>
      </div>   
       <br />
      <div className='c-sec2'>
       <div className='c-img2' data-aos="fade-right">
          <img src={cimg1} alt="" />
        </div>
        <div className='c-head2'>
          <h2 data-aos="fade-left">Why BrandLiberty ?</h2>
          <p data-aos="fade-left">At our company, we strive to cultivate a positive and supportive work environment
           that allows our employees to grow and develop. We know how important it is to offer competitive compensation,
            comprehensive benefits, and attractive salaries to our employees. In order to promote our employees'
             professional and personal development, we provide them with valuable resources and career advancement opportunities.
           The well-being and success of our employees is our top priority, and we support them in achieving their goals.
          </p>
        </div>
       
       
      </div> 

       <section id="faq" className="openings">
        
       <div className="op-container" data-aos="fade-up">
        <h3 className="text-center">Current <span>Opening</span></h3>

        <div className="row ">
          <div className="col-xl-10">
            <ul className="faq-list">
              <li>
                <div data-bs-toggle="collapse" className="collapsed-question" href="#faq1">
                  Sales Executive.
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <div className="blog-box1">
                    <div className="blog-text1">
                      <p><b>Experience:</b> 0 to 2 years.<br /></p>
                      <p><b>Pay Scale:</b> 15K to 25K<br /></p>
                      <p><b>Responsibilities:</b></p>
                      <ul>
                        <li>Present, promote, and sell products/services using solid arguments to existing and prospective customers.</li>
                        <li>Perform cost-benefit and needs analysis of existing/potential customers to meet their needs.</li>
                        <li>Establish, develop, and maintain positive business and customer relationships.</li>
                        {/* Add other responsibilities */}
                      </ul>
                      <p><b>Skills:</b></p>
                      <ul>
                        <li>Present, promote, and sell products/services using solid arguments to existing and prospective customers.</li>
                        <li>Perform cost-benefit and needs analysis of existing/potential customers to meet their needs.</li>
                        <li>Establish, develop, and maintain positive business and customer relationships.</li>
                        {/* Add other responsibilities */}
                      </ul>
                      <p><b>Perks:</b></p>
                      <ul>
                        <li>Certificate</li>
                        <li>Free snacks & beverages</li>
                        <li>Informal dress code.</li>
                        {/* Add other responsibilities */}
                      </ul>
                     
                      
                    </div>
                  </div>
                </div>
              </li>
              {/* Add other list items similarly */}
            </ul>
          </div>
        </div>
  
      </div>
      
      <div className='form'>
        <ApplicationForm/>
      </div>
      
    </section>
      <div className='hw-hire'data-aos="fade-up">
        <img src={hwimg} alt="" />
      </div> 
     {/* Scroll-to-top button */}
     <ScrollTopButton/>
    </div>
    
  )
}
}

export default Career
