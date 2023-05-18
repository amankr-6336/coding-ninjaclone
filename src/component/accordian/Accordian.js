import React, {  useState } from 'react'
import './Accordian.scss'
import gp from '../../asset/gp.png'
import dr from '../../asset/dr.png'
import cs from '../../asset/cs.png'
import mi from '../../asset/mk.png'
import pc from '../../asset/pc.png'
import fr from '../../asset/fr.png'
import {BsFillCheckCircleFill} from 'react-icons/bs'


// const delay=10000;
function Accordian() {
     const [active,setActive]=useState(0);
    //  const timeoutRef = useRef(null);


    const items=[
        {
            title: "GUIDED PROGRAM",
            yellowheading:"Well Guided Program",
            blackheading:"We have invented and perfected the best system to learn coding",
            para1:"Your Journey will follow a tried & Tested method that delivers the best results. Each concept that you learn will follow the following structure.",
            tick1:"Very short learning videos: 10-15 minutes",
            tick2:"2-3 Guided Problems & 5-10 practice problems to understand: 45 minutes",
            tick3:"Doubts resolved instantly by our Teaching Assitants and Notes for Revision",
            number1:{
               number:"100+",
               text:"average hours of learning per course"
            },
            number2:{
                number:"50+",
                text:"practice problems in each course"
             },
             number3:{
                number:"10+",
                text:"projects per course"
             },
             icon:gp
        },
        {
            title: "DOUBT RESOLUTION",
            yellowheading:"Doubt Resolution",
            blackheading:"Get your doubts resolved instantly with live 1:1 mentor support.",
            para1:"In case you have any doubt at any time while you are watching a video, with an MCQ, a coding assignment or a test - We have you covered!",
            para2:"We have a network of dedicated teaching assistants to make sure your doubts get resolved quickly and you dont miss on deadlines.",
            number1:{
                number:"20min",
                text:"avg. doubt resolution time"
             },
             number2:{
                number:"100+",
                text:"doubts resolved per hour"
             },
             icon:dr
        },
        {
            title: "CODE STUDIO",
            yellowheading:"Codestudio",
            blackheading:"CodeStudio - A platform to help you practice, compete & get ready for interviews.",
            para1:"A place for aspiring and experienced programmers to prepare for tech interviews, practice problems, compete in challenges, discuss and stay up to date with the latest developments in the tech world.",
            para2:"Our expert designed curated guided paths will help you save time and energy to figure out which coding questions to be solved and give you a perfect sequence to maximise your learning experience.",
            number1:{
                number:"500+",
                text:"Interview problems with solutions"
             },
             number2:{
                number:"250+",
                text:"Interview experiences"
             },
             icon:cs
        },
        {
            title: "MOCK INTERVIEW",
            yellowheading:"Mock Interviews",
            blackheading:"Mock Interviews to help you get prepared for your real interview",
            para1:"Industry experts from top product companies like Amazon, Facebook, Google and working in the US will take your mock interviews.",
            para2:"The focus will be on both technical and interpersonal skills. Get instant feedback at the end of the interview.",
            number1:{
                number:"10",
                text:"Mock Interviews (with selected course plans)"
             },
             number2:{
                number:"500+",
                text:"Industry mentors"
             },
             icon:mi
        },
        {
            title: "PLACEMENT CELLS",
            yellowheading:"Placement cell",
            blackheading:"Placement Cell - A dedicated team to help you land the best opportunities",
            para1:"Curated openings and industry referrals to ensure you have access to the best opportunities out there.",
            para2:"Our placement cell works closely with you to help you reach closer to your professional goals",
            number1:{
                number:"7.6LPA",
                text:"Average CTC"
             },
             number2:{
                number:"300+",
                text:"Hiring partners"
             },
             icon:pc

        },
        {
            title:"FREE RESOURCES",
            yellowheading:"Free Resources",
            blackheading:"Tons of resources to enable you to learn for free & stay up to date",
            para1:"We regularly conduct webinars & coding events on various topics to answer your burning questions & to keep you up to date with the latest happenings in the tech world.",
            para2:"A blog with the latest articles to ensure you are reading & constantly in touch with your interest areas.",
            number1:{
                number:"15+",
                text:"events conducted every month"
             },
             number2:{
                number:"30+",
                text:"articles published every month"
             },
             icon:fr
        }
       

    ]

    function handleUpdateIndex(newIndex){
        if (newIndex < 0) {
            newIndex = 0;
          } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
          }
      
          setActive(newIndex);

    }
    
    // useEffect(() => {
    //   timeoutRef.current = setTimeout(
    //     () =>
    //       setActive((prevIndex) =>
    //         prevIndex === items.length - 1 ? 0 : prevIndex + 1
    //       ),
    //     delay
    //   );
  
    //   return () => {};
    // }, [active]);
    
     
  return (
    <div className="accordians">
     <div className="inneraccordians">
        <div className="minibar">
            <ul>
              {
                items.map((item,index)=>{
                    return ( <li><div onClick={ () =>{handleUpdateIndex(index)}} className={active===index? "minibarlist2":"minibarlist"}>{item.title}</div></li>)
                })
              }
                
            </ul>

        </div>

        <div className="display">
            <div className="innerdisplay">
                <div className="leftdisplay">
                     <div  className="yellowheading">
                       <h2>{items[active].yellowheading}</h2>
                     </div>
                     <div className="blackheading">
                    <h1>{items[active].blackheading}</h1>
                     </div>

                     <div className="para1">
                       <p>{items[active].para1}</p>
                     </div>
                     {
                       items[active].tick1 &&   (
                        <div className="tickbox"><BsFillCheckCircleFill className='ic'/> <p>{items[active].tick1}</p></div> 
                       ) 
                     }
                     {
                       items[active].tick2 &&   (
                        <div className="tickbox"><BsFillCheckCircleFill className='ic'/> <p>{items[active].tick2}</p></div> 
                       ) 
                     }
                     {
                       items[active].tick3 &&   (
                        <div className="tickbox"><BsFillCheckCircleFill className='ic'/> <p>{items[active].tick3}</p></div> 
                       ) 
                     }

                     <div className="para2">
                          <p>{items[active].para2}</p>
                     </div>

                     <div className="numbers">
                        <div className="number1">
                          <h1>{items[active].number1.number}</h1>
                          <p>{items[active].number1.text}</p>
                        </div>
                        <div className="number1">
                          <h1>{items[active].number2.number}</h1>
                          <p>{items[active].number2.text}</p>
                        </div>
                        <div className="number1">
                        <h1>{items[active].number3?.number}</h1>
                          <p>{items[active].number3?.text}</p>
                        </div>
                     </div>
                </div>
                <div className="rightdisplay">
                     <img src={items[active].icon} alt="" />
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Accordian