/* eslint-disable */
import React, { useState, useEffect } from 'react';
import HorizontalMenu from '../HorizontalMenu';

import HotelCasinoBetHistory from '../HotelCasinoBetHistory';
import SportsBetHistory from '../SportsBetHistory';
import Pagination from '../Pagination';
import LiveCasinoBetHistory from '../LiveCasinoBetHistory';
import HoldemGameBetHistory from '../HoldemGameBetHistory';
import SlotBetHistory from '../SlotBetHistory';
import { Route, Routes } from 'react-router';
import ESportsBetHistory from '../ESportsBetHistory';
import MinigameBetHistory from '../MinigameBetHistory';
import ARGameBetHistory from '../ARGameBetHistory';
import subIcon0 from '../../../assets/bigIcons/leftMenu/1.png';
import subIcon1 from '../../../assets/bigIcons/leftMenu/2.png';
import subIcon2 from '../../../assets/bigIcons/leftMenu/3.png';
import subIcon3 from '../../../assets/bigIcons/leftMenu/4.png';
import subIcon4 from '../../../assets/bigIcons/leftMenu/5.png';
import subIcon5 from '../../../assets/bigIcons/leftMenu/6.png';
import subIcon6 from '../../../assets/bigIcons/leftMenu/7.png';
import subIcon7 from '../../../assets/bigIcons/leftMenu/8.png';
import subIcon8 from '../../../assets/bigIcons/leftMenu/9.png';
import subIcon9 from '../../../assets/bigIcons/leftMenu/10.png';

import activeBG from '../../../assets/mainPage/points/active-bg.png';
import icon1 from '../../../assets/bigIcons/1_v3.png';
import icon2 from '../../../assets/images/bottom-nav/menu1.png';
import icon3 from '../../../assets/images/bottom-nav/menu2.png';
import icon4 from '../../../assets/images/bottom-nav/menu3.png';
import icon5 from '../../../assets/images/bottom-nav/menu4.png';
import icon6 from '../../../assets/images/bottom-nav/menu5.png';
import icon7 from '../../../assets/images/bottom-nav/menu6.png';
import icon8 from '../../../assets/images/bottom-nav/menu7.png';
import icon9 from '../../../assets/images/bottom-nav/menu8.png';
import icon10 from '../../../assets/images/bottom-nav/menu9.png';
import icon11 from '../../../assets/images/bottom-nav/menu10.png';
import icon12 from '../../../assets/images/bottom-nav/menu12.png';
// import icon12 from '../assets/images/bottom-nav/menu11.png';
// import HotelCasinoBetHistory from '../HotelCasinoBetHistory'

import icon1Active from '../../../assets/bigIcons/1-active-v3.png';
import icon2Active from '../../../assets/images/bottom-nav/menu-on1.png';
import icon3Active from '../../../assets/images/bottom-nav/menu-on2.png';
import icon4Active from '../../../assets/images/bottom-nav/menu-on3.png';
import icon5Active from '../../../assets/images/bottom-nav/menu-on4.png';
import icon6Active from '../../../assets/images/bottom-nav/menu-on5.png';
import icon7Active from '../../../assets/images/bottom-nav/menu-on6.png';
import icon8Active from '../../../assets/images/bottom-nav/menu-on7.png';
import icon9Active from '../../../assets/images/bottom-nav/menu-on8.png';
import icon10Active from '../../../assets/images/bottom-nav/menu-on9.png';
import icon11Active from '../../../assets/images/bottom-nav/menu-on10.png';
import icon12Active from '../../../assets/images/bottom-nav/menu-on12.png';

import ScrollButton from '../ScrollButton';

