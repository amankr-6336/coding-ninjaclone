import React, { useState } from 'react'
import './Navbar.scss';
import logo from '../../asset/logo_variants-white-25005.png'
import { AiFillCaretDown } from 'react-icons/ai'
import BoxNav from '../courseboxnav/BoxNav';
import ds from '../../asset/Group-2.svg'
import cp from '../../asset/Group 3738.svg'
import ip from '../../asset/interview-prep-old-11731.svg'
import adt from '../../asset/Group.svg'
import wd from '../../asset/Group-3.svg'
import ccp from '../../asset/cc-header-course-icon.svg'
import { AiOutlineRight } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'

function Navbar() {
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [hamburger, sethamBurger] = useState(false);
  const [shownav, SetShowNav] = useState(false);
  const [navpractice, setNavPractice] = useState(false);
  const [navcom,SetNavCom]=useState(false);

  const lists = [
    {
      title: "Data structures and algorithms",
      icon: ds
    },
    {
      title: "Competitive Programming",
      icon: cp
    },
    {
      title: "Interview Preparation",
      icon: ip
    },
    {
      title: "Analytics & Data Science ",
      icon: adt
    },
    {
      title: "Web Development",
      icon: wd
    },
    {
      title: "Career Camp Freshers",
      icon: ccp
    }

  ]

  return (
    <div className="navbar">
      <div className="innernavbar">
        <div className="leftnav">
          <div className="hamburger">
            <div onClick={() => sethamBurger(!hamburger)} className={hamburger ? "innerhamburger2" : "innerhamburger"}>
              <span id='one'></span>
              <span id='two'></span>
              <span id='three'></span>
            </div>
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="option">
            <ul className='inneroption'>
              <li className={show ? "li1" : ""} id="option1" onMouseEnter={() => setshow(true)} onMouseLeave={() => setshow(false)}><a href="www.google.com"><div className="name"><h3 className='c'>Courses </h3> <AiFillCaretDown /> </div></a></li>
              <li id="option2"  ><a href="www.google.com"><div className="name"> <h3 className='c'>Scholarship  </h3> </div></a></li>
              <li className={show2 ? "li1" : ""} id="option3" onMouseEnter={() => setshow2(true)} onMouseLeave={() => setshow2(false)}><a href="www.google.com"><div className="name"><h3 className='c'>Practice</h3> <AiFillCaretDown /></div></a></li>
              <li className={show1 ? "li1" : ""} id="option4" onMouseEnter={() => setshow1(true)} onMouseLeave={() => setshow1(false)}><a href="www.google.com"><div className="name"><h3 className='c'>Commuinity</h3><AiFillCaretDown /></div></a></li>
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="innerright">
            <button className='login'>Login</button>
            <button className='enroll'>Enroll Now</button>
          </div>
        </div>
      </div>

      {show && (
        <div className="modal1" onMouseEnter={() => setshow(true)} onMouseLeave={() => setshow(false)}>
          <div className="innermodal1">
            <div className="back" onClick={() => setshow(!show)}>
              <BsArrowLeft />
              <h2> Courses</h2>
            </div>
            <div className="exp">
              <h2>No work experince</h2>
            </div>

            <div className="list">
              <div className="leftlist">
                <h3>Recommended courses for students</h3>
                <p>The most in demand courses at the moment</p>
                <BoxNav />
                <BoxNav />
              </div>

              <div className="rightlist">
                <div className="innerrightlists">
                  <div className="detailcourse">
                    <h4>All student course</h4>
                    <p>Explore our wide ranges of course</p>
                  </div>
                  {lists.map((list) => {
                    return (
                      <div className='courseslistss'>
                        <div className="innercourseslist">
                          <div className="svg">
                            <img src={list.icon} alt="" />
                          </div>
                          <h3>{list.title}</h3>
                          <AiOutlineRight />
                        </div>
                      </div>
                    )
                  })

                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )

      }

      {show1 && (
        <div className="modal2" onMouseEnter={() => setshow1(true)} onMouseLeave={() => setshow1(false)} >
          <div className="innermodal2">
            <div className="leftm">
              <div className='comm'> <p>Events</p>  <AiOutlineRight /> </div>
              <div className='comm'> <p>Sponsorships & Collaboration </p> <AiOutlineRight /></div>
              <div className='comm'> <p>Campus Ambassador Programs</p>  <AiOutlineRight /></div>
            </div>
            {/* 
            <div className="middlem">

            </div>

            <div className="rightm">

            </div> */}
          </div>
        </div>
      )

      }

      {show2 && (
        <div className="modal3" onMouseEnter={() => setshow2(true)} onMouseLeave={() => setshow2(false)}>
          <div className="innermodal3">
            <div className="top3">
              <h5>CodeStudio</h5>
            </div>
            <div className="bottom3">
              <ul>
                <li> <p>Contests</p> <span></span></li>
                <li> <p>Guided paths</p>  <span></span></li>
                <li> <p>Code problems</p>  <span></span></li>
                <li> <p>Interview Experiences</p>  <span></span></li>
                <li> <p> Mock tests</p> <span></span></li>
              </ul>
            </div>
          </div>
        </div>
      )

      }

      {
        hamburger && (
          <div className="options">
            <ul className='inneroptions'>
              <li id="option1" onClick={() => SetShowNav(!shownav)} ><div className="name"><h3 className='c'>Courses </h3> <AiOutlineRight /> </div></li>
              <li id="option2"   ><div className="name"> <h3 className='c'>Scholarship  </h3> </div></li>
              <li id="option3" onClick={() => setNavPractice(!navpractice)}  ><div className="name"><h3 className='c'>Practice</h3> <AiOutlineRight /> </div></li>
              <li id="option4" onClick={()=> SetNavCom(!navcom)} ><div className="name"><h3 className='c'>Commuinity</h3><AiOutlineRight /></div></li>
            </ul>
          </div>
        )
      }

      {shownav && (
        <div className="modal1" >
          <div className="innermodal1">
            <div className="back" onClick={() => SetShowNav(!shownav)}>
              <BsArrowLeft className='backicon' />
              <h2> Courses</h2>
            </div>
            <div className="exp">
              <h2>No work experince</h2>
            </div>

            <div className="list">
              <div className="leftlist">
                <h3>Recommended courses for students</h3>
                <p>The most in demand courses at the moment</p>
                <BoxNav />
                <BoxNav />
              </div>

              <div className="rightlist">
                <div className="innerrightlists">
                  <div className="detailcourse">
                    <h4>All student course</h4>
                    <p>Explore our wide ranges of course</p>
                  </div>
                  {lists.map((list) => {
                    return (
                      <div className='courseslistss'>
                        <div className="innercourseslist">
                          <div className="svg">
                            <img src={list.icon} alt="" />
                          </div>
                          <h3>{list.title}</h3>
                          <AiOutlineRight />
                        </div>
                      </div>
                    )
                  })

                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )

      }


      {
        navpractice && (
          <div className="modal3" >
            <div className="innermodal3">
            <div className="back" onClick={() => setNavPractice(!navpractice)}>
              <BsArrowLeft className='backicon' />
              <h2> Courses</h2>
            </div>
              <div className="top3">
                <h5>CodeStudio</h5>
              </div>
              <div className="bottom3">
                <ul>
                  <li> <p>Contests</p> <span></span></li>
                  <li> <p>Guided paths</p>  <span></span></li>
                  <li> <p>Code problems</p>  <span></span></li>
                  <li> <p>Interview Experiences</p>  <span></span></li>
                  <li> <p> Mock tests</p> <span></span></li>
                </ul>
              </div>
            </div>
          </div>
        )
      }

      {
        navcom && (
          <div className="modal2"  >
          <div className="innermodal2">
          <div className="back" onClick={() => SetNavCom(!navcom)}>
              <BsArrowLeft className='backicon' />
              <h2> Courses</h2>
            </div>
            <div className="leftm">
              <div className='comm'> <p>Events</p>  <AiOutlineRight /> </div>
              <div className='comm'> <p>Sponsorships & Collaboration </p> <AiOutlineRight /></div>
              <div className='comm'> <p>Campus Ambassador Programs</p>  <AiOutlineRight /></div>
            </div>
            {/* 
            <div className="middlem">

            </div>

            <div className="rightm">

            </div> */}
          </div>
        </div>
        )
      }








    </div>


  )
}

export default Navbar
