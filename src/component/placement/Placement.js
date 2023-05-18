import React from 'react'
import './Placement.scss'
import g from '../../asset/google-9542.svg'
import m from '../../asset/microsoft-9541.svg'
import ad from '../../asset/adobe-9540.svg'
import wal from '../../asset/walmart-9539.svg'
import am from '../../asset/amazon-9538.svg'
import oyo from '../../asset/oyo-9537.svg'
import f from '../../asset/flipkart-9536.svg'
import ms from '../../asset/morganstanley-9535.svg'
import sam from '../../asset/samsung-9534.svg'
import ex from '../../asset/expedia-9533.svg'
import face from '../../asset/facebook-9532.svg'

function Placement() {
  return (
    <div className="placement">
        <div className="innerplacement">
            <h1>Out students got placed at</h1>
            <div className="companylist">
                <div className="compbox">
                  <img src={g} alt="" />
                </div>
                <div className="compbox">
                  <img src={m} alt="" />
                </div>
                <div className="compbox">
                  <img src={ad} alt="" />
                </div>
                <div className="compbox">
                  <img src={wal} alt="" />
                </div>
                <div className="compbox">
                  <img src={am} alt="" />
                </div>
                <div className="compbox">
                  <img src={oyo} alt="" />
                </div>
                <div className="compbox">
                  <img src={f} alt="" />
                </div>
                <div className="compbox">
                  <img src={ms} alt="" />
                </div>
                <div className="compbox">
                  <img src={sam} alt="" />
                </div>
                <div className="compbox">
                  <img src={ex} alt="" />
                </div>
                <div className="compbox">
                  <img src={face} alt="" />
                </div>
            </div>
            <button className='placementreportbutton'>Download Placement Report</button>
        </div>
    </div>
  )
}

export default Placement