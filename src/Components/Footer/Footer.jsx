import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Git from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" />
        <div className="f-content">
            <span>alisohail2448@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem' />
                <Linkedin color='white' size='3rem' />
                <Git color='white' size='3rem' />
            </div>
        </div>
    </div>
  )
}

export default Footer