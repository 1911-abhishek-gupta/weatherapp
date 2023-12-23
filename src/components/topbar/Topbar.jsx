import React from 'react'
import "./topbar.css";
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';

const Topbar = ({setLocation}) => {

  const handleClick = () =>{
    setLocation('delhi');
  }

  return (
    <div className='topbar'>
        <div className="topbarTitle">
        <WbTwilightIcon style={{width:"31px",height:"31px"}}/>
        <p className="title">Weather 99</p>
        </div>

        <div className="topbarRefresh" onClick={handleClick}>
            <div className="refreshButton">
                <ReplayCircleFilledIcon/>
            </div>
                <p className='refreshText'>Refresh</p>
        </div>
    </div>
  )
}

export default Topbar