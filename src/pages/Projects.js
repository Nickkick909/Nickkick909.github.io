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

import { Unity, useUnityContext } from "react-unity-webgl";

import DeviceEmulator from 'react-device-emulator';
import 'react-device-emulator/lib/styles/style.css';

// import {
//   User,
//   Clock,
//   XCircle,
//   Package
// } from 'react-feather';

// import MenuBookIcon from '@mui/icons-material/MenuBook';
function Projects() {

    const { unityProvider } = useUnityContext({
        loaderUrl: "OtterAdventures/Build/OtterAdventures.loader.js",
        dataUrl: "OtterAdventures/Build/OtterAdventures.data",
        frameworkUrl: "OtterAdventures/Build/OtterAdventures.framework.js",
        codeUrl: "OtterAdventures/Build/OtterAdventures.wasm",
      });

    const [recipes, setRecipes] = useState([]);

    const [viewRecipe, setViewRecipe] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
    //   (async () => {
    //     try {
    //       let recipes = await axios.get("//localhost:3001/recipe")

    //       setRecipes(recipes.data);
    //     } catch (e) {
    //       console.log("ERROR: ", e)
    //     }
    //   })()
     
    }, []);

    // function openModal(recipe) {
    //   setViewRecipe(recipe);
    //   setModalOpen(true);
    // }

    // function handleClose() {
    //   setModalOpen(false);
    //   setViewRecipe({});
    // }
    
    // function postRecipe() {
    //   navigate('/post-recipe');
    // }
    return (
        <div className="">
          <div class="about" style={{"font-size": "48px", "font-weight": ""}}>***This site is current being built.***</div>
          <div class="about">
            Hi, and welcome to my portfolio. My name is Nicholas Knight. I am a Software Engineer based out of Columbia South Carolina. While most of my professional experience is in Full Stack or Web Development, I aspire to be a Game Developer. In my free time I try to work on small game projects to learn and build my skills. Below you will find some of these projects.

            <br></br><br></br>

            The majority of my at-home projects are built in Unity using C#. Most of them are solo projects. Where possible, I have built them games to WebGL and embedded them below in a playable state. I hope you enjoy!!

            <br></br><br></br>

            If my projects or skills are something you are looking for, please reachout to me at --hidden email address--.
          </div>
          <div class="otterAdventuresContainer">
            <div className="label">
              Otter Adventures
            </div>
            <div className="wip">
              **Work In Progres**
            </div>
            <div className="description">
              Otter Adventures is my current project. The idea is to be a Pokemon style game where the main character is an otter. You will go around the world and fight other river animals. You will level up and increase your stats and learn new attacks.
            </div>
              <Unity unityProvider={unityProvider} className="otterAdventures"/>
          </div>
        

          <div class="otterAdventuresContainer">
            GeoNova - Babel Armada
          </div>
          <div class="otterAdventuresContainer">
            Dodge Car
          </div>

          <div class="otterAdventuresContainer">
            Pong
          </div>
      </div>
    
    );
  }
  
  export default Projects;