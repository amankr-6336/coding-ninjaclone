import React, { useState } from 'react'
import'./Navbar.scss';
import logo from '../../asset/logo_variants-white-25005.png'
import {AiFillCaretDown} from 'react-icons/ai'

function Navbar(){
    const[show,setshow]=useState(false);
    const[show1,setshow1]=useState(false);
    const[show2,setshow2]=useState(false);
    const[hamburger,sethamBurger]=useState(false);

  return(
    <div className="navbar">
        <div className="innernavbar">
            <div className="left">
                <div className="hamburger">
                    <div onClick={()=>sethamBurger(!hamburger)} className={hamburger? "innerhamburger2" :"innerhamburger"}>
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
                     <li id="option1" onMouseEnter={()=>setshow(true)} onMouseLeave={()=> setshow(false)}><a href="www.google.com"><div className="name"><h3 className='c'>Courses </h3> <AiFillCaretDown/> </div></a></li>
                     <li id="option2"  ><a href="www.google.com"><div className="name"> <h3 className='c'>Scholarship  </h3> </div></a></li>
                     <li id="option3" onMouseEnter={()=>setshow2(true)} onMouseLeave={()=> setshow2(false)}><a href="www.google.com"><div className="name"><h3 className='c'>Practice</h3> <AiFillCaretDown/></div></a></li>
                     <li id="option4" onMouseEnter={()=>setshow1(true)} onMouseLeave={()=> setshow1(false)}><a href="www.google.com"><div className="name"><h3 className='c'>Commuinity</h3><AiFillCaretDown/></div></a></li>
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

       { show &&(
        <div className="modal1">
           <div className="innermodal1">
                <div className="exp">
                    <h2>No work experince</h2>
                </div>

                <div className="list">
                  <div className="leftlist">

                  </div>
                   
                   <div className="rightlist">

                   </div>
                </div>
           </div>
        </div>
       )

       }

       {show1 && (
        <div className="modal2">
        <div className="innermodal2">
            <div className="leftm">

            </div>

            <div className="middlem">

            </div>

            <div className="rightm">

            </div>
        </div>
       </div>
       )

       }

       {show2 &&(
        <div className="modal3">
          <div className="innermodal3">
            <div className="top3">
                 <h5>CodeStudio</h5>
            </div>
            <div className="bottom3">

            </div>
          </div>
       </div>
       )

       }

    


      
      


    </div>

    
  )
}

export default Navbar
