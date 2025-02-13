import React, { useState, useEffect } from 'react';
import Diamond from '../../../assets/mainPage/distributor/diamond-v3.png';
import Pagination from '../Pagination';
import DateSearchBar from '../DateSearchBar';
import HistoryTable from '../HistoryTable';
import SelectAllButton from '../SelectAllButton';
// import NavBottom from '../NavBottom'
// import ScrollButton from '../ScrollButton'
import HomePageTopBanner from '../HomePageTopBanner';
import Header from '../../Header';
import FixedMenu from '../../FixedMenu';
import NoticeBanner from '../../MainPage/NoticeBanner';
import './_winLoseSettlement.scss';

const tableData = [
  [
    {
      0: { 정산시작일: '2021-06-30' },
    },
    {
      0: { 정산종료일: '2021-07-29' },
    },
    {
      0: { 분류: '미니게임' },
    },
    {
      0: { 금액: '75,000' },
    },
    {
      buttonColor: '#888888',
      textColor: '#ededeb',
    },
  ],
  [
    {
      0: { 정산시작일: '2021-06-30' },
    },
    {
      0: { 정산종료일: '2021-07-29' },
    },
    {
      0: { 분류: '에볼루션' },
    },
    {
      0: { 금액: '+75,000' },
    },
    {
      buttonColor: '#5d659f',
      buttonText: '정산 완료',
      textColor: '#eeeeee',
      winLoseComplete: true,
    },
  ],
  [
    {
      0: { 정산시작일: '2021-06-30' },
    },
    {
      0: { 정산종료일: '2021-07-29' },
    },
    {
      0: { 분류: '미니게임' },
    },
    {
      0: { 금액: '+75,000' },
    },
    {
      buttonColor: '#5d659f',
      buttonText: '정산 완료',
      textColor: '#eeeeee',
      winLoseComplete: true,
    },
  ],
  [
    {
      0: { 정산시작일: '2021-06-30' },
    },
    {
      0: { 정산종료일: '2021-07-29' },
    },
    {
      0: { 분류: '스포츠' },
    },
    {
      0: { 금액: '-20,000' },
    },
    {
      buttonColor: '#5d659f',
      buttonText: '정산 완료',
      textColor: '#eeeeee',
      winLoseComplete: true,
    },
  ],
  [
    {
      0: { 정산시작일: '2021-06-30' },
    },
    {
      0: { 정산종료일: '2021-07-29' },
    },
    {
      0: { 분류: '미니게임' },
    },
    {
      0: { 금액: '+15,000' },
    },
    {
      buttonColor: '#5d659f',
      buttonText: '정산 완료',
      textColor: '#eeeeee',
      winLoseComplete: true,
    },
  ],
  [
    {
      0: { 정산시작일: '2021-06-30' },
    },
    {
      0: { 정산종료일: '2021-07-29' },
    },
    {
      0: { 분류: '스포츠' },
    },
    {
      0: { 금액: '-15,000' },
    },
    {
      buttonColor: '#5d659f',
      buttonText: '정산 완료',
      textColor: '#eeeeee',
      winLoseComplete: true,
    },
  ],
  [
    {
      0: { 정산시작일: '2021-06-30' },
    },
    {
      0: { 정산종료일: '2021-07-29' },
    },
    {
      0: { 분류: '미니게임' },
    },
    {
      0: { 금액: '-15,000' },
    },
    {
      buttonColor: '#5d659f',
      buttonText: '정산 완료',
      textColor: '#eeeeee',
      winLoseComplete: true,
    },
  ],
  [
    {
      0: { 정산시작일: '2021-06-30' },
    },
    {
      0: { 정산종료일: '2021-07-29' },
    },
    {
      0: { 분류: '미니게임' },
    },
    {
      0: { 금액: '-50,000' },
    },
    {
      buttonColor: '#5d659f',
      buttonText: '정산 완료',
      textColor: '#eeeeee',
      winLoseComplete: true,
    },
  ],
];

