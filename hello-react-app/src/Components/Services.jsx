import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assests/second.jpg";
import img2 from "../Assests/third.jpg";

function Services() {
  return (
    <>
      <div className="services">
        <Carousel
          infiniteLoop
          autoPlay
          showArrows={false}
          showStatus={false}
          interval={1000}
          showThumbs={false}
        >
          <div>
            <img src={img1} alt="Loading"></img>
            <p className="legend">Computer</p>
          </div>
          <div>
            <img src={img2} alt="Loading.."></img>
            <p className="legend">Learning karte raho</p>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Services;
