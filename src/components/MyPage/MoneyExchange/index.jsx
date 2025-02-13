import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BankTable from '../BankTable';
import WarningMessage from '../WarningMessage';

const MoneyExchange = ({ subActiveButton, setSubActiveButton }) => {
  const [inputValue, setInputValue] = useState(null);
  const [secondInputValue, setSecondInputValue] = useState(null);

  const [inputClicked, setInputClicked] = useState(false);
  const [secondInputClicked, SecondInputClicked] = useState(false);
  const navigate = useNavigate();

  console.log(setInputClicked);
  console.log(SecondInputClicked);
  useEffect(() => {
    window.onpopstate = (e) => {
      setTimeout(() => {
        navigate('/mypage/money/exchange');
        setSubActiveButton('/mypage/money/exchange/currency');
      }, 0);
    };
    return () => {
      setSubActiveButton('/mypage/money/exchange/currency');
    };
  }, [setSubActiveButton, subActiveButton, navigate]);

  var nf = new Intl.NumberFormat();

  const Title = ({ text }) => (
    <div
      style={{
        width: '21rem',
        marginRight: '1.7rem',
        background: '#9b6bd4',
        flexShrink: '0',
        borderRadius: '0.5rem',
        marginLeft: '0.125rem',
        paddingLeft: '1.1rem',
        display: 'flex',
        alignItems: 'center',
      }}
      className="form-Title"
    >
      <div
        style={{
          fontSize: '2.625rem',
          color: '#ffffff',
          // letterSpacing: '-0.25rem',
          letterSpacing: '-0.025em',
          fontWeight: '700'
        }}
        className="text-gray-r454545 "
      >
        {text}
      </div>
    </div>
  );

  return (
    <div
      style={{ padding: '1.875rem', paddingTop: '0.65rem' }}
      className="flex flex-col items-center"
    >
      <WarningMessage
        title="확인 / 필독사항"
        message1="환전 신청 시 현재 보유머니에서 차감되며, 회원님의 계좌번호로 입금됩니다."
        message2="입금이 지연될 수 있으니 은행 점검 시간을 확인하신 후 점검 시간을 피해 신청해 주시기 바랍니다."
        message3="자세한 문의사항은 고객센터를 이용해 주시기 바랍니다."
        isExchange
      />
      <div
        style={{
          padding: '0.188rem',
          marginTop: '1.975rem',
          background:
            'linear-gradient(to top, rgb(237, 237, 235), rgb(203, 120, 230))',
          borderRadius: '1.125rem',
          letterSpacing: '-0.07rem',
          boxShadow: 'rgba(0, 0, 0, 0.8) 0px 0px 0.75rem 0px',
        }}
        className="w-full rounded-2xl shadow-subNavbar"
      >
        <div
          style={{
            padding: '0.7375rem 0.765rem 0.363rem',
            background: '#ffffff',
            borderRadius: '1.125rem',
          }}
          className="w-full rounded-2xl shadow-subNavbar"
        >
          <div
            style={{
              padding: '1.43rem 1.9rem 1rem 1.82rem',
              background:
                'linear-gradient(to right, rgb(157, 59, 187), rgb(84, 35, 160))',
              borderRadius: '0.625rem',
              letterSpacing: '-0.025em',
            }}
            className="w-full rounded-2xl border border-gray-dddddd bg-gray-f9f9f9"
          >
            <div
              style={{
                fontSize: '2.8125rem',
                color: '#ffffff',
                marginLeft: '-0.2rem',
                fontWeight: '700'
              }}
              className=" tracking-tight text-gray-r393e41 flex items-center"
            >
              환전금액 입력
            </div>
            <div
              style={{
                fontSize: '2.625rem',
                color: '#eeeeee',
                marginTop: '0.8rem',
                lineHeight: '1.42',
                marginLeft: '-0.2rem',
                marginRight: '5.6rem',
              }}
            >
              환전 신청을 완료하게 되면 보유머니에서 신청한 금액만큼
            </div>
            <div
              style={{
                fontSize: '2.625rem',
                color: '#eeeeee',
                marginTop: '0.2rem',
                lineHeight: '1.42',
                marginLeft: '-0.2rem',
                marginRight: '5.6rem',
              }}
            >
              차감되며 고객님의 계좌번호로 입금됩니다.
            </div>
          </div>

          <div
            style={{
              marginTop: '1.8rem',
              padding: '0 1rem',
            }}
            className="flex flex-col"
          >
            <div className="form-section">
              <Title text="현재 보유머니" />
              <div className="lable-or-input">
                <div
                  style={{ fontSize: '2.625rem' }}
                  className="text-gray-r393e41  text-gray-r585858"
                >
                  <span
                    className="font-robotoBold text-red-e9441d"
                    style={{ color: '#f04281', letterSpacing: '-0.025', fontWeight: 'bold' }}
                  >
                    478,000
                  </span>
                </div>
                <div
                  style={{
                    height: '0.1875rem',
                    marginTop: '1.375rem',
                    background: '#e2e2e2',
                  }}
                  className="w-full bg-gray-bebebe"
                ></div>
              </div>
            </div>
            <div style={{ marginTop: '2.6rem' }} className="form-section">
              <Title text="환전금액 입력" />
              <div className="lable-or-input">
                <input
                  className="w-full  text-gray-r585858 outline-none placeholder-gray-bebebe"
                  style={{
                    width: '100%',
                    fontSize: '2.625rem',
                    marginBottom: '0.9375rem',
                    // letterSpacing: '-0.1rem',
                    letterSpacing: '-0.025em',
                    border: '0px solid',
                    outline: 'none',
                    fontWeight: 'bold',
                  }}
                  placeholder="직접 입력시 숫자만 입력해 주세요."
                  value={inputValue !== null ? nf.format(inputValue) : ''}
                  onChange={(e) =>
                    setInputValue(e.target.value.replace(/,/g, ''))
                  }
                  // onFocus={() => {
                  //     const menu = document.querySelector('#main-menu');
                  //     menu.style.marginBottom = '-14.075rem'
                  //     setInputClicked(true)
                  // }}
                  // onBlur={() => {
                  //     const menu = document.querySelector('#main-menu');
                  //     menu.style.marginBottom = '0'
                  //     setInputClicked(false)
                  // }}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="tel"
                />
                <div
                  style={{
                    height: '0.1875rem',
                    background: '#e2e2e2',
                    marginTop: '0.688rem',
                  }}
                  className={`${
                    inputClicked ? 'bg-blue-r1ca7ec' : 'bg-gray-bebebe'
                  } w-full`}
                ></div>
              </div>
            </div>
          </div>

          {/* <div style={{ margin: '0 0.9375rem', marginTop: '1.875rem', marginBottom: '3.8125rem' }} className="">
                        <div style={{ marginBottom: '0.9375rem' }} className="flex w-full h-full items-center justify-between">
                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                                onClick={() => setInputValue(inputValue + 10000)}
                            >
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className=" tracking-tight text-white">1만원</span>
                                </div>
                            </button>

                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                                onClick={() => setInputValue(inputValue + 30000)}
                            >
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className=" tracking-tight text-white">3만원</span>
                                </div>
                            </button>

                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                                onClick={() => setInputValue(inputValue + 50000)}
                            >
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className=" tracking-tight text-white">5만원</span>
                                </div>
                            </button>

                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-blue-r2068b2 hover:opacity-75"
                                onClick={() => setInputValue(inputValue + 100000)}
                            >
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className=" tracking-tight text-white">10만원</span>
                                </div>
                            </button>
                        </div>

                        <div className="flex w-full h-full items-center justify-between">
                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-blue-r286fce hover:opacity-75"
                                onClick={() => setInputValue(inputValue + 300000)}
                            >
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r538dcf bg-gradient-to-b from-blue-r3176c5 via-blue-r286bb7 to-blue-r1c5ca5 cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className=" tracking-tight text-white">30만원</span>
                                </div>
                            </button>

                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-blue-r286fce hover:opacity-75"
                                onClick={() => setInputValue(inputValue + 500000)}
                            >
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r70a8f5 bg-gradient-to-b from-blue-r5497f4 via-blue-r4985d8 to-blue-r3d71b8 cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className=" tracking-tight text-white">50만원</span>
                                </div>
                            </button>

                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-blue-r177cce hover:opacity-75"
                                onClick={() => setInputValue(inputValue + 1000000)}
                            >
                                <div className="flex items-center justify-center w-full h-full rounded-lg border border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8 cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className=" tracking-tight text-white">100만원</span>
                                </div>
                            </button>

                            <button
                                style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                                className="flex items-center justify-center rounded-lg bg-gray-r171a1d hover:opacity-75"
                                onClick={() => setInputValue(0)}
                            >
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                                    <span style={{ fontSize: '2.625rem' }} className=" tracking-tight text-white">정정</span>
                                </div>
                            </button>
                        </div>

                    </div> */}

          <div className="range-btn">
            <div className="f-div">
              <div className="div-range-border">
                <button
                  // style={{  }}
                  className="hover"
                  onClick={() => setInputValue(inputValue + 10000)}
                >
                  <div className="s-div">
                    <span style={{ letterSpacing: '-0.015em' }}>1만원</span>
                  </div>
                </button>
              </div>
              <div className="div-range-border">
                <button
                  className="hover"
                  // style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                  // className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                  onClick={() => setInputValue(inputValue + 30000)}
                >
                  <div
                    className="s-div"
                    //  className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer"
                  >
                    <span style={{ letterSpacing: '-0.015em' }}>3만원</span>
                  </div>
                </button>
              </div>
              <div className="div-range-border">
                <button
                  className="hover"
                  // style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                  // className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                  onClick={() => setInputValue(inputValue + 50000)}
                >
                  <div className="s-div">
                    <span style={{ letterSpacing: '-0.015em' }}>5만원</span>
                  </div>
                </button>
              </div>
              <div className="div-range-border">
                <button
                  className="hover"
                  onClick={() => setInputValue(inputValue + 100000)}
                >
                  <div
                    className="s-div"
                    //  className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer"
                  >
                    <span style={{ fontSize: '2.625rem', letterSpacing: '-0.015em' }}>10만원</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="f-div">
              <div className="div-range-border">
                <button
                  // style={{  }}
                  className="hover"
                  // className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                  onClick={() => setInputValue(inputValue + 300000)}
                >
                  <div className="s-div">
                    <span style={{ letterSpacing: '-0.015em' }}>30만원</span>
                  </div>
                </button>
              </div>
              <div className="div-range-border">
                <button
                  className="hover"
                  // style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                  // className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                  onClick={() => setInputValue(inputValue + 500000)}
                >
                  <div
                    className="s-div"
                    //  className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer"
                  >
                    <span style={{ letterSpacing: '-0.015em' }}>50만원</span>
                  </div>
                </button>
              </div>
              <div className="div-range-border">
                <button
                  className="hover"
                  // style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                  // className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                  onClick={() => setInputValue(inputValue + 1000000)}
                >
                  <div className="s-div">
                    <span style={{ letterSpacing: '-0.015em' }}>100만원</span>
                  </div>
                </button>
              </div>
              <div
                className="div-range-border"
                style={{
                  background:
                    'linear-gradient(to top, rgb(79, 58, 122), rgb(229, 151, 255))',
                }}
              >
                <button
                  className="hover"
                  style={{
                    background:
                      'linear-gradient(to top, rgb(107, 34, 255), rgb(223, 82, 255))',
                  }}
                  onClick={() => setInputValue(0)}
                >
                  <div
                    className="s-div"
                    //  className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer"
                  >
                    <span
                      style={{ paddingRight: '0', color: '#ffffff', letterSpacing: '-0.015em' }}
                      className="shadow-to-text"
                    >
                      정정
                    </span>
                  </div>
                </button>
              </div>
            </div>
            {/* <div className="f-div">
                        <button
                            style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                            className="flex items-center justify-center rounded-lg bg-blue-r286fce hover:opacity-75"
                            onClick={() => setInputValue(inputValue + 300000)}
                        >
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r538dcf bg-gradient-to-b from-blue-r3176c5 via-blue-r286bb7 to-blue-r1c5ca5 cursor-pointer">
                                <span style={{ fontSize: '2.625rem' }} className=" tracking-tight text-white">30만원</span>
                            </div>
                        </button>

                        <button
                            style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                            className="flex items-center justify-center rounded-lg bg-blue-r286fce hover:opacity-75"
                            onClick={() => setInputValue(inputValue + 500000)}
                        >
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r70a8f5 bg-gradient-to-b from-blue-r5497f4 via-blue-r4985d8 to-blue-r3d71b8 cursor-pointer">
                                <span style={{ fontSize: '2.625rem' }} className=" tracking-tight text-white">50만원</span>
                            </div>
                        </button>

                        <button
                            style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                            className="flex items-center justify-center rounded-lg bg-blue-r177cce hover:opacity-75"
                            onClick={() => setInputValue(inputValue + 1000000)}
                        >
                            <div className="flex items-center justify-center w-full h-full rounded-lg border border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8 cursor-pointer">
                                <span style={{ fontSize: '2.625rem' }} className=" tracking-tight text-white">100만원</span>
                            </div>
                        </button>

                        <button
                            style={{ width: '16.75rem', height: '7.3125rem', padding: '1px' }}
                            className="flex items-center justify-center rounded-lg bg-gray-r171a1d hover:opacity-75"
                            onClick={() => setInputValue(0)}
                        >
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                                <span style={{ fontSize: '2.625rem' }} className=" tracking-tight text-white">정정</span>
                            </div>
                        </button>
                    </div> */}
          </div>

          <div
            style={{
              marginTop: '3.8125rem',
              display: 'flex',
              padding: '0 1rem',
              marginBottom: '0.5rem',
            }}
            className="form-section"
          >
            {/* <div style={{ paddingLeft: '1.125rem' }} className="form-section"> */}
            <Title text="출금 비밀번호" />
            {/* </div> */}
            <div className="lable-or-input">
              <input
                className="w-full  text-gray-bebebe outline-none placeholder-gray-bebebe"
                style={{
                  fontSize: '2.625rem',
                  marginBottom: '0.9375rem',
                  border: '0px solid',
                  outline: 'none',
                }}
                placeholder="비밀번호를 입력하세요."
                value={secondInputValue !== null ? secondInputValue : ''}
                onChange={(e) => setSecondInputValue(e.target.value)}
                // onFocus={() => {
                //     const menu = document.querySelector('#main-menu');
                //     menu.style.marginBottom = '-14.075rem'
                //     SecondInputClicked(true)
                // }}
                // onBlur={() => {
                //     const menu = document.querySelector('#main-menu');
                //     menu.style.marginBottom = '0'
                //     SecondInputClicked(false)
                // }}
                // onKeyPress={(event) => {
                //     if (!/[0-9]/.test(event.key)) {
                //         event.preventDefault();
                //     }
                // }}
                type="password"
              />
              <div
                style={{
                  height: '0.1875rem',
                  background: '#e2e2e2',
                  marginTop: '0.688rem',
                }}
                className={`${
                  secondInputClicked ? 'bg-blue-r1ca7ec' : 'bg-gray-bebebe'
                } w-full`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* <button style={{ width: "36.4375rem", height: '7.3125rem', padding: '1px', marginTop: '3.75rem', marginBottom: '5.8125rem' }} className="flex items-center justify-center h-52px rounded-lg bg-blue-r0070d9 hover:opacity-75">
                <div className="flex items-center justify-center rounded-lg w-full h-full border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                    <span style={{ fontSize: '2.8125rem' }} className=" tracking-tight text-16px text-white">신청하기</span>
                </div>
            </button> */}
      <div
        style={{
          width: '36.4375rem',
          height: '7.3125rem',
          marginLeft: '18.7rem',
          borderRadius: '1.125rem',
          marginBottom: '3.6rem',
          marginTop: '3.8rem',
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0.375rem 0.375rem 0px',
        }}
      >
        <button
          style={{
            width: '100%',
            height: '100%',
            marginBottom: '1.5625rem',
            background:
              'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))',
            borderRadius: '1.125rem',
          }}
          className="hover"
        >
          <div
            style={{ borderColor: '#ff8f63', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            className="w-full h-full flex items-center justify-center rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-orange-ff7a45 via-orange-f56032 to-orange-e9441d cursor-pointer"
          >
            <span
              style={{
                fontSize: '2.8125rem',
                color: '#ffffff',
                display: 'inline-block',
                // letterSpacing: '-0.07rem',
                letterSpacing: '-0.025em',
                textShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 0.938rem',
                marginTop: '0.188rem',
              }}
            >
              신청하기
            </span>
          </div>
        </button>
      </div>
      {/* <div style={{ marginBottom: '258px' }}> */}
      <div style={{ marginBottom: '80px' }}>
        <BankTable />
      </div>
      {/* <BottomNavbar /> */}
      {/* <NavBottom /> */}
    </div>
  );
};

export default MoneyExchange;
