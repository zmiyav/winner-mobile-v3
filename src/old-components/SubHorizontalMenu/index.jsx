import React, { useState } from 'react'
import horizontalsScroll from '../../utils/horizontalsScroll';

const SubHorizontalMenu = ({
    itemsArray,
    isState = 0,
    setState
}) => {

    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
        return items.map((item, index) => {
            // TODO: remove this
            let imageWidth = '4.81rem'
            if (index === 2) {
                imageWidth = '12.2rem';
            } else if (index === 3) {
                imageWidth = '17rem'
            } else if (index === 4) {
                imageWidth = '15rem'
            } else if (index === 5) {
                imageWidth = '15rem'
            } else if (index === 6) {
                imageWidth = '15rem'
            } else if (index >= 1) {
                imageWidth = '19rem';
            }

            return (
                <button
                    id={`t-sub${index}`}
                    style={{
                        borderRadius: "1.625rem",
                        width: '20.81rem',
                        height: '11.18rem',
                        marginRight: items.length - 1 === index ? '1.875rem' : '0.9375rem',
                    }}
                    key={item.id}
                    className={`${isState === item.id
                        ? "bg-d0e8ff"
                        : "bg-white"
                        } overflow-hidden flex items-end`}

                    onPointerDown={() => setHover(item.id)}
                    onPointerUp={() => {
                        setState(item.id)
                        horizontalsScroll(itemsArray, 't-sub', 'scroll-wrapper1', index)
                    }}
                    onPointerOut={() => setHover(null)}
                    onPointerCancel={() => setHover(null)}
                >
                    <div
                        style={{
                            borderRadius: '1.625rem',
                            borderWidth: '0.1875rem',
                            background: isState === item.id
                                ? "#d0e8ff"
                                : isHover === item.id
                                    ? "#d0e8ff"
                                    : "#fff"
                        }}
                        className={`h-full w-full rounded-b-md rounded-t-lg flex flex-col items-center justify-center border-gray-b7b7b7`}
                    >
                        <img style={{ width: imageWidth, marginTop: '0.6rem', WebkitUserDrag: "none", MozUserDrag: "none", userDrag: "none", height: '6.5rem' }} className="ml-2px w-10 object-contain" src={item.icon} alt="" />
                        <div style={{ marginTop: '-0.45rem', height: '4.2rem' }} className='h-28 flex-shrink-0'>
                            <span className={`text-4xl tracking-tight text-gray-r7b7b7b ${item.custom}`} >{item.text}</span>
                        </div>
                    </div>
                </button>
            )
        });
    }

    return (
        <div id="container" className="flex justify-start items-start">
            <TabsList items={itemsArray} />
        </div>
    );
}

export default SubHorizontalMenu;
