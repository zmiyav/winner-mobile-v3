import BestIcon from '../../../assets/images/mainPage/live-casino/best-icon.png'
const LiveCasinoCard = ({ id, title, img, is_best = false, is_coming_soon = false, onClick }) => {
  return (
    <div className='live-casino-card'>
      {is_coming_soon && <p className='coming-soon'>{title}</p>}
      {!is_coming_soon && <p>{title}</p>}
      <img src={img} alt="LiveCasinoImage1" className='casino-img' />
      <button className={`${is_coming_soon ? 'coming-soon-btn' : ''}`} >
        {is_coming_soon && ('준비중')}
        {!is_coming_soon && ('게임시작')}
      </button>
      {is_best && (<img src={BestIcon} alt="BestIcon" className='best-icon' />)}
    </div>
  );
};
export default LiveCasinoCard