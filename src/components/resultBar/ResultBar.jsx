import React from 'react'
import "./resultBar.css"
import Card from '../card/Card'

const ResultBar = ({data}) => {

  const list = data.list;

  return (
    <div className='resultBar'>
        <div className="resultbarLeft">
        <div className="selectDate">
            <span className='date'>Select Date:</span>
            <input type='date' className='dateInput'/>
        </div>
            <div className="labels">
            <span className='label'>High Temperature</span>
            <span className='label'>Low Temperature</span>
            <span className='label'>Humidity</span>
            <span className='label'>Pressure</span>
            <span className='label'>sea Level</span>
            </div>
        </div>
        <div className="resultbarRight">
            {list?.slice(0,5).map((ele)=>{
             return <Card data={ele}/>
            })}
        </div>
    </div>
  )
}

export default ResultBar