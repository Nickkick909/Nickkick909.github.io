import React from "react";

function OtterAdventures() {

    return (
        <div className="">
          
          <div className="otterAdventuresContainer">
            <div className="label">
              Otter Adventures
            </div>
            <div className="wip">
              **Unfinished**
            </div>
            <div className="description">
              Otter Adventures is a Pokemon style game where the main character is an otter. You will go around the world and fight other river animals. You will level up and increase your stats and learn new attacks.
            </div>

            <iframe className="embedGame" frameborder="0" src="https://itch.io/embed/2970335?border_width=0&amp;bg_color=122157&amp;fg_color=fff&amp;link_color=2a4084&amp;border_color=3e4d83" width="616" height="165"><a href="https://nrknight.itch.io/otter-adventures">Otter Adventures by Nicholas Knight</a></iframe>
              <div class="playGame">

                <img src="../../OtterAdventuresTitle.png"></img>

                {/* <a class="linkToDownload" href="https://nrknight.itch.io/otter-adventures"> -- Play Otter Adventures --</a> */}
                
              </div>
            
            </div>
      </div>
    
    );
  }
  
  export default OtterAdventures;