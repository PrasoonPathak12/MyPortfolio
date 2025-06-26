// import React, { forwardRef } from 'react'
import { forwardRef } from 'react'
// import Calendarlogo from '../assets/CalendarProject.png'
import QuizLogo from '../assets/QuizAppsnap.png'
import Todosnap from '../assets/TodoSNAP.png'
import sqlplay from '../assets/sqlplay.png'

const ProjectsList = forwardRef((props, ref) => {
  return (
    <div className='projectList' ref={ref}>
      <div className='project1 project'>
        <div className='project1Description'>
          <p><b>SQL PLAYGROUND...</b> SQL PLAYGROUND is a web-based SQL query runner designed for data analysts.
            It allows users to write, execute, and visualize SQL queries with ease. Key features include query history,
            syntax highlighting, error handling, and result visualization. It works entirely in the browser without the need for a backend,
            enabling seamless query execution on CSV files.</p>
          <a className='projectLink projectAnchor' href="https://dsql-nine.vercel.app">
            ➡️➡️ Deploy Link
          </a>
        </div>
        <div className='project1Snapshot'>
          <a className='projectAnchor' href={sqlplay} target='_blank'><img src={sqlplay} alt="projectSnap" className='ProjectImg' /></a>
        </div>
      </div>
      <div className='project2 project'>
        <div className='project2Description'>
          <p>A Website built using React serves as an interactive challenge to improve your
            vocabulary and command over the english language.</p>
          <a className='projectLink projectAnchor' target='_blank' href="https://github.com/PrasoonPathak12/WoRdMeM">
            ➡️➡️ GitHub Link
          </a>
        </div>
        <div className='project2Snapshot'>
          <a href={Todosnap} className='projectAnchor' target='_blank'>
            <img src={Todosnap} className='QuizAppImg' alt="" />
          </a>
        </div>
      </div>
      <div className='project2 project'>
        <div className='project2Description'>
          <p>Task Manager application built with React and CSS allows users to efficiently manage
            their tasks and stay organized. The app features a simple,
            user-friendly interface where users can add, edit, mark as complete,
            and delete tasks.</p>
          <a className='projectLink projectAnchor' href="https://todotaskmanage.netlify.app/">
            ➡️➡️ Deploy Link
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
