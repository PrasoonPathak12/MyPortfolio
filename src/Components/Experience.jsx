import React from 'react'
import trainingCertificate from "../assets/Training.png"
const Experience = () => {
  return (
    <div className='experienceSection'>
      <div className='experience'>
        <div className='heading'>
            EXPERIENCE
        </div>
        <div className='InternshalaTraining'>
            <div className='trainingCertificate'>
                <img src={trainingCertificate} className='certificate' alt="certificate-image" />
            </div>
            <div className='Training'>
                <p className='headingOfTraining'>Web Development Training</p>
                <p className='descriptionOfTraining'>This was a 8 weeks online certified training on Web Development. The training consisted of HTML, 
                    CSS, Bootstrap, DBMS, PHP, JS, React, and Final Project modules.
                    I created an allocation system for students who sought for P.G. rooms...</p>
            </div>
        </div>
        {/* <div className='Internship'>
            This is the Internship div... 
        </div> */}
      </div>
    </div>
  )
}

export default Experience;
