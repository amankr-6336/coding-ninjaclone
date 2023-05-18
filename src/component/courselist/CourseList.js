import React from 'react'
import Course from '../course/Course'
import './CourseList.scss'


function CourseList() {
  return (
     <div className="courselist">
        <div className="innercourselist">
            <h1>Courses specially curated for freshers</h1>
            <div className="listsection">
                 <Course/>
                 <Course/>
                 <Course/>
            </div>
        </div>
     </div>
  )
}

export default CourseList