const WinLoseSettlementContent = ({ activeButton, setActiveButton }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [page, setPage] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(true);
  const [checkedState, setCheckedState] = useState(new Array(8).fill(false));
  const [isAllSelected, setAllSelected] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    setActiveButton('/mypage/win-lose-settlement');
  }, [setActiveButton]);

  return (
    <div className="WinLoseSettlement">
      <Header />
      <NoticeBanner />
      <HomePageTopBanner pageTitle="윈루즈정산" />
      <DateSearchBar isLeagueSearch={false} withBlackButton />
      <div
        style={{
          width: '73.875rem',
          height: '6.7rem',
          borderWidth: '0.1875rem',
          borderRadius: '3.1875rem',
          margin: '1.875rem 0',
          marginLeft: '1.875rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          flexDirection: 'column',
          background: '#341d5a',
          border: '0.1875rem solid #9361e5',
          padding: '0 3rem',
        }}
      >
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '0.2rem',
            width: '50%',
            justifyContent: 'center',
            fontSize: '2.625rem',
          }}
        >
          {/* <div style={{ fontSize: '2.625rem'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                style={{
                  width: '1.2rem',
                  height: '1.2rem',
                  marginRight: '1.2rem',
                }}
                src={Diamond}
                alt=""
              />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    marginRight: '0.625rem',
                    color: '#ffffff',
                    letterSpacing: '-0.12rem',
                  }}
                >
                  진행중인 금액 :
                  <span style={{ color: '#ffcc00' }}>200,520,000</span>
                </span>
              </div>
            </div>
          </div> */}
          <img
            style={{
              width: '1.2rem',
              height: '1.2rem',
              marginRight: '1.2rem',
            }}
            src={Diamond}
            alt=""
          />
          <span
            style={{
              marginRight: '0.625rem',
              color: '#ffffff',
              // letterSpacing: '-0.12rem',
              letterSpacing: '-0.025em',
              verticalAlign: 'bottom',
              height: '6.7rem',
              lineHeight: '6.7rem',
            }}
          >
            진행중인 금액 :
          </span>
          <span
            style={{
              marginRight: '0.625rem',
              color: '#ffcc00',
              // letterSpacing: '-0.12rem',
              letterSpacing: '-0.025em',
              verticalAlign: 'bottom',
              height: '6.7rem',
              lineHeight: '6.7rem',
            }}
          >
            200,520,000
          </span>
        </div>

        <div
          style={{
            width: '50%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.625rem',
          }}
        >
          {/* <div style={{ fontSize: '2.625rem'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                style={{
                  width: '1.2rem',
                  height: '1.2rem',
                  marginRight: '1.3125rem',
                }}
                src={Diamond}
                alt=""
              />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    marginRight: '0.625rem',
                    color: '#ffffff',
                    letterSpacing: '-0.12rem',
                  }}
                >
                  정산 총 금액 :{' '}
                  <span style={{ color: '#ffcc00' }}>500,000</span>
                </span>
              </div>
            </div>
          </div> */}
          <img
            style={{
              width: '1.2rem',
              height: '1.2rem',
              marginRight: '1.2rem',
            }}
            src={Diamond}
            alt=""
          />
          <span
            style={{
              marginRight: '0.625rem',
              color: '#ffffff',
              // letterSpacing: '-0.12rem',
              letterSpacing: '-0.025em',
              verticalAlign: 'bottom',
              height: '6.7rem',
              lineHeight: '6.7rem',
            }}
          >
            정산 총 금액 :
          </span>
          <span
            style={{
              marginRight: '0.625rem',
              color: '#ffcc00',
              // letterSpacing: '-0.12rem',
              letterSpacing: '-0.025em',
              verticalAlign: 'bottom',
              height: '6.7rem',
              lineHeight: '6.7rem',
            }}
          >
            500,000
          </span>
        </div>
      </div>

      <div className="h-full">
        <HistoryTable
          containerBackground="#f7f9fc"
          tableData={tableData}
          checkedState={checkedState}
          setCheckedState={setCheckedState}
          isPopupOpen={isPopupOpen}
          setPopupOpen={setPopupOpen}
          cardHeight="20.9375rem"
          isButtonGradient={false}
          width45
        />
      </div>

      <div
        style={{
          height: '7.5rem',
          width: '73.875rem',
          fontSize: '2.625rem',
          borderWidth: '0.1875rem',
          margin: '0px 1.875rem 1.875rem',
          letterSpacing: '-0.07rem',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '0.5rem',
          padding: '#ffffff',
          background: '#ffffff',
          boxShadow: 'rgba(0, 0, 0, 0.8) 0px 0px 0.75rem 0px',
        }}
        className="shadow-to-box text-14px tracking-tight border border-gray-ececec flex items-center shadow-subNavbar rounded-2xl"
      >
        <div
          style={{
            borderRightWidth: '0.1875rem',
            width: '50%',
            background: '#eaeaea',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: '0.5rem',
            borderBottomLeftRadius: '0.5rem',
            color: 'rgb(68, 68, 68)',
            letterSpacing: '-0.015em',
          }}
          className="flex items-center justify-center h-full w-1/2 text-white bg-gray-a3b2c2 border-r border-gray-ececec rounded-l-2xl"
        >
          합계
        </div>
        <div
          style={{
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#e9441d',
            letterSpacing: '-0.015em',
            fontWeight: 'bold'
          }}
          className="flex items-center justify-center h-full w-1/2 text-red-d52e2e rounded-2xl"
        >
          +244,119
        </div>
      </div>

      <div className="w-full" style={{ padding: '0 1.875rem' }}>
        <SelectAllButton
          count={8}
          isAllSelected={isAllSelected}
          setCheckedState={setCheckedState}
          setAllSelected={setAllSelected}
        />
      </div>

      <div style={{ paddingBottom: '0.1rem' }} className="">
        <Pagination page={page} setPage={setPage} />
      </div>
      {/* <NavBottom /> */}
      <FixedMenu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
};

export default WinLoseSettlementContent;
