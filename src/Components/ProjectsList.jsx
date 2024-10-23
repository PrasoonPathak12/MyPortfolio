// import React, { forwardRef } from 'react'
import { forwardRef } from 'react'
import Calendarlogo from '../assets/CalendarProject.png'
import QuizLogo from '../assets/QuizAppsnap.png'
const ProjectsList=forwardRef((props,ref)=> {
  return (
    <div className='projectList' ref={ref}>
      <div className='project1 project'>
        <div className='project1Description'>
          <p>This is a To-Do-List made using ReactJs and API fetch...</p>
          <a className='projectLink projectAnchor' href="https://github.com/PrasoonPathak12/Calendar-implication-using-Date-Object">
          ➡️➡️Github Link to the project
          </a>
        </div>
        <div className='project1Snapshot'>
          <a className='projectAnchor' href={Calendarlogo} target='_blank'><img src={Calendarlogo}  alt="projectSnap" className='CalendarProjectImg'/></a>
        </div>
      </div>
      <div className='project2 project'>
        <div className='project2Description'>
          <p>          This is a quiz app made using ReactJS, it uses a 
          quiz API to fetch 10 random questions and the user
          has to answer these questions to get their score.</p>
          <a className='projectLink projectAnchor' href="https://github.com/PrasoonPathak12/Quiz-App">
            ➡️➡️GitHub Link to the project
            </a>
        </div>
        <div className='project2Snapshot'>
          <a href={QuizLogo} className='projectAnchor' target='_blank'><img src={QuizLogo} alt="QuizAppLogo" className='QuizAppImg' /></a>
        </div>
      </div>
      {/* <div className='project3 project'>
        <div className='project3Description'></div>
        <div className='project3Snapshot'></div>
      </div>
      <div className='project4 project'>
        <div className='project4Description'></div>
        <div className='project4Snapshot'></div>
      </div> */}
      {/* <div></div> */}
    </div>
  )
})

export default ProjectsList
