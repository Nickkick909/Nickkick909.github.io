import React, { useEffect, useState } from "react";
import {  useNavigate } from 'react-router-dom';

// import axios from "axios";
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   Divider,
//   Modal
// } from '@mui/material';


import OtterAdventures from "./OtterAdventures";
import DodgeCar from "./DodgeCar";
import Pong from "./Pong";

// import {
//   User,
//   Clock,
//   XCircle,
//   Package
// } from 'react-feather';

// import MenuBookIcon from '@mui/icons-material/MenuBook';
function Projects() {
  const [email, setEmail] = useState("-- email address hidden --")
  const [resume, setResume] = useState(false);




      

    const navigate = useNavigate()

    useEffect(() => {
    
     
    }, []);

    function showEmail() {
      if (email == "-- email address hidden --") {
        setEmail("nrknight909@gmail.com")
      } else {
        setEmail("-- email address hidden --")
      }
    }

    function showResume() {
      setResume(!resume)
    }

    
    return (
        <div className="">

          <div class="headerLabel">About Me</div>
          <div className="about">
            Hi, my name is Nicholas Knight. I am a Software Engineer based out of Columbia South Carolina. I graduated from the University of South Carolina with a Bachelors Degree in Computer Science. 
            
            <br></br><br></br>
            
            While most of my professional experience is Full Stack or Web Development, I aspire to be a Game Developer. In my free time I try to work on small game projects to learn and build my skills. Below you will find some of these projects.

            <br></br><br></br>

            The majority of my at-home projects are built in Unity using C#. Most of them are solo projects. Where possible, I have built them games to WebGL and embedded them below in a playable state. I hope you enjoy!!

            <br></br><br></br>

            If my projects or skills are something you are looking for, please reachout to me at <br></br><div onClick={showEmail} className="hiddenEmail">{email}</div>.

            <div class="showResume" onClick={showResume}>
              {
                resume ? "-- Hide Resume --" : "-- Show Resume --"
              }
            </div>

            { resume ? 
              <object data="Nicholas-Knight-Game-Development-Resume.pdf" type="application/pdf" height="800px" width= '600px'></object>
            : ''}
            
          </div>

          {/* <div class="headerLabel">Quick Facts</div>
          <div class="about">Coming soon...</div>   */}


          <div class="headerLabel">My Projects</div>
          <OtterAdventures></OtterAdventures>

          <DodgeCar></DodgeCar>

          <Pong></Pong>
      </div>
    
    );
  }
  
  export default Projects;