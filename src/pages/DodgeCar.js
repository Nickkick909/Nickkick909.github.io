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
function DodgeCar() {
  const [unityGame, setUnityGame] = useState("DodgeCar")

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
              Dodge Car
            </div>
            
            <div className="description">
            Dodge Car was a project I did during my Winter break of sophomore year (December 2018). It is made in Unity using C#. Its a very simple game where you are driving a car that continuously moves forward on a platform and you have to dodge objects. There are 10 hand build levels to play. This was my first experience creating a game in Unity.
            </div>
            {isLoaded === false && (
              // We'll conditionally render the loading overlay if the Unity
              // Application is not loaded.
              <div className="loading-overlay">
                <p>Loading... ({loadingPercentage}%)</p>
              </div>
            )}
              <Unity unityProvider={unityProvider} className="dodgeCar"/>
          </div>
      </div>
    
    );
  }
  
  export default DodgeCar;