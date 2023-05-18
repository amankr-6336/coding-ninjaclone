import React from 'react'
import icon from '../../asset/kindpng_956807.png' 
import './Course.scss'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {IoIosPaper} from 'react-icons/io'
import {BsStarFill,BsStarHalf} from 'react-icons/bs'

function Course() {
  return (
    <div className="courseee">
        <div className="innercourse">
            <div className="coursetop">
                <div className="namee">
                    <p>Full Stack</p>
                    <h1 className='coursename'>MERN stack</h1>
                </div>
                <div className="icon">
                     <img src={icon} alt="" />
                </div>
            </div>
            <div className="coursebottom">
                 <div className="bottomtop">
                    <div className="time"><AiOutlineClockCircle/> <p>140+ Hours</p></div>
                    <div className="projects"><IoIosPaper/><p>6+ Projects</p></div>
                 </div>
                 <div className="bottombottom">
                      <p>4.8</p>
                      <BsStarFill/>
                      <BsStarFill/>
                      <BsStarFill/>
                      <BsStarFill/>
                      <BsStarHalf/>
                      <p>(2k+ students)</p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Course