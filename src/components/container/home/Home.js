import React from 'react'
import '../../assets/css/containers/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faCompass,faCog,faMap,faBinoculars } from '@fortawesome/free-solid-svg-icons';
import Navbar1 from '../../navigation/Navbar';
import ScrollTopButton from '../../atoms/ScrollTopButton'
import Img1 from '../../assets/images/home-img.png'
import StarFiled from '../../common/StarField';
import SwiperSlider from '../../common/SwiperSlider';
import LogoSlider from '../../common/LogoSlider';
import pvi1 from '../../assets/images/vision.jpg';
import pvi2 from '../../assets/images/mission.jpg';
import svi1 from '../../assets/images/logo/softwaredev.png';
import svi2 from '../../assets/images/logo/web.png';
import svi3 from '../../assets/images/logo/application-1.png';
import svi4 from '../../assets/images/logo/smm.png';
import svi5 from '../../assets/images/logo/sem.png';
import svi6 from '../../assets/images/logo/seo.png';
import svi7 from '../../assets/images/logo/emailm.png';
import svi8 from '../../assets/images/logo/lead.png';
import svi9 from '../../assets/images/logo/infuencer.png';
import teci1 from '../../assets/images/html.png';
import teci2 from '../../assets/images/css.png';
import teci3 from '../../assets/images/js.png';
import teci4 from '../../assets/images/rjs.png';
import video1 from '../../assets/images/video/video1.mp4'


