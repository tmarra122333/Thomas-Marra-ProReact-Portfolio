import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0vvrskg', 'template_0l6vgxz', form.current, 'ObfGrvicDwFLiYz4A')
    
    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>tmarra122333@gmail.com</h5>
            <a href="mailto:tmarra122333@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin/>
            <h4>linkedin</h4>
            <h5></h5>
            <a href="https://www.linkedin.com/in/thomas-marra/" target="_blank">Follow me on linkdin!</a>
          </article>

          </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </section>
  )
}

export default Contact