import React from 'react';
import FootballIcon from '../../assets/myPage/sports/football-v3.png';
// import USFlagIcon from '../../assets/myPage/sports/usaFlag.png'
// import UKFlagIcon from '../../assets/myPage/sports/englandFlag.png'
// import SpainFlagIcon from '../../assets/flag.png'
import ClockIcon from '../../assets/myPage/sports/clock-v3.png';
import Icon3 from '../../assets/gameresults/mini-icon1.png';

import Icon4 from '../../assets/gameresults/mini-icon2.png';
import Icon5 from '../../assets/minigameResults/3.png';
import Icon6 from '../../assets/minigameResults/4.png';

const CardHeader = ({
  flag = 'us',
  name = '축구 / 미국 - 메이저리그사커',
  date = '06-29 15:45',
  isMinigame = false,
  minigameType = 'powerball',
  smallCard,
  width6,
}) => {
  // const flags = {
  //     us: USFlagIcon,
  //     uk: UKFlagIcon,
  //     spain: SpainFlagIcon
  // }
  // const headerFlag = flags[flag]

  if (isMinigame === true)
    return (
      <div
        style={{
          height: '7.2rem',
          paddingLeft: '1.4rem',
          background: '#6852a7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '',
        }}
        className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd pr-7"
      >
        <div
          className="flex items-center"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img
            style={{
              width:
                minigameType === 'powerladder'
                  ? width6
                    ? '6.5rem'
                    : '6.3rem'
                  : width6
                  ? '6rem'
                  : '7rem',
              height: 'auto',
              marginTop:
                minigameType === 'powerladder' ? '-0.44rem' : '-0.34rem',
              marginLeft: '',
            }}
            className="object-contain"
            src={
              minigameType === 'powerladder'
                ? Icon4
                : minigameType === 'kinoladder'
                ? Icon6
                : minigameType === 'powerball'
                ? Icon3
                : Icon5
            }
            alt=""
          />
          <span
            style={{
              fontSize: '2.625rem',
              paddingBottom: '0.2rem',
              marginLeft: '0.7rem',
              color: '#ffffff',
              // letterSpacing: '-0.07rem',
              letterSpacing : '-.015em',
              fontWeight: 'bold'
            }}
            className="ml-4 text-20px tracking-tight text-white"
          >
            {minigameType === 'powerladder'
              ? '파워사다리'
              : minigameType === 'kinoladder'
              ? '키노사다리'
              : minigameType === 'powerball'
              ? '파워볼'
              : '스피드키노'}
          </span>
        </div>
        {minigameType !== 'powerball' && (
          <div
            className="flex items-center"
            style={{
              display: 'flex',
              alignItems: 'center',
              // letterSpacing: '-0.1rem',
              letterSpacing : '-.015em',
              marginRight: '1.5rem',
              marginTop: '-0.4rem',
            }}
          >
            <img
              style={{
                width: '2.374375rem',
                height: '2.374375rem',
                // marginTop: '1rem',
              }}
              src={ClockIcon}
              alt=""
            />
            <span
              style={{
                color: '#ffffff',
                fontSize: '2.625rem',
                marginLeft: '0.5625rem',
                // marginTop: '0.5rem',
                marginTop: '0.7rem',
                marginRight: '',
              }}
              className=" text-16px tracking-tight text-white"
            >
              {date}
            </span>
          </div>
        )}
      </div>
    );
  else
    return (
      <div
        style={{
          height: '6.313rem',
          borderTopRightRadius: '0.5rem',
          borderTopLeftRadius: '0.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: smallCard ? '0 1.6rem' : '0px 1.75rem 0 1.6rem',
          background: '#6852a7',
          borderRadius: 0,
        }}
        className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-8"
      >
        <div
          className="flex items-center"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            marginLeft: '-0.563rem',
          }}
        >
          <img
            style={{
              width: '3.188rem',
              height: '3.188rem',
              marginTop: '-0.3rem',
            }}
            src={FootballIcon}
            alt=""
          />
          {/* <img style={{ width: '5.625', height: '3.3125rem', marginLeft: '1.0625rem', marginTop: '-0.3rem' }} src={headerFlag} alt="" /> */}
          <span
            style={{
              fontSize: '2.438rem',
              // paddingTop: '-0.738rem',
              height:'100%',
              lineHeight:'6.313rem',
              // verticalAlign:'bottom',
              marginLeft: '0.85rem',
              color: '#ffffff',
              whiteSpace: 'nowrap',
              maxWidth: '36rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              letterSpacing : '-.015em',
            }}
            className="ml-4 text-20px tracking-tight text-white"
          >
            {name}
          </span>
        </div>
        <div
          className="flex items-center"
          style={{ display: 'flex', alignItems: 'center', marginRight: '-0.688rem' }}
        >
          {/* <img style={{ width: '2.375rem', height: '2.375rem', marginTop: '0.3rem' }} src={ClockIcon} alt="" /> */}
          <span
            style={{
              // lineHeight: '20px',
              lineHeight:'6.313rem',
              color: '#ffffff',
              fontSize: '2.438rem',
              marginLeft: '0.5rem',
              marginTop: '-0.563rem',
              marginRight: '-0.2rem',
              // letterSpacing: '-0.11rem',
              letterSpacing : '-.015em',
              paddingTop: '0.5rem',
            }}
            className=" text-16px tracking-tight text-white"
          >
            {date}
          </span>
          <img
            style={{
              height: '2.75rem',
              width: '4.125rem',
              marginTop: '-.5rem',
              marginLeft: '1.438rem',
              paddingTop: '0.3rem',
            }}
            src={flag}
            alt=""
          />
        </div>
      </div>
    );
};

export default CardHeader;
