import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Require at least one of email or phone
    if (!formData.email && !formData.phone) {
      setError('Please provide either an email or a phone number.');
      return;
    }
    setError('');
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Phone: <a href="tel:7242551180">(724) 255-1180</a></p>
          <p>Email: <a href="mailto:dustin.conti@gmail.com">dustin.conti@gmail.com</a></p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          {error && <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
