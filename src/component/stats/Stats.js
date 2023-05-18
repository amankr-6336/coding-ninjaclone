import React from 'react'
import './Stats.scss'
// import hex from '../../asset/hex-9602 (1).svg'
function Stats() {
  return (
    <div className="stats">
      <div className="innerstats">
        <div className="left">
          <div className="innerlefttext">
            <h3 className='fade'>Why Join Us? </h3>
            <h1>Great Students deserves the best jobs</h1>
            <p>Coding Ninjas Make It Happens...</p>
          </div>
        </div>
        <div className="right">
          <div id="box1">
            {/* <img src={hex} alt="" /> */}
            <h1>150+</h1>
            <p>Students working in FAANG</p>
          </div>
          <div id="box2">

            <h1>10</h1>
            <p>Students started their own companies
            </p>
          </div>
          <div id="box3">
            <h1>50+</h1>
            <p>Students having 5 Stars on CodeChef</p></div>
          <div id="box4">
            <h1>100+</h1>
            <p>Students received International Job Offers</p></div>

        </div>
      </div>
    </div>
  )
}

export default Stats