import React from "react";
import '../Footer/_footer.scss';
import Brands from "../../assets/images/footer/brands.png";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import LeftArrow from '../../assets/images/footer/left-arrow.png'
import RightArrow from '../../assets/images/footer/right-arrow.png'
import Logo from '../../assets/images/footer/footer-log.png'
import SupportIcon from '../../assets/images/footer/support-icon.png'
import TelegramIcon from '../../assets/images/footer/telegram-icon.png'
import TalkIcon from '../../assets/images/footer/talk-icon.png'
import PaymentMethods from '../../assets/images/footer/payment-methods.png'

import Collapse from '../Shared/Collapse'

function Footer() { 
  

  const CarouselBackButton = ({ onClick }) => {
    return (
      <ButtonBack
        onClick={onClick}
        role="button"
        aria-label="slide backward"
        className="ButtonBack"
        id="prev"
      >
        <img src={LeftArrow} alt="left" className="ml-7px object-none" />
      </ButtonBack>
    );
  };

  const CarouselNextButton = ({ onClick }) => {
    return (
      <ButtonNext
        onClick={onClick}
        role="button"
        aria-label="slide forward"
        className="ButtonNext"
        id="next"
      >
        <img src={RightArrow} alt="right" className="ml-10px object-none" />
      </ButtonNext>
    );
  };

  return (
    <div className="footer-container">
      <div className="footer">
        <div className="brands">
          <div className="brands-cont">
          <CarouselProvider
            visibleSlides={1}
            totalSlides={20}
            step={1}
            naturalSlideWidth={1182}
            isIntrinsicHeight={true}
            infinite={false}
          >
            <div className="slider__container">
              <CarouselBackButton />
              <div className="slider__content">
                <Slider classNameTrayWrap="carousel_tray_wrapper">

                  {Array(20)
                    .fill(undefined)
                    .map((_, index) => (
                      <Slide key={index} className="card_animation_slide_horizontal" index={index}>

                        <div className="brands-slider">
                          <img
                            src={Brands}
                            alt="Brands"
                          />
                        </div>

                      </Slide>
                    ))}
                </Slider>
              </div>
              <CarouselNextButton />
            </div>
            </CarouselProvider>
          </div>
        </div>
        
        <div className="footer-navs">
          <div className="toggle-list">
            <Collapse title={"라이브카지노"} />
            <Collapse title={"스포츠"} />
            <Collapse title={"슬롯게임"} />
            <Collapse title={"호텔카지노"} />
            <Collapse title={"기타게임"} />
            <Collapse title={"고객센터"} />
          </div>
          


        </div>
        <div className="winner-footer">
          <div className="container">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="contact__list">
              <div className="contact__item support-icon">
                <img src={SupportIcon} alt="Contact" />
                <p>고객센터</p>
              </div>
              <div className="contact__item telegram-icon">
                <img src={TelegramIcon} alt="Contact"/>
                <p>test1234</p>
              </div>
              <div className="contact__item talk-icon">
                <img src={TalkIcon} alt="Contact" />
                <p>test1234</p>
              </div>
            </div>
          </div>
        </div>

        <div className="payment">
          < img src={PaymentMethods} alt="Contact"/>
          
        </div>
        <div className="h-line"></div>
        <p className="copy-write">
          Copyright © WINNER. All rights reserved.
        </p>
      </div>
    </div>
  )
}
export default Footer;