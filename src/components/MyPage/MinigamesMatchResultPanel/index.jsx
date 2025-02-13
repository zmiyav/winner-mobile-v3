import React from 'react';
import CardHeader from '../CardHeader';
import CardResults from '../CardResults';
import TableHeader from '../TableHeader';
// import img25 from '../../img25.png';

const MinigamesMatchResultPanel = ({
    type = "powerladder"
}) => {
    return (
        <>
            {/* <img src={img25} alt="" style={{ position: 'absolute', top: '0', opacity: '0.5' }} /> */}
            <div style={{ background: 'linear-gradient(to top,#ededeb, #cb78e6 )', boxShadow: '0px 0px 0.75rem 0px rgba(0, 0, 0, 0.8)', padding: '0.1875rem', margin: '0 1.875rem', borderRadius: '1.125rem' }}>
                <div style={{ borderRadius: "1.125rem", paddingBottom: '0.5625rem', color: '#666666', background: '#ffffff' }} className=" bg-gray-fafafa">
                    <TableHeader isMinigame={true} />
                    <div style={{ padding: '0.438rem 0.9rem 0 0.7rem' }} className="w-full">
                        <div className="w-full rounded-lg" 
                        // style={{boxShadow: '0px 0.188rem 0.563rem 0px rgba(0, 0, 0, 0.5)'}}
                        >
                            <div style={{ border: '0.45rem solid #6852a7', borderRadius: '0.4rem', marginBottom: '2.3rem', letterSpacing: '-0.015em' }} className='rounded-lg w-full '>
                                <CardHeader flag='us' name={type === "powerladder" ? '파워사다리' : type === "speedkino" ? '스피드키노' : '키노사다리'} date='2021-06-29 15:45' isMinigame={true} minigameType={type} />
                                <CardResults
                                    bet="left"
                                    result="equality"
                                    score="211"
                                    team1={type === "speedkino" ? '언더 [211회]' : "홀 [211회]"}
                                    team2={type === "speedkino" ? '[211회] 오버' : "[211회] 짝"}
                                    stat1="1.95"
                                    stat2="VS"
                                    stat3="1.95"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                    isMinigame={true}
                                    withoutRadius={true}
                                    minigame

                                />
                                <CardResults
                                    bet="left"
                                    result="equality"
                                    score="211"
                                    team1={type === "speedkino" ? '홀 [211회]' : "3줄 [211회]"}
                                    team2={type === "speedkino" ? '[211회] 짝' : "[211회] 4줄"}
                                    stat1="1.95"
                                    stat2="VS"
                                    stat3="1.95"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                    isMinigame={true}
                                    withoutRadius={type !== "speedkino" && true}
                                    withTopBorder={true}
                                    secondCard={true}
                                    minigame
                                />
                                {type !== "speedkino" && (
                                    <CardResults
                                        bet="right"
                                        result="equality"
                                        score="211"
                                        team1="좌 [211회]"
                                        team2="[211회] 우"
                                        stat1="1.95"
                                        stat2="VS"
                                        stat3="1.95"
                                        isAttached={false}
                                        hasUp={false}
                                        hasDown={false}
                                        isMinigame={true}
                                        withTopBorder={true}
                                        minigame
                                    />
                                )}

                            </div>
                            <div style={{ border: '0.45rem solid #6852a7', borderRadius: '0.4rem', marginBottom: '2.2rem' }} className='rounded-lg w-full shadow-to-box'>
                                <CardHeader flag='us' name={type === "powerladder" ? '파워사다리' : type === "speedkino" ? '스피드키노' : '키노사다리'} date='2021-06-29 15:45' isMinigame={true} minigameType={type} />
                                <CardResults
                                    bet="right"
                                    result="equality"
                                    score="211"
                                    team1={type === "speedkino" ? '언더 [211회]' : "홀 [211회]"}
                                    team2={type === "speedkino" ? '[211회] 오버' : "[211회] 짝"}
                                    stat1="1.95"
                                    stat2="VS"
                                    stat3="1.95"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                    isMinigame={true}
                                    withoutRadius={true}
                                />
                                <CardResults
                                    bet="left"
                                    result="equality"
                                    score="211"
                                    team1={type === "speedkino" ? '홀 [211회]' : "3줄 [211회]"}
                                    team2={type === "speedkino" ? '[211회] 짝' : "[211회] 4줄"}
                                    stat1="1.95"
                                    stat2="VS"
                                    stat3="1.95"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                    isMinigame={true}
                                    withoutRadius={type !== "speedkino" && true}
                                    withTopBorder={true}
                                    secondCard={true}
                                />
                                {type !== "speedkino" && (
                                    <CardResults
                                        bet="right"
                                        result="equality"
                                        score="211"
                                        team1="좌 [211회]"
                                        team2="[211회] 우"
                                        stat1="1.95"
                                        stat2="VS"
                                        stat3="1.95"
                                        isAttached={false}
                                        hasUp={false}
                                        hasDown={false}
                                        isMinigame={type !== "speedkino" && true}
                                        withTopBorder={true}
                                    />
                                )}
                            </div>
                            <div style={{ border: '0.45rem solid #6852a7', borderRadius: '0.4rem', marginBottom: '2.3rem' }} className='rounded-lg w-full shadow-to-box'>
                                <CardHeader flag='us' name={type === "powerladder" ? '파워사다리' : type === "speedkino" ? '스피드키노' : '키노사다리'} date='2021-06-29 15:45' isMinigame={true} minigameType={type} />
                                <CardResults
                                    bet="left"
                                    result="equality"
                                    score="211"
                                    team1={type === "speedkino" ? '언더 [211회]' : "홀 [211회]"}
                                    team2={type === "speedkino" ? '[211회] 오버' : "[211회] 짝"}
                                    stat1="1.95"
                                    stat2="VS"
                                    stat3="1.95"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                    isMinigame={true}
                                    withoutRadius={true}
                                />
                                <CardResults
                                    bet="left"
                                    result="equality"
                                    score="211"
                                    team1={type === "speedkino" ? '홀 [211회]' : "3줄 [211회]"}
                                    team2={type === "speedkino" ? '[211회] 짝' : "[211회] 4줄"}
                                    stat1="1.95"
                                    stat2="VS"
                                    stat3="1.95"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                    isMinigame={true}
                                    withoutRadius={type !== "speedkino" && true}
                                    withTopBorder={true}
                                    secondCard={true}
                                />
                                {type !== "speedkino" && (
                                    <CardResults
                                        bet="right"
                                        result="equality"
                                        score="211"
                                        team1="좌 [211회]"
                                        team2="[211회] 우"
                                        stat1="1.95"
                                        stat2="VS"
                                        stat3="1.95"
                                        isAttached={false}
                                        hasUp={false}
                                        hasDown={false}
                                        isMinigame={true}
                                        withTopBorder={true}
                                    />
                                )}
                            </div>
                            {type !== "speedkino" && (
                                <div style={{ border: '0.45rem solid #6852a7', borderRadius: '0.4rem', marginBottom: '0.4rem' }} className='rounded-lg w-full shadow-to-box'>
                                    <CardHeader flag='us' name={type === "powerladder" ? '파워사다리' : type === "speedkino" ? '스피드키노' : '키노사다리'} date='2021-06-29 15:45' isMinigame={true} minigameType={type} />
                                    <CardResults
                                        bet="right"
                                        result="equality"
                                        score="211"
                                        team1="홀 [211회]"
                                        team2="[211회] 짝"
                                        stat1="1.95"
                                        stat2="VS"
                                        stat3="1.95"
                                        isAttached={false}
                                        hasUp={false}
                                        hasDown={false}
                                        isMinigame={true}
                                        withoutRadius={true}
                                    />
                                    <CardResults
                                        bet="left"
                                        result="equality"
                                        score="211"
                                        team1="3줄 [211회]"
                                        team2="[211회] 4줄"
                                        stat1="1.95"
                                        stat2="VS"
                                        stat3="1.95"
                                        isAttached={false}
                                        hasUp={false}
                                        hasDown={false}
                                        isMinigame={true}
                                        withoutRadius={true}
                                        withTopBorder={true}
                                        secondCard={true}
                                    />
                                    <CardResults
                                        bet="right"
                                        result="equality"
                                        score="211"
                                        team1="좌 [211회]"
                                        team2="[211회] 우"
                                        stat1="1.95"
                                        stat2="VS"
                                        stat3="1.95"
                                        isAttached={false}
                                        hasUp={false}
                                        hasDown={false}
                                        isMinigame={true}
                                        withTopBorder={true}
                                    />
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MinigamesMatchResultPanel;
