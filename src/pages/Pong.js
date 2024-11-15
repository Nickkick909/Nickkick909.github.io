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
function Pong() {

  var canvas;
				var canvasContext;
				var ballX = 50;
				var ballY = 50;
				var ballSpeedX = 5;
				var ballSpeedY = 5;

				var player1Score=0;
				var player2Score=0;
				const WINNING_SCORE = 3;

				var showingWinScreen = false;

				var paddleLY= 250;
				var paddleRY= 250;
				const PADDLE_HEIGHT = 100;
				const PADDLE_THICKNESS = 10;


				function calculateMousePos(evt) {
					var rect = canvas.getBoundingClientRect();
					var root = document.documentElement;
					var mouseX = evt.clientX - rect.left - root.scrollLeft;
					var mouseY = evt.clientY - rect.top - root.scrollTop + evt.target.offsetTop - 150;

					return {
						x:mouseX,
						y:mouseY
					};
				}

				function handleMouseClick(evt) {
					if(showingWinScreen) {
						player1Score = 0;
						player2Score = 0;
						showingWinScreen = false;	
					} 
				}

				useEffect(()=>{
					console.log("Hello World!");
					canvas = document.getElementById('gameCanvas');
					canvasContext = canvas.getContext('2d');
					
					var framesPerSecond = 30
					setInterval(function() {
						moveEverything();
						drawEverything();
					}, 1000/framesPerSecond);

					document.addEventListener('mousedown', handleMouseClick);
					
					window.addEventListener('mousemove',
						function(evt) {
              
							var mousePos = calculateMousePos(evt);
							paddleLY = mousePos.y-(PADDLE_HEIGHT/2);


						});
        })
				

				function ballReset() {
					if(player1Score >= WINNING_SCORE ||
					player2Score >= WINNING_SCORE) {
						showingWinScreen = true;
					}

					ballSpeedX= -ballSpeedX
					ballX= canvas.width/2;
					ballY=canvas.height/2;
				}
					
				function computerMovement() {
					var paddleRYCenter = paddleRY + (PADDLE_HEIGHT/2);
					if (paddleRYCenter < ballY - 35) {
						paddleRY += 6;
					} else if (paddleRYCenter > ballY + 35) {
						paddleRY -= 6;
					}
				}

				function moveEverything(){
					if(showingWinScreen) {
						return;
					}

					computerMovement();

					ballX += ballSpeedX;
					ballY += ballSpeedY;

					if(ballX > canvas.width) {
						if(ballY>paddleRY &&
							ballY< paddleRY+PADDLE_HEIGHT) {
							ballSpeedX=-ballSpeedX;

								var deltaY = ballY
									-(paddleRY + PADDLE_HEIGHT/2)
								ballSpeedY = deltaY * 0.35;
						} else {
							player1Score++;
							ballReset();
							
						}
					}

					if(ballX < 0) {
						if(ballY>paddleLY &&
							ballY< paddleLY+PADDLE_HEIGHT) {
							ballSpeedX=-ballSpeedX;
							
								var deltaY = ballY
									-(paddleLY + PADDLE_HEIGHT/2)
								ballSpeedY = deltaY * 0.35;
						} else {
							player2Score++;
							ballReset();
							
						}
					}

					if(ballY > canvas.height) {
						ballSpeedY= -ballSpeedY;
					}

					if(ballY < 0) {
						ballSpeedY= -ballSpeedY;
					}
				}


				function drawNet() {
					for(var i=0;i<canvas.height; i+= 40) {
						colorRect(canvas.width/2-1, i, 2, 20, 'white');
					}
				}

				function drawEverything() {
					
					// black background
					colorRect(0,0, canvas.width, canvas.height, 'black');

					if(showingWinScreen) {
						canvasContext.fillStyle= 'white';

						if(player1Score >= WINNING_SCORE) {
							canvasContext.fillText("Player Won!", 350, 200);
						} else if(player2Score >= WINNING_SCORE) {
							canvasContext.fillText("Computer Won!", 350, 200);
						}	
					
						
						canvasContext.fillText("Click to Continue", 350, 500);
						return;
						}

					drawNet();
					
					// left paddle
					colorRect(0,paddleLY,PADDLE_THICKNESS , 100, 'white');
					
					// computer paddle
					colorRect(canvas.width-PADDLE_THICKNESS ,paddleRY,PADDLE_THICKNESS , 100, 'white');

					// ball
					colorCircle(ballX, ballY, 10, 'white');

					canvasContext.fillText(player1Score, 100,100);
					canvasContext.fillText(player2Score, canvas.width - 100,100);
				}

				function colorCircle(centerX, centerY, radius, drawColor) {
					canvasContext.fillStyle= drawColor;
					canvasContext.beginPath();
					canvasContext.arc(centerX,centerY,radius, 0, Math.PI*2, true);
					canvasContext.fill();
				}

				function colorRect(leftX,topY, width, height, drawColor) {
					canvasContext.fillStyle = drawColor
					canvasContext.fillRect(leftX,topY, width, height);
				}
  
    return (
        <div className="otterAdventuresContainer">
          <div className="label">
              Pong
            </div>
          <div className="description">
            We all had to start somewhere. The first every game I made was following along to a YouTube tutorial for Pong. This is built in vanilla JavaScript and HTML (now adapted to run inside of React). 
            
            <br></br><br></br>
            Note: The mouse math was originally built for this to be the only game on the page, so its a little tricky, make sure you are scrolled all the way down for best results.
          </div>
          
		
			<canvas id ="gameCanvas" width="800" height="600" class="game"></canvas>

      </div>
    
    );
  }
  
  export default Pong;