import React from 'react';

const PowerballResultsTable = ({ array, checkedState, setCheckedState }) => {
  function InboxList({ items }) {
    return items?.map((item) => (
      <div
        key={item.id}
        style={{
          height: item.id !== 5 ? '12.1rem' : '11.725rem',
          background: item.id % 2 === 0 ? '#ffffff' : '#f7f7f7',
          display: 'flex',
          alignItems: 'center',
          borderBottom: item.id !== 5 ? '0.1875rem solid #dddddd' : '',
        }}
        className={`
                    } flex  text-14px tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd group`}
      >
        <div
          style={{
            paddingLeft: '0',
            marginLeft: '1.3rem',
            marginTop: '0.4rem',
          }}
          className="flex items-center  tracking-tight text-gray-r454545 h-full"
        >
          <div
            style={{
              fontSize: '2.625rem',
              display: 'flex',
              alignItems: 'center',
              color: '#444444',
              // letterSpacing: '-0.07rem',
              letterSpacing: '-0.015em',
              textAlign: 'center',
            }}
            className="w-full h-full flex first-letter:space-x-12 items-center text-gray-585858 "
          >
            <p
              style={{ maxWidth: '15rem', fontSize: '2.625rem' }}
              className="group-hover:text-gray-r7b7b7b text-4xl text-center  flex-shrink-0 leading-tight"
            >
              {item.time}
            </p>
            <p
              style={{
                maxWidth: '20rem',
                fontSize: '2.625rem',
                marginLeft: '7rem',
              }}
              className="group-hover:text-gray-r7b7b7b text-4xl  text-center flex-shrink-0 leading-tight"
            >
              {item.num}
            </p>
            <p
              style={{
                maxWidth: '15rem',
                // color: '#4c98ff',
                color: '#0072bc',
                fontWeight: 'bold',
                fontSize: '2.625rem',
                marginLeft: '9.2rem',
                textAlign: 'center',
              }}
              className="text-4xl  text-center flex-shrink-0 leading-tight"
            >
              {item.results}
            </p>
            <p
              style={{
                maxWidth: '20rem',
                fontSize: '2.625rem',
                marginLeft: '8.8rem',
                fontWeight: 'bold',
              }}
              className="group-hover:text-gray-r7b7b7b text-4xl  text-center flex-shrink-0 leading-tight"
            >
              {item.ratio}
            </p>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div
      style={{ borderRadius: '1em' }}
      className="w-full shadow-subNavbar overflow-hidden"
    >
      <InboxList items={array} />
    </div>
  );
};

export default PowerballResultsTable;
