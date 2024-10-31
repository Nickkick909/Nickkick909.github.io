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

import GraveyardShift from "./GraveyardShift";
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
            {/* <div class="firstSection">
              Hello, my name is Nicholas Knight. I am a Software Engineer based out of Columbia South Carolina.
              While most of my professional experience is Full Stack, I aspire to be a Game Developer.  
            </div> */}
            

            {/* <br></br><br></br> */}
            <div class="secondSection">
              In my free time I try to work on small game projects to learn and build my skills. Below you will find some of these projects. I hope you enjoy!!
            </div>
            
            If my projects or skills are something you are looking for, please reachout to me at <br></br><div onClick={showEmail} className="hiddenEmail">{email}</div>.

            <div class="showResume" onClick={showResume}>
              {
                resume ? "-- Hide Resume --" : "-- Show Resume --"
              }
            </div>

            { resume ? 
              <object data="Nicholas-Knight-Game-Development-Resume.pdf" type="application/pdf" height="800px" width= '600px'></object>
            : ''}
            

            <div className="headerLabel eduHeader">Education</div>

            <div className="education">

                <div class="usc">
                  <div className="educationTitle">
                    University of South Carolina
                  </div>
                  <div class="uscTitle">
                    Bachelors of Science in Computer Science
                  </div>
                  
                </div>

                <div className="unityCertifiedUser">
                  <div className="educationTitle">Unity Certified User: Programmer</div>

                  <div className="ucuProof">
                    <iframe name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-1a5ef923-37ce-4917-9160-abdf87f94750" scrolling="no" src="https://www.credly.com/embedded_badge/1a5ef923-37ce-4917-9160-abdf87f94750" className="unityBadge" title="View my verified achievement on Credly."></iframe>

                    <div className="ucuVideo">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-ygNxblOhqs?si=kS0aoMStpIgL9Kx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                  </div>

                  
                </div>
                  
              </div>
            
          </div>
            

          

          {/* <div class="headerLabel">Quick Facts</div>
          <div class="about">Coming soon...</div>   */}


          <div class="headerLabel">My Projects</div>

          <GraveyardShift></GraveyardShift>
          <OtterAdventures></OtterAdventures>

          <DodgeCar></DodgeCar>

          <Pong></Pong>
      </div>
    
    );
  }
  
  export default Projects;