const tabsArray = [
  {
    text: '전체',
    icon: icon1,
    activeIcon: icon1Active,
    id: -1,
    path: '/mypage/bet-history/all',
    activeBG: activeBG,
  },
  {
    text: '라이브카지노',
    icon: icon2,
    activeIcon: icon2Active,
    id: 0,
    path: '/mypage/bet-history/all/live-casino',
    activeBG: activeBG,
    width: '7.75rem',
  },
  {
    text: '스포츠',
    icon: icon3,
    activeIcon: icon3Active,
    id: 1,
    path: '/mypage/bet-history/all/sports',
    activeBG: activeBG,
    width: '7.75rem',
  },
  {
    text: '라이브스포츠',
    icon: icon4,
    activeIcon: icon4Active,
    id: 1,
    path: '/mypage/bet-history/all/live-sports',
    activeBG: activeBG,
    width: '7.75rem',
  },
  {
    text: '슬롯게임',
    icon: icon5,
    activeIcon: icon5Active,
    id: 2,
    path: '/mypage/bet-history/all/slot-game',
    activeBG: activeBG,
    width: '6.625rem',
  },
  {
    text: '호텔카지노',
    icon: icon6,
    activeIcon: icon6Active,
    id: 3,
    path: '/mypage/bet-history/all/hotel-casino',
    activeBG: activeBG,
  },
  {
    text: '홀덤게임',
    icon: icon12,
    activeIcon: icon12Active,
    id: 4,
    path: '/mypage/bet-history/all/holdem-game',
    activeBG: activeBG,
  },
  {
    text: 'e-스포츠',
    icon: icon7,
    activeIcon: icon7Active,
    id: 5,
    path: '/mypage/bet-history/all/e-sports',
    activeBG: activeBG,
  },
  {
    text: '미니게임',
    icon: icon8,
    activeIcon: icon8Active,
    id: 6,
    path: '/mypage/bet-history/all/minigame',
    activeBG: activeBG,
    subPath: '/mypage/bet-history/all/minigame/powerball',
    subPath2: '/mypage/bet-history/all/minigame/powerladder',
    subPath3: '/mypage/bet-history/all/minigame/speedkino',
    subPath4: '/mypage/bet-history/all/minigame/kinoladder',
  },
  {
    text: '키론가상게임',
    icon: icon9,
    activeIcon: icon9Active,
    id: 7,
    path: '/mypage/bet-history/all/ar-game',
    activeBG: activeBG,
  },
  {
    text: '피싱게임',
    icon: icon10,
    activeIcon: icon10Active,
    id: 8,
    path: '/mypage/bet-history/all/fishing-game',
    activeBG: activeBG,
  },
  {
    text: '티비벳',
    icon: icon11,
    activeIcon: icon11Active,
    id: 9,
    path: '/mypage/bet-history/all/bet',
    activeBG: activeBG,
  },
];

const LeftMenuBetHistoryArray = [
  {
    text: '전체보기',
    icon: subIcon0,
    id: -1,
    path: '/mypage/bet-history/all',
    mainPath: '/mypage/bet-history',
    width: '9.9375rem',
  },
  {
    text: '라이브카지노',
    icon: subIcon1,
    id: 0,
    path: '/mypage/bet-history/all/live-casino',
    mainPath: '/mypage/bet-history',
    width: '9.9375rem',
  },
  {
    text: '슬롯게임',
    icon: subIcon2,
    id: 1,
    path: '/mypage/bet-history/all/slot-game',
    mainPath: '/mypage/bet-history',
    width: '9.9375rem',
  },
  {
    text: '스포츠',
    icon: subIcon3,
    id: 2,
    path: '/mypage/bet-history/all/sports',
    mainPath: '/mypage/bet-history',
    width: '9.9375rem',
  },
  {
    text: '호텔카지노',
    icon: subIcon4,
    id: 3,
    path: '/mypage/bet-history/all/hotel-casino',
    width: '9.9375rem',
  },
  {
    text: '홀덤게임',
    icon: icon12,
    activeIcon: icon12Active,
    id: 4,
    path: '/mypage/bet-history/all/holdem-game',
    activeBG: activeBG,
  },
  {
    text: 'e-스포츠',
    icon: subIcon5,
    id: 5,
    path: '/mypage/bet-history/all/e-sports',
    mainPath: '/mypage/bet-history',
    width: '9.9375rem',
  },
  {
    text: '미니게임',
    icon: subIcon6,
    id: 6,
    path: '/mypage/bet-history/all/minigame',
    mainPath: '/mypage/bet-history',
    width: '9.9375rem',
  },
  {
    text: '키론가상게임',
    icon: subIcon7,
    id: 7,
    path: '/mypage/bet-history/all/ar-game',
    mainPath: '/mypage/bet-history',
    width: '9.9375rem',
  },
  {
    text: '피싱게임',
    icon: subIcon8,
    id: 8,
    path: '/mypage/bet-history/all/fishing-game',
    mainPath: '/mypage/bet-history',
    width: '9.9375rem',
  },
  {
    text: '티비벳',
    icon: subIcon9,
    id: 9,
    path: '/mypage/bet-history/all/bet',
    mainPath: '/mypage/bet-history',
    width: '9.9375rem',
  },
];

