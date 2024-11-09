import React, { useState } from 'react'
import "./AdminPageCSS.css"
const Admin = ({setAuthenticated}) => {

    const [projects,setProjects]=useState([]);

    const [newproject,setNewproject] = useState({
        description : "",
        gihublink : "",
        image: {}
    });

    const handleProjectSubmit = (e)=>{
        e.preventDefault();
        const updatedProjects = [...projects,newproject];
        localStorage.setItem("projects", JSON.stringify(updatedProjects));
        setProjects(updatedProjects);
        setNewproject({ 
            description : "",
            gihublink : "",
            image: {}
        })
    }

    // const handleEditProject = (index, updatedProject) => {
    //     const updatedProjects = [...projects];
    //     updatedProjects[index] = updatedProject;
    //     localStorage.setItem("projects", JSON.stringify(updatedProjects));
    //     setProjects(updatedProjects);
    //   };
    
    //   const handleDeleteProject = (index) => {
    //     const updatedProjects = projects.filter((_, i) => i !== index);
    //     localStorage.setItem("projects", JSON.stringify(updatedProjects));
    //     setProjects(updatedProjects);
    //   };

    return (
        <div className='AdminPage'>
            <div className='AdminPageHead'>
                <div className='blank'>
                </div>
                <div className='greeting'>
                    <p><span className='greet'><i className="fa-solid fa-user"></i> Welcome,</span> <span className='greet adminName'>Prasoon</span></p>
                </div>
                    <button 
                    onClick={()=>{setAuthenticated(false)}}
                    className='logout'>Log Out</button>
            </div>
            <div className='projectPage'>
                <h1>Project Page</h1>
                <div>
                    <form onSubmit={handleProjectSubmit}>
                        <div className='description'>
                            <label className='formlabel' htmlFor="desc">Description of project : </label>
                            <textarea name="desc" id="desc" value={newproject.description}
                            onChange={(e)=>{setNewproject({...newproject, description : e.target.value})}}></textarea>
                        </div>
                        <div className='githubLink'>
                            <label className='formlabel' htmlFor="github">GithubLink : </label>
                            <input type="url" name="url" id="url" value={newproject.gihublink}
                            onChange={(e)=>{setNewproject({...newproject, githublink : e.target.value})}}/>
                        </div>
                        <div className='projectimage'>
                            <label className='formlabel' htmlFor="image">Project Image: </label>
                            <input type="file" name="image" id="image" 
                            onChange={(e)=>{setNewproject({...newproject, image : e.target.value})}}/>
                        </div>
                        <div>
                            <input type="submit" className='submitButton' value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className='experiencePage'>
            <h2>Existing Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>
          {project.description}
          </h3>
       <p>{project.githublink}</p>
       {/* <p>{project.image}</p> */}
          
          <button onClick={() => handleDeleteProject(index)}>Delete</button>
        </div>
      ))}
            </div>
        </div>
    )
}

export default Admin
