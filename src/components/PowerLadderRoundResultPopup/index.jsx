import React from 'react';
import PowerLadderResults from '../PowerLadderResults';
import CloseIcon from '../../assets/images/nonLiveBet/close.png';
import './_powerLadderRoundResultPopup.scss';

const PowerLadderRoundResultPopup = ({ setPopupOpen }) => {
  return (
    <div
      style={{
        width: '77.625rem',
        height: '100vh',
        padding: '0.1875rem',
        background: 'linear-gradient(to top, #1f1f1e, #343434 80%)',
        borderTopLeftRadius: '4rem',
        borderTopRightRadius: '4rem',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          borderTopLeftRadius: '4rem',
          borderTopRightRadius: '4rem',
          background: '#ffffff',
        }}
        className="roundresultpopup-container"
      >
        <div style={{ height: '9.4rem' }} className="roundresultpopup-content">
          <label
            style={{ fontSize: '3.75rem', color: '#ffffff', fontWeight: '700' }}
            className="roundresultpopup-content1"
          >
            회차결과
          </label>
          <button
            style={{ marginRight: '2.925rem' }}
            className="roundresultpopup-content2"
            onClick={() => setPopupOpen(false)}
          >
            <img
              style={{ width: '3.1875rem', height: '3.1875rem' }}
              src={CloseIcon}
              alt="close_icon"
            />
          </button>
        </div>

        <div
          style={{ paddingBottom: '1.875rem' }}
          className="powerladderroundresult-content3"
        >
          <PowerLadderResults />
        </div>
      </div>
    </div>
  );
};

export default PowerLadderRoundResultPopup;