const BetHistoryTest = ({
  isAuthenticated,
  setAuthenticated,
  subActiveButton,
  setSubActiveButton,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSubTab, setSelectedSubTab] = useState(0);
  const [historySelectedSubTab, setHistorySelectedSubTab] = useState(0);
  const [historySelectedSubTab2, setHistorySelectedSubTab2] = useState(0);
  const [historySelectedSubTab3, setHistorySelectedSubTab3] = useState(0);
  const [historySelectedSubTab4, setHistorySelectedSubTab4] = useState(0);

  const [page, setPage] = useState(0);
  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const MyInfo = () => {
  //     return (
  //         <>
  //             <AccountProfileComponent isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
  //             <div style={{ marginTop: '1.9rem', marginBottom: '36.675rem' }} className="flex w-full">
  //                 <LeftMenu
  //                     selectedTab={selectedTab}
  //                     setSelectedTab={setSelectedTab}
  //                     selectedSubTab={selectedSubTab}
  //                     setSelectedSubTab={setSelectedSubTab}
  //                     array={LeftMenuBetHistoryArray}
  //                     subActiveButton={subActiveButton}
  //                 />
  //             </div>
  //             <div className="w-full flex justify-center mb-40" style={{ display: 'flex', justifyContent: 'center', marginLeft: '0.2rem', paddingBottom: '5rem' }}>
  //                 <img style={{ width: '20.375rem' }} className="object-contain" src={Logo} alt="logo" />
  //             </div>
  //         </>
  //     )
  // }

  return (
    <div
      style={{ maxWidth: '1242px', paddingBottom: '0.01rem' }}
      className="w-full flex flex-col"
    >
      <Routes>

        <Route
          index
          path="/all/*"
          element={
            <>
              <div
                className="w-full flex relative top-0"
                style={{
                  width: '100%',
                  display: 'flex',
                  position: 'relative',
                  top: '0',
                }}
              >
                <div
                  //!- this had a bug to be scrolled by clicking FixedMenu because of the same className. changed className from scroll-wrapper to ...-horizontalMenu
                  id="scroll-wrapper-horizontalMenu"
                  style={{
                    padding: '0.1rem 0 0.1rem 1.2rem',
                    paddingRight: '0',
                    overflowX: 'scroll',
                  }}
                  className="overflow-x-scroll overflow-y-hidden hide-scrollbar"
                >
                  <div
                    className="bet-history"
                    style={{ display: 'flex', flexShrink: '0' }}
                  >
                    <HorizontalMenu
                      key={5}
                      itemsArray={tabsArray}
                      setSelectedTab={setSelectedTab}
                      setSelectedSubTab={setSelectedSubTab}
                    />
                  </div>
                </div>
                <div
                  style={{ height: '12.1rem' }}
                  className="nav-shadow absolute h-full left-0 z-50"
                ></div>
              </div>

              <Routes>
                <Route
                  index
                  element={
                    <>
                      <LiveCasinoBetHistory
                        key={1}
                        showSub={false}
                        isState={historySelectedSubTab}
                        setState={setHistorySelectedSubTab}
                        subActiveButton={subActiveButton}
                        setSubActiveButton={setSubActiveButton}
                        path="/mypage/bet-history/all"
                      />
                      <Pagination page={page} setPage={setPage} />
                    </>
                  }
                />
                <Route
                  path="/sports"
                  element={
                    <>
                      <SportsBetHistory
                        key={55}
                        checkedState={checkedState}
                        setCheckedState={setCheckedState}
                        subActiveButton={subActiveButton}
                        setSubActiveButton={setSubActiveButton}
                      />
                      <Pagination page={page} setPage={setPage} />
                      {/* <NavBottom /> */}
                    </>
                  }
                ></Route>
                <Route
                  path="/live-sports"
                  element={
                    <>
                      <SportsBetHistory
                        key={55}
                        checkedState={checkedState}
                        setCheckedState={setCheckedState}
                        subActiveButton={subActiveButton}
                        setSubActiveButton={setSubActiveButton}
                      />
                      <Pagination page={page} setPage={setPage} />
                      {/* <NavBottom /> */}
                    </>
                  }
                ></Route>
                <Route
                  path="/live-casino/*"
                  element={
                    <>
                      <LiveCasinoBetHistory
                        key={2}
                        isState={historySelectedSubTab}
                        setState={setHistorySelectedSubTab}
                        subActiveButton={subActiveButton}
                        setSubActiveButton={setSubActiveButton}
                        path="/mypage/bet-history/all/live-casino"
                      />
                      <Pagination page={page} setPage={setPage} />
                    </>
                  }
                ></Route>
                <Route
                  path="/hotel-casino/*"
                  element={
                    <>
                      <HotelCasinoBetHistory
                        isState={historySelectedSubTab4}
                        setState={setHistorySelectedSubTab4}
                        subActiveButton={subActiveButton}
                        setSubActiveButton={setSubActiveButton}
                      />
                      <Pagination page={page} setPage={setPage} />
                    </>
                  }
                ></Route>

                <Route
                  path="/slot-game/*"
                  element={
                    <>
                      <SlotBetHistory
                        key={1}
                        isState={selectedSubTab}
                        setState={setSelectedSubTab}
                        subActiveButton={subActiveButton}
                        setSubActiveButton={setSubActiveButton}
                        path="/mypage/bet-history/all/slot-game"
                      />
                      <Pagination page={page} setPage={setPage} />
                    </>
                  }
                ></Route>
                <Route
                  path="/e-sports"
                  element={
                    <>
                      <ESportsBetHistory
                        isState={historySelectedSubTab}
                        setState={setHistorySelectedSubTab}
                        subActiveButton={subActiveButton}
                        setSubActiveButton={setSubActiveButton}
                      />
                    </>
                  }
                ></Route>
                <Route
                  path="/holdem-game"
                  element={
                    <>
                      <HoldemGameBetHistory
                        key={11}
                        showSub={false}
                        isState={historySelectedSubTab}
                        setState={setHistorySelectedSubTab}
                        subActiveButton={subActiveButton}
                        setSubActiveButton={setSubActiveButton}
                        path="/mypage/bet-history/all/holdem-game"
                      />
                      <Pagination page={page} setPage={setPage} />
                    </>
                  }
                ></Route>
                <Route
                  path="/minigame/*"
                  element={
                    <>
                      <MinigameBetHistory
                        isState={historySelectedSubTab2}
                        setState={setHistorySelectedSubTab2}
                        subActiveButton={subActiveButton}
                        setSubActiveButton={setSubActiveButton}
                      />
                      <Pagination page={page} setPage={setPage} />
                    </>
                  }
                ></Route>
                <Route
                  path="/ar-game"
                  element={
                    <>
                      <ARGameBetHistory
                        isState={historySelectedSubTab3}
                        setState={setHistorySelectedSubTab3}
                        subActiveButton={subActiveButton}
                        setSubActiveButton={setSubActiveButton}
                      />
                      <Pagination page={page} setPage={setPage} />
                    </>
                  }
                ></Route>
                <Route
                  path="/fishing-game"
                  element={
                    <>
                      <SlotBetHistory
                        key={2}
                        isState={selectedSubTab}
                        setState={setSelectedSubTab}
                        subActiveButton={subActiveButton}
                        setSubActiveButton={setSubActiveButton}
                        path="/mypage/bet-history/all/fishing-game"
                      />
                      <Pagination page={page} setPage={setPage} />
                    </>
                  }
                ></Route>
                <Route
                  path="/bet"
                  element={
                    <>
                      <LiveCasinoBetHistory
                        key={11}
                        showSub={false}
                        isState={historySelectedSubTab}
                        setState={setHistorySelectedSubTab}
                        subActiveButton={subActiveButton}
                        setSubActiveButton={setSubActiveButton}
                        path="/mypage/bet-history/all/bet"
                      />
                      <Pagination page={page} setPage={setPage} />
                    </>
                  }
                />
              </Routes>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default BetHistoryTest;
