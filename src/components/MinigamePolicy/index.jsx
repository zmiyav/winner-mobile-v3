import React, { useState } from 'react';
import { useNavigate, useLocation, Route, Routes } from 'react-router-dom';
import HorizontalSubMenu1 from '../MyPage/HorizontalSubMenu1';

import PowerballPolicy from '../../assets/cscenter/minigame/powerball_policy.png';
import PowerladderPolicy from '../../assets/cscenter/minigame/powerladder_policy.png';
import SpeedKinoPolicy from '../../assets/cscenter/minigame/speedkino_policy.png';

const HistoryMenu = ({
  itemsArray,
  setSelectedTab,
  setSelectedSubTab = null,
}) => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const [isHover, setHover] = useState(null);
  console.log(isHover);

  function TabsList({ items }) {
    return items.map((item, index) => {
      let isActive = pathname === item.path;
      let isLast = item.isLast;
      if (item.path.includes('/cscenter/all/policy/sportsgame')) {
        isActive = true;
      }
      return (
        <div
          className="btn-back shadow-box-myPage"
          style={{
            background: isActive
              ? 'linear-gradient(to top, #553d84, #9f5af5 50%, #c473ec)'
              : 'linear-gradient(to top, #5e3e93, #9f59f5 50%, #edcfff)',
            width:'49.2%',
            height: '6.375rem',
            borderRadius: '3.2rem',
            padding: '1px',
            marginRight: isLast ? '0' : '1.125rem'
          }}
        >
          <button
            className={`${
              isActive
                ? 'bg-blue-r0056a6'
                : 'bg-white border border-gray-b7b7b7'
            } w-1/2 rounded-full`}
            style={{
              background: pathname === item.path
                ? 'linear-gradient(to top, rgb(73, 31, 156) 0%, rgb(158, 60, 188) 100%)'
                : 'rgb(229, 206, 250)',
              color: pathname === item.path ? '#ffffff' : '#2d2834',
              width: '100%',
              borderRadius: '4rem',
              height: '6.375rem',
              fontSize: '2.8125rem',
              marginRight: `${!index ? '1.15rem' : ''}`,
              letterSpacing: '-0.07rem',
            }}
            key={item.id}
            onPointerDown={() => setHover(item.id)}
            onPointerUp={() => {
              navigate(item.path);
              setSelectedTab(item.id);
              if (setSelectedSubTab !== null) {
                setSelectedSubTab(0);
              }
            }}
            onPointerOut={() => setHover(null)}
            onPointerCancel={() => setHover(null)}
          >
            <div>
              <div
                className="mt-2"
                style={{ marginRight: '-0.2rem', paddingTop: '0.3rem' }}
              >
                <span style={{fontWeight:'700'}}>
                  {item.text}
                </span>
              </div>
            </div>
          </button>
        </div>
      );
    });
  }

  return (
    <div className="w-full" style={{display : 'flex'}}>
      <TabsList items={itemsArray} />
    </div>
  );
};

const MinigamePolicy = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);
  const [selectedSubTab, setSelectedSubTab] = useState(location.pathname);
  console.log(selectedSubTab, selectedTab);
  const tabsArray = [
    { text: '파워볼', id: 0, path: '/cscenter/all/policy/minigame/powerball' },
    {
      text: '파워사다리',
      id: 1,
      path: '/cscenter/all/policy/minigame/powerladder',
    },
    {
      text: '스피드키노',
      id: 2,
      path: '/cscenter/all/policy/minigame/speedkino',
    },
    {
      text: '키노사다리',
      id: 3,
      path: '/cscenter/all/policy/minigame/kinoladder',
    },
  ];

  const historyTabsArray = [
    {
      text: '스포츠게임',
      id: 0,
      path: '/cscenter/all/policy/sportsgame/soccer',
    },
    {
      text: '미니게임',
      id: 1,
      path: '/cscenter/all/policy/minigame/powerball' || '/cscenter/all/policy/minigame/powerladder' || '/cscenter/all/policy/minigame/speedkino' || '/cscenter/all/policy/minigame/kinoladder',
      isLast: true
    },
  ];

  return (
    <div style={{ overflow: 'hidden' }}>
      <div
        style={{ margin: '1.875rem', marginTop: '0.8rem', marginBottom: '2.1rem' }}
      >
        <HistoryMenu
          itemsArray={historyTabsArray}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <div className="w-full relative top-0">
        <div
          style={{
            background: 'linear-gradient(to right, #ffffff00, #ffffff',
            width: '3.125rem',
          }}
          className="absolute h-full right-0 z-50"
        ></div>
        <div className="">
          <div
            style={{ marginLeft: '4.8rem' }}
            className=" flex flex-shrink-0 w-full"
          >
            <HorizontalSubMenu1
              itemsArray={tabsArray}
              setSelectedTab={setSelectedTab}
              setSelectedSubTab={setSelectedSubTab}
            />
          </div>
        </div>
      </div>

      <div
        style={{ paddingTop: '0.7rem', paddingBottom: '6.3rem' }}
        className="flex justify-center"
      >
        <Routes>
          <Route
            path="/powerball"
            element={
              <div style={{ marginLeft: '1rem' }}>
                <img src={PowerballPolicy} alt="" style={{ width: '76rem' }} />
              </div>
            }
          ></Route>

          <Route
            path="/powerladder"
            element={
              <div style={{ marginLeft: '1rem' }}>
                <img
                  src={PowerladderPolicy}
                  alt=""
                  style={{ width: '76rem' }}
                />
              </div>
            }
          ></Route>
          <Route
            path="/speedkino"
            element={
              <div style={{ marginLeft: '1rem' }}>
                <img src={SpeedKinoPolicy} alt="" style={{ width: '76rem' }} />
              </div>
            }
          ></Route>
          <Route
            path="/kinoladder"
            element={
              <div style={{ marginLeft: '1rem' }}>
                <img
                  src={PowerladderPolicy}
                  alt=""
                  style={{ width: '76rem' }}
                />
              </div>
            }
          ></Route>
        </Routes>
      </div>

      <div style={{ marginBottom: '14rem' }} />

      {/* <BottomNavbar /> */}
    </div>
  );
};

export default MinigamePolicy;
