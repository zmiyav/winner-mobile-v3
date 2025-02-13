import { useNavigate } from 'react-router';

import './_sharedCard.scss';
import RArrow from '../../../assets/images/mainPage/right-arrow-1.png'


const SharedCard = ({ id, path, title, img, btn = '게임시작', clickEffect, setClickEffect }) => {
  const navigate = useNavigate();

  return (
    <div className={`shared-card ${clickEffect === id ? 'dark-overlay' : ''}`}
      onClick={() => {
        // setClickEffect(path)
        navigate(path)
      }}>
      <img src={img} alt="img" className='img' />
      <div className='desc'>
        <p>{title}</p>
      </div>
      <button className='card-button'>
        <p>{btn}</p>
        <img src={RArrow} alt="RArrow" className='img' />
      </button>
      {clickEffect === id && (<div className='card-overlay'>
        
      </div>)}
    </div>
  );
};

export default SharedCard;