const Home = () => {
 

  return (
    <section className='home-p'>
      <div className='main-container'>
        <Navbar1 isHomePage={true} />
        <div className='home-banner'>
          <StarFiled />
          <div className='baneer-con'>
            <div className='main-para'>
              Discover the world of<br />
              <span>" Brand Liberty "</span><br />
              Where IT & Digital Marketing Thrive!

            </div>
            <div className='img-container'>
              <img src={Img1} alt="" />

            </div>
          </div>
          <div className='btn-1' >
            <button type="button" class="slide-btn" >
              Get the Quote
            </button>
          </div>
          <div className='slider-banner'>
            {/* <SwiperSlider /> */}

          </div>

        </div>


      </div>
      <LogoSlider />
      <div className='contact-section'>
        <div className='con-main-para' data-aos="fade-right">
          Get ready to work with us
          <p>We are a leading IT solution and digital marketing company,empowering business with innovative technology</p>

        </div>
        <div className='btn-2'data-aos="fade-left">
            <button type="button" class="con-btn" >
              Contact Us
            </button>
          </div>

      </div>
      {/* about-sec */}
      <div className='about-sec'>
        <div className='ab-text' >
          <h2 className='section-heading' >About Us</h2>
          
          <h1 data-aos="fade-down">Empowering your Business Growth- IT Solutions and Digital Marketing Consultancy at its finest .</h1>
          <div className='at'data-aos="fade-up">
             We are a leading IT solution and digital marketing company,empowering business with innovative technology and result- driven marketing strategies.<br />
            <br />
            Our proficiency encompasses software development, web development, and application development, allowing us to create tailor-made solutions to fulfill your distinct business objectives. Through our exceptional social media management services, we assist you in forging significant connections with your target audience.
            
          </div>
          <div className='pv-1'>
          <div data-aos="fade-right"><img src={pvi1} className='pv-img1' />
          <h3>Our Vision</h3>
          <p>“Delivering measurable results to clients,employees, and vendors.”</p>
          </div>
          <div className='about-pv-img2'data-aos="fade-left"><img src={pvi2} className='pv-img1' />
          <h3>Our Mission</h3>
          <p>“Provide the best customer results possible and deliver the WOW factor through our services.”</p>
          </div>
        </div>
        </div>
      </div>
      {/* service-sec */}
      <div className='service-sec'>
        <div className='ser-text'>
          <h2 className='section-heading2'>Services</h2>
          <h1 data-aos="fade-right">Check our IT Services</h1>
          <p data-aos="fade-right">We are a leading IT solution and digital marketing company,empowering business with innovative technology and result- driven marketing strategies.</p>
          <div className='st'>
            <div className='sv-1'>
              <div data-aos="fade-left"><img src={svi1} className='sv-img1' />
                <h3>Software Development</h3>
                <a href="service">Learn More</a>
              </div>
            </div>
            <div className='sv-2'>
              <div data-aos="fade-right"><img src={svi2} className='sv-img1' />
                <h3>Web Development</h3>
                <a href="service">Learn More</a>
              </div>
            </div>
            <div className='sv-1'>
              <div data-aos="fade-left"><img src={svi3} className='sv-img1' />
                <h3>Application Development</h3>
                <a href="service">Learn More</a>
              </div>
            </div>
            <div className='sv-2'>
              <div data-aos="fade-right"><img src={svi4} className='sv-img1' />
                <h3>Social Media Management</h3>
                <a href="service">Learn More</a>
              </div>
            </div>
            <div className='sv-1'>
              <div data-aos="fade-left"><img src={svi5} className='sv-img1' />
                <h3>Social Media Marketing</h3>
                <a href="service">Learn More</a>
              </div>
            </div>
            <div className='sv-2'>
              <div data-aos="fade-right"><img src={svi6} className='sv-img1' />
                <h3>Social Media  Optimization</h3>
                <a href="service">Learn More</a>
              </div>
            </div>
            <div className='sv-1'>
              <div data-aos="fade-left"><img src={svi7} className='sv-img1' />
                <h3>Email Marketing</h3>
                <a href="service">Learn More</a>
              </div>
            </div>
            <div className='sv-2'>
              <div data-aos="fade-right"><img src={svi8} className='sv-img1' />
                <h3>Lead Generation</h3>
                <a href="service">Learn More</a>
              </div>
            </div>
            <div className='sv-1'>
              <div data-aos="fade-left"><img src={svi9} className='sv-img1' />
                <h3>Influencer Marketing</h3>
                <a href="service">Learn More</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* working-tech */}
      <div className='wtech-sec'>
        <div className='wt-text'>
          <h2 className='section-heading'>Working Technologies</h2>
          <h1 data-aos="fade-down">Seamless technologies we are working with</h1>
          <div className='at'data-aos="fade-up">
            We are a leading IT solution and digital marketing company,empowering business with innovative technology and result- driven marketing strategies.
          </div>
          <div className='tech-container'>
          <div className='item-logo'>
            <img className='wt-i' src={teci1} alt="" />
          </div>
          <div className='item-logo'>
            <img className='wt-i'  src={teci2} alt="" />
          </div>
          <div className='item-logo'>
            <img className='wt-i'  src={teci3} alt="" />
          </div>
          <div className='item-logo'>
            <img className='wt-i'  src={teci4} alt="" />
          </div>

        </div>
        </div>
     

      </div>
      {/* who we are */}
      <div className='we-sec'>
        <div className='head-p'data-aos="fade-down">
          Who we Are
        </div>
        <div className='we-container'>
          <video autoPlay loop muted>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* how we work */}
      <div className='hw-sec'>
          <h2 className='section-heading'>How We Work</h2>
          <h1 data-aos="fade-down">We making better world with our work</h1>
          <div className='at' data-aos="fade-up">
             We are a leading IT solution and digital marketing company,empowering business with innovative technology and result- driven marketing strategies.<br />
           
          </div>
        <div className='hw-container'>
          <div className='containt-hw'>
            <div className='hw-con' data-aos="fade-right">
              <div className='con1' >
                <div className='con-logo'><FontAwesomeIcon icon={faBinoculars} size="2x"/></div>
              
              <div className='con1-name'>1.Discovery</div>
              </div>
              <div className='con2'>
                We are a leading IT solution and digital marketing company
              </div>
            </div>
            <div className='hw-con' data-aos="fade-right">
              <div className='con1' >
              <div className='con-logo'><FontAwesomeIcon icon={faMap} size="2x" /></div>
              <div className='con1-name'>2.Mapping</div>
              </div>
              <div className='con2'>
                We are a leading IT solution and digital marketing company
              </div>
            </div>
            <div className='hw-con' data-aos="fade-left">
              <div className='con1' >
              <div className='con-logo'><FontAwesomeIcon icon={faCompass} size="2x"/></div>
              <div className='con1-name'>3.Exploration</div>
              </div>
              <div className='con2'>
                We are a leading IT solution and digital marketing company
              </div>
            </div>
            <div className='hw-con' data-aos="fade-left">
              <div className='con1' >
              <div className='con-logo'><FontAwesomeIcon icon={faCog} size="2x"/></div>
              <div className='con1-name'>4.Strategy</div>
              </div>
              <div className='con2'>
                We are a leading IT solution and digital marketing company
              </div>
            </div>
            <div className='hw-con' data-aos="fade-up">
              <div className='con1' >
              <div className='con-logo'><FontAwesomeIcon icon={faPlay} size="2x"/></div>
              <div className='con1-name'>5.Execution</div>
              </div>
              <div className='con2'>
                We are a leading IT solution and digital marketing company
              </div>
            </div>
        </div>
        </div>
      </div>
      {/* Scroll-to-top button */}
      <ScrollTopButton/>
       
    </section>
  )
}

export default Home
