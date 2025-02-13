
import CardMenu from '../../../assets/images/mainPage/hotel-casino/card-menu.png'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const HotelCasinoCard = ({ id, title, sub_title = null, img, icon, darkClick=false, logoClass, disable }) => {
  const [hoverEffect, setHoverEffect] = useState(false);
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => {
        if (darkClick) {
          setHoverEffect(!hoverEffect)
        }
      }}
      className={`hotel-casino-card ${logoClass} ${hoverEffect ? 'hover' : ''}`}
      >
      <img src={img} alt="HotelCasinoCard" className='casino-img' />
      <div className='logo-section'>
        <img src={icon} alt="Logo1" />
        <p>{title}
          {sub_title && (<>
            <br />
            <span className='sub-title'>{sub_title}</span>
          </>)}
        </p>

      </div>
      {!disable && (
        <img
          onClick={() => setHoverEffect(!hoverEffect)}
          src={CardMenu} alt="Menu" className='card-menu' />
      )}
      {hoverEffect && (<div className='card-overlay'>
       
        {!disable && < div className='overlay-buttons'>
        <button>
          <p>게임시작</p>
        </button>
        <button onClick={() => navigate('/hotelcasino/structure')}>
          <p>이용가이드</p>
        </button>
      </div>}

      </div>)}
    </div>
  );
};
export default HotelCasinoCard