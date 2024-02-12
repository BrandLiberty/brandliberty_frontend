import React, { useState } from 'react';
import '../assets/css/includes/applicationform.css'; // Import your CSS file

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    totalExperience: '',
    post: '',
    resume: null
  });

  const [fileError, setFileError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name;
      const fileExtension = fileName.split('.').pop().toLowerCase();
      if (fileExtension !== 'doc' && fileExtension !== 'pdf') {
        setFormData({ ...formData, resume: null });
        setFileError('File format must be .doc or .pdf');
      } else {
        setFormData({ ...formData, resume: file });
        setFileError('');
      }
    }
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const fieldValue = type === 'file' ? files[0] : value;
    setFormData({
      ...formData,
      [name]: fieldValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phoneNo.trim()) {
        newErrors.phoneNo = 'Phone number is required';
      } else if (formData.phoneNo.trim().length !== 10) {
        newErrors.phoneNo = 'Phone number should be exactly 10 digits';
      };
    if (!formData.totalExperience) newErrors.totalExperience = 'Total experience is required';
    if (!formData.post) newErrors.post = 'Post is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit the form data
      console.log(formData);
      // Reset the form
      setFormData({
        fullName: '',
        email: '',
        phoneNo: '',
        totalExperience: '',
        post: '',
        resume: null
      });
      setErrors({});
    }
  };

  return (
    <form className="application-form" onSubmit={handleSubmit} data-aos="fade-left">
      <div className="form-group">
        <label>Full Name<span className="required">*</span>:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        {errors.fullName && <span className="error-message">{errors.fullName}</span>}
      </div>
      <div className="form-group">
        <label> Email<span className="required">*</span>:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label> Phone No<span className="required">*</span>:</label>
        <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
        {errors.phoneNo && <span className="error-message">{errors.phoneNo}</span>}
      </div>
      <div className="form-group">
        <label>Total Experience<span className="required">*</span>:</label>
        <select name="totalExperience" value={formData.totalExperience} onChange={handleChange}>
          <option value="">Select Total Experience</option>
          <option value="0-1">0-1 years</option>
          <option value="1-3">1-3 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5+">5+ years</option>
        </select>
        {errors.totalExperience && <span className="error-message">{errors.totalExperience}</span>}
      </div>
      <div className="form-group">
        <label> Post<span className="required">*</span>:</label>
        <select name="post" value={formData.post} onChange={handleChange}>
          <option value="">Select Post</option>
          <option value="Content Writer">Content Writer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Graphic Designer">Graphic Designer</option>
        </select>
        {errors.post && <span className="error-message">{errors.post}</span>}
      </div>
      <div className="form-group">
        <label>
          Upload Resume<span className="required">*</span>:
        </label>
        <input type="file" name="resume" onChange={handleFileChange} />
        {fileError && <span className="error-message">{fileError}</span>}
        {errors.resume && <span className="error-message">This field is required</span>}
      </div>
      <button type="submit">Apply Now</button>
    </form>
  );
};

export default ApplicationForm;
