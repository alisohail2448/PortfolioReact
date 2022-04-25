import React, { useContext, useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false);

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_q7h2l9h', 'template_bift1sp', form.current, '3gPiC5rYx9ZE9pDY_')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode ? 'white' : '' }} >Get in Touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: '#Abf1ff94'}}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Name' />
                <input type="email" name="user_email" className='user' placeholder='Email' />
                <textarea name="message"  className='user' placeholder='Message'></textarea>
                <input type="submit" value="Send" className='button' />
                <span>{done && "Thanks for contacting me!"}</span>
            <div className="blur c-blur1" style={{background: 'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact