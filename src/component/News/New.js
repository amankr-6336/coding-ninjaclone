import React from 'react'
import bw from '../../asset/bw-logo-5471.jpg'
import it from '../../asset/india-today-5474.jpg'
import et from '../../asset/et-brandequity-5439.jpg'
import bwe from '../../asset/et-logo-5689.png'
import inc from '../../asset/inc-42-5477.jpg'
import ys from '../../asset/0000000000004338.png'
import th from '../../asset/Daco_4935300.png'
import bl from '../../asset/bllogo-5440.jpg'
import './New.scss'
// import Newsbox from './Newsbox'

function New() {
    const list = [
        {
            desc: "Platforms To Watch Out For If You Want To Learn Coding",
            icon: bw
        },
        {
            desc: "Why learn programming?",
            icon: it
        },
        {
            desc: "Coding Ninjas aims for coding curiosity among students",
            icon: et
        },
        {
            desc: "Coding Ninjas Collaborates With Chitkara University To Offer Programming Courses",
            icon: bwe
        },
        {
            desc: "Coding Ninjas Turns Past Learners Into Teachers",
            icon: inc
        },
        {
            desc: "Coding Ninjas aims to crack the edtech code by reskilling and upskilling college students",
            icon: ys
        },
        {
            desc: "Coding-enabled world and workforce",
            icon: th
        },
        {
            desc: "Ed-tech start-up Coding Ninjas to offer coding, programming courses for students",
            icon: bl
        }
    ]

    return (
        <div className="new">
            <div className="innernew">
                <h2>Coding ninja in the News</h2>
                <div className="listofnews">
                    <div className="innerlistofnews">
                        {
                            list.map((list) => {
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
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New