import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import horizontalsScroll from '../../../utils/horizontalsScroll';

const HorizontalMenu14 = ({
  itemsArray,
  setSelectedTab,
  isState = 0,
  setSelectedSubTab = null,
  width,
  withoutFirst = true,
  imageWidth,
  hasNumber = true,
  withoutMargin,
}) => {
  useEffect(() => {
    if (withoutFirst) {
      horizontalsScroll(itemsArray, 't-sub', 'scroll-wrapper');
    }
  }, [itemsArray, withoutFirst]);

  const navigate = useNavigate();
  const [isHover, setHover] = useState(null);
  console.log(isHover);

  function TabsList({ items }) {
    return items.map((item, index) => (
      <button
        id={`t-sub${index}`}
        key={item.id}
        style={{
          background: `url(${
            isState === item.id ||
            (typeof isState !== 'number' && item.id === 0)
              ? item.subActive
              : item.subInactive
          }) round`,
          borderRadius: '0',
          width: '14.288rem',
          height: '14.15rem',
          marginRight: '-0.2rem',
          border: '0',
          flexShrink: '0',
        }}
        onPointerDown={() => setHover(item.id)}
        onPointerUp={() => {
          setHover(null);
          navigate(item.path);
          setSelectedTab(item.id);
          horizontalsScroll(itemsArray, 't-sub', 'scroll-wrapper2', index);
          if (setSelectedSubTab !== null) {
            setSelectedSubTab(0);
          }
        }}
        onPointerOut={() => setHover(null)}
        onPointerCancel={() => setHover(null)}
      >
        <div style={{ marginTop: '-1.5rem', marginLeft: '-0.6rem' }}>
          <div
            className="changeMargin"
            style={{ marginTop: '1.5rem', height: '5.9rem' }}
          >
            <img
              style={{
                width: item.width
                  ? item.width
                  : imageWidth
                  ? imageWidth
                  : withoutMargin
                  ? '6.0625rem'
                  : '7.813rem',
                marginTop: item.marginTop,
                marginLeft: '0.4375rem',
                WebkitUserDrag: 'none',
                MozUserDrag: 'none',
                userDrag: 'none',
              }}
              src={
                isState === item.id ||
                (typeof isState !== 'number' && item.id === 0)
                  ? item.activeIcon
                  : item.icon
              }
              alt=""
            />
          </div>
          <p
            style={{
              margin: '0',
              marginTop: `${imageWidth ? '0.0625rem' : '0.075rem'}`,
              fontSize: '2.25rem',
              color:
                isState === item.id ||
                (typeof isState !== 'number' && item.id === 0)
                  ? '#ffffff'
                  : '#2d2834',
              marginLeft: '0.6rem',
              letterSpacing: '0.1em',
            }}
            className="paragraph"
          >
            {item.text}
          </p>
          {hasNumber && (
            <div
              style={{
                width: '6.19rem',
                height: '2.785rem',
                marginTop: imageWidth ? '0.0625rem' : '',
                marginBottom: '2.1rem',
                marginLeft: '4.6rem',
                background: 'rgb(0 0 0 / 50%)',
                borderRadius: '2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="hasNumber"
            >
              <p
                style={{
                  fontSize: '2rem',
                  color: '#ffffff',
                }}
              >
                {item.number}
              </p>
            </div>
          )}
        </div>
      </button>
    ));
  }

  return (
    <>
      <div id="container" className="HorizontalMenu">
        <div style={{ width: '0.4rem', height: '10rem', flexShrink: 0 }}></div>
        <TabsList items={itemsArray} />
        <div style={{ width: '1.6rem', height: '10rem', flexShrink: 0 }}></div>
        {/* <div style={{ height: '14.4rem', position: 'unset' }} className="nav-shadow" /> */}
      </div>
    </>
  );
};

export default HorizontalMenu14;
