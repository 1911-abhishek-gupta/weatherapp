import React from 'react'
import "./card.css"
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Card = ({data}) => {
  return (
    <div className='Card'>

    <div className="cardDate">{data.dt_txt}</div>
    <div className="cardDetails">
    <div className="cardTop">
        <WbSunnyIcon style={{height:"30px",width:"30px",marginRight:"10px"}}/>
        <span className='cardTopName'>{data.weather[0].main}</span>
    </div>
    <div className="cardBottom">
        <span className='highTemp'>{data.main.temp_max}</span>
        <span className='lowTemp'>{data.main.temp_min}</span>
        <span className='hum'>{data.main.humidity}%</span>
        <span className='pressure'>{data.main.pressure}</span>
        <span className='sea level'>{data.main.sea_level}</span>
    </div>
    </div>
    </div>
  )
}

export default Card