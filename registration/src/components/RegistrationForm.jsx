import React, { useState } from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import CheckboxField from './CheckboxField';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dob: '',
    terms: false,
    newsletter: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    console.log('Form Data:', formData);
    alert('Registration successful!');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      gender: '',
      dob: '',
      terms: false,
      newsletter: false
    });
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      gender: '',
      dob: '',
      terms: false,
      newsletter: false
    });
  };

  const genderOptions = [
    { value: '', label: 'Select Gender' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="container">
      <div className="registration-form">
        <h1>Registration Form</h1>
        <p className="subtitle">Please fill in this form to create an account</p>
        
        <form onSubmit={handleSubmit}>
          <InputField
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleInputChange}
            required={true}
          />

          <InputField
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleInputChange}
            required={true}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required={true}
          />

          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
            required={false}
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            required={true}
          />

          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required={true}
          />

          <SelectField
            label="Gender"
            name="gender"
            options={genderOptions}
            value={formData.gender}
            onChange={handleInputChange}
            required={false}
          />

          <InputField
            label="Date of Birth"
            name="dob"
            type="date"
            placeholder=""
            value={formData.dob}
            onChange={handleInputChange}
            required={false}
          />

          <CheckboxField
            name="terms"
            label={
              <>
                I agree to the <a href="#" className="link">Terms and Conditions</a>
              </>
            }
            checked={formData.terms}
            onChange={handleInputChange}
            required={true}
          />

          <CheckboxField
            name="newsletter"
            label="Subscribe to newsletter"
            checked={formData.newsletter}
            onChange={handleInputChange}
            required={false}
          />

          <div className="button-group">
            <button type="submit" className="btn btn-primary">Register</button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
          </div>

          <p className="login-link">
            Already have an account? <a href="#" className="link">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

