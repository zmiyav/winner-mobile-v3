import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Pagination from '../Pagination'
import CouponGiftPopup from '../popups/CouponGiftPopup'
import HorizontalMenu1 from '../HorizontalMenu1'
import PopupControls from '../popups/PopupControls'
import HomePageTopBanner from '../HomePageTopBanner';
import HistoryTable from '../HistoryTable'
import couponActive from '../../../assets/coupon/coupon-bg-v3.png'
import couponInActive from '../../../assets/coupon/coupon-bg-inactive-v3.png'

import Icon1 from '../../../assets/coupon/coupon1-v3.png'
import Icon2 from '../../../assets/coupon/coupon2-v3.png'
import Icon3 from '../../../assets/coupon/coupon3-v3.png'
import Icon1Active from '../../../assets/coupon/coupon1-active-v3.png'
import Icon2Active from '../../../assets/coupon/coupon2-active-v3.png'
import Icon3Active from '../../../assets/coupon/coupon3-active-v3.png'

import FixedMenu from '../../FixedMenu'
import Header from '../../Header'
import NoticeBanner from '../../MainPage/NoticeBanner';
import './_couponUsage.scss'

const tableData = [
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 처리상태: "사용가능" },
        },
        {
            0: { 발급일: "2021-06-30" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#c65337'
        }
    ],
]

const giftsTableData = [
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#f04281',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#f04281',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#f04281',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#f04281',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#f04281',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#f04281',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#f04281',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#f04281',
            buttonText: '사용 가능'
        }
    ],
]

const historyTableData = [
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            // 0: { textColor: 'red' }
        },
        {
            buttonColor: '#f04281',
            buttonText: '사용 가능',
            // textColor: 'red'

        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#1c92df',
            buttonText: '사용 완료',
            textColor: '#ffffff'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#999999',
            buttonText: '기간 만료',
            textColor: '#ffffff'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#00a651',
            buttonText: '회수 쿠폰',
            textColor: '#ffffff',
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#f04281',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#f04281',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#f04281',
            buttonText: '사용 가능'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 보낸회원아이디: "eric123" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#f04281',
            buttonText: '사용 가능'
        }
    ],
]

const sentHistoryTableData = [
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#5d659f',
            buttonText: '선물 완료',
            textColor: '#ffffff'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#5d659f',
            buttonText: '선물 완료',
            textColor: '#ffffff'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#5d659f',
            buttonText: '선물 완료',
            textColor: '#ffffff'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#5d659f',
            buttonText: '선물 완료',
            textColor: '#ffffff'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#5d659f',
            buttonText: '선물 완료',
            textColor: '#ffffff'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#5d659f',
            buttonText: '선물 완료',
            textColor: '#ffffff'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#5d659f',
            buttonText: '선물 완료',
            textColor: '#ffffff'
        }
    ],
    [
        {
            0: { 쿠폰명: '테스트쿠폰' },
        },
        {
            0: { 쿠폰금액: "5,000" }
        },
        {
            0: { 받는회원아이디: "eric123" },
        },
        {
            0: { 보낸일시: "2021-06-29 15:45" },
        },
        {
            0: { 발급일: "2021-06-29" },
        },
        {
            0: { 만료일: "2021-07-29" },
        },
        {
            buttonColor: '#5d659f',
            buttonText: '선물 완료',
            textColor: '#ffffff'
        }
    ],
]

