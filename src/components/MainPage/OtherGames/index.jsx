
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import OtherGamesIcon from '../../../assets/images/mainPage/other-games/other-games1.png'
import image0 from '../../../assets/images/mainPage/other-games/other-game0.png'
import image1 from '../../../assets/images/mainPage/other-games/other-game1.png'
import image2 from '../../../assets/images/mainPage/other-games/other-game2.png'
import image3 from '../../../assets/images/mainPage/other-games/other-game3.png'
import image4 from '../../../assets/images/mainPage/other-games/other-game4.png'
import image5 from '../../../assets/images/mainPage/other-games/other-game5.png'

import '../OtherGames/_otherGames.scss';

const OtherGames = () => {
  const navigate = useNavigate();
  const GamesList = [
    {
      id: 0,
      title: '홀덤게임',
      img: image0
    },
    {
      id: 1,
      title: 'e-스포츠',
      img: image1
    },
    {
      id: 2,
      title: '미니게임',
      img: image2,
      path: '/minigame/powerball'
    },
    {
      id: 3,
      title: '키론가상게임',
      img: image3
    },
    {
      id: 4,
      title: '피싱게임',
      img: image4
    },
    {
      id: 5,
      title: '티비벳',
      img: image5
    },
  ]
  const [clickEffect, setClickEffect] = useState(null);

  const Card = ({ id, path, title, img, showOverlay = false, onClick }) => {
    return (
      <div 
        className={`other-game-card ${clickEffect === id ? 'hover' : ''}`}
        onClick={() => { setClickEffect(id); navigate(path) }}>
        <img src={img} alt="OtherGame1" className='other-img' />
        <div className='desc'>
          <p>{title}</p>
        </div>
        {clickEffect === id &&
          (<div className='card-overlay'></div>)}
      </div>
    );
  };
  return (
    <>
    <div className='other-games'>
      <div className='section__header'>
        <div className='section__Title'>
            <div className='section__icon'><img src={OtherGamesIcon} alt="OtherGamesIcon" /></div>
          <h1>기타게임</h1>
        </div>
      </div>
        <div className='section__content'>
          {GamesList.map((card, index) => (
            <div className='other-section'
              key={card.id}>
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                img={card.img}
                showOverlay={card.showOverlay} 
                path={card.path}
                />
            </div>
          ))}
        
      </div>
      </div>
     
      </>
      
  )
}

export default OtherGames;

