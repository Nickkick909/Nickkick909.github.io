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
function OtterAdventures() {
  const [unityGame, setUnityGame] = useState("OtterAdventures")

    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: `${unityGame}/Build/${unityGame}.loader.js`,
        dataUrl: `${unityGame}/Build/${unityGame}.data`,
        frameworkUrl: `${unityGame}/Build/${unityGame}.framework.js`,
        codeUrl: `${unityGame}/Build/${unityGame}.wasm`,
      });

      const loadingPercentage = Math.round(loadingProgression * 100);


      

    const navigate = useNavigate()

    useEffect(() => {
    
     
    }, []);
    
    return (
        <div className="">
          
          <div className="otterAdventuresContainer">
            <div className="label">
              Otter Adventures
            </div>
            <div className="wip">
              **Work In Progress**
            </div>
            <div className="description">
              Otter Adventures is my current project. The idea is to be a Pokemon style game where the main character is an otter. You will go around the world and fight other river animals. You will level up and increase your stats and learn new attacks.
            </div>
            {isLoaded === false && (
              // We'll conditionally render the loading overlay if the Unity
              // Application is not loaded.
              <div className="loading-overlay">
                <p>Loading... ({loadingPercentage}%)</p>
              </div>
            )}
              <Unity unityProvider={unityProvider} className="otterAdventures"/>
          </div>
      </div>
    
    );
  }
  
  export default OtterAdventures;