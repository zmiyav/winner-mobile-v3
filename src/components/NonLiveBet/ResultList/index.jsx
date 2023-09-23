
import './_resultList.scss'
import col1 from '../../../assets/images/nonLiveBet/col-1.png'
import ArrowUp from '../../../assets/images/nonLiveBet/arrow-up.png'
import flag from '../../../assets/images/nonLiveBet/flag.png'
import flag2 from '../../../assets/images/nonLiveBet/flag2.png'
import flag3 from '../../../assets/images/nonLiveBet/flag3.png'
import flag4 from '../../../assets/images/nonLiveBet/flag4.png'
import Up from '../../../assets/images/nonLiveBet/UpArrow.png'
import Down from '../../../assets/images/nonLiveBet/DnArrow.png'
import lock from '../../../assets/images/nonLiveBet/lock.png'
import Collapsible from "../Collapsible/index";

const ResultList = () => {

  const results = [
    {
      header: '축구 / 잉글랜드 - 프리미어리그',
      time: '03-22 13:00',
      flag: flag,
      scores: [
        {
          team1: '아스널',
          team1_score: '1.25',
          team2: '리버풀',
          team2_score: '1.16',
          score: '3.15',
          plus: '123'
        },
        {
          team1: '첼시',
          team1_score: '2.25',
          team2: '토트넘',
          team2_score: '2.76',
          score: '3.88',
          plus: '45'
        }
      ]
    },

    {
      header: '축구 / 스페인 - 라리가',
      time: '03-22 15:00',
      flag: flag2,
      scores: [
        {
          team1: 'FC바르셀로나',
          team1_score: '2.21',
          team2: '아틀레티코',
          team2_score: '3.86',
          score: '2.99',
          plus: '24'
        },
        {
          team1: '레알마드리드',
          team1_score: '1.74',
          team2: '레알베티스',
          team2_score: '3.76',
          score: '3.87',
          plus: '55'
        },
        {
          team1: '비야레알',
          team1_score: '2.34',
          team2: '마요르카',
          team2_score: '2.90',
          score: '3.88',
          plus: '132'
        }
      ]
    },

    {
      header: '축구 / 독일 - 분데스리가',
      time: '03-22 17:00',
      flag: flag3,
      scores: [
        {
          team1: '아인트라흐트프...',
          team1_score: '1.11',
          team2: 'SC프라이부르크',
          team2_score: '1.77',
          score: '3.10',
          plus: '99',
          up: true
        },
        {
          team1: '바이어레버쿠젠',
          team1_score: '33.65',
          team2: '바이에른뮌헨',
          team2_score: '33.65',
          score: '33.88',
          plus: '44',
          down: true
        },
        {
          team1: 'RB라이프치히',
          team1_score: '2.78',
          team2: 'FC샬케04',
          team2_score: '2.99',
          score: '3.90',
          plus: '155'
        },
        {
          team1: '보루시아도르트...',
          team1_score: '',
          team2: 'FSV마인츠05',
          team2_score: '',
          score: '',
          plus: '99',
          lock: true
        }
      ]
    },


    {
      header: '축구 / 스페인 - 라리가',
      time: '03-22 19:00',
      flag: flag4,
      scores: [
        {
          team1: '세비야',
          team1_score: '1.67',
          team2: '지로나',
          team2_score: '1.64',
          score: '3.12',
          plus: '45'
        },
        {
          team1: '레알소스에다드',
          team1_score: '2.10',
          team2: '카디스',
          team2_score: '3.87',
          score: '3.79',
          plus: '99'
        }
      ]
    },

  ]
  return (
    <div className='collapse-section'>

      {results.map((result, index) => (
        <div className='hotel-section'
          key={index}>
          <div className='collapse-card'>
            <Collapsible
              open
              headerChild={
              <div className='collapse-header'>
                <div className='header1'>
                  <img src={col1} alt="right" />
                  <p>{result.header}</p>
                </div>
                <div className='header2'>
                  <p>{result.time}</p>
                  <img src={result.flag} alt="right" className='flag' />
                </div>
                <div className='header3'>
                  <img src={ArrowUp} alt="right" />
                </div>
              </div>
              }>
              {result.scores.map((score, index) => (
              <div className='collapse-body'>
                <div className='body1'>
                  <p>{score.team1}</p>
                  {score.up && (<span style={{ color: '#f04281', width: '7rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src={Up} alt="right" style={{ width: '1.313rem' }} />
                    {score.team1_score}
                  </span>)}
                  {score.down && (<span style={{ color: '#0072bc', width: '7rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src={Down} alt="right" style={{ width: '1.313rem' }} />
                    {score.team1_score}
                  </span>)}
                  {score.lock && (<span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src={lock} alt="right" className='lock' /></span>)}
                  {!score.up && !score.down && (<span>{score.team1_score}</span>)}
                </div>
                <div className='body2'>
                  {score.up && (<span style={{ color: '#f04281', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.938rem' }}>
                    <img src={Up} alt="right" style={{ width: '1.313rem' }} />
                    {score.score}
                  </span>)}
                  {score.down && (<span style={{ color: '#0072bc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.938rem' }}>
                    <img src={Down} alt="right" style={{ width: '1.313rem' }} />
                    {score.score}
                  </span>)}
                  {score.lock && (<span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src={lock} alt="right" className='lock' /></span>)}
                  {!score.up && !score.down && (<span>{score.score}</span>)}
                </div>
                <div className='body3'>
                  {!score.up && !score.down && (<span>{score.team2_score}</span>)}
                  {score.down && (<span style={{ color: '#f04281', width: '7rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {score.team2_score}
                    <img src={Up} alt="right" style={{ width: '1.313rem' }} />
                  
                  </span>)}
                  {score.up && (<span style={{ color: '#0072bc', width: '7rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {score.team2_score}
                    <img src={Down} alt="right" style={{ width: '1.313rem' }} />
                  </span>)}

                  {score.lock && (<span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src={lock} alt="right" className='lock' /></span>)}
                  <p>{score.team2}</p>
                </div>
                <div className='body4'>
                  <span>+{score.plus}</span>
                </div>
              </div>
            )
              )}
            </Collapsible>
          </div>
        </div>
      ))}

    </div>
  )
}
export default ResultList;