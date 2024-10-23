import React, { useRef, useState } from 'react'
import AboutMe from './AboutMe.jsx'
import ProjectsList from './ProjectsList.jsx'
import ProjectInLarge from './ProjectInLarge.jsx'
import ContactMe from './ContactMe.jsx'
import Experience from './Experience.jsx'


const Navigation = function Navigation(){

    function handleAboutMeClick(){
        if(aboutMeRef.current)
        aboutMeRef.current?.scrollIntoView({behavior:'smooth'})
        else
        return;
    }
    function handleProjectsClick(){
        // e.preventDefault();
        if(projectsInLargeRef.current)
            projectsInLargeRef.current?.scrollIntoView({behavior:'smooth'})
        else
        return;
    }

    function handleContactMeClick(){
        if(contactMeRef.current)
            contactMeRef.current?.scrollIntoView({behavior:'smooth'})
        else
        return
    }

    const aboutMeRef = useRef(null);
    const projectsInLargeRef = useRef(null);
    const contactMeRef = useRef(null);

    const[value,setValue]=useState(false);

    const changeValue=()=>{
        setValue((value)=>!value)
    }
   

    return(
    <div className='navigate'>
        <div className='navigateLinks'>
            

            <a className='navigationLinks' onClick={handleAboutMeClick}>About Me</a>
            <a className='navigationLinks' onClick={handleProjectsClick}>Projects</a>
            <a className='navigationLinks' onClick={handleContactMeClick}>Contact Me</a>
            <div className='menuIcon'>
                <button onClick={changeValue}><i className="fa-solid fa-bars"></i></button> 
                {value && 
                <div className='dropDownMenu'>
                    <a onClick={handleAboutMeClick}>About Me</a>
                    <a onClick={handleProjectsClick}>Projects</a>
                    <a onClick={handleContactMeClick}>Contact Me</a>   
                </div>
                }
            </div>
        </div>
      <AboutMe ref={aboutMeRef} handleAboutMeClick={handleAboutMeClick}/>
      <ProjectInLarge />
      <ProjectsList handleProjectsClick={handleProjectsClick} ref={projectsInLargeRef}/>
      <Experience/>
      <ContactMe handleContactMeClick={handleContactMeClick} ref={contactMeRef}/>
    </div>
)
}

export default Navigation;

