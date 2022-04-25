import React, { useContext } from 'react';
import './Work.css';
import Upwork from '../../img/Upwork.png';
import fiverr from '../../img/fiverr.png';
import amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';


const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="work">
        <div className="awesome">
            <span style={{color: darkMode ? 'white' : '' }} >Works for All these</span>
            <span>Brands & Clients</span>
            <span>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Veritatis libero <br />suscipit tenetur consectetur architecto!  <br />suscipit tenetur consectetur architecto!!</span>
            <button className="button s-button">Hire Me</button>
            <div className="blur s-blur1" style={{background: "#c1f5ff"}}></div>
        </div>

        <div className="w-right">
          <motion.div initial={{rotate:45}}
        whileInView={{rotate: 0}}
        viewport={{margin: '-40px'}}
        transition={{duration: 3.5, type: 'spring'}} className="w-mainCircle">
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={fiverr} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={amazon} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>
          </motion.div>

          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Work;