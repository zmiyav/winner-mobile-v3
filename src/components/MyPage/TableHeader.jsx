import React from 'react';

const TableHeader = ({
  smallCard = false,
  isMinigame = false,
  middleText = '무',
  isFreeboard,
  isCompose,
  isSportsResult,
  isPowerLadder,
}) => {
  if (isMinigame === true)
    return (
      <div
        style={{
          background: 'linear-gradient(to right,#9d3bbb, #5423a0 )',
          borderTopLeftRadius: '1.125rem',
          borderTopRightRadius: '1.125rem',
          paddingTop: '1.688rem',
          paddingBottom: '1rem',
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          letterSpacing: '-0.07rem',
          color: '#eeeeee',
          marginBottom: '0.3rem',
        }}
        className="flex w-full pb-8  text-14px tracking-tight text-gray-r454545"
      >
        <div
          style={{
            fontSize: '2.625rem',
            // marginLeft: smallCard ? '11rem' : '2rem',
            marginLeft: smallCard ? '11rem' : '2rem',
            flexShrink: 0,
            fontWeight: 'bold'
          }}
        >
          회차
        </div>
        <div
          style={{
            fontSize: '2.625rem',
            marginLeft: smallCard ? '13.5rem' : '11.5rem',
            flexShrink: 0,
            fontWeight: 'bold'
          }}
        >
          승(홈)
        </div>
        <div
          style={{
            fontSize: '2.625rem',
            marginLeft: smallCard ? '12.25rem' : '14rem',
            flexShrink: 0,
            fontWeight: 'bold'
          }}
        >
          VS
        </div>
        <div
          style={{
            fontSize: '2.625rem',
            marginLeft: smallCard ? '9rem' : '13rem',
            flexShrink: 0,
            fontWeight: 'bold'
          }}
        >
          패(원정)
        </div>
      </div>
    );
  else
    return (
      <div
        style={{
          background: 'linear-gradient(to right,#9d3bbb, #5423a0 )',
          borderTopLeftRadius: '1.875rem',
          borderTopRightRadius: '1.875rem',
          // paddingTop: smallCard ? '1.69rem' : '1.688rem',
          // paddingBottom: '1.238rem',
          paddingTop: smallCard ? '1.99rem' : isPowerLadder ? '1.788rem' : '1.688rem',
          paddingBottom: isPowerLadder ? '0.838rem' : '0.938rem',
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
          paddingRight: isCompose
            ? '2.4rem'
            : isFreeboard
            ? '2.2rem'
            : smallCard
            ? '1.8rem'
            : '2rem',
          // letterSpacing: '-0.07rem',
          letterSpacing : '-.015em',
          color: 'rgb(204, 194, 182)',
          marginBottom: smallCard ? '' : '0.3rem',
        }}
        className="flex w-full pb-8 text-14px tracking-tight text-gray-r454545 small-radius"
      >
        <div
          style={{
            color: '#ffffff',
            fontSize: '2.625rem',
            marginLeft: 
            isCompose
              ? '2rem'
              : isFreeboard
              ? '2rem'
              : smallCard
              ? ''
              : '',
            fontWeight: 'bold',
            marginTop: '-0.626rem',
            // marginRight: isSportsResult? '-2rem': '-1.813rem',
            marginRight: isSportsResult? '-1.7rem': isCompose ? '1.5rem' : smallCard ? '0.8rem' : isPowerLadder ? '0.3rem' : '0.0rem',
          }}
          className="h-full flex items-center justify-end"
        >
          승(홈)
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: '2.625rem',
            marginLeft: 
            isCompose
              ? '13.7rem'
              : isFreeboard
              // ? '13.5rem'
              ? '12.0rem'
              : smallCard
              // ? '13.5rem'
              ? '11.5rem'
              : middleText === 'VS'
              // ? '13.75rem'
              ? '13.00rem'
              : '15.7rem',
            fontWeight: 'bold',
            marginTop: '-1.064rem',
            // marginRight: isSportsResult?'-2.25rem':'-1.25rem',
            marginRight: isSportsResult?'-3.25rem': isCompose ? '1rem' : smallCard ? '0.3rem' : isPowerLadder ? '-0.45rem' : '-1.25rem',
          }}
          className="h-full flex items-center justify-end"
        >
          {middleText}
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: '2.625rem',
            marginLeft: 
            isSportsResult?
            '16.5rem'
            :isCompose
              ? '12.5rem'
              : isFreeboard
              // ? '12.2rem'
              ? '12.0rem'
              : smallCard
              // ? '13.2rem'
              ? '12.2rem'
              // : '14.388rem',
              : '13.1rem',
            fontWeight: 'bold',
            marginTop: '-0.626rem',
            // marginRight: '-1.188rem',
            marginRight: isFreeboard ? '-0.788rem' : '-1.588rem',
          }}
          className="h-full flex items-center justify-end"
        >
          패(원정)
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: '2.625rem',
            marginLeft: 
            isSportsResult?
            '11rem'
            :isCompose
              ? '9rem'
              : isFreeboard
              ? '8.8rem'
              : smallCard
              ? '10rem'
              : isPowerLadder 
              // ? '9rem'
              ? '9.5rem'
              : '10rem',
            fontWeight: 'bold',
            marginTop: '-1.001rem',
            // marginRight: isSportsResult?'0.5rem':''
            marginRight: isSportsResult?'0.5rem':'0.5rem'
          }}
          className="h-full flex items-center justify-end"
        >
          결과
        </div>
      </div>
    );
};

export default TableHeader;
