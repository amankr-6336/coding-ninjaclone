import React from 'react'
import './Main.scss'
import ninja from '../../asset/438375-17407.webp'
import Typewriter from 'typewriter-effect';
import b1 from '../../asset/boxicon1-9659.svg'
import b2 from '../../asset/boxicon2-9658.svg'
import b3 from '../../asset/boxicon3-9657.svg'
function Main() {
    return (
        <div className="main">
            <div className="innermain">
                <div className="imagesection">
                <div className="topsection">
                    <div className="leftmain">
                        <div className="writer">
                            <Typewriter className="writ"
                                options={{
                                    strings: ['Chasing jobs? lets the job chase you', 'World has enough coder','Be ninja coder'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                        <h1>Be a Coding Ninja</h1>
                        <p>50,000 Students from 300 colleges have trusted us</p>
                        <button className='explore'>Explore Our Programs</button>
                    </div>
                    <div className="rightmain">
                        <img src={ninja} alt="" />
                    </div>
                </div>

                <div className="bottomsection">
                    <div className="lefttilt">
                        
                    </div>
                    <div className="righttilt">
                    <div className="hideme">
                        hh
                    </div>

                    <div className="flash">
                        <div className="innerflash">
                             <h1>If you have the courage and the commitment to learn coding, then Coding Ninjas will empower you.</h1>
                             <h3>NO MATTER WHAT IT TAKES!</h3>
                             <div className="flashbottom">
                                <div className="onee">
                                    <img src={b1} alt="" />
                                    <p> Content designed by IIT & Stanford alumni</p>
                                </div>
                                <div className="onee">
                                   <img src={b2} alt="" />
                                   <p>Instant 1:1 doubt resolution</p>

                                </div>
                                <div className="onee">
                                     <img src={b3} alt="" />
                                    <p>Practical learning with 100+ problems & 10+ projects in each course</p>
                                </div>
                             </div>
                        </div>
                    </div>

                    </div>
                </div>

                </div>

            
            </div>
        </div>
    )
}

export default Main