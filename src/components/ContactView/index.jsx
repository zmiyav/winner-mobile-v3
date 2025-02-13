import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Rank1 from '../../assets/myPage/freeboard/1.png';
import parse from 'html-react-parser';

const ContactView = () => {
  const BodyText1 =
    '안녕하세요. \n 혁신적인 완성형 배팅업체 &nbsp;『WINNER 고객센터』입니다.';
  const BodyText2 =
    '[입금 전 주의] \n 회원 정보에 등록 된 출금 계좌에서만 입금 가능 !!';
  const BodyText3 =
    '계좌문의 후 30분이내로 입금 신청이 없을시 계정이 \n 자동으로 잠금처리됩니다. \n 충전 이용을 하지 못하시는 경우 고객센터로 취소요청하시기 \n 바랍니다.';
  const BodyText4 =
    '▶ 카카오뱅크, 케이뱅크, 증권계좌 사용 불가 \n ▶ 펌뱅킹(토스, 페이, 오픈뱅킹, 통합뱅킹 등) 입금 시 처리 \n 불가 \n ▶ 타명의 계좌에서 본인명의로 변경 후 입금 시 처리 불가 \n ▶ 등록 된 환전 계좌 외 타 계좌에서 입금 시 처리 불가';
  const BodyText5 =
    '＃ 최근계좌로 보내지 마시고 \n 꼭 계좌번호를 직접 입력해주세요.';
  const BodyText6 =
    '동일 예금주에 다른 계좌번호가 존재합니다. \n (계좌확인 필수!!)';
  const BodyText7 =
    '매 입금시 &nbsp;계좌문의 해주시기 바라며, \n 상호명은 같으나 계좌 번호, 은행이 다를 수 있으니  \n 꼭 해당 답변과 동일한 정보로 진행 해주시기 바랍니다.';
  const BodyText8 =
    '규정을 무시하여 생긴 불이익은 당사는 책임을지지 \n 않습니다.';
  const BodyText9 =
    '추가적인 문의사항은 언제든지 전화 요청 또는 카카오톡, \n 텔레그램 고객센터로 문의하시면 &nbsp;24시간 항상 친절하게 \n 안내 도와드리겠습니다. \n 앞으로 많은 이용 부탁드립니다.';
  const navigate = useNavigate();
  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) : str;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <div
        style={{
          margin: ' 0px 1.875rem 1.875rem',
          background: 'linear-gradient(to top, rgb(236, 235, 235), rgb(219, 176, 232) 50%, rgb(203, 120, 230))',
          padding: '0.1875rem',
          borderRadius: '1.2rem',
          boxShadow: '0 0.375rem 0.375rem 0 rgba(0,0,0,.3)',
        }}
      >
        <div
          style={{
            background: '#ffffff',
            paddingBottom: '0.1rem',
            borderRadius: '1.1rem',
          }}
          className="rounded-2xl overflow-hidden border border-gray-dddddd mt-20px"
        >
          {/* TITLE */}
          <div
            style={{
              borderBottom: '0.1875rem solid #dddddd',
              // background: '#ffffff',
              background: 'rgb(247, 247, 247)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '13rem',
              gap: '1.5rem',
              borderTopRightRadius: '1.1rem',
              borderTopLeftRadius: '1.1rem',
              padding: '1rem 2rem',
              textAlign: 'center',
            }}
          >
            <div
              className="w-full"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div
                style={{
                  backgroundColor: '#41b06c',
                  fontSize: '2.4375rem',
                  padding: '0.8rem 1.73rem',
                  height: '4.5rem',
                  marginTop: '0.65rem',
                  // letterSpacing: '-0.07rem',
                  letterSpacing: '0',
                  width: 'fit-content',
                  color: '#ffffff',
                  borderRadius: '3rem',
                  overflow: 'hidden',
                  lineHeight: '3.3rem',
                }}
                className="rounded-full flex items-center justify-center  tracking-tight text-white"
              >
                계좌문의
              </div>
            </div>
            <div
              style={{
                color: '#444444',
                fontSize: '3rem',
                // letterSpacing: '-0.07rem',
                letterSpacing: '0',
                marginLeft: '0.2rem',
                fontWeight: 'bold'
              }}
              className="flex justify-center text-5xl w-full  tracking-tight text-gray-r454545"
            >
              은행계좌정보
            </div>
          </div>

          <div
            style={{
              minHeight: '7.3125rem',
              padding: '1.4375rem 1.65rem',
              borderBottomWidth: '0.1875rem',
              background: '#f7f7f7',
              borderBottom: '0.1875rem solid #dddddd',
              display: 'flex',
              alignItems: 'flex-start',
              position: 'relative',
            }}
            className="relative bg-gray-fafafa border-b border-gray-dddddd flex items-center"
          >
            <img
              style={{
                width: '3.4375rem',
                height: '4.4375rem',
                marginTop: '0.6rem',
              }}
              src={Rank1}
              alt=""
            />
            <p
              className="flex mt-1.5 items-center text-gray-r585858 "
              style={{
                margin: '0',
                fontSize: '2.4375rem',
                marginLeft: '0.875rem',
                // letterSpacing: '-0.07rem',
                letterSpacing: '0',
                // color: '#666666',
                color: '#444444',
                maxWidth: '52rem',
                marginTop: '1.1rem',
              }}
            >
              마이마이프로틴화이팅
              <div className="flex mt-2" style={{ display: 'inline-block' }}>
                <div
                  style={{
                    height: '1.75rem',
                    width: '0.1875rem',
                    margin: '0.5rem 1rem 0px 1.1rem',
                    background: '#999999',
                    display: 'inline-block',
                  }}
                  className="bg-gray-dddddd"
                ></div>
                <p
                  style={{
                    fontSize: '2.4375rem',
                    // color: '#666666',
                    color: '#444444',
                    marginTop: '2.8rem',
                    letterSpacing: '-0.05rem',
                    margin: '0',
                    display: 'inline-block',
                  }}
                  className="-mt-1 text-gray-r7b7b7b tracking-tight"
                >
                  2021.06.28 15:36
                </p>
              </div>
            </p>

            <div
              style={{
                position: 'absolute',
                right: '0',
                // backgroundColor: '#999999',
                backgroundColor: 'rgb(112, 44, 170)',
                marginRight: '1.6rem',
                paddingBottom: '0',
                width: 'fit-content',
                fontSize: '2.4375rem',
                padding: '0.6rem 1.9rem',
                height: '4.125rem',
                marginTop: '0.35rem',
                // letterSpacing: '-0.07rem',
                letterSpacing: '0',
                color: '#ffffff',
                borderRadius: '2rem',
                maxWidth: '17rem',
                overflow: 'hidden',
                lineHeight: '3.3rem',
              }}
              className="absolute right-0 rounded-full flex items-center justify-center  tracking-tight text-white"
            >
              {truncate('답변대기', 6, 6)}
            </div>
          </div>

          <div
            style={{
              borderRadius: '1rem',
              paddingLeft: '1.8rem',
              fontSize: '2.8125rem',
              margin: '3.75rem 1.7rem 3.7rem',
              minHeight: '7rem',
              paddingRight: '1.8rem',
              paddingBottom: '',
              background: '#ffffff',
              border: '1px solid #dddddd',
              display: 'flex',
              alignItems: 'center',
            }}
            className="border border-gray-dddddd tracking-tight text-gray-r585858"
          >
            <p
              style={{
                height: '6rem',
                lineHeight: '6rem',
                paddingTop: '0.1rem',
                fontSize: '2.8125rem',
                color: '#666666',
                // letterSpacing: '-0.07rem',
                letterSpacing: '0',
                margin: '0',
              }}
            >
              입금 계좌 요청합니다. [시스템 자동메시지]
            </p>
          </div>

          <div
            className="message-space"
            style={{
              // background: '#eeeeee',
              background: '#dfdbfa',
              borderRadius: '1rem',
              margin: '0 1.6875rem 5.1875rem',
              paddingTop: '0.1rem',
              paddingBottom: '0.1rem',
              paddingLeft: '2rem',
              fontSize: '2.8125rem',
              color: '#666666',
              letterSpacing: '0'
            }}
          >
            <div
              // style={{ marginBottom: '6.675rem' }}
              className="body-text-1"
            >
              {BodyText1.split('\n').map((item, i) => (
                <p
                  // style={{ letterSpacing: '-0.05rem', marginBottom: '1rem' }}
                  key={i}
                  className="flex items-center"
                >
                  {parse(item)}
                </p>
              ))}
            </div>
            <div
              // style={{ marginBottom: '5.875rem' }}
              className=""
            >
              {BodyText2.split('\n').map((item, i) => (
                <p
                  // style={{ letterSpacing: '-0.05rem' }}
                  key={i}
                  className="flex items-center"
                >
                  {item}
                </p>
              ))}
            </div>
            <div style={{ marginBottom: '6.5rem' }} className="body-text-4">
              {BodyText3.split('\n').map((item, i) => (
                <p
                  // style={{ letterSpacing: '-0.05rem' }}
                  key={i}
                  className="flex items-center"
                >
                  {item}
                </p>
              ))}
            </div>
            <div style={{ marginBottom: '6.45rem' }} className="body-text-4">
              {BodyText4.split('\n').map((item, i) => (
                <p
                  // style={{ marginBottom: '1.8rem' }}
                  key={i}
                  className="flex items-center"
                >
                  {item}
                </p>
              ))}
              <p
                // style={{ letterSpacing: '-0.05rem', marginLeft: '3.4rem' }}
                className="flex items-center"
                style={{ marginLeft: '3.4rem' }}
              >
                (동일 예금주라도 처리 불가)
              </p>
            </div>
            <div
              // style={{ marginBottom: '5.875rem' }}
              className=""
            >
              {BodyText5.split('\n').map((item, i) => (
                <p
                  // style={{ letterSpacing: '-0.05rem' }}
                  key={i}
                  className="flex items-center"
                >
                  {item}
                </p>
              ))}
            </div>
            <div
              // style={{ marginBottom: '5.875rem' }}
              className=""
            >
              <p
                style={{ marginBottom: '1.59rem' }}
                className="flex items-center"
              >
                계좌번호 :{' '}
                <span
                  style={{ letterSpacing: '-0.07rem', marginLeft: '0.6rem' }}
                  className="ml-4"
                >
                  {' '}
                  131-021-013323
                </span>
              </p>
              <p
                // style={{ marginBottom: '1.59rem' }}
                className="flex items-center"
              >
                ★최근 입금 계좌 사용 금지 ★
              </p>
              <p
                style={{ marginBottom: '1.6rem' }}
                className="flex items-center"
              >
                은행명 :{' '}
                <span style={{ marginLeft: '1.1rem' }} className="ml-4">
                  신협
                </span>
              </p>
              <p
                // style={{ letterSpacing: '-0.05rem' }}
                className="flex items-center"
              >
                예금주 :{' '}
                <span
                  style={{ marginLeft: '1.1rem', marginRight: '0.6rem' }}
                  className="ml-4"
                >
                  리틀토이
                </span>{' '}
                <span className="ml-4">★ 은행명 확인 필수</span>
              </p>
            </div>
            <div className="">
              {BodyText6.split('\n').map((item, i) => (
                <p key={i} className="flex items-center">
                  {item}
                </p>
              ))}
            </div>
            <div style={{ marginBottom: '6.7rem' }} className="">
              {BodyText7.split('\n').map((item, i) => (
                <p key={i} className="flex items-center">
                  {parse(item)}
                </p>
              ))}
            </div>
            <div style={{ marginBottom: '6.789rem' }} className="">
              {BodyText8.split('\n').map((item, i) => (
                <p key={i} className="flex items-center">
                  {item}
                </p>
              ))}
            </div>
            <div style={{ marginBottom: '0' }} className="body-text-9">
              {BodyText9.split('\n').map((item, i) => (
                <p key={i} className="flex items-center">
                  {parse(item)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ margin: '3.8rem 1.86rem', paddingBottom: '19.225rem' }}
        className="w-full flex items-start justify-between"
      >
        <button
          style={{
            height: '7.3125rem',
            padding: '0.1875rem',
            fontSize: '2.8125rem',
            marginRight: '0.75rem',
            width: '24.125rem',
            background: '#936cee',
            borderRadius: '1rem',
          }}
          className="hover shadow-box-myPage"
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#936cee',
              borderRadius: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className="h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span
                className=" tracking-tight text-white shadow-text-myPage"
                style={{
                  color: '#ffffff',
                  marginLeft: '0.3rem',
                  display: 'flex',
                  marginTop: '0.2rem',
                  letterSpacing: '-0.025em'
                }}
              >
                이전
              </span>
            </div>
          </div>
        </button>
        <button
          style={{
            height: '7.3125rem',
            padding: '0.1875rem',
            fontSize: '2.8125rem',
            marginRight: '0.75rem',
            width: '24.125rem',
            background:
              'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))',
            borderRadius: '1rem',
          }}
          className="hover shadow-box-myPage"
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))',
              borderRadius: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
              onClick={() => navigate('/cscenter/all/contact/all')}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span
                className=" tracking-tight text-white shadow-text-myPage"
                style={{
                  color: '#ffffff',
                  marginLeft: '0.3rem',
                  display: 'flex',
                  marginTop: '0.2rem',
                  letterSpacing: '-0.025em'
                }}
              >
                목록보기
              </span>
            </div>
          </div>
        </button>

        <button
          style={{
            height: '7.3125rem',
            padding: '0.1875rem',
            fontSize: '2.8125rem',
            width: '24.125rem',
            background: '#936cee',
            borderRadius: '1rem',
          }}
          className="hover shadow-box-myPage"
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background:
                '#936cee',
              borderRadius: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span
                className=" tracking-tight text-white shadow-text-myPage"
                style={{
                  color: '#ffffff',
                  marginLeft: '0.3rem',
                  display: 'flex',
                  marginTop: '0.2rem',
                  letterSpacing: '-0.025em'
                }}
              >
                다음
              </span>
            </div>
          </div>
        </button>
      </div>
      {/* <BottomNavbar /> */}
    </div>
  );
};

export default ContactView;
