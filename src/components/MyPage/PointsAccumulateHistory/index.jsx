import Pagination from '../Pagination'
import React, { useState, useEffect } from 'react'
import DateSearchBar1 from '../DateSearchBar1'
import HistoryTable from '../HistoryTable'
// import { useNavigate } from 'react-router-dom'
// import ScrollButton from 'components/common/ScrollButton'


const tableData = [
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50" }
        }
    ],
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50" }
        }
    ],
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50" }
        }
    ],
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50" }
        }
    ],
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50" }
        }
    ],
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50" }
        }
    ],
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50" }
        }
    ],
    [
        {
            0: { 적립일: '2021-06-30' },
        },
        {
            0: { 제목: "Rolling Bouns" }
        },
        {
            0: { 아이디: "eric123" },
            1: { 종류: "스포츠" }
        },
        {
            0: { 퍼센트: "1.00%" },
            1: { 보너스퍼센트: "100%" }
        },
        {
            0: { 베팅금액: "5,000" },
            1: { 적립포인트: "50" }
        }
    ],
]

const PointsAccumulateHistory = ({ SubMenuList, subActiveButton, setSubActiveButton }) => {
    const [page, setPage] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))
    // const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    //!- this occurs error (empty page)
    // useEffect(() => {
    //     window.onpopstate = e => {

    //         setTimeout(() => {
    //             navigate('/mypage/points')
    //             setSubActiveButton('/mypage/points/all/points-accumulate-history')
    //         }, 0)
    //     }
    //     return (() => {
    //         setSubActiveButton('/mypage/points/all/points-accumulate-history')
    //     })
    // }, [setSubActiveButton, subActiveButton, navigate]);

    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }

    return (
        <>
            <div>


                <div style={{
                    // fontSize: '2.624375rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    // marginTop: '1.938rem', letterSpacing: '-0.07rem', marginBottom: '1.4rem', marginLeft: "1.688rem"
                    fontSize: '2.624375rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    letterSpacing: '-0.025rem', marginLeft: "1.688rem", marginTop: '2.9rem', marginBottom: '0.9rem'
                }}>
                    <span style={{
                        color: '#ffd98b', textOverflow: 'ellipsis', maxWidth: '34.4rem', overflow: 'hidden', whiteSpace: 'nowrap', fontWeight: '700', lineHeight: '4rem'
                    }}>{truncate('louie3', 22, 22)}</span>
                    <span style={{ color: '#eeeeee', lineHeight: '4rem' }}>님의 포인트적립 정보입니다.</span>
                </div>


                {SubMenuList}
                <div className='date-div'
                    style={{ marginTop: '-0.601rem' }}
                >

                    <DateSearchBar1 isLeagueSearch={false} withBlackButton isPoints='true' isPointsAccumulateHistory />
                </div>
                {/* <ScrollButton /> */}
                <div className="h-full">
                    <HistoryTable
                        containerBackground='#f7f9fc'
                        tableData={tableData}
                        checkedState={checkedState}
                        setCheckedState={setCheckedState}
                        isPopupOpen={isPopupOpen}
                        setPopupOpen={setPopupOpen}
                        cardHeight='25.25rem'
                        isButtonGradient={false}
                        hasLeftInput={false}
                        hasButton={false}
                        isPointPage
                    />
                </div>


                <div style={{ marginTop: '3.875rem', paddingBottom: '0.01rem' }}>
                    <Pagination page={page} setPage={setPage} />
                </div>

            </div>
        </>
    )
}

export default PointsAccumulateHistory
