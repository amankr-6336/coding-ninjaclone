import React from 'react'
import Navbar from '../component/navbar/Navbar'
import './Home.scss'
import Main from '../component/main/Main'
import Report from '../component/report/Report'
import Stats from '../component/stats/Stats'
import Placement from '../component/placement/Placement'
import Review from '../component/review/Review'
import CourseList from '../component/courselist/CourseList'
import Contact from '../component/contact/Contact'
import New from '../component/News/New'
import Event from '../component/events/Event'
import Footer from '../component/footer/Footer'

function Home() {
  return (
    <div className="home">
        <div className="navbarr">
            <Navbar/>
        </div>
        <div className="main">
            <Main/>
        </div>
        <div className="report">
            <Report/>
        </div>
        <div className="statss">
            <Stats/>
        </div>
        <div className="placements">
           <Placement/>
        </div>
        <div className="reviews">
            <Review/>
        </div>
        <div className="coursel">
            <CourseList/>
        </div>
        <div className="contacts">
            <Contact/>
        </div>
        <div className="news">
            <New/>
        </div>
        <div className="events">
            <Event/>
        </div>
        <div className="footers">
            <Footer/>
        </div>
    </div>
  )
}

export default Home