// import React, { forwardRef } from 'react'
import { forwardRef } from 'react'
import Calendarlogo from '../assets/CalendarProject.png'
import QuizLogo from '../assets/QuizAppsnap.png'
import Todosnap from'../assets/TodoSNAP.png'

const ProjectsList=forwardRef((props,ref)=> {
  return (
    <div className='projectList' ref={ref}>
      <div className='project2 project'>
        <div className='project2Description'>
          <p>This is a todo-list that I made during my free time, it has simple functionalities 
            such as delete, add todo and mark as completed.</p>
          <a className='projectLink projectAnchor' target='_blank' href="https://todotaskmanage.netlify.app/">
          ➡️➡️ Deployed Link
          </a>
        </div>
        <div className='project2Snapshot'>
          <a href={Todosnap} className='projectAnchor' target='_blank'>
            <img src={Todosnap} className='QuizAppImg' alt="" />
          </a>
        </div>
      </div>
      <div className='project1 project'>
        <div className='project1Description'>
          <p>This is a calendar app that I made using just ReactJs...</p>
          <a className='projectLink projectAnchor' href="https://github.com/PrasoonPathak12/Calendar-implication-using-Date-Object">
          ➡️➡️ Github Link to the project
          </a>
        </div>
        <div className='project1Snapshot'>
          <a className='projectAnchor' href={Calendarlogo} target='_blank'><img src={Calendarlogo}  alt="projectSnap" className='CalendarProjectImg'/></a>
        </div>
      </div>
      <div className='project2 project'>
        <div className='project2Description'>
          <p>This is a quiz app made using ReactJS, it uses a 
          quiz API to fetch 10 random questions and the user
          has to answer these questions to get their score.</p>
          <a className='projectLink projectAnchor' href="https://github.com/PrasoonPathak12/Quiz-App">
            ➡️➡️ GitHub Link to the project
            </a>
        </div>
        <div className='project2Snapshot'>
          <a href={QuizLogo} className='projectAnchor' target='_blank'><img src={QuizLogo} alt="QuizAppLogo" className='QuizAppImg' /></a>
        </div>
      </div>
      {/* 
      <div className='project4 project'>
        <div className='project4Description'></div>
        <div className='project4Snapshot'></div>
      </div> */}
      {/* <div></div> */}
    </div>
  )
})

export default ProjectsList
