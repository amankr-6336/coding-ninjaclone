import React from 'react'
import './Review.scss'
import Accordian from '../accordian/Accordian'
import {ImStarFull,ImStarHalf} from 'react-icons/im'
import Accordian1 from '../accordian1/Accordian1'


function Review() {
  // const [width, setWidth] = useState(window.innerWidth);
  // const breakpoint = 900;
  // useEffect(() => {
  //   const handleWindowResize = () => setWidth(window.innerWidth)
  //   window.addEventListener("resize", handleWindowResize);

  //   // Return a function from the effect that removes the event listener
  //   // return () => window.removeEventListener("resize", handleWindowResize);
  // }, []);

  return (
    <div className="review">
      <div className="innerreview">
        <div className="reviewsection">
          <div className="box">
              <h1>4.9</h1>
              <div className="star">
                   <div className="innerstar">
                    <ImStarFull/>
                    <ImStarFull/>
                    <ImStarFull/>
                    <ImStarFull/>
                    <ImStarHalf/>
                   </div>
                   <p>100+ Reviews</p>
              </div>
              <h1>facebook</h1>
          </div>
          <div className="box">
          <h1>4.8</h1>
              <div className="star">
                   <div className="innerstar">
                    <ImStarFull/>
                    <ImStarFull/>
                    <ImStarFull/>
                    <ImStarFull/>
                    <ImStarHalf/>
                   </div>
                   <p>1000+ Reviews</p>
              </div>
              <h1>Google</h1>
          </div>
          <div className="box">
          <h1>50+</h1>
              <div className="star">
                
                  <p>Questions asked</p>
                   <p>100+ Reviews</p>
                   
              </div>
              <h1>Quora</h1>
          </div>
        </div>

        <div className="platform">
          <div className="innerplatform">
            <div className="cone">
              <div id="cone1">

              </div>
              <div id="cone2">

              </div>
              <div className="context">
                <h1>A One stop platform</h1>
                <p>Practice and learn till you are perfect</p>
              </div>
            </div>
            <div className="accordian">
              <div className="inneraccordian">
                {/* {width < breakpoint ? <Accordian1/>:<Accordian/>} */}
                <div className="first">
                  <Accordian1/>
                </div>
                <div className="second">
                  <Accordian/>
                </div>
                
             
              
              </div>
            </div>

          </div>
        </div>






      </div>
    </div>
  )
}

export default Review