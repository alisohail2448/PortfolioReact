import React, { useContext } from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import musicapp from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from '../../Context'

const Portfolio = () => {


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


  return (
    <div className="portfolio" id='Portfolio'>
        <span style={{color: darkMode ? 'white' : '' }}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider' >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={musicapp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hoc} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio