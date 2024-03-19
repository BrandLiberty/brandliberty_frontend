import React, { useContext, useEffect, useState, useRef } from 'react';
import { Context } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/containers/career.css';
import ScrollTopButton from '../../atoms/ScrollTopButton';
import cimg from '../../assets/images/Poster_Frames_Mockup_1.jpg';
import cimg1 from '../../assets/images/BLwhyus7feb.jpg';
import hwimg from '../../assets/images/howwehire.jpg';
import ApplicationForm from '../../includes/ApplicationForm';
import Loader from '../../screen/loader';

const Career = () => {
  const [showPageLoader, setShowPageLoader] = useState(true);
  const [selectedOpening, setSelectedOpening] = useState(null);
  const openingsRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowPageLoader(false);
    }, 1650);

    // Add event listener to handle clicks outside the openings section
    window.addEventListener('click', handleOutsideClick);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // Function to handle clicks outside the openings section
  const handleOutsideClick = (event) => {
    if (openingsRef.current && !openingsRef.current.contains(event.target)) {
      setSelectedOpening(null); // Close the opened section
    }
  };

  const openings = [
    {
      title: 'Sales Executive',
      experience: '0 to 2 years',
      payScale: '15K to 25K',
      responsibilities: [
        ' Present, promote, and sell products/services using solid arguments to existing and prospective customers.',
        ' Perform cost-benefit and needs analysis of existing/potential customers to meet their needs.',
        ' Establish, develop, and maintain positive business and customer relationships.',
        ' Reach out to customer leads through cold calling.',
        ' Expedite the resolution of customer problems and complaints to maximize satisfaction.',
        ' Achieve agreed upon sales targets and outcomes within the schedule.',
        ' Coordinate sales efforts with team members and other departments.',
        ' Analyze the territory/market’s potential, track sales, and status reports',
        ' Supply management with reports on customer needs, problems, interests, competitive activities, and potential for new products and services.',
        ' Keep abreast of best practices and promotional trends.',
        ' Continuously improve through feedback.'
      ],
      skills: [
        'Communication skills',
        'Negotiation skills',
        'Interpersonal skills',
        'Excellent knowledge of MS Office.',
        'Highly motivated and target is driven with a proven track record in sales.',
        'Relationship management skills and openness to feedback',
      ],
      perks: [
        'Certificate',
        'Free snacks & beverages',
        'Informal dress code'
      ]
    },
    {
      title: 'Social Media Management',
      experience: '0 to 2 years',
      payScale: '15K to 25K',
      responsibilities: [
        ' Present, promote, and sell products/services using solid arguments to existing and prospective customers.',
        ' Perform cost-benefit and needs analysis of existing/potential customers to meet their needs.',
        ' Establish, develop, and maintain positive business and customer relationships.',
        ' Reach out to customer leads through cold calling.',
        ' Expedite the resolution of customer problems and complaints to maximize satisfaction.',
        ' Achieve agreed upon sales targets and outcomes within the schedule.',
        ' Coordinate sales efforts with team members and other departments.',
        ' Analyze the territory/market’s potential, track sales, and status reports',
        ' Supply management with reports on customer needs, problems, interests, competitive activities, and potential for new products and services.',
        ' Keep abreast of best practices and promotional trends.',
        ' Continuously improve through feedback.'
      ],
      skills: [
        'Communication skills',
        'Negotiation skills',
        'Interpersonal skills',
        'Excellent knowledge of MS Office.',
        'Highly motivated and target is driven with a proven track record in sales.',
        'Relationship management skills and openness to feedback',
      ],
      perks: [
        'Certificate',
        'Free snacks & beverages',
        'Informal dress code'
      ]
    },
    {
      title: 'Frontend Developer',
      experience: '0 to 2 years',
      payScale: '15K to 25K',
      responsibilities: [
        ' Present, promote, and sell products/services using solid arguments to existing and prospective customers.',
        ' Perform cost-benefit and needs analysis of existing/potential customers to meet their needs.',
        ' Establish, develop, and maintain positive business and customer relationships.',
        ' Reach out to customer leads through cold calling.',
        ' Expedite the resolution of customer problems and complaints to maximize satisfaction.',
        ' Achieve agreed upon sales targets and outcomes within the schedule.',
        ' Coordinate sales efforts with team members and other departments.',
        ' Analyze the territory/market’s potential, track sales, and status reports',
        ' Supply management with reports on customer needs, problems, interests, competitive activities, and potential for new products and services.',
        ' Keep abreast of best practices and promotional trends.',
        ' Continuously improve through feedback.'
      ],
      skills: [
        'Communication skills',
        'Negotiation skills',
        'Interpersonal skills',
        'Excellent knowledge of MS Office.',
        'Highly motivated and target is driven with a proven track record in sales.',
        'Relationship management skills and openness to feedback',
      ],
      perks: [
        'Certificate',
        'Free snacks & beverages',
        'Informal dress code'
      ]
    },
    {
      title: 'Backend Developer',
      experience: '0 to 2 years',
      payScale: '15K to 25K',
      responsibilities: [
        ' Present, promote, and sell products/services using solid arguments to existing and prospective customers.',
        ' Perform cost-benefit and needs analysis of existing/potential customers to meet their needs.',
        ' Establish, develop, and maintain positive business and customer relationships.',
        ' Reach out to customer leads through cold calling.',
        ' Expedite the resolution of customer problems and complaints to maximize satisfaction.',
        ' Achieve agreed upon sales targets and outcomes within the schedule.',
        ' Coordinate sales efforts with team members and other departments.',
        ' Analyze the territory/market’s potential, track sales, and status reports',
        ' Supply management with reports on customer needs, problems, interests, competitive activities, and potential for new products and services.',
        ' Keep abreast of best practices and promotional trends.',
        ' Continuously improve through feedback.'
      ],
      skills: [
        'Communication skills',
        'Negotiation skills',
        'Interpersonal skills',
        'Excellent knowledge of MS Office.',
        'Highly motivated and target is driven with a proven track record in sales.',
        'Relationship management skills and openness to feedback',
      ],
      perks: [
        'Certificate',
        'Free snacks & beverages',
        'Informal dress code'
      ]
    },
    // Add other opening objects similarly
  ];

  if (showPageLoader) {
    return <Loader />;
  } else {
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
        {/* <br /> */}
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
              The well-being and success of our employees are our top priority, and we support them in achieving their goals.
            </p>
          </div>
        </div>
        

        <section id="faq" className="openings" ref={openingsRef}>
        <div className="op-container" data-aos="fade-up">
            <h3 className="text-center">Current <span>Opening</span></h3>
            <div className="row ">
              <div className="col-xl-10">
                <ul className="faq-list">
                  {openings.map((opening, index) => (
                    <li key={index}>
                      <div
                        data-bs-toggle="collapse"
                        className="collapsed-question"
                        onClick={() => setSelectedOpening(selectedOpening === index ? null : index)}
                      >
                        {opening.title}.
                        {selectedOpening === index ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                      </div>
                      {selectedOpening === index && (
                        <div id={`faq${index + 1}`} className="collapse" data-bs-parent=".faq-list">
                          <div className="blog-box1">
                            <div className="blog-text1">
                              <p><b>Experience:</b> {opening.experience}<br /></p>
                              <p><b>Pay Scale:</b> {opening.payScale}<br /></p>
                              <p><b>Responsibilities:</b></p>
                              <ul>
                                {opening.responsibilities.map((responsibility, i) => (
                                  <li key={i}>{responsibility}</li>
                                ))}
                              </ul>
                              <p><b>Skills:</b></p>
                              <ul>
                                {opening.skills.map((skill, i) => (
                                  <li key={i}>{skill}</li>
                                ))}
                              </ul>
                              <p><b>Perks:</b></p>
                              <ul>
                                {opening.perks.map((perk, i) => (
                                  <li key={i}>{perk}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className='form'>
            <ApplicationForm />
          </div>

        </section>
        <div className='hw-hire' data-aos="fade-up">
          <img src={hwimg} alt="" />
        </div>
        {/* Scroll-to-top button */}
        <ScrollTopButton />
      </div>
    )
  }
}

export default Career;
