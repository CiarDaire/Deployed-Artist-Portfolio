import React, { useState } from 'react';
import { send } from 'emailjs-com'
import { Header, Footer } from '../components';

const Contact = () => {

  const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState({});
    const [toSend, setToSend ] = useState({
        fullname: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({...inputs, [name]: value});
        setTextarea(value);
        setToSend({...toSend, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();  
        const form = document.querySelector('.con-body');
        form.textContent = 'Thanks for getting in touch!'
        send(
            'service_2si7cvh', //emailjs service ID
            'template_zer8tv9', //emailjs template ID
            toSend,
            'y0uTLCCJAaWphSbN6'//emailjs user ID
        )
    }

  return (
    <div>
      <Header />
      <main className="main-contact">
        <div className="contact-wrapper">
          <div className="contact">
              <div className="contact-title">
                  <div className="title-line-left"></div>
                  <h2>contact</h2>
                  <div className="title-line-right"></div>
              </div>
              <div className="con-body">
                  <p>Have any questions?</p>
                  <p>Let me know! I will get back to you as soon as possible.</p>
                  <form onSubmit={handleSubmit}>
                      <input 
                          type="text"
                          name="fullname"
                          value={inputs.fullname}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className="fullName"
                          required
                      />
                      <input 
                          type="email"
                          name="email"
                          value={inputs.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className="emailAddress"
                          required
                      />
                      <input 
                          type="text"
                          name="message"
                          value={textarea.message}
                          onChange={handleChange}
                          placeholder="Enter your message"
                          className="messageBox"
                          required
                      /> 
                      <input 
                          type="submit"
                          className="submitButton"
                      />
                  </form>
              </div>
          </div>
          <div className="mid-line"></div>
          <div className="socialMedia">
              <div className="socmed-title">
                  <div className="title-line-left"></div>
                  <h2>social media</h2>
                  <div className="title-line-right"></div>
              </div>
              <div className="socmed-body">
                  <p>You can also get in touch with me directly via Instagram or Gmail, or check out some of my past exhibitions on Facebook:</p>
                  <ul className="socmed-links">
                      <li>
                          <a href='http://www.instagram.com/lu.lined/' target="_blank" rel="noopener noreferrer">
                              <img src='./images/Instagram_icon.png'alt="Instagram logo"></img>
                          </a>
                      </li>
                      <li>
                          <a href='https://www.facebook.com/LouisaStevenArtist/' target="_blank" rel="noopener noreferrer">
                              <img src='./images/facebook-logo.png' alt="Facebook logo"></img>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
    
  )
}

export default Contact