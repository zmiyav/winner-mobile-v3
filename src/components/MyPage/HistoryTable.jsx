import React, { useEffect, useState } from 'react';
import PopupControls from '../MyPage/popups/PopupControls';
import LiveCasinoHistoryDetailPopup from '../MyPage/LiveCasinoHistoryDetailPopup';
import UploadIcon from '../../assets/myPage/upload.png';
import './_myPage.scss';

const HistoryTable = ({
  isPopup,
  tableData,
  checkedState,
  isCouponUsage = false,
  setCheckedState,
  isPopupOpen,
  wrapButtonText = false,
  setPopupOpen,
  cardHeight = '33.75rem',
  isButtonGradient = true,
  hasLeftInput = true,
  wideDetailButton = false,
  hasButton = true,
  containerBackground,
  isPointPage,
  isCoupon,
  color,
  width45,
  inlineText,
  isGift,
}) => {
  function Cells({ cards }) {
    const getIsMobile = () => window.innerWidth <= 305;
    const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {
      const onResize = () => {
        setIsMobile(getIsMobile());
      };
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
      };
    }, []);

    const DetailButton = () =>
      isPopup ? (
        <div
          style={{
            width: '9rem',
            height: '9rem',
            padding: '0.1875rem',
            margin: '-1.4rem -0.4rem 0 0',
            background: '#8458cd',
            borderRadius: '1rem',
          }}
          className="shadow-box-myPage hover"
        >
          <button
            style={{
              width: '100%',
              height: '100%',
              background: '#8458cd',
              borderRadius: '0.7rem',
            }}
            className="hover"
          >
            <div
              className="w-full h-full flex-wrap rounded-2xl border border-blue-r70a8f5 bg-gradient-to-b from-blue-r1491fc to-blue-r0675db cursor-pointer"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                style={{
                  width: '3.1875rem',
                  height: '3.25rem',
                  marginTop: '0.1rem',
                }}
                className="object-contain"
                src={UploadIcon}
                alt=""
              />
            </div>
          </button>
        </div>
      ) : (
        <button className="상세보기" onClick={() => setPopupOpen(true)}>
          <div
            style={{
              height: '100%',
              padding: ' 0.1825rem',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: ' 0.4rem',
              }}
            >
              <div
                style={{
                  padding: `${wrapButtonText ? '2.2rem 2rem 2rem 2.1rem' : ''}`,
                }}
                className="상세보기-div"
              >
                <span className="상세보기-span">
                  상세 <br /> 보기
                </span>
              </div>
            </div>
          </div>
        </button>
      );

    const wideDetailButtonComponent = (
      <button
        style={{
          width: '20.25rem',
          height: '14.0625rem',
          background: '#c65337',
          position: 'absolute',
          top: '7.56rem',
          right: '1.9rem',
          borderRadius: '1.1rem',
          boxShadow: 'rgb(0 0 0 / 60%) 0px 0.375rem 0px 0px',
        }}
        className="hover change-top"
      >
        <div
          style={{
            padding: `${wrapButtonText ? '2.2rem 2rem 2rem 2.1rem' : ''}`,
          }}
          className="flex w-full h-full items-center justify-center flex-wrap rounded-2xl cursor-pointer"
        >
          <span
            style={{
              fontSize: '2.7rem',
              lineHeight: '1.25',
              width: '10.875rem',
              marginTop: '0.2375rem',
              color: '#ffd2d2',
              textShadow: '#00000080 0.3125rem 0.125rem 0.4375rem',
            }}
            className="w-full -mt-2 tracking-tight text-white"
          >
            {' '}
            진행중{' '}
          </span>
        </div>
      </button>
    );

    const handleOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
      setCheckedState(updatedCheckedState);
    };

    const truncate = (str, max, len) => {
      return str.length > max ? str.substring(0, len) + '...' : str;
    };

    return cards.map((card, index) => (
      <div
        style={{
          marginBottom: '1.861rem',
          marginRight: '1.798rem',
          marginLeft: '1.923rem',
          marginTop: '1.86rem',
          padding: '0.1875rem',
          background: 'linear-gradient(to top, #dddddd, #bbbbbb)',
          boxShadow: '0px 0px 0.75rem 0px rgba(0, 0, 0, 0.8)',
          borderRadius: '1.875rem',
        }}
      >
        <div
          style={{
            borderRadius: '1.875rem',
            width: '100%',
            height: '100%',
            background:
              containerBackground && index % 2 ? '#ffffff' : '#ffffff',
            paddingRight: '1.875rem',
            padding: '2.125rem 2.7rem 1.126rem',
            paddingTop: hasLeftInput
              ? hasButton
                ? '2.4rem'
                : '3.3rem'
              : '2.4rem',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {hasLeftInput && (
            <div
              style={{
                width: '5.8125rem',
                position: 'relative',
                marginRight: '1rem',
                marginTop: '-0.95rem',
                marginLeft: '0.125rem',
              }}
            >
              <label className="form-control">
                <input
                  className="w-12 h-12"
                  type="checkbox"
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />
              </label>
            </div>
          )}
          {/* 52 */}
          <div
            style={{
              width: wideDetailButton ? '85%' : '66rem',
              lineHeight: '1.45',
            }}
          >
            {card.map((row, index) => {
              let firstColumnColor = '#444444';
              let secondColumnColor = '#444444';
              if (row[0]) {
                const firstRowKeysName = Object.keys(row[0]);
                const secondRowKeysName = Object.keys(row?.[1] || {});
                if (firstRowKeysName[0] === '적중/손실금액') {
                  firstColumnColor = row[0][firstRowKeysName[0]].includes('+')
                    ? '#e9441d'
                    : '#444444';
                }
                if (firstRowKeysName[0] === '상태') {
                  firstColumnColor =
                    row[0][firstRowKeysName[0]] === '승'
                      // ? '#e9441d'
                      ? '#f04281'
                      : '#444444';
                }
                if (firstRowKeysName[0] === '보너스금액') {
                  firstColumnColor = row[0][firstRowKeysName[0]].includes('+')
                    ? '#e9441d'
                    : '#444444';
                }
                if (firstRowKeysName[0] === '금액') {
                  firstColumnColor = row[0][firstRowKeysName[0]].includes('+')
                    ? '#e9441d'
                    : row[0][firstRowKeysName[0]].includes('-')
                    ? '#0072bc'
                    : '#444444';
                }
                if (secondRowKeysName[0] === '적립포인트') {
                  secondColumnColor = '#f04281';
                }
                if (firstRowKeysName[0] === '쿠폰금액') {
                  // firstColumnColor = '#f04281';
                  firstColumnColor = '#e9441d';
                }
                if (firstRowKeysName[0] === '처리상태') {
                  firstColumnColor =
                    row[0][firstRowKeysName[0]] === '사용가능'
                      // ? '#e9441d'
                      ? '#f04281'
                      : '#7b7b7b';
                }
                return (
                  <div
                    key={index}
                    style={{
                      fontSize: '2.625rem',
                      marginTop: '-0.313rem',
                      marginBottom: '0.75rem',
                      color: firstColumnColor,
                      // letterSpacing: '-0.07rem',
                      letterSpacing: '-0.015em',
                      marginLeft: '0.14rem',
                      display: 'flex',
                      width: '100%',
                    }}
                  >
                    <span
                      className="text-gray-r585858"
                      style={{
                        fontSize: '2.624375rem',
                        color: '#444444',
                        fontWeight: '700',
                        flexShrink: 0,
                        marginRight: '0.8rem',
                        letterSpacing : '-.015em'
                      }}
                    >
                      {firstRowKeysName[0]} :{' '}
                    </span>
                    <span
                      style={{
                        color: '',
                        display: 'inline-flex',
                        wordBreak: 'break-all',
                        maxWidth:
                          firstRowKeysName[0] === '아이디'
                            ? ''
                            : isPointPage
                            ? '57rem'
                            : firstRowKeysName[0] === '쿠폰명'
                            ? isGift
                              ? '42rem'
                              : hasButton
                              ? '48rem'
                              : '47rem'
                            : width45
                            ? '45rem'
                            : hasButton
                            ? isGift
                              ? '32rem'
                              : isCoupon
                              ? '38rem'
                              : '39.7rem'
                            : '39.7rem',
                        overflow:
                          firstRowKeysName[0] === '아이디' ? 'hidden' : '',
                        textOverflow:
                          firstRowKeysName[0] === '아이디' ? 'ellipsis' : '',
                        whiteSpace:
                          firstRowKeysName[0] === '아이디' ? 'nowrap' : '',
                        
                      }}
                    >
                      {firstRowKeysName[0] === '아이디'
                        ? truncate(row[0][firstRowKeysName[0]], 16, 16)
                        : row[0][firstRowKeysName[0]]}
                    </span>
                    {secondRowKeysName?.length > 0 && (
                      <>
                        <span
                          className="text-gray-r585858"
                          style={{
                            fontSize: '2.624375rem',
                            color: '#444444',
                            marginLeft: '3.725rem',
                          }}
                        >
                          {secondRowKeysName[0]} :{' '}
                        </span>
                        <span style={{ color: secondColumnColor }}>
                          {row[1][secondRowKeysName[0]]}
                        </span>
                        {secondRowKeysName[0] === '적립포인트' && (
                          <span
                            className="text-gray-r585858"
                            style={{
                              fontSize: '2.624375rem',
                              color: '#444444',
                            }}
                          >
                            P
                          </span>
                        )}
                      </>
                    )}
                  </div>
                );
              }
              return <></>;
            })}
          </div>
          {isCouponUsage ? (
            <div
              style={{
                height: '14rem',
                width: '24rem',
                borderRadius: '1.1rem',
              }}
            >
              <button
                style={{
                  padding: '0.5625rem',
                  width: '100%',
                  height: '100%',
                  background: '#5d659f',
                  borderRadius: '1rem',
                }}
                className="hover shadow-to-box3"
              >
                <div
                  style={{ color: '#ededeb', fontSize: '2.7rem', letterSpacing: '-.025em' }}
                  className="shadow-to-text"
                >
                  <p>사용하기</p>
                </div>
              </button>
            </div>
          ) : isButtonGradient ? (
            hasButton && (
              <div className="text-center">
                {isPopup ? (
                  <DetailButton />
                ) : (
                  <>
                    {!isCouponUsage ? (
                      <PopupControls
                        isNotFullScreen
                        buttonChild={
                          wideDetailButton ? (
                            wideDetailButtonComponent
                          ) : (
                            <DetailButton />
                          )
                        }
                        isPopupOpen={isPopupOpen}
                        setPopupOpen={setPopupOpen}
                        hasMargin="true"
                      >
                        {isPopupOpen ? (
                          <LiveCasinoHistoryDetailPopup
                            setPopupOpen={setPopupOpen}
                          />
                        ) : (
                          ''
                        )}
                      </PopupControls>
                    ) : (
                      <>{wideDetailButtonComponent}</>
                    )}
                  </>
                )}
              </div>
            )
          ) : (
            hasButton && (
              <div
                style={{
                  position: 'absolute',
                  right: '1.9rem',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  top: '-0.1875rem',
                }}
              >
                <button
                  className="hover change-top"
                  style={{
                    marginTop: '0.376rem',
                    marginRight: '-0.188rem',
                    width: '10.875rem',
                    height: '10.875rem',
                    backgroundColor:
                      card[card.length - 1].buttonColor || '#5d659f',
                    borderRadius: '1.875rem',
                  }}
                >
                  <div
                    style={{
                      padding: `${
                        wrapButtonText
                          ? inlineText
                            ? '2.2rem 1rem 2rem 1rem'
                            : isMobile
                            ? '2rem 2rem 2rem 2.2rem'
                            : '2rem 2rem 2rem 2.2rem'
                          : card[card.length - 1].winLoseComplete
                          ? isMobile
                            ? '2rem 2rem 2rem 2.2rem'
                            : '2rem 2rem 2rem 2.2rem'
                          : isMobile
                          ? '3rem 0 0'
                          : '2.8rem 0 0 0'
                      }`,
                    }}
                  >
                    <p
                      style={{
                        fontSize: '2.7rem',
                        lineHeight: '1.25',
                        width: '100%',
                        marginTop: '0.2375rem',
                        textAlign: 'center',
                        color: card[card.length - 1].textColor
                          ? card[card.length - 1].textColor
                          : '#ffffff',
                      }}
                    >
                      {card[card.length - 1].buttonText || '진행중'}
                    </p>
                  </div>
                </button>
              </div>
            )
          )}
        </div>
      </div>
    ));
  }
  return (
    <div style={{ borderRadius: '1em' }}>
      <Cells cards={tableData} />
    </div>
  );
};

export default HistoryTable;
