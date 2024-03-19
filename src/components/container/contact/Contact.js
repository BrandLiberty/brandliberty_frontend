import React, { useContext, useEffect,useState } from 'react';
import { Context } from '../../../App';
import { useForm } from 'react-hook-form';
import "../../assets/css/containers/contact.css";
import { BsGeoAlt, BsEnvelope } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import ScrollTopButton from '../../atoms/ScrollTopButton';
import Loader from '../../screen/loader'

const Contact = () => {


  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission logic here
  };

  const [showPageLoader , setShowPageLoader] = useState(true)

  

  useEffect(()=>{
    setTimeout(()=>{setShowPageLoader(false)},1650)
  },[])

  if(showPageLoader){
    return <Loader />
  }else{


  return (
    <div className="contact-div">
      <div className='con-head'>
        <h2 className='section-heading' data-aos="fade-down">Contact Us</h2>
      </div>
      
      <div className="contact-container">
        <div className="contact-contactbox-M2">
          <div className="contact-box-b1 bl-1" data-aos="zoom-in-up">
            <BsGeoAlt className="contact-icon-m1" />
            <h1>Location</h1>
            <p className="contact-t2">Office No.2 First Floor, 
              Dattatry Sadan 408 Narayan peth pune - 411030
              India</p>
          </div>

          <div className="contact-box-b1 bl-2" data-aos="zoom-in">
            <BiPhoneCall className="contact-icon-m1" />
            <h1>Phone Number</h1>
            <p className="contact-t2">+91-9309436484</p>
          </div>

          <div className="contact-box-b1 bl-3" data-aos="zoom-in-down">
            <BsEnvelope className="contact-icon-m1 l1" />
            <h1>Email</h1>
            <p className="contact-t2 lsc1">info@brandliberty.in</p>
          </div>
        </div>

        <div className='con-containt'>
 

          <div className="contact-box-map mp-1">
            <iframe className="google-m-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3138911559627!2d73.84609157436775!3d18.514712269354778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10b86955701%3A0x7364bf090030c232!2sBrand%20Liberty!5e0!3m2!1sen!2sin!4v1687765235380!5m2!1sen!2sin" ></iframe> 
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="Full Name" {...register("fullName", { required: true })} />
              {errors.fullName && <span>This field is required</span>}
              
              <input type="email" placeholder="Email" {...register("email", { required: true })} />
              {errors.email && <span>This field is required</span>}
              
              <input type="text" placeholder="Subject" {...register("subject", { required: true })} />
              {errors.subject && <span>This field is required</span>}
              
              <textarea placeholder="Message" {...register("message", { required: true })} />
              {errors.message && <span>This field is required</span>}
              
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
        {/* Scroll-to-top button */}
     <ScrollTopButton/>
    </div>
  );
}
}

export default Contact;
