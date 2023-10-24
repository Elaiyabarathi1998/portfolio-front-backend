import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Styles from './ContactForm.module.css'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    number: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset the corresponding error when the input changes
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', number: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.number.trim()) {
      newErrors.number = 'Number is required';
      valid = false;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email address is required';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      try {
        const response = await axios.post('http://localhost:3000/formdata', formData);
        console.log(response.data);
        toast.success('Form submitted successfully', {
          position: 'bottom-right',
          autoClose: 3000,
        });

        // Reset the form fields after a successful submission
        setFormData({
          name: '',
          email: '',
          number: '',
          message: '',
        });
      } catch (error) {
        console.error('Error sending form data:', error);
        toast.error('An error occurred while submitting the form', {
          position: 'bottom-right',
          autoClose: 3000,
        });
      }
    } else {
      toast.error('Please fill in all required fields correctly', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  // Initially, show a toast message when the component first renders
  useEffect(() => {
    toast.info('Please note: All fields are mandatory.', {
      position: 'bottom-left',
      autoClose: 3000,
    });
  }, []);

  // Initially, the button is disabled and the background color is gray
  const isSubmitDisabled = !formData.name.trim() || !formData.number.trim() || !formData.email.trim() || !formData.message.trim();
  const buttonStyle: React.CSSProperties = {
    backgroundColor: isSubmitDisabled ? 'gray' : '#0074cc',
    color: isSubmitDisabled ? 'white' : 'white',
    padding: '10px 20px',
    border: 'none',
  };

  return (

    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      background: '#e0e0e0',
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '10px 10px 20px #b3b3b3, -10px -10px 20px #ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{
        maxWidth: '300px',
        minWidth:'350px',
        margin: '0 auto',
        padding: '10px',
      }}>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="name" style={{
            display: 'block',
            fontWeight: 'bold',
          }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              background: '#e0e0e0',
              borderRadius: '10px',
              boxShadow: 'inset 5px 5px 10px #b3b3b3, inset -5px -5px 10px #ffffff',
            }}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="email" style={{
            display: 'block',
            fontWeight: 'bold',
          }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              background: '#e0e0e0',
              borderRadius: '10px',
              boxShadow: 'inset 5px 5px 10px #b3b3b3, inset -5px -5px 10px #ffffff',
            }}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Enter a valid email address"
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="number" style={{
            display: 'block',
            fontWeight: 'bold',
          }}>
            Number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              background: '#e0e0e0',
              borderRadius: '10px',
              boxShadow: 'inset 5px 5px 10px #b3b3b3, inset -5px -5px 10px #ffffff',
            }}
          />
          {errors.number && <span style={{ color: 'red' }}>{errors.number}</span>}
        </div>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="message" style={{
            display: 'block',
            fontWeight: 'bold',
          }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              background: '#e0e0e0',
              borderRadius: '10px',
              boxShadow: 'inset 5px 5px 10px #b3b3b3, inset -5px -5px 10px #ffffff',
            }}
          />
          {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
        </div>
        <div style={{ margin: '10px 0' }}>
          <button
            type="submit"
            style={{
              background: '#e0e0e6',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '10px',
              boxShadow: '5px 5px 10px #b3b3b3, -5px -5px 10px #ffffff',
              cursor: 'pointer',
              fontSize: '18px',
            }}
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
    
  );
};

export default ContactForm;
