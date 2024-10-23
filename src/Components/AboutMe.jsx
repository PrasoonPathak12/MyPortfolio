import React, { forwardRef, useEffect, useState } from 'react'
import logo from '../assets/profile.jpg';

const AboutMe = forwardRef((props,ref) =>{

    // const [transform ,setTransform] = useState('translate(0,0) scale(1)');

    // const handleMouseMove = (e)=>{
    //     const {offsetX,offsetY} = e.nativeEvent;
    //     const {clientWidth, clientHeight} = e.currentTarget;

    //     const x =(offsetX / clientWidth) * 100;
    //     const y =(offsetY / clientHeight) * 100;

    //     setTransform(`translate(${x}%,${y}%) scale(1.5)`);

    // }
    // const handleMouseLeave = ()=>{
    //     setTransform(`translate(0 ,0) scale(1)`);
        
    // }

    const roleText = [
        "FrontEnd Developer",
        "Coder",
        "Cloud Enthusiast"
    ];

    const [displayedText, setDisplayedText] = useState("");
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentRole = roleText[currentRoleIndex];
        const interval = setInterval(() => {
            if (charIndex < currentRole.length) {
                setDisplayedText((prev) => prev + currentRole[charIndex]);
                setCharIndex((prev) => prev + 1);
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setCurrentRoleIndex((prev) => (prev + 1) % roleText.length);
                    setCharIndex(0);
                    setDisplayedText("");
                }, 500); 
            }
        }, 200); 

        return () => clearInterval(interval); 
    }, [currentRoleIndex, charIndex]);

    return(
        <div className='aboutMe' id='AboutMe' ref={ref}>
           
            <div className='aboutMeHead'>
                <p className='aboutMePara1'>ABOUT ME</p>
            </div>
            <div className='photoANDinfo'>
                <div className='info'>
                    <p>Hi! Prasoon Pathak here</p>
                    <div className='infoDiv'>
                        <p>I am a <span className='info_role'> {displayedText}</span></p>
                        <p className='info_details'>This is my portfolio, here you will learn about my projects and the tech stacks that I have worked on till now.</p>
                    </div>
                </div>
                <div className='photo'>
                    <img src={logo} alt="" className='img' width={200} height={400}/>
                </div>
            </div>
        </div>
    )
   
})

export default AboutMe;