const HistoryMenu = ({
    itemsArray,
    setSelectedTab,
    setSelectedSubTab = null
}) => {
    const navigate = useNavigate();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)
    console.log(isHover)

    function TabsList({ items }) {
        return items.map((item, index) => {
            let isActive = pathname === item.path
            if (item.path.includes('/cscenter/all/policy/sportsgame')) {
                isActive = true
            }
            return (
                <>
                <div className={`${isActive
                        ? "bg-blue-r0056a6"
                        : "bg-white border border-gray-b7b7b7"
                        } w-1/2 rounded-full`}
                    style={{ background: isActive ? 'linear-gradient(to top,#4f3a7a,#cb78e6)' : 'linear-gradient(to top,#4f3a7a,#f0d3ff)', boxShadow: "0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.6)" , width: '49.2%', borderRadius: '4rem', marginTop: '1rem', height: '6.375rem', fontSize: '2.8125rem', marginRight: `${!index ? '1.15rem' : ''}`, letterSpacing: '-0.07rem', padding: "0.188rem" }}>
                <button
                    className={`${isActive
                        ? "bg-blue-r0056a6"
                        : "bg-white border border-gray-b7b7b7"
                        } w-1/2 rounded-full`}
                    // style={{ background: isActive ? 'linear-gradient(to top,#491f9c,#9e3cbc)' : 'linear-gradient(to top,#ccc4ff,#ffd9f5)', color: isActive ? '#ffffff' : '#2d2834', width: '100%', borderRadius: '4rem', height: '100%', fontSize: '2.8125rem', marginRight: `${!index ? '1.15rem' : ''}`, letterSpacing: '-0.07rem' }}
                    style={{ background: isActive ? 'linear-gradient(to top,#491f9c,#9e3cbc)' : 'linear-gradient(to top,#ccc4ff,#ffd9f5)', color: isActive ? '#ffffff' : '#2d2834', width: '100%', borderRadius: '4rem', height: '100%', fontSize: '2.8125rem', marginRight: `${!index ? '1.15rem' : ''}`, letterSpacing: '-0.1em', fontWeight: 'bold' }}
                    key={item.id}

                    onPointerDown={() => setHover(item.id)}
                    onPointerUp={() => {
                        navigate(item.path)
                        setSelectedTab(item.id)
                        if (setSelectedSubTab !== null) {
                            setSelectedSubTab(0)
                        }
                    }}
                    onPointerOut={() => setHover(null)}
                    onPointerCancel={() => setHover(null)}
                >
                    <div >
                        <div className='mt-2' style={{ marginRight: '-0.2rem', paddingTop: '0.3rem' }}>
                            <span
                                className={`${isActive
                                    ? "text-white"
                                    : "text-gray-r7b7b7b"
                                    }`}
                            >{item.text}</span>
                        </div>
                    </div>
                </button>
                </div>
                </>
            )
        });
    }

    return (
        <div style={{display: "flex"}} className="flex w-full">
            <TabsList items={itemsArray} />
        </div>
    )
}


const GiftButton = (
    <div className='button-class-div shadow-to-box'>
        <button className='button-class hover'>
            <div style={{ marginTop: '0.2rem' }}>
                <span className='shadow-to-text'>쿠폰선물하기</span>
            </div>
        </button>
    </div>
)


