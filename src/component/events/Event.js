import React from 'react'
import './Event.scss'
import st from '../../asset/artboard-9-2x-8-2-25888.png'
import st1 from '../../asset/mobile-size-27033.jpg'

function Event() {


    const eventlist = [
        {
            testname: "Scholarship Test 10th & 11th May 2023",
            time: "05:00 PM, 10 May,2023",
            icon: st,
            dd:"11 May",
            dt:"08:30 PM"
        },
        {
            testname: "Hack the Hiring Process: Expert Advice for Acing Hiring Challenges",
            time: "06:00 PM, 17 May,2023",
            icon: st1,
            dd:"17 May",
            dt:"06:00 PM"
        }
    ]


    return (
        <div className="event">
            <div className="innerevent">
              <h1>UPCOMING EVENTS</h1>
              <div className="listevents">

             
                {
                    eventlist.map((list) => {
                        return (
                            <div className="eventbox">
                                <div className="innereventbox">
                                    <div className="topbox">
                                        <img src={list.icon} alt="" />
                                        <div className="alert">
                                            <span></span>
                                            <p className='light'>Registration</p>
                                            <p className='bold'>open</p>
                                            <p className='light'>till</p>
                                            <p className='bold'>{list.dd},{list.dt}</p>
                                        </div>
                                    </div>
                                    <div className="bottombox">
                                       <h4>{list.testname}</h4>
                                       <p>starts on</p>
                                       <p>{list.time}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default Event