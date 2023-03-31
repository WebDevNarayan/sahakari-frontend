import React from "react";
import styled from "styled-components";
import Gallery from "./Gallery";
import Info from "./Info";
import ImgCarousel from "./ImgCarousel";
import Notice from "./Notice";
import Forms from "./Forms";

const Div = styled.div`
  width: full;
  display: grid;
  grid-gap: 1rem;
  padding: 5px;
  grid-template-areas:
    "carousel forms"
    "info forms"
    "four forms"
    "gallery gallery";

  .carousel {
    grid-area: carousel;
    /* width: 140vh; */
  }
  .forms {
    width: 50vh;
    grid-area: forms;
    border: 1px solid black;
  }
  .info {
    grid-area: info;
  }
  .four {
    grid-area: four;
  }
  .gallery {
    padding: 1rem;
    grid-area: gallery;
  }
`;

const Hero = () => {
  return (
    <Div className="main">
      <div className="carousel">
        <ImgCarousel />
      </div>
      <div className="forms">
        <Forms />
      </div>
      <div className="info">
        <Info />
      </div>
      <div className="four">
        <Notice />
      </div>
      <div className="gallery">
        <Gallery />
      </div>
    </Div>
  );
};

export default Hero;