const CouponUsage = ({ isAuthenticated, setAuthenticated, subActiveButton, setSubActiveButton }) => {
    // const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [checkedState, setCheckedState] = useState(new Array(8).fill(false))

    const CouponTitle = ({ text = '사용 가능한 쿠폰', number = '10', numberColor = '#ff6ea3' }) => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: "2.6rem" }}>
                <div style={{
                    // fontSize: '2.625rem', color: '#ffffff', marginLeft: '0rem', letterSpacing: '-0.15rem'
                    fontSize: '2.625rem', color: '#ffffff', marginLeft: '0rem', letterSpacing: '-0.025em'
                }}>
                    <span>{text} </span>
                    {/* <span style={{ color: numberColor }}>{number}</span> */}
                    <span style={{ color: numberColor, fontWeight: 'bold' }}>{number}</span>
                    <span>장</span>
                </div>
            </div>
        )
    }

    const [page, setPage] = useState(0)
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedTab1, setSelectedTab1] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)

    console.log(selectedTab, selectedSubTab)

    const tabsArray = [
        { text: "쿠폰사용", icon: Icon1, activeIcon: Icon1Active, id: 0, path: "/mypage/coupon/all", activeBG: couponActive, inActiveBG: couponInActive, width: '7.875rem' },
        { text: "쿠폰선물", icon: Icon2, activeIcon: Icon2Active, id: 1, path: "/mypage/coupon/all/coupon-gift", activeBG: couponActive , inActiveBG: couponInActive, width: '7.875rem' },
        { text: "쿠폰내역", icon: Icon3, activeIcon: Icon3Active, id: 2, path: "/mypage/coupon/all/coupon-history", hasSameParent: true, activeBG: couponActive , inActiveBG: couponInActive, width: '7.875rem' },
    ];

    // const LeftMenuSubArray = [
    //     {
    //         text: "쿠폰사용",
    //         icon: subIcon1,
    //         id: 0,
    //         path: "/mypage/coupon/all",
    //         width: '9.9375rem'
    //     },
    //     {
    //         text: "쿠폰선물",
    //         icon: subIcon2,
    //         id: 1,
    //         path: "/mypage/coupon/all/coupon-gift",
    //         width: '9.9375rem'
    //     },
    //     {
    //         text: "쿠폰내역",
    //         icon: subIcon3,
    //         id: 2,
    //         path: "/mypage/coupon/all/coupon-history",
    //         width: '9.9375rem'
    //     }
    // ]

    const historyTabsArray = [
        { text: "쿠폰발급내역", icon: Icon1, id: 0, path: "/mypage/coupon/all/coupon-history" },
        { text: "쿠폰선물내역", icon: Icon2, id: 1, path: "/mypage/coupon/all/coupon-history/sent" }
    ]

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
    //                     array={LeftMenuSubArray}
    //                     subActiveButton={subActiveButton}
    //                 />
    //             </div>
    //             <div className="w-full flex justify-center mb-40" style={{ display: 'flex', justifyContent: 'center', marginLeft: '0.2rem', paddingBottom: '5rem' }}>
    //                 <img style={{ width: '20.375rem' }} className="object-contain" src={Logo} alt="logo" />
    //             </div>
    //         </>
    //     )
    // }


    const Usage = () => {
        //!- this occurs error (empty page)
        // useEffect(() => {
        //     window.onpopstate = e => {

        //         setTimeout(() => {
        //             navigate('/mypage/coupon/all')
        //             setSubActiveButton('/mypage/coupon/all')
        //         }, 0)
        //     }

        //     return (() => {
        //         setSubActiveButton('/mypage/coupon/all')
        //     })
        // }, [])
        return (
            <>
                <div style={{ marginBottom: '-0.8125rem' }}>
                    <CouponTitle text='사용 가능한 쿠폰' number='10' />
                </div>
                <div className="">
                    <HistoryTable
                        tableData={tableData}
                        wideDetailButton
                        hasLeftInput={false}
                        isCouponUsage={true}
                        containerBackground='#f7f9fc'
                        wrapButtonText
                        checkedState={checkedState}
                        setCheckedState={setCheckedState}
                        isPopupOpen={isPopupOpen}
                        setPopupOpen={setPopupOpen}
                        cardHeight='25.3125rem'
                        isButtonGradient={false}
                        inlineText
                        isCoupon
                    />
                </div>
                <div style={{ marginTop: '1.875rem', paddingBottom: '0.01rem' }}>
                    <Pagination page={page} setPage={setPage} />
                </div>
                <FixedMenu
        selectedTab={selectedTab1}
        setSelectedTab={setSelectedTab1}
      />         

            </>
        )
    }

    const Gift = () => {
        // useEffect(() => {
        //     window.onpopstate = e => {
        //         setTimeout(() => {
        //             navigate('/mypage/coupon')
        //             setSubActiveButton('/mypage/coupon/all/coupon-gift')
        //         }, 0)
        //     }
        //     return (() => {
        //         setSubActiveButton('/mypage/coupon/all/coupon-gift')
        //     })
        // }, [])

        return (
            <div className='coupon-all'>

                <div style={{
                    marginBottom: '-0.8125rem',
                    marginTop: '2.6rem',
                    letterSpacing: '-0.07rem',
                    marginLeft: '-0.7rem',
                }}>
                    <CouponTitle text='선물 가능한 쿠폰' number='7' />
                </div>
                <HistoryTable
                    containerBackground='#f7f9fc'
                    wrapButtonText
                    tableData={giftsTableData}
                    checkedState={checkedState}
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='25.3125rem'
                    isButtonGradient={false}
                    isCoupon
                    isGift
                />
                <div style={{ marginBottom: '2.9375rem', textAlign: 'center', letterSpacing: '-0.07rem', color: '#ffffff', marginTop: '3.7rem' }} className='mt-4'>
                    <p className='text-gray-r7c7c7c text-center' style={{ fontSize: '2.625rem', letterSpacing: '-0.025em' }}>
                        {/* <span className='text-blue-r0056a6' style={{ color: '#ffd98b' }}>쿠폰선물하기</span> 버튼을 클릭하여 쿠폰받을 회원을 선택하세요. */}
                        <span className='text-blue-r0056a6' style={{ color: '#ffd98b', letterSpacing: '-0.025em', fontWeight: 'bold' }}>쿠폰선물하기</span> 버튼을 클릭하여 쿠폰받을 회원을 선택하세요.
                    </p>
                </div>
                <div className="popup-style">
                    <PopupControls buttonChild={GiftButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                        <CouponGiftPopup setPopupOpen={setPopupOpen} />
                    </PopupControls>
                </div>
                <div style={{ marginTop: '3.86rem', paddingBottom: '0.1rem' }}>
                    <Pagination page={page} setPage={setPage} />
                </div>
                <FixedMenu
        selectedTab={selectedTab1}
        setSelectedTab={setSelectedTab1}
      />         
            </div>
        )
    }
    const History = () => {

        // useEffect(() => {
        //     window.onpopstate = e => {
        //         setTimeout(() => {
        //             navigate('/mypage/coupon/all')
        //             setSubActiveButton('/mypage/coupon/all/coupon-history')
        //         }, 0)
        //     }
        //     return (() => {
        //         setSubActiveButton('/mypage/coupon/all/coupon-history')
        //     })
        // }, [])

        return (
            <>
                <div style={{ margin: '1.875rem', marginTop: '0.5rem', marginBottom: '0' }}>
                    <HistoryMenu itemsArray={historyTabsArray} setSelectedTab={setSelectedTab} />
                </div>

                <div style={{ marginBottom: '-0.8125rem', display: 'flex', justifyContent: 'center' }} >
                    <CouponTitle text='사용가능' number='32' />
                    {/* <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3.3rem 0.9375rem 0', background: '#555555' }}></div> */}
                    <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3.3rem 0.9375rem 0', background: '#ebabff' }}></div>
                    <CouponTitle text='사용완료' number='8' numberColor='#33a1e9' />
                    {/* <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3.3rem 0.9375rem 0', background: '#555555' }}></div> */}
                    <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3.3rem 0.9375rem 0', background: '#ebabff' }}></div>
                    <CouponTitle text='기간만료' number='0' numberColor='#aaaaaa' />
                    {/* <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3.3rem 0.9375rem 0', background: '#555555' }}></div> */}
                    <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3.3rem 0.9375rem 0', background: '#ebabff' }}></div>
                    <CouponTitle text='회수된쿠폰' number='0' numberColor='#00a651' />
                </div>
                <div className="">
                    <HistoryTable
                        containerBackground='#f7f9fc'
                        wrapButtonText
                        tableData={historyTableData}
                        checkedState={checkedState}
                        hasLeftInput={false}
                        setCheckedState={setCheckedState}
                        isPopupOpen={isPopupOpen}
                        setPopupOpen={setPopupOpen}
                        cardHeight='25.3125rem'
                        isButtonGradient={false}
                        isCoupon
                    />
                </div>
                <div style={{ marginTop: '1.875rem', paddingBottom: '0.01rem' }}>
                    <Pagination page={page} setPage={setPage} />
                </div>
                <FixedMenu
        selectedTab={selectedTab1}
        setSelectedTab={setSelectedTab1}
      />         
            </>
        )
    }

    return (
        <div style={{ maxWidth: '1242px' }}>
            <Routes>
                {/* <Route index element={<MyInfo />} /> */}
                <Route path="/all/*"
                    element={
                        <>
                            <div className="w-full z-30 flex flex-col items-center">
                                <Header />
                                <NoticeBanner />
                                <HomePageTopBanner pageTitle='쿠폰관리' />
                            </div>

                            <div>
                                <div className='coupon-usage' id='container-nav'>
                                    <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} isCouponPage='true' />
                                </div>

                                <div className="flex w-full">
                                    <div className="w-full">

                                        <Routes>
                                            <Route index element={<Usage />} />
                                            <Route exact path="/coupon-gift" element={<Gift />} />
                                            <Route path='/coupon-history' element={<History />} />
                                            <Route
                                                path='/coupon-history/sent'
                                                element={
                                                    <>
                                                        <div style={{ margin: '1.875rem', marginTop: '0.5rem', marginBottom: '0' }}>
                                                            <HistoryMenu itemsArray={historyTabsArray} setSelectedTab={setSelectedTab} />
                                                        </div>

                                                        <div style={{ marginBottom: '-0.8125rem', display: 'flex', justifyContent: 'center' }} className='mt-4 flex justify-center'>
                                                            {/* <CouponTitle text='사용가능' number='32' />
                                                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3.3rem 0.9375rem 0', background: '#555555' }}></div>
                                                            <CouponTitle text='사용완료' number='8' numberColor='#4c98ff' />
                                                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3.3rem 0.9375rem 0', background: '#555555' }}></div>
                                                            <CouponTitle text='기간만료' number='0' numberColor='#ffffff' />
                                                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3.3rem 0.9375rem 0', background: '#555555' }}></div>
                                                            <CouponTitle text='회수된쿠폰' number='0' numberColor='#4aca68' /> */}
                                                            <CouponTitle text='사용가능' number='32' />
                                                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3.3rem 0.9375rem 0', background: '#ebabff' }}></div>
                                                            <CouponTitle text='사용완료' number='8' numberColor='#4c98ff' />
                                                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3.3rem 0.9375rem 0', background: '#ebabff' }}></div>
                                                            <CouponTitle text='기간만료' number='0' numberColor='#aaaaaa' />
                                                            <div style={{ height: '1.75rem', width: '0.1875rem', margin: '3.3rem 0.9375rem 0', background: '#ebabff' }}></div>
                                                            <CouponTitle text='회수된쿠폰' number='0' numberColor='#00a651' />
                                                        </div>
                                                        <div className="">
                                                            <HistoryTable
                                                                containerBackground='#f7f9fc'
                                                                wrapButtonText
                                                                tableData={sentHistoryTableData}
                                                                hasLeftInput={false}
                                                                checkedState={checkedState}
                                                                setCheckedState={setCheckedState}
                                                                isPopupOpen={isPopupOpen}
                                                                setPopupOpen={setPopupOpen}
                                                                cardHeight='29.5rem'
                                                                isButtonGradient={false}
                                                                isCoupon
                                                            />
                                                        </div>
                                                        <div style={{ marginTop: '1.875rem', paddingBottom: '0.01rem' }}>
                                                            <Pagination page={page} setPage={setPage} />
                                                        </div>
                                                        <FixedMenu
        selectedTab={selectedTab1}
        setSelectedTab={setSelectedTab1}
      />         
                                                    </>
                                                }
                                            ></Route>
                                        </Routes>
                                    </div>
                                </div>

                            </div>
                        </>
                    }
                >
                </Route>
            </Routes>
        </div>
    )
}

export default CouponUsage
