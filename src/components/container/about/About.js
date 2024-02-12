import React, { useEffect, useState } from 'react';
import '../../assets/css/containers/about.css';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LogoSlider from '../../common/LogoSlider';
import abimg from '../../assets/images/mission.jpg';
import video1 from '../../assets/images/video/video1.mp4';
import teamMember1 from '../../assets/images/team/shubham.png';
import ScrollTopButton from '../../atoms/ScrollTopButton'

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Fetch data from teamData.json or your API endpoint
    // In this example, we use a static array for simplicity
    const data = [
      { id: 1, photo: teamMember1, name: 'Shubham Gaikwad', designation: 'CEO', linkedinUrl: '' },
      { id: 2, photo: teamMember1, name: 'Shubham Gaikwad', designation: 'Lead Developer', linkedinUrl: '' },
      { id: 3, photo: teamMember1, name: 'Shubham Gaikwad', designation: 'CEO', linkedinUrl: '' },
      { id: 4, photo: teamMember1, name: 'Shubham Gaikwad', designation: 'Lead Developer', linkedinUrl: '' },
      { id: 5, photo: teamMember1, name: 'Shubham Gaikwad', designation: 'CEO', linkedinUrl: '' },
      { id: 6, photo: teamMember1, name: 'Shubham Gaikwad', designation: 'Lead Developer', linkedinUrl: '' },
      { id: 7, photo: teamMember1, name: 'Shubham Gaikwad', designation: 'CEO', linkedinUrl: '' },
      { id: 8, photo: teamMember1, name: 'Shubham Gaikwad', designation: 'Lead Developer', linkedinUrl: '' },
      { id: 9, photo: teamMember1, name: 'Shubham Gaikwad', designation: 'CEO', linkedinUrl: '' },
      { id: 10, photo: teamMember1, name: 'Shubham Gaikwad', designation: 'Lead Developer', linkedinUrl: '' },
      // Add more team members as needed 
    ];

    setTeamMembers(data);
  }, []);

  return (
    <div className='about-main'>
      <div className='ab-sec1'>
        <div className='ab-head'>
          <h2 className='section-heading2' data-aos="fade-down">About</h2>
          <h1 data-aos="fade-right">Delivering measurable results to Clients, Employees, and Vendors.</h1>
        </div>
        <div className='ab-para'  data-aos="fade-left">
          Brand Liberty provides an extensive range of services, encompassing software development, web development, and application development,
          aimed at enhancing your business in the digital domain. With our team of skilled professionals,
          we dedicate our efforts to crafting resilient applications and websites that offer impeccable user experiences.
          Additionally, our specialized knowledge in social media management, search engine optimization (SEO),
          influencer marketing, and lead generation guarantees your brand establishes a notable advantage in the market.
          Join forces with Brand Liberty today and observe unprecedented growth in your online presence.
        </div>
      </div>
      <br />
      <div className='ab-sec2'>
        <div className='ab-head2'>
          <h2 data-aos="fade-right">Mission & Vision</h2>
          <p data-aos="fade-right">Brand Liberty provides an extensive range of services, encompassing software development,
            web development, and application development, aimed at enhancing your business in the digital domain.
            With our team of skilled professionals, we dedicate our efforts to crafting resilient applications and websites
            that offer impeccable user experiences. Additionally, our specialized knowledge in social media management,
            search engine optimization (SEO), influencer marketing, and lead generation guarantees your brand establishes
            a notable advantage in the market. Join forces with Brand Liberty today and observe unprecedented growth in your online presence.
          </p>
        </div>
        <div className='ab-img' data-aos="fade-left">
          <img src={abimg} alt="" />
        </div>
      </div>
      <LogoSlider />
      {/* who we are */}
      <div className='we-sec'>
        <div className='head-p' data-aos="fade-down">
          Who we Are
        </div>
        <div className='we-container'>
          <video autoPlay loop muted>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className='team-sec'>
        <div className='team-container'>
          <h2 className='section-heading' data-aos="fade-down">Team</h2>
          <h1 data-aos="fade-down">Beyond the products we deliver, it's the dedication of our team that defines us.</h1>
          <div className="team-members">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <img src={member.photo} alt={`${member.name}'s Photo`} className="team-photo" />
                <div className="team-info">
                  <div className="team-name">{member.name}</div>
                  <div className="team-designation">{member.designation}</div>
                  <Link to={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size="25px" color="#0077B5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       {/* Scroll-to-top button */}
      <ScrollTopButton/>
    </div>
  );
}

export default About;
