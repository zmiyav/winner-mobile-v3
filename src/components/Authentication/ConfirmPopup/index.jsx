import './_confirmPopup.scss';
import ConfirmIcon from '../../../assets/images/confirm-icon.png'

import Confirm1 from '../../../assets/images/confirm1.png'
import Confirm2 from '../../../assets/images/confirm2.png'
import Confirm3 from '../../../assets/images/confirm3.png'
const ConfirmPopup = ({
  setConfirmPopup
}) => {
  return (
    <div className='modal-overlay' >
      <div className='sign-modal confirm-popup'>
        <div className='header'>
          <p>회원가입완료</p>
        </div>
        <div className='modal-body'>
          <div className='confirm-icon'>
            <img src={ConfirmIcon} alt="Confirm" />
          </div>
          <div className='confirm-title' style={{ whiteSpace: 'pre-wrap' }}>
            {/* <span className='primary-color' >가입 신청이 완료 되었습니다.</span>{`\n`}
            관리자 <span style={{ fontWeight: 'bold' }} className='secondary-color'>승인 대기중</span>입니다.</p> */}
            <div><span className='primary-color' >가입 신청이 완료 되었습니다.</span></div>
            <div style={{ marginTop: '-1rem' }}>관리자 <span style={{ fontWeight: 'bold' }} className='secondary-color'>승인 대기중</span>입니다.</div>
          </div>
          <div className='confirm-desc mb-46'>
            <p>관리자 승인 후 로그인 하시면.</p>
            <p>정상적으로 서비스 이용이 가능합니다.</p>
          </div>
          <div className='confirm-desc' style={{ marginBottom: '4.0rem' }}>
            <p className='ml-0'>당사 사이트는 깨끗하고 안전한 운영을 자랑합니다.</p>
          </div>

          <div className='boxes'>
            <div className='box'>
              <img src={Confirm1} alt="Confirm" />
              <div className='box-des' style={{ whiteSpace: 'pre-wrap' }}>
                {/* <p>{`회원님의 모든 데이터는\n암호화되어 안전하게\n보관됩니다.`}</p> */}
                <p>회원님의 모든 데이터는</p><p>암호화되어 안전하게</p><p>보관됩니다.</p>
                {/* <p>회원님의 모든 데이터는</p>
                <p className='-mt-1 ml-1'> 암호화되어 안전하게</p>
                <p className='-mt-1 ml-1'> 보관됩니다.</p> */}
              </div>
            </div>
            <div className='box'>
              <img src={Confirm2} alt="Confirm" />
              <div className='box-des' style={{ whiteSpace: 'pre-wrap' }}>
                {/* <p>{`아이디/비밀번호를\n분실되지 않도록 보안에\n신경 써 주세요.`}</p> */}
                <p>아이디/비밀번호를</p><p>분실되지 않도록 보안에</p><p>신경 써 주세요.</p>
                {/* <p>아이디/비밀번호를</p>
                <p className='-mt-1 ml-1'>분실되지 않도록 보안에</p>
                <p className='-mt-1 ml-1'> 신경 써 주세요.</p> */}
              </div>
            </div>
            <div className='box'>
              <img src={Confirm3} alt="Confirm" />
              <div className='box-des' style={{ whiteSpace: 'pre-wrap' }}>
              {/* <p>{`회원 탈퇴 후\n회원님의 정보는\n완전히 삭제됩니다.`}</p> */}
              <p>회원 탈퇴 후</p><p>회원님의 정보는</p><p>완전히 삭제됩니다.</p>
                {/* <p>회원 탈퇴 후</p>
                <p className='-mt-1 ml-1'> 회원님의 정보는</p>
                <p className='-mt-1 ml-1'>완전히 삭제됩니다.</p> */}
              </div>
            </div>
          </div>
          <div className='modal-actions'>
            <button
              onClick={() => setConfirmPopup(false)} >
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmPopup