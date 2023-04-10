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
    width: 70vw;
    grid-area: carousel;
    /* width: 140vh; */
  }
  .forms {
    width: 25vw;
    grid-area: forms;
    border: 1px solid black;
    margin-right: 0px;
  }

  .info {
    width: 70vw;
    grid-area: info;
  }
  .four {
    width: 70vw;
    grid-area: four;
  }
  .gallery {
    width: 98vw;
    padding: 1rem;
    grid-area: gallery;
  }

  @media only screen and (max-width: 850px) {
    /*Big smartphones [426px -> 600px]*/
    width: full;
    display: grid;
    grid-gap: 1rem;
    padding: 5px;
    grid-template-areas:
      "carousel"
      "info"
      "four"
      "forms"
      "gallery";

    .forms {
      width: 100vw;
      grid-area: forms;
    }
    .info {
      width: 100vw;
      grid-area: info;
    }
    .four {
      width: 100vw;
      grid-area: four;
    }
    .gallery {
      width: 100vw;
      grid-area: gallery;
    }
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
