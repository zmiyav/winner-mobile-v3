/* eslint-disable */
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import WinnerSmall from '../../assets/images/header/logo.png'
import Sample from '../../assets/myPage/freeboard/sample.png'
import Rank1 from '../../assets/myPage/freeboard/1.png';
import Rank2 from '../../assets/myPage/freeboard/2.png';
import Rank3 from '../../assets/myPage/freeboard/3.png';
import Rank4 from '../../assets/myPage/freeboard/4.png';
import Rank5 from '../../assets/myPage/freeboard/5.png';
import ReplyArrow from '../../assets/myPage/freeboard/reply.png'

import './_freeBoardView.scss';

const FreeBoardView = ({activeButton, setActiveButton}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) : str;
    }
    
    const SendMessage = ({ placeholder, buttonText }) => {
        return (
            <div style={{ height: "17.4375rem", borderRadius: "1.625rem", marginTop: '-0.4rem', fontSize: '2.8125rem', borderWidth: '0.1875rem', display: 'flex', position: 'relative' }} className="relative flex w-full bg-white border border-gray-dddddd overflow-hidden">

                <textarea
                    // style={{ border: '1px solid #8d8d8d', width: "60.9375rem", padding: '3.3rem 4rem 3.5625rem 3.89rem', resize: "none", lineHeight: '1.32', borderRadius: '0.7rem', background: '#ffffff', fontSize: '2.5rem', color: '#aaaaaa'}}
                    style={{ border: '1px solid #8d8d8d', width: "60.9375rem", padding: '3.3rem 4rem 3.5625rem 3.89rem', resize: "none", lineHeight: '1.32', borderRadius: '0.7rem', background: '#ffffff', fontSize: '2.5rem', color: '#444444', letterSpacing: '0'}}
                    className="place-color-grey overflow-hidden outline-none w-full tracking-tight placeholder-gray-r8f8f8f"
                    placeholder={placeholder}
                    onFocus={() => {
                        // const menu = document.querySelector('#main-menu');
                        // menu.style.marginBottom = '-14.075rem'
                    }}
                    onBlur={() => {
                        // const menu = document.querySelector('#main-menu');
                        // menu.style.marginBottom = '0'
                    }}
                />

                <button style={{ borderRadius: "0.625rem", width: '10.5625rem', padding: '0.1875rem', position: 'absolute', right: '0', height: '100%', background: '#6970a3', boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)' }} className="hover">
                    <div style={{ width: '100%', height: '100%', background: '#5d659f', borderRadius: "0.625rem", color: '#d6f3ff', fontSize: '2.811875rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ borderRadius: "1.625rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="flex items-center justify-center h-full w-full bg-black rounded-xl border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                            <span className="tracking-tight text-white shadow-text-myPage" style={{ letterSpacing: '-0.025em' }}>{buttonText}</span>
                        </div>
                    </div>
                </button>
            </div>
        )
    }

    const ReplyCell = ({
        text = "이벤트 참여 감사합니다.",
        rank = 1,
        username = "쇼유",
        isEdit = false,
        tag = null,
        isOneButton = false
    }) => (
        <div style={{ paddingTop: '0.451rem' }} className="w-full">
            <div style={{ minHeight: '5.8rem', display: 'flex', alignItems: 'flex-start',letterSpacing: '-0.07rem' }}>
                <img style={{ width: '2.25625rem', height: '2.25625rem', marginRight: '1.65rem', marginLeft: '-0.2rem', marginTop: '3.1rem' }} src={ReplyArrow} alt="" />
                <img style={{ width: '3.825rem', height: '4.6375rem', marginRight: '0.6125rem', marginTop: '2rem' }} src={rank === 1 ? Rank1 : rank === 2 ? Rank2 : rank === 3 ? Rank3 : rank === 4 ? Rank4 : Rank5} alt="" />
                <p style={{ fontSize: '2.624375rem', color: '#666666', fontWeight: '600' }}>{username}</p>
                <div style={{ height: '1.75rem', width: '0.1875rem', marginLeft: '1.1rem', marginRight: '1.1rem', marginTop: '3.3rem', background: '#999999' }}></div>
                <p style={{ fontSize: '2.25rem', color: '#929292', marginTop: '2.7rem', flexShrink: 0 }}>2021.06.28 15:36</p>
            </div>
            <div style={{ marginLeft: '3.8rem', minHeight: '8.625rem', borderRadius: '0.8rem', width: '66.15rem', background: '#ffffff', border: '1px solid #bbbbbb' }} className="">
                <div style={{ borderRadius: "1.625rem", fontSize: '2.8125rem', paddingLeft: '3.6625rem', paddingRight: '3.6625rem', borderWidth: '0.1875rem', display: 'flex', paddingBottom: '2rem', }} className="h-full w-full bg-white border border-gray-dddddd flex items-center justify-between">
                    <div className="flex" style={{ display: '', marginTop: '2.2rem', color: '#989898' }}>
                        {tag && (<span style={{ fontSize: '2.8125rem', color: '#4c98ff', marginRight: '0.8rem', flexShrink: '0', fontWeight: '600' }} className="text-blue-r0056a6 mr-4">@{truncate(tag, 6, 6)}</span>)}
                        {text}
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '1.1rem', marginLeft: '3.8rem', display: 'flex', marginBottom: '-0.2rem' }} className='flex'>
                {/* <button style={{ borderRadius: "0.8rem", width: '9.2rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.55rem', color: '#ffffff', paddingTop: '0.2rem', letterSpacing: '-0.07rem', border: 'none', boxShadow:'0 2px 3px rgba(0, 0, 0, 0.3)' }} className={`${isOneButton ? 'reply-color hover flex justify-center align-center rounded-lg' : 'edit-color hover flex justify-center align-center rounded-lg' }`}> */}
                <button style={{ borderRadius: "0.8rem", width: '9.2rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.55rem', color: '#ffffff', paddingTop: '0.2rem', letterSpacing: '-0.025em', border: 'none', boxShadow:'0 2px 3px rgba(0, 0, 0, 0.3)' }} className={`${isOneButton ? 'reply-color hover flex justify-center align-center rounded-lg' : 'edit-color hover flex justify-center align-center rounded-lg' }`}>
                    <div className={`${isOneButton ? "text-gray-r7b7b7b" : "text-red-d52e2e"} flex items-center justify-center mt-2`}>{isOneButton ? "답글" : "수정"}</div>
                </button>
                {!isOneButton && (
                    <div style={{ borderRadius: "0.8rem", width: '9.26rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.55rem', background: 'linear-gradient(to right, rgb(255, 119, 96), rgb(241, 74, 83))', paddingTop: '0.2rem', letterSpacing: '-0.07rem', border: 'none', boxShadow:'0 2px 3px rgba(0, 0, 0, 0.3)' }} className='hover flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                        <div className="text-red-d52e2e flex items-center justify-center mt-1.5" style={{ color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>삭제</div>
                    </div>
                )}
            </div>
        </div>
    )

    return (
        <div className="freeboard-view">
            <div className="border-div">
                <div className='content' >
                    <div className="first-card" style={{ width: '100%' }}>
                        <div className='buttons' >
                            <div
                                className="button"
                                style={{
                                    maxWidth: '17.5rem',
                                    overflow: 'hidden',
                                    lineHeight: '3.3rem'
                                }}
                            >
                                <span>{truncate('공지', 6, 6)}</span>
                            </div>
                            <div
                                style={{
                                    backgroundColor: "#714ce8", maxWidth: '17.5rem',
                                    overflow: 'hidden',
                                    lineHeight: '3.3rem'
                                }}
                                className="button"
                            >
                                <span>{truncate('이벤트', 6, 6)}</span>
                            </div>
                        </div>
                        <div className="text">메신저 고객센터 사칭주의</div>
                    </div>

                    <div className="second-card" style={{ width: '100%' }}>
                        <img src={WinnerSmall} alt="" />
                        <div
                            className='comment-container'
                            style={{backgroundColor: '#ffffff'}}>
                            <div className="comment">댓글</div>
                            <div className="num-2">2</div>
                        </div>
                    </div>

                    <div style={{ paddingTop: '5.625rem' }} className="bg-white pb-8">

                        <div style={{ padding: '0 1.7rem' }} className="w-full flex justify-center">
                            <img src={Sample} alt="" style={{ width: '70.1875rem', height: 'auto' }} />
                        </div>

                        <div style={{ fontSize: '2.8125rem', padding: '1.8125rem 1.875rem' }}>
                            <div style={{ fontSize: '2.811875rem', letterSpacing: '0', lineHeight: '1.8', marginTop: '-0.5rem', color: '#666666' }}>이벤트 중 주간 낙첨 포인트 지급은 21년 6월 7일 이후 베팅건 부터 아래와 같이 적용됩니다.</div>
                            <div
                                style={{ color: "#c0392b", margin: '5.7rem 0', fontSize: '2.811875rem', letterSpacing: '0' }}
                                className="flex items-center tracking-tight">
                                [낙첨 금액별 쿠폰 금액]
                            </div>
                            <div style={{ marginTop: '6.6125rem', letterSpacing: '0' }} className="flex items-center tracking-tight text-gray-r585858">
                                10만원<span style={{ marginLeft: '0.6rem' }}>~</span> <span style={{ marginLeft: '2.2rem', letterSpacing: '0' }}>5,000 쿠폰</span>
                            </div>
                            <div style={{ marginTop: '1.5rem', letterSpacing: '0' }} className="flex items-center tracking-tight text-gray-r585858">
                                20만원 이상<span style={{ marginLeft: '2.8rem', marginRight: '1.1rem' }}>10,000</span>쿠폰
                            </div>
                            <div style={{ marginTop: '1.5rem', letterSpacing: '0' }} className="flex items-center tracking-tight text-gray-r585858">
                                30만원 이상<span style={{ marginLeft: '2.25rem', marginRight: '1.1rem' }}> 15,000</span>쿠폰
                            </div>
                            <div style={{ marginTop: '1.55rem', letterSpacing: '0' }} className="flex items-center tracking-tight text-gray-r585858">
                                50만원 이상<span style={{ marginLeft: '2.25rem', marginRight: '1.1rem' }}> 25,000</span>쿠폰
                            </div>
                            <div style={{ marginTop: '1.5rem', letterSpacing: '0' }} className="flex items-center tracking-tight text-gray-r585858">
                                100만원 이상<span style={{ marginLeft: '2.25rem', marginRight: '1.1rem' }}> 50,000</span>쿠폰
                            </div>
                            <div style={{ marginTop: '1.6rem', letterSpacing: '0' }} className="flex items-center tracking-tight text-gray-r585858">
                                300만원 이상<span style={{ marginLeft: '2.25rem', marginRight: '1.1rem' }}> 150,000</span>쿠폰
                            </div>
                            <div style={{ marginTop: '1.5rem', letterSpacing: '0' }} className="flex items-center tracking-tight text-gray-r585858">
                                500만원 이상<span style={{ marginLeft: '2.75rem', marginRight: '1.1rem' }}>낙첨액 5%</span>쿠폰
                            </div>

                            <div style={{ margin: '5.9rem 0 5.1rem', letterSpacing: '0', fontSize: '2.8rem', lineHeight: '1.8' }} className="flex items-center tracking-tight text-gray-r585858">
                                * 2021년 5월 31일 ~ 6월 6일 (일요일)까지 배팅 내역은화요일 낙첨금액 5% 쿠폰 발행되며,
                            </div>
                            <div style={{ marginBottom: '1.7rem' }}>
                                {/* <span style={{ color: "#2980b9", letterSpacing: '0', lineHeight: '1.8' }}>* 2021년 6월 7일 (월) 이후 베팅에 대한 낙첨쿠폰은 위 기준에 따라 제공<span style={{ letterSpacing: '-0.07rem', color: '#666666' }}>되오니 참고 부탁 드립니다.</span></span> */}
                                <span style={{ color: "#2980b9", letterSpacing: '0', lineHeight: '1.8' }}>* 2021년 6월 7일 (월) 이후 베팅에 대한 낙첨쿠폰은 위 기준에 따라 제공<span style={{ letterSpacing: '0', color: '#666666' }}>되오니 참고 부탁 드립니다.</span></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* TWO EDIT BUTTONS */}
            <div className="two-buttons">
                <button
                    className='hover shadow-box-myPage shadow-text-myPage'
                    style={{ background: 'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))' }}>
                    <div className='div-border'
                        style={{ background: 'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))' }}
                    >
                        <div className="text">
                            <span className="tracking-tight text-white">수정하기</span>
                        </div>
                    </div>
                </button>
                <button
                    className='hover shadow-box-myPage shadow-text-myPage'
                    style={{ background: 'linear-gradient(to right, rgb(255, 119, 96), rgb(241, 74, 83))' }}>
                    <div className='div-border' style={{ background: 'linear-gradient(to right, rgb(255, 119, 96), rgb(241, 74, 83))', color: '#ffffff' }}>
                        <div className="text">
                            <span className="tracking-tight text-white">삭제하기</span>
                        </div>
                    </div>
                </button>
            </div>

            {/* COMPOSE COMMENT */}
            <div style={{ borderRadius: "1.1875rem", padding: '0.1875rem', background: 'linear-gradient(to top,#513b7d, #9b56f1 50%, #cb78e6 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.3)' }} className="w-full bg-gray-fafafa shadow-subNavbar shadow-box-myPage">
                <div style={{ background: '#dfdbfa', padding: '0 1.5rem 1.6rem', width: '100%', height: '100%', borderRadius: "1.1875rem" }}>
                    <div className="flex items-center justify-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '0.6rem' }}>
                        <p style={{ fontSize: '2.624375rem', color: '#666666', marginTop: '2.8rem', letterSpacing: '-0.07rem' }} className="tracking-tight text-gray-r454545">댓글 작성하기</p>
                        <div style={{
                            padding: '0 1.5rem',
                            height: '4.4375rem',
                            fontSize: '2.4375rem',
                            display: 'flex',
                            marginRight: '-0.4rem',
                            marginLeft: '-3.9rem',
                            borderRadius: '2.4rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '0.1875rem solid #454545',
                            marginTop: '0.3rem',
                            background: '#ffffff'
                        }} className='flex justify-center mt-3 align-center rounded-full border-b border-gray-b7b7b7'>
                            {/* <div style={{ marginRVight: '0.8rem', marginTop: '0.1rem', color: '#666666' }} className="tracking-tight text-gray-r7b7b7b mt-1">댓글</div>
                            <div style={{ marginTop: '0.1rem', color: '#e65454', marginLeft: '-0.35rem' }}>2</div> */}
                            <div style={{ height: '4.4375rem', lineHeight: '4.4375rem', verticalAlign: 'bottom', marginRight: '0.8rem', color: '#666666' }} className="tracking-tight text-gray-r7b7b7b mt-1">댓글</div>
                            <div style={{ height: '4.4375rem', lineHeight: '4.4375rem', verticalAlign: 'bottom', color: '#e65454', marginLeft: '-0.35rem' }}>2</div>
                        </div>
                    </div>

                    <div style={{ paddingTop: '0.625rem' }}>
                        <SendMessage placeholder='욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다.' buttonText='등록' />
                    </div>
                </div>
            </div>

            {/* COMMENT SECTION */}
            <div style={{ borderRadius: "1.1875rem", marginTop: '3.75rem', padding: '0.1875rem', background: 'linear-gradient(to top,#513b7d, #9b56f1 50%, #cb78e6)' }} className="w-full bg-gray-fafafa shadow-subNavbar shadow-box-myPage ">
                <div style={{ width: '100%', height: '100%', background: '#dfdbfa', borderRadius: '1.1875rem', paddingBottom: '1.8rem' }}>
                    <div style={{ padding: '0 1.7rem', borderBottomWidth: '0.1875rem', background: '#dfdbfa', borderTopLeftRadius: "1.1875rem", borderTopRightRadius: "1.1875rem", borderBottom: '0.1875rem solid #b8b4d8', paddingBottom: '1rem' }} className="border-b border-gray-dddddd">
                        <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '0.3rem', minHeight: '9rem', letterSpacing: '-0.07rem' }}>
                            <img style={{ width: '3.450625rem', height: '4.436875rem', marginRight: '0.5625rem', marginLeft: '-0.3rem', marginTop: '2.6rem' }} src={Rank2} alt="" />
                            {/* <p style={{ fontSize: '2.624375rem', color: '#666666', paddingTop: '0.4rem' }}>신풍사우나</p> */}
                            <p style={{ fontSize: '2.624375rem', color: '#444444', paddingTop: '0.4rem', fontWeight: '600' }}>신풍사우나</p>
                            <div style={{ height: '1.75rem', width: '0.1875rem', marginLeft: '1.1rem', marginRight: '1.1rem', marginTop: '3.7rem', background: '#999999' }}></div>
                            {/* <p style={{ fontSize: '2.25rem', color: '#929292', marginTop: '3.2rem', flexShrink: 0 }}>2021.06.28 15:36</p> */}
                            <p style={{ fontSize: '2.25rem', color: '#444444', marginTop: '3.2rem', flexShrink: 0 }}>2021.06.28 15:36</p>
                        </div>

                        <div style={{ borderRadius: "0.8rem", minHeight: '8.5625rem', paddingBottom: '0.01rem', marginBottom: '1rem', border: '1px solid #bbbbbb', background: '#ffffff' }} className="w-full h-full bg-white border border-gray-dddddd flex items-center justify-between">
                            {/* <p style={{ fontSize: '2.8125rem', paddingLeft: '3.6875rem', paddingRight: '3.6875rem', color: '#989898' }}>두개의 이벤트 모두 참여하였습니다</p> */}
                            <p style={{ fontSize: '2.8125rem', paddingLeft: '3.6875rem', paddingRight: '3.6875rem', color: '#444444' }}>두개의 이벤트 모두 참여하였습니다</p>
                        </div>
                        <div style={{ marginLeft: '-0.2rem' }} className='flex'>
                            <button style={{ borderRadius: "0.8rem", width: '9.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.39rem', marginBottom: '0.95rem', background: 'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))', border: 'none', color: '#ffffff', boxShadow:'0 2px 3px rgba(0, 0, 0, 0.3)'}} className='hover flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                                <div className="text-red-d52e2e flex items-center justify-center mt-2" style={{ paddingLeft: '0.2rem', paddingTop: '0.2rem', letterSpacing: '-0.025em' }}>수정</div>
                            </button>
                            <button style={{ borderRadius: "0.8rem", width: '9.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', background: 'linear-gradient(to right, rgb(255, 119, 96), rgb(241, 74, 83))', border: 'none', color: '#ffffff', boxShadow:'0 2px 3px rgba(0, 0, 0, 0.3)'}} className='hover flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                                <div className="text-red-d52e2e flex items-center justify-center mt-2" style={{ paddingLeft: '0.2rem', paddingTop: '0.2rem', letterSpacing: '-0.025em' }}>삭제</div>
                            </button>
                        </div>
                    </div>

                    <div style={{ padding: '0 1.875rem' }}>
                        <ReplyCell rank={5} isOneButton={true} />
                        <ReplyCell rank={2} username="신풍사우나" isEdit={true} text="오전에 발행되나요?" tag="쇼유쇼유쇼유쇼유쇼유" />
                    </div>
                </div>
            </div>
            <div style={{ borderRadius: "1.1875rem", marginTop: '3.75rem', padding: '0.1875rem', background: 'linear-gradient(to top,#513b7d, #9b56f1 50%, #cb78e6 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.3)' }}>
                <div style={{ borderRadius: "1.1875rem", marginTop: '', padding: '0.1875rem', paddingTop: '2.07rem', background: '#dfdbfa'}} className="w-full bg-gray-fafafa shadow-subNavbar">
                    <div style={{ padding: '0 1.5rem', borderBottomWidth: '0.1875rem', borderBottom: '0.1875rem solid #b8b4d8', paddingBottom: '1rem' }}>

                        <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '0.3rem', minHeight: '4.8rem', letterSpacing: '-0.07rem' }}>
                            <img style={{ width: '3.450625rem', marginRight: '0.5625rem', marginLeft: '-0.3rem', marginTop: '0.2rem' }} src={Rank2} alt="" />
                            <span style={{ fontSize: '2.624375rem', color: '#666666', marginTop: '0.8rem', fontWeight: '600' }}>신풍사우나</span>
                            <div style={{ height: '1.75rem', width: '0.1875rem', marginLeft: '1.1rem', marginRight: '1.1rem', background: '#999999', marginTop: '1.4rem' }}></div>
                            {/* <span style={{ fontSize: '2.25rem', color: '#929292', marginTop: '1rem', flexShrink: 0 }}>2021.06.28 15:36</span> */}
                            <span style={{ fontSize: '2.25rem', color: '#444444', marginTop: '1rem', flexShrink: 0 }}>2021.06.28 15:36</span>
                        </div>

                        <div style={{ borderRadius: "0.625rem", minHeight: '8.6rem', marginTop: '2.03rem', marginBottom: '0.95rem', border: '1px solid #bbbbbb', display: 'flex', background: '#ffffff' }} className="w-full bg-white border border-gray-dddddd flex items-center justify-between">
                            {/* <p style={{ marginLeft: '3.6875rem', paddingRight: '3.6875rem', marginTop: '2.5rem', fontSize: '2.811875rem', color: '#989898'}}>두개의 이벤트 모두 참여하였습니다</p> */}
                            <p style={{ marginLeft: '3.6875rem', paddingRight: '3.6875rem', marginTop: '2.5rem', fontSize: '2.811875rem', color: '#444444'}}>두개의 이벤트 모두 참여하였습니다</p>
                        </div>
                        <div style={{ marginLeft: '-0.2rem' }} className='flex'>
                            <button style={{ borderRadius: "0.8rem", width: '9.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.39rem', marginBottom: '0.95rem', background: 'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))', border: 'none', color: '#ffffff', boxShadow:'0 2px 3px rgba(0, 0, 0, 0.3)' }} className='hover flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                                <div className="text-red-d52e2e flex items-center justify-center mt-2" style={{ paddingLeft: '0.2rem', paddingTop: '0.2rem', letterSpacing: '-0.025em' }}>수정</div>
                            </button>
                            <button style={{ borderRadius: "0.8rem", width: '9.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', background: 'linear-gradient(to right, rgb(255, 119, 96), rgb(241, 74, 83))', border: 'none', color: '#ffffff', boxShadow:'0 2px 3px rgba(0, 0, 0, 0.3)' }} className='hover flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                                <div className="text-red-d52e2e flex items-center justify-center mt-2" style={{ paddingLeft: '0.2rem', paddingTop: '0.2rem', letterSpacing: '-0.025em' }}>삭제</div>
                            </button>
                        </div>
                    </div>

                    <div style={{ padding: '0 1.5rem', marginTop: '2.3rem', marginBottom: '1.35rem' }}>
                        <SendMessage placeholder='두개의 이벤트 모두 참여하였습니다.' buttonText='등록' />
                    </div>
                </div>
            </div>
            <div style={{ borderRadius: "1.1875rem", marginTop: '3.9rem', padding: '0.1875rem', background: 'linear-gradient(to top,#513b7d, #9b56f1 50%, #cb78e6 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.3)' }}>
                <div style={{ borderRadius: "1.1875rem", marginTop: '', padding: '0.1875rem', paddingTop: '', background: '#dfdbfa' }} className="w-full bg-gray-fafafa shadow-subNavbar">
                    <div style={{ padding: '2.1rem 1.5rem 0', borderBottomWidth: '0.1875rem', borderBottom: '0.1875rem solid #b8b4d8', paddingBottom: '1rem' }} className="border-b border-gray-dddddd">
                        <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '0.3rem', minHeight: '4.8rem', letterSpacing: '-0.07rem' }}>
                            <img style={{ width: '3.450625rem', marginRight: '0.5625rem', marginLeft: '-0.3rem', marginTop: '0.2rem' }} src={Rank2} alt="" />
                            {/* <span style={{ fontSize: '2.624375rem', color: '#666666', marginTop: '0.8rem' }}>신풍사우나</span> */}
                            <span style={{ fontSize: '2.624375rem', color: '#444444', marginTop: '0.8rem', fontWeight: '600' }}>신풍사우나</span>
                            <div style={{ height: '1.75rem', width: '0.1875rem', marginLeft: '1.1rem', marginRight: '1.1rem', background: '#999999', marginTop: '1.4rem' }}></div>
                            {/* <span style={{ fontSize: '2.25rem', color: '#929292', marginTop: '1rem', flexShrink: 0 }}>2021.06.28 15:36</span> */}
                            <span style={{ fontSize: '2.25rem', color: '#444444', marginTop: '1rem', flexShrink: 0 }}>2021.06.28 15:36</span>
                        </div>


                        <div style={{ borderRadius: "0.625rem", minHeight: '8.5625rem', marginTop: '2.06rem', marginBottom: '1.1rem', border: '1px solid #bbbbbb', display: 'flex', background: '#ffffff' }} className="w-full bg-white border border-gray-dddddd flex items-center justify-between">
                            {/* <p style={{ marginLeft: '3.6875rem', paddingRight: '3.6875rem', marginTop: '2.5rem', fontSize: '2.811875rem', color: '#989898' }}>두개의 이벤트 모두 참여하였습니다</p> */}
                            <p style={{ marginLeft: '3.6875rem', paddingRight: '3.6875rem', marginTop: '2.5rem', fontSize: '2.811875rem', color: '#444444' }}>두개의 이벤트 모두 참여하였습니다</p>
                        </div>
                        <div style={{ marginTop: '-0.1rem', marginLeft: '-0.2rem', display: 'flex', marginBottom: '-0.2rem' }} className='flex'>
                            <button style={{ borderRadius: "0.8rem", width: '9.4rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.55rem', background: '#5d659f', color: '#ffffff', paddingTop: '0.2rem', letterSpacing: '-0.07rem', border: 'none', marginBottom: '1.1rem', boxShadow:'0 2px 3px rgba(0, 0, 0, 0.3)', letterSpacing: '-0.025em' }} className='hover flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                                <div>답글</div>
                            </button>
                        </div>
                    </div>

                    <div style={{ padding: '0 1.5rem', marginTop: '2.4rem', marginBottom: '1.2rem' }}>
                        <SendMessage placeholder='욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다.' buttonText='등록' />
                    </div>
                </div>
            </div>

            {/* FOOTER BUTTONS */}
            <div style={{ marginTop: '3.9rem', paddingBottom: '19.625rem' }} className="w-full flex items-start justify-between">
                <button onClick={() => navigate("/freeboard/view/0")} style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem', width: '24.125rem', background: '#936cee', borderRadius: '1rem', boxShadow: '0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.3)' }} className="flex hover items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75">
                    <div style={{ width: '100%', height: '100%', background: '#936cee', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div
                            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            className="h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span className="tracking-tight text-white shadow-text-myPage" style={{
                                color: '#ffffff', marginLeft: '0.2rem'
                            }}>이전</span>
                        </div>
                    </div>
                </button>
                <button style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem', width: '24.125rem', background: 'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))', borderRadius: '1rem', boxShadow: '0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.3)' }} className="hover flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div
                            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            className="h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                            onClick={() => navigate('/mypage/freeboard')}
                        >
                            <span className="tracking-tight text-white shadow-text-myPage" style={{
                                color: '#ffffff', marginLeft: '0.2rem'
                            }}>목록보기</span>
                        </div>
                    </div>
                </button>
                <button
                    onClick={() => navigate('/freeboard/view2')}
                    style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', width: '24.125rem', background: '#936cee', borderRadius: '1rem' }} className="shadow-box-myPage hover flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75">
                    <div style={{ width: '100%', height: '100%', background: '#936cee', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div
                            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            onClick={() => navigate('/freeboard/view2')}
                            className="h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span className="tracking-tight text-white shadow-text-myPage" style={{
                                color: '#ffffff', marginLeft: '0.2rem'
                            }}>다음</span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default FreeBoardView;
