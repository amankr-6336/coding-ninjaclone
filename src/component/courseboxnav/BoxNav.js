import React from 'react'
import './BoxNac.scss'
import pic from '../../asset/kindpng_956807.png'

function BoxNav() {
  return (
      <div className="boxnav">
        <div className="innerboxnav">
            <div className="leftboxnav">
              <h2>MERN stack</h2>
            </div>
            <div className="rightboxnav">
              <img src={pic} alt="" />
            </div>
        </div>
      </div>

  )
}

export default BoxNav