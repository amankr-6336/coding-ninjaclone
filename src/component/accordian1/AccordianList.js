import React from 'react'
import './AccordianList.scss'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import './AccordianList.scss'
import { BsFillCheckCircleFill } from 'react-icons/bs'

function AccordianList({ item, onToggle, active }) {

  return (
    <div className={active? "accordianlist1":"accordianlist"} onClick={onToggle}>
      <div className="inneraccordianlist">
        <div className="displaypart">
          <div className="headings">
            <h2>{item.yellowheading}</h2>
            {active ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>

        { active && <div className="hiddenpart">
          <h1>{item.blackheading}</h1>
          <p>{item.para1}</p>



          {
            item.tick1 && (
              <div className="tickbox"><BsFillCheckCircleFill className='ic' /> <p>{item.tick1}</p></div>
            )
          }
          {
            item.tick2 && (
              <div className="tickbox"><BsFillCheckCircleFill className='ic' /> <p>{item.tick2}</p></div>
            )
          }
          {
            item.tick3 && (
              <div className="tickbox"><BsFillCheckCircleFill className='ic' /> <p>{item.tick3}</p></div>
            )
          }

          <div className="para2">
            <p>{item.para2}</p>
          </div>

          <div className="numbers">
            <div className="number1">
              <h1>{item.number1.number}</h1>
              <p>{item.number1.text}</p>
            </div>
            <div className="number1">
              <h1>{item.number2.number}</h1>
              <p>{item.number2.text}</p>
            </div>
            <div className="number1">
              <h1>{item.number3?.number}</h1>
              <p>{item.number3?.text}</p>
            </div>
          </div>
          
          <div className="image">
               <div className="innerimage">
                <img src={item.icon} alt="" />
               </div>
          </div>

        </div>
        }

      </div>
    </div>
  )
}

export default AccordianList