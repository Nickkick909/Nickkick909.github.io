import React from "react";
import Slider from "@ant-design/react-slick";


function GraveyardShift() {
    var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
    return (
        <div className="">
          
          <div className="otterAdventuresContainer">
            <div className="label">
              Graveyard Shift
            </div>

            <div className="description">
              Graveyard Shift is a small project for the Halloween season. It is a walking simulator with lots of suspense, creepy noises, and a few jump scares. This project was created during a 3 week development time frame. 
              
              <br></br><br></br>

              You play as a grounds keeper of a graveyard starting your shift on Halloween night. This graveyard is a little bit special though. On Halloween night, the place comes alive!! Think "Night at the Museum", but spooky.

              <br></br><br></br>

              Will you survive to see the morning?
            </div>

            <iframe className="embedGame" frameborder="0" src="https://itch.io/embed/3095545?border_width=0&amp;bg_color=122157&amp;fg_color=fff&amp;link_color=2a4084&amp;border_color=3e4d83" width="616" height="165"><a href="https://nrknight.itch.io/graveyard-shift">Graveyard Shift by Nicholas Knight</a></iframe>

            <Slider {...settings} className="videoSlider">
              <div>
                <iframe width="616" height="346.5" src="https://www.youtube.com/embed/9Tev5gxs49M?si=q4g0dXyWjElGMMyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              

              <div>
                <iframe width="616" height="346.5" src="https://www.youtube.com/embed/7Kz2xt0Ko7A?si=EaUp2Ej4pdugRpUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              
              <div>
                <iframe width="616" height="346.5" src="https://www.youtube.com/embed/nF22zePkRQs?si=5KqnjX-m_ZcEKEXD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </Slider>

          </div>
      </div>
    
    );
  }
  
  export default GraveyardShift;