import React from 'react'
import './Newsbox.scss'

function Newsbox(list) {
  return (
    <div className="newsbox">
        <div className="innernewsbox">
            <div className="img">
                <img src={list.icon} alt="" />
            </div>
            <div className="desc">
               <h2>{list.desc}</h2>
            </div>
        </div>
    </div>
  )
}

export default Newsbox