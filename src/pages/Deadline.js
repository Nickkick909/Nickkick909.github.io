import React, { useEffect }  from "react";
import Slider from "@ant-design/react-slick";

function Deadline() {

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
          
          <div className="otterAdventuresContainer projectSurvivalContainer">
            <div className="label">
              Deadline
            </div>

            <div className="description">
              It’s late at the office, and something is wrong. The building feels empty, but shadows move where they shouldn’t. Strange sounds echo down the halls, and you’re not alone. Can you make it through the night?
              <br></br><br></br>

              The demo is out now. A full release will follow!
            </div>

            
            <iframe className="embedGame" frameborder="0" src="https://itch.io/embed/4000915?border_width=0&amp;bg_color=041349&amp;fg_color=fff&amp;link_color=2a4084&amp;border_color=3e4d83" width="616" height="165"><a href="https://nrknight.itch.io/deadline">Deadline - Demo by Nicholas Knight</a></iframe>

            <Slider {...settings} className="videoSlider">
      <div>
        <iframe width="616" height="346.5" src="https://www.youtube.com/embed/leaJwBy1tAY?si=SsETuFbp9ZzawrwP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div>
        <iframe width="616" height="346.5" src="https://www.youtube.com/embed/5NeSpmkC_PQ?si=1kQw-zL928rL6vAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div>
        <iframe width="616" height="346.5" src="https://www.youtube.com/embed/yz6XUek960s?si=WyRTXoCisMfWxIV7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div>
        <iframe width="616" height="346.5" src="https://www.youtube.com/embed/TQSE7EaLdpc?si=LdQ2iG0IVxgTFLdF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div>
        <iframe width="616" height="346.5" src="https://www.youtube.com/embed/b98Zor6py9U?si=8xtFHg3rWfwu7d8V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

    </Slider>

            {/* <iframe width="616" height="346.5" src="https://www.youtube.com/embed/Vu7duszAD-g?si=p5S-HK1I9Zrb-zK-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <a class="disabled" href="https://nrknight.itch.io/" aria-disabled> -- Download Coming Soon --</a> */}

            {/* <iframe width="616" height="346.5" src="https://www.youtube.com/embed/7Kz2xt0Ko7A?si=EaUp2Ej4pdugRpUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <iframe width="616" height="346.5" src="https://www.youtube.com/embed/nF22zePkRQs?si=5KqnjX-m_ZcEKEXD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

            
            {/* <iframe frameborder="0" src="https://itch.io/embed-upload/11940073?color=333333" allowfullscreen="" width="768" height="432"><a href="https://nrknight.itch.io/graveyard-shift">Play Graveyard Shift on itch.io</a></iframe> */}
            {/* <iframe frameborder="0" src="https://itch.io/embed-upload/11528371?color=122157" allowfullscreen="" width="960" height="616"><a href="https://nrknight.itch.io/otter-adventures">Play Otter Adventures on itch.io</a></iframe> */}
          </div>
      </div>
    
    );
  }
  
  export default Deadline;