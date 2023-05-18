import React from 'react'
import './Report.scss'
import p from '../../asset/pareksha-manchanda-9862-1-1-9918-1-10357-17472.webp'
import google from '../../asset/google-12193.png'
import h from '../../asset/harsh-cn-10510-1-10512-17471.webp'
import av from '../../asset/avalara-10511.png'
import s from '../../asset/satwika-bhattacharjee-9762-9857.webp'
import gs from '../../asset/goldman-sachs-9763.svg'
import r from '../../asset/rahul-9626-9859.webp'
import cn from '../../asset/cn-logo-12194.png'
import ri from '../../asset/richa-sharma-10960-_1_-17470.webp'
import jp from '../../asset/jp-morgan-chase-10959.png'




function Report() {
  const story = [
    {
      title: "CS novice to Google",
      about: "Despite being from a tier 3 college, I would like to thank my mentors & teachers at Coding Ninjas who helped me land a job at Google. Both Parikh sir and Ankush sir are brilliant teachers who know how to explain difficult concepts in an easy way.",
      name: "Pareksha Manchanda",
      profile: "Software Engineer",
      photo: p,
      company: google,
      bg: "#6F38C5"
    },
    {
      title: "College dropout to a package of 10 LPA",
      about: "The experience and knowledge I learned at Coding Ninjas greatly sharpened my skills and allowed me to pass the HackerRank and technical interview rounds. The placement team coordinated everything perfectly and it was unbelievable to get an offer letter of 10 LPA. Grateful to Coding Ninjas.",
      name: "Harsh Agrawal",
      profile: "Software Engineer",
      photo: h,
      company: av,
      bg: "#612897"
    },
    {
      title: "Non-CS branch to Top Company",
      about: "My experience with Coding Ninjas was wonderful. The courses strengthened my concepts and helped me in my interviews. The faculty was amazing. I would definitely recommend Coding Ninjas.",
      name: "Satwika Bhattacharjee",
      profile: "Analyst",
      photo: s,
      company: gs,
      bg: "#150050"
    },
    {
      title: "Tier-3 college to 6 stars on CodeChef",
      about: "It has been a crazy ride from being a novice CS student to a 6 star Coder and ICPC Regionalist. I would like to thank Coding Ninjas for helping a Tier-3 college student explore such opportunities.",
      name: "Rahul Lather",
      profile: "Member of Technical Staff",
      photo: r,
      company: cn,
      bg: "#1D1CE5"
    },
    {
      title: "Non Engineer to Investment Bank",
      about: "Coding Ninjas is one of the best learning platforms. I enrolled into C++ Foundation with Data Structures. The course content was very informative and well structured. The way Ankush Sir and Nidhi Ma'am explain a topic is commendable. My approach towards solving a problem completely changed.",
      name: "Richa Sharma",
      profile: "SEP Intern",
      photo: ri,
      company: jp,
      bg: "#2F58CD"
    }

  ]

  return (
    <div className="reportt">
      <div className="innerreport">
        <h1 className='ninjareport'>14,000+ CODING NINJAS TO INSPIRE YOU</h1>
        <div className="story">
          <div className="innerstory">
            {
              story.map((story) => {
                return (
                  <div className="dive" style={{ backgroundColor: `${story.bg}` }} >
                    <div className="innerdive">
                      <h2>{story.title}</h2>
                      <div className="about">
                        <p >{story.about}</p>
                      </div>
                      <div className="namepic">
                        <div className="leftname">
                          <p>{story.name}</p>
                          <p>{story.profile}</p>
                          <img src={story.company} alt="" />
                        </div>
                        <div className="rightpic">
                          <img src={story.photo} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
        <button className='alumini'>Hear more stories from our alumini</button>
      </div>
    </div>
  )
}

